/*!
* jScrollPane - v2.0.0beta11 - 2011-06-11
* http://jscrollpane.kelvinluck.com/
*
* Copyright (c) 2010 Kelvin Luck
* Dual licensed under the MIT and GPL licenses.
*/

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.0beta11, Last updated: 2011-06-11*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2011 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue.
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.0beta11 - (in progress)
// 2.0.0beta10 - (2011-04-17) cleaner required size calculation, improved keyboard support, stickToBottom/Left, other small fixes
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//							 elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function($, window, undefined) {

	$.fn.jScrollPane = function(settings) {
		// JScrollPane "class" - public methods are available through $('selector').data('jsp')
		function JScrollPane(elem, s) {
			var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY, verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition, verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown, horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight, reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth, wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false, originalElement = elem.clone(false, false).empty(), mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';
			originalPadding = elem.css('paddingTop') + ' ' + elem.css('paddingRight') + ' ' + elem.css('paddingBottom') + ' ' + elem.css('paddingLeft');
			originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) + (parseInt(elem.css('paddingRight'), 10) || 0);

			function initialise(s) {

				var/*firstChild, lastChild, */
				isMaintainingPositon, lastContentX, lastContentY, hasContainingSpaceChanged, originalScrollTop, originalScrollLeft, maintainAtBottom = false, maintainAtRight = false;
				settings = s;

				if(pane === undefined) {
					originalScrollTop = elem.scrollTop();
					originalScrollLeft = elem.scrollLeft();

					elem.css({
						overflow : 'hidden',
						padding : 0
					});
					// TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
					// come back to it later and check once it is unhidden...
					paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
					paneHeight = elem.innerHeight();
					elem.width(paneWidth);
					pane = $('<div class="jsp-pane" />').css('padding', originalPadding).append(elem.children());
					container = $('<div class="jsp-container" />').css({
						'width' : paneWidth + 'px',
						'height' : paneHeight + 'px'
					}).append(pane).appendTo(elem);

					/*
					 // Move any margins from the first and last children up to the container so they can still
					 // collapse with neighbouring elements as they would before jScrollPane
					 firstChild = pane.find(':first-child');
					 lastChild = pane.find(':last-child');
					 elem.css(
					 {
					 'margin-top': firstChild.css('margin-top'),
					 'margin-bottom': lastChild.css('margin-bottom')
					 }
					 );
					 firstChild.css('margin-top', 0);
					 lastChild.css('margin-bottom', 0);
					 */
				} else {
					elem.css('width', '');
					maintainAtBottom = settings.stickToBottom && isCloseToBottom();
					maintainAtRight = settings.stickToRight && isCloseToRight();
					hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

					if(hasContainingSpaceChanged) {
						paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
						paneHeight = elem.innerHeight();
						if(pane.innerHeight() > parseInt(elem.css("max-height"))) {
							paneHeight = parseInt(elem.css("max-height"));
						}
						container.css({
							width : paneWidth + 'px',
							height : paneHeight + 'px'
						});
					}

					// If nothing changed since last check...
					if(!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
						elem.width(paneWidth);
						return;
					}
					previousContentWidth = contentWidth;

					pane.css('width', '');
					elem.width(paneWidth);

					container.find('>.jsp-vertical-bar,>.jsp-horizontal-bar').remove().end();
				}

				pane.css('overflow', 'auto');
				if(s.contentWidth) {
					contentWidth = s.contentWidth;
				} else {
					contentWidth = pane[0].scrollWidth;
				}
				contentHeight = pane[0].scrollHeight;
				pane.css('overflow', '');
				percentInViewH = contentWidth / paneWidth;
				percentInViewV = contentHeight / paneHeight;
				isScrollableV = percentInViewV > 1;
				isScrollableH = percentInViewH > 1;

				//console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);

				if(!(isScrollableH || isScrollableV)) {
					elem.removeClass('jsp-scrollable');
					pane.css({
						top : 0,
						width : container.width() - originalPaddingTotalWidth
					});
					removeMousewheel();
					removeFocusHandler();
					removeKeyboardNav();
					removeClickOnTrack();
					unhijackInternalLinks();
				} else {
					elem.addClass('jsp-scrollable');
					isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
					if(isMaintainingPositon) {
						lastContentX = contentPositionX();
						lastContentY = contentPositionY();
					}

					initialiseVerticalScroll();
					initialiseHorizontalScroll();
					resizeScrollbars();

					if(isMaintainingPositon) {
						scrollToX( maintainAtRight ? (contentWidth - paneWidth ) : lastContentX, false);
						scrollToY( maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
					}

					initFocusHandler();
					initMousewheel();
					initTouch();

					if(settings.enableKeyboardNavigation) {
						initKeyboardNav();
					}
					if(settings.clickOnTrack) {
						initClickOnTrack();
					}

					observeHash();
					if(settings.hijackInternalLinks) {
						hijackInternalLinks();
					}
				}

				if(settings.autoReinitialise && !reinitialiseInterval) {
					reinitialiseInterval = setInterval(function() {
						initialise(settings);
					}, settings.autoReinitialiseDelay);
				} else if(!settings.autoReinitialise && reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}
				originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false); originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

				elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
			}

			function initialiseVerticalScroll() {
				if(isScrollableV) {

					container.append($('<div class="jsp-vertical-bar" />').append($('<div class="jsp-cap jsp-cap-top" />'), $('<div class="jsp-track" />').append($('<div class="jsp-drag" />').append($('<div class="jsp-drag-top" />'), $('<div class="jsp-drag-bottom" />'))), $('<div class="jsp-cap jsp-cap-bottom" />')));
					verticalBar = container.find('>.jsp-vertical-bar');
					verticalTrack = verticalBar.find('>.jsp-track');
					verticalDrag = verticalTrack.find('>.jsp-drag');

					if(settings.showArrows) {
						arrowUp = $('<a class="jsp-arrow jsp-arrow-up" />').bind('mousedown.jsp', getArrowScroll(0, -1)).bind('click.jsp', nil);
						arrowDown = $('<a class="jsp-arrow jsp-arrow-down" />').bind('mousedown.jsp', getArrowScroll(0, 1)).bind('click.jsp', nil);
						if(settings.arrowScrollOnHover) {
							arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
							arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
						}

						appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
					}
					verticalTrackHeight = paneHeight;
					container.find('>.jsp-vertical-bar>.jsp-cap:visible,>.jsp-vertical-bar>.jsp-arrow').each(function() {
						verticalTrackHeight -= $(this).outerHeight();
					});

					verticalDrag.hover(function() {
						verticalDrag.addClass('jsp-hover');
					}, function() {
						verticalDrag.removeClass('jsp-hover');
					}).bind('mousedown.jsp', function(e) {
						// Stop IE from allowing text selection
						$('html').bind('dragstart.jsp selectstart.jsp', nil);

						verticalDrag.addClass('jsp-active');

						var startY = e.pageY - verticalDrag.position().top;

						$('html').bind('mousemove.jsp', function(e) {
							positionDragY(e.pageY - startY, false);
						}).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
						return false;
					});
					sizeVerticalScrollbar();
				}
			}

			function sizeVerticalScrollbar() {
				verticalTrack.height(verticalTrackHeight + 'px');
				verticalDragPosition = 0;
				scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

				// Make the pane thinner to allow for the vertical scrollbar
				pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

				// Add margin to the left of the pane if scrollbars are on that side (to position
				// the scrollbar on the left or right set it's left or right property in CSS)
				try {
					if(verticalBar.position().left === 0) {
						pane.css('margin-left', scrollbarWidth + 'px');
					}
				} catch (err) {
				}
			}

			function initialiseHorizontalScroll() {
				if(isScrollableH) {

					container.append($('<div class="jsp-horizontal-bar" />').append($('<div class="jsp-cap jsp-cap-left" />'), $('<div class="jsp-track" />').append($('<div class="jsp-drag" />').append($('<div class="jsp-drag-left" />'), $('<div class="jsp-drag-right" />'))), $('<div class="jsp-cap jsp-cap-right" />')));
					horizontalBar = container.find('>.jsp-horizontal-bar');
					horizontalTrack = horizontalBar.find('>.jsp-track');
					horizontalDrag = horizontalTrack.find('>.jsp-drag');

					if(settings.showArrows) {
						arrowLeft = $('<a class="jsp-arrow jsp-arrow-left" />').bind('mousedown.jsp', getArrowScroll(-1, 0)).bind('click.jsp', nil);
						arrowRight = $('<a class="jsp-arrow jsp-arrow-right" />').bind('mousedown.jsp', getArrowScroll(1, 0)).bind('click.jsp', nil);
						if(settings.arrowScrollOnHover) {
							arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
							arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
						}
						appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
					}

					horizontalDrag.hover(function() {
						horizontalDrag.addClass('jsp-hover');
					}, function() {
						horizontalDrag.removeClass('jsp-hover');
					}).bind('mousedown.jsp', function(e) {
						// Stop IE from allowing text selection
						$('html').bind('dragstart.jsp selectstart.jsp', nil);

						horizontalDrag.addClass('jsp-active');

						var startX = e.pageX - horizontalDrag.position().left;

						$('html').bind('mousemove.jsp', function(e) {
							positionDragX(e.pageX - startX, false);
						}).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
						return false;
					});
					horizontalTrackWidth = container.innerWidth();
					sizeHorizontalScrollbar();
				}
			}

			function sizeHorizontalScrollbar() {
				container.find('>.jsp-horizontal-bar>.jsp-cap:visible,>.jsp-horizontal-bar>.jsp-arrow').each(function() {
					horizontalTrackWidth -= $(this).outerWidth();
				});

				horizontalTrack.width(horizontalTrackWidth + 'px');
				horizontalDragPosition = 0;
			}

			function resizeScrollbars() {
				if(isScrollableH && isScrollableV) {
					var horizontalTrackHeight = horizontalTrack.outerHeight(), verticalTrackWidth = verticalTrack.outerWidth();
					verticalTrackHeight -= horizontalTrackHeight;
					$(horizontalBar).find('>.jsp-cap:visible,>.jsp-arrow').each(function() {
						horizontalTrackWidth += $(this).outerWidth();
					});
					horizontalTrackWidth -= verticalTrackWidth;
					paneHeight -= verticalTrackWidth;
					paneWidth -= horizontalTrackHeight;
					horizontalTrack.parent().append($('<div class="jsp-corner" />').css('width', horizontalTrackHeight + 'px'));
					sizeVerticalScrollbar();
					sizeHorizontalScrollbar();
				}
				// reflow content
				if(isScrollableH) {
					pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
				}
				contentHeight = pane.outerHeight();
				percentInViewV = contentHeight / paneHeight;

				if(isScrollableH) {
					horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
					if(horizontalDragWidth > settings.horizontalDragMaxWidth) {
						horizontalDragWidth = settings.horizontalDragMaxWidth;
					} else if(horizontalDragWidth < settings.horizontalDragMinWidth) {
						horizontalDragWidth = settings.horizontalDragMinWidth;
					}
					horizontalDrag.width(horizontalDragWidth + 'px');
					dragMaxX = horizontalTrackWidth - horizontalDragWidth;
					_positionDragX(horizontalDragPosition);
					// To update the state for the arrow buttons
				}
				if(isScrollableV) {
					verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
					if(verticalDragHeight > settings.verticalDragMaxHeight) {
						verticalDragHeight = settings.verticalDragMaxHeight;
					} else if(verticalDragHeight < settings.verticalDragMinHeight) {
						verticalDragHeight = settings.verticalDragMinHeight;
					}
					verticalDrag.height(verticalDragHeight + 'px');
					dragMaxY = verticalTrackHeight - verticalDragHeight;
					_positionDragY(verticalDragPosition);
					// To update the state for the arrow buttons
				}
			}

			function appendArrows(ele, p, a1, a2) {
				var p1 = "before", p2 = "after", aTemp;

				// Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
				// at the top or the bottom of the bar?
				if(p == "os") {
					p = /Mac/.test(navigator.platform) ? "after" : "split";
				}
				if(p == p1) {
					p2 = p;
				} else if(p == p2) {
					p1 = p;
					aTemp = a1;
					a1 = a2;
					a2 = aTemp;
				}

				ele[p1](a1)[p2](a2);
			}

			function getArrowScroll(dirX, dirY, ele) {
				return function() {
					arrowScroll(dirX, dirY, this, ele);
					this.blur();
					return false;
				};
			}

			function arrowScroll(dirX, dirY, arrow, ele) {
				arrow = $(arrow).addClass('jsp-active');

				var eve, scrollTimeout, isFirst = true, doScroll = function() {
					if(dirX !== 0) {
						jsp.scrollByX(dirX * settings.arrowButtonSpeed);
					}
					if(dirY !== 0) {
						jsp.scrollByY(dirY * settings.arrowButtonSpeed);
					}
					scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
					isFirst = false;
				};
				doScroll();
				eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
				ele = ele || $('html');
				ele.bind(eve, function() {
					arrow.removeClass('jsp-active');
					scrollTimeout && clearTimeout(scrollTimeout);
					scrollTimeout = null;
					ele.unbind(eve);
				});
			}

			function initClickOnTrack() {
				removeClickOnTrack();
				if(isScrollableV) {
					verticalTrack.bind('mousedown.jsp', function(e) {
						if(e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
							var clickedTrack = $(this), offset = clickedTrack.offset(), direction = e.pageY - offset.top - verticalDragPosition, scrollTimeout, isFirst = true, doScroll = function() {
								var offset = clickedTrack.offset(), pos = e.pageY - offset.top - verticalDragHeight / 2, contentDragY = paneHeight * settings.scrollPagePercent, dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
								if(direction < 0) {
									if(verticalDragPosition - dragY > pos) {
										jsp.scrollByY(-contentDragY);
									} else {
										positionDragY(pos);
									}
								} else if(direction > 0) {
									if(verticalDragPosition + dragY < pos) {
										jsp.scrollByY(contentDragY);
									} else {
										positionDragY(pos);
									}
								} else {
									cancelClick();
									return;
								}
								scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
								isFirst = false;
							}, cancelClick = function() {
								scrollTimeout && clearTimeout(scrollTimeout);
								scrollTimeout = null;
								$(document).unbind('mouseup.jsp', cancelClick);
							};
							doScroll();
							$(document).bind('mouseup.jsp', cancelClick);
							return false;
						}
					});
				}

				if(isScrollableH) {
					horizontalTrack.bind('mousedown.jsp', function(e) {
						if(e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
							var clickedTrack = $(this), offset = clickedTrack.offset(), direction = e.pageX - offset.left - horizontalDragPosition, scrollTimeout, isFirst = true, doScroll = function() {
								var offset = clickedTrack.offset(), pos = e.pageX - offset.left - horizontalDragWidth / 2, contentDragX = paneWidth * settings.scrollPagePercent, dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
								if(direction < 0) {
									if(horizontalDragPosition - dragX > pos) {
										jsp.scrollByX(-contentDragX);
									} else {
										positionDragX(pos);
									}
								} else if(direction > 0) {
									if(horizontalDragPosition + dragX < pos) {
										jsp.scrollByX(contentDragX);
									} else {
										positionDragX(pos);
									}
								} else {
									cancelClick();
									return;
								}
								scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
								isFirst = false;
							}, cancelClick = function() {
								scrollTimeout && clearTimeout(scrollTimeout);
								scrollTimeout = null;
								$(document).unbind('mouseup.jsp', cancelClick);
							};
							doScroll();
							$(document).bind('mouseup.jsp', cancelClick);
							return false;
						}
					});
				}
			}

			function removeClickOnTrack() {
				if(horizontalTrack) {
					horizontalTrack.unbind('mousedown.jsp');
				}
				if(verticalTrack) {
					verticalTrack.unbind('mousedown.jsp');
				}
			}

			function cancelDrag() {
				$('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

				if(verticalDrag) {
					verticalDrag.removeClass('jsp-active');
				}
				if(horizontalDrag) {
					horizontalDrag.removeClass('jsp-active');
				}
			}

			function positionDragY(destY, animate) {
				if(!isScrollableV) {
					return;
				}
				if(destY < 0) {
					destY = 0;
				} else if(destY > dragMaxY) {
					destY = dragMaxY;
				}

				// can't just check if(animate) because false is a valid value that could be passed in...
				if(animate === undefined) {
					animate = settings.animateScroll;
				}
				if(animate) {
					jsp.animate(verticalDrag, 'top', destY, _positionDragY);
				} else {
					verticalDrag.css('top', destY);
					_positionDragY(destY);
				}

			}

			function _positionDragY(destY) {
				if(destY === undefined) {
					destY = verticalDrag.position().top;
				}

				container.scrollTop(0);
				verticalDragPosition = destY;

				var isAtTop = verticalDragPosition === 0, isAtBottom = verticalDragPosition == dragMaxY, percentScrolled = destY / dragMaxY, destTop = -percentScrolled * (contentHeight - paneHeight);

				if(wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
					wasAtTop = isAtTop;
					wasAtBottom = isAtBottom;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}

				updateVerticalArrows(isAtTop, isAtBottom);
				pane.css('top', destTop);
				elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
			}

			function positionDragX(destX, animate) {
				if(!isScrollableH) {
					return;
				}
				if(destX < 0) {
					destX = 0;
				} else if(destX > dragMaxX) {
					destX = dragMaxX;
				}

				if(animate === undefined) {
					animate = settings.animateScroll;
				}
				if(animate) {
					jsp.animate(horizontalDrag, 'left', destX, _positionDragX);
				} else {
					horizontalDrag.css('left', destX);
					_positionDragX(destX);
				}
			}

			function _positionDragX(destX) {
				if(destX === undefined) {
					destX = horizontalDrag.position().left;
				}

				container.scrollTop(0);
				horizontalDragPosition = destX;

				var isAtLeft = horizontalDragPosition === 0, isAtRight = horizontalDragPosition == dragMaxX, percentScrolled = destX / dragMaxX, destLeft = -percentScrolled * (contentWidth - paneWidth);

				if(wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
					wasAtLeft = isAtLeft;
					wasAtRight = isAtRight;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}

				updateHorizontalArrows(isAtLeft, isAtRight);
				pane.css('left', destLeft);
				elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
			}

			function updateVerticalArrows(isAtTop, isAtBottom) {
				if(settings.showArrows) {
					arrowUp[isAtTop ? 'addClass' : 'removeClass']('jsp-disabled');
					arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jsp-disabled');
				}
			}

			function updateHorizontalArrows(isAtLeft, isAtRight) {
				if(settings.showArrows) {
					arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jsp-disabled');
					arrowRight[isAtRight ? 'addClass' : 'removeClass']('jsp-disabled');
				}
			}

			function scrollToY(destY, animate) {
				var percentScrolled = destY / (contentHeight - paneHeight);
				positionDragY(percentScrolled * dragMaxY, animate);
			}

			function scrollToX(destX, animate) {
				var percentScrolled = destX / (contentWidth - paneWidth);
				positionDragX(percentScrolled * dragMaxX, animate);
			}

			function scrollToElement(ele, stickToTop, animate) {
				var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

				// Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
				// errors from the lookup...
				try {
					e = $(ele);
				} catch (err) {
					return;
				}
				eleHeight = e.outerHeight();
				eleWidth = e.outerWidth();

				container.scrollTop(0);
				container.scrollLeft(0);

				// loop through parents adding the offset top of any elements that are relatively positioned between
				// the focused element and the jsp-pane so we can get the true distance from the top
				// of the focused element to the top of the scrollpane...
				while(!e.is('.jsp-pane')) {
					eleTop += e.position().top;
					eleLeft += e.position().left;
					e = e.offsetParent();
					if(/^body|html$/i.test(e[0].nodeName)) {
						// we ended up too high in the document structure. Quit!
						return;
					}
				}
				viewportTop = contentPositionY();
				maxVisibleEleTop = viewportTop + paneHeight;
				if(eleTop < viewportTop || stickToTop) {// element is above viewport
					destY = eleTop - settings.verticalGutter;
				} else if(eleTop + eleHeight > maxVisibleEleTop) {// element is below viewport
					destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
				}
				if(destY) {
					scrollToY(destY, animate);
				}
				viewportLeft = contentPositionX();
				maxVisibleEleLeft = viewportLeft + paneWidth;
				if(eleLeft < viewportLeft || stickToTop) {// element is to the left of viewport
					destX = eleLeft - settings.horizontalGutter;
				} else if(eleLeft + eleWidth > maxVisibleEleLeft) {// element is to the right viewport
					destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
				}
				if(destX) {
					scrollToX(destX, animate);
				}

			}

			function contentPositionX() {
				return -pane.position().left;
			}

			function contentPositionY() {
				return -pane.position().top;
			}

			function isCloseToBottom() {
				var scrollableHeight = contentHeight - paneHeight;
				return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
			}

			function isCloseToRight() {
				var scrollableWidth = contentWidth - paneWidth;
				return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
			}

			function initMousewheel() {
				container.unbind(mwEvent).bind(mwEvent, function(event, delta, deltaX, deltaY) {
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
					// return true if there was no movement so rest of screen can scroll
					return dX == horizontalDragPosition && dY == verticalDragPosition;
				});
			}

			function removeMousewheel() {
				container.unbind(mwEvent);

			}

			function nil() {
				return false;
			}

			function initFocusHandler() {
				pane.find(':input,a').unbind('focus.jsp').bind('focus.jsp', function(e) {
					scrollToElement(e.target, false);
				});
			}

			function removeFocusHandler() {
				pane.find(':input,a').unbind('focus.jsp');
			}

			function initKeyboardNav() {
				var keyDown, elementHasScrolled, validParents = [];
				isScrollableH && validParents.push(horizontalBar[0]);
				isScrollableV && validParents.push(verticalBar[0]);

				// IE also focuses elements that don't have tabindex set.
				pane.focus(function() {
					elem.focus();
				});

				elem.attr('tabindex', 0).unbind('keydown.jsp keypress.jsp').bind('keydown.jsp', function(e) {
					if(e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)) {
						return;
					}
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					switch(e.keyCode) {
						case 40:
						// down
						case 38:
						// up
						case 34:
						// page down
						case 32:
						// space
						case 33:
						// page up
						case 39:
						// right
						case 37:
							// left
							keyDown = e.keyCode;
							keyDownHandler();
							break;
						case 35:
							// end
							scrollToY(contentHeight - paneHeight);
							keyDown = null;
							break;
						case 36:
							// home
							scrollToY(0);
							keyDown = null;
							break;
					}
					elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
					return !elementHasScrolled;
				}).bind('keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
				function(e) {
					if(e.keyCode == keyDown) {
						keyDownHandler();
					}
					return !elementHasScrolled;
				});
				if(settings.hideFocus) {
					elem.css('outline', 'none');
					if('hideFocus' in container[0]) {
						elem.attr('hideFocus', true);
					}
				} else {
					elem.css('outline', '');
					if('hideFocus' in container[0]) {
						elem.attr('hideFocus', false);
					}
				}

				function keyDownHandler() {
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					switch(keyDown) {
						case 40:
							// down
							jsp.scrollByY(settings.keyboardSpeed, false);
							break;
						case 38:
							// up
							jsp.scrollByY(-settings.keyboardSpeed, false);
							break;
						case 34:
						// page down
						case 32:
							// space
							jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
							break;
						case 33:
							// page up
							jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
							break;
						case 39:
							// right
							jsp.scrollByX(settings.keyboardSpeed, false);
							break;
						case 37:
							// left
							jsp.scrollByX(-settings.keyboardSpeed, false);
							break;
					}
					elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
					return elementHasScrolled;
				}

			}

			function removeKeyboardNav() {
				elem.attr('tabindex', '-1').removeAttr('tabindex').unbind('keydown.jsp keypress.jsp');
			}

			function observeHash() {
				if(location.hash && location.hash.length > 1) {
					var e, retryInt, hash = escape(location.hash)// hash must be escaped to prevent XSS
					;
					try {
						e = $(hash);
					} catch (err) {
						return;
					}

					if(e.length && pane.find(hash)) {
						// nasty workaround but it appears to take a little while before the hash has done its thing
						// to the rendered page so we just wait until the container's scrollTop has been messed up.
						if(container.scrollTop() === 0) {
							retryInt = setInterval(function() {
								if(container.scrollTop() > 0) {
									scrollToElement(hash, true);
									$(document).scrollTop(container.position().top);
									clearInterval(retryInt);
								}
							}, 50);
						} else {
							scrollToElement(hash, true);
							$(document).scrollTop(container.position().top);
						}
					}
				}
			}

			function unhijackInternalLinks() {
				$('a.jsp-hijack').unbind('click.jsp-hijack').removeClass('jsp-hijack');
			}

			function hijackInternalLinks() {
				unhijackInternalLinks();
				$('a[href^=#]').addClass('jsp-hijack').bind('click.jsp-hijack', function() {
					var uriParts = this.href.split('#'), hash;
					if(uriParts.length > 1) {
						hash = uriParts[1];
						if(hash.length > 0 && pane.find('#' + hash).length > 0) {
							scrollToElement('#' + hash, true);
							// Need to return false otherwise things mess up... Would be nice to maybe also scroll
							// the window to the top of the scrollpane?
							return false;
						}
					}
				});
			}

			// Init touch on iPad, iPhone, iPod, Android
			function initTouch() {
				var startX, startY, touchStartX, touchStartY, moved, moving = false;

				container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind('touchstart.jsp', function(e) {
					var touch = e.originalEvent.touches[0];
					startX = contentPositionX();
					startY = contentPositionY();
					touchStartX = touch.pageX;
					touchStartY = touch.pageY;
					moved = false;
					moving = true;
				}).bind('touchmove.jsp', function(ev) {
					if(!moving) {
						return;
					}

					var touchPos = ev.originalEvent.touches[0], dX = horizontalDragPosition, dY = verticalDragPosition;

					jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);
					moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;

					// return true if there was no movement so rest of screen can scroll
					return dX == horizontalDragPosition && dY == verticalDragPosition;
				}).bind('touchend.jsp', function(e) {
					moving = false;
					/*if(moved) {
					 return false;
					 }*/
				}).bind('click.jsp-touchclick', function(e) {
					if(moved) {
						moved = false;
						return false;
					}
				});
			}

			function destroy() {
				var currentY = contentPositionY(), currentX = contentPositionX();
				elem.removeClass('jsp-scrollable').unbind('.jsp');
				elem.replaceWith(originalElement.append(pane.children()));
				originalElement.scrollTop(currentY);
				originalElement.scrollLeft(currentX);
			}

			// Public API
			$.extend(jsp, {
				// Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
				// was initialised). The settings object which is passed in will override any settings from the
				// previous time it was initialised - if you don't pass any settings then the ones from the previous
				// initialisation will be used.
				reinitialise : function(s) {
					s = $.extend({}, settings, s);
					initialise(s);
				},
				// Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
				// that it can be seen within the viewport. If stickToTop is true then the element will appear at
				// the top of the viewport, if it is false then the viewport will scroll as little as possible to
				// show the element. You can also specify if you want animation to occur. If you don't provide this
				// argument then the animateScroll value from the settings object is used instead.
				scrollToElement : function(ele, stickToTop, animate) {
					scrollToElement(ele, stickToTop, animate);
				},
				// Scrolls the pane so that the specified co-ordinates within the content are at the top left
				// of the viewport. animate is optional and if not passed then the value of animateScroll from
				// the settings object this jScrollPane was initialised with is used.
				scrollTo : function(destX, destY, animate) {
					scrollToX(destX, animate);
					scrollToY(destY, animate);
				},
				// Scrolls the pane so that the specified co-ordinate within the content is at the left of the
				// viewport. animate is optional and if not passed then the value of animateScroll from the settings
				// object this jScrollPane was initialised with is used.
				scrollToX : function(destX, animate) {
					scrollToX(destX, animate);
				},
				// Scrolls the pane so that the specified co-ordinate within the content is at the top of the
				// viewport. animate is optional and if not passed then the value of animateScroll from the settings
				// object this jScrollPane was initialised with is used.
				scrollToY : function(destY, animate) {
					scrollToY(destY, animate);
				},
				// Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
				// is optional and if not passed then the value of animateScroll from the settings object this
				// jScrollPane was initialised with is used.
				scrollToPercentX : function(destPercentX, animate) {
					scrollToX(destPercentX * (contentWidth - paneWidth), animate);
				},
				// Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
				// is optional and if not passed then the value of animateScroll from the settings object this
				// jScrollPane was initialised with is used.
				scrollToPercentY : function(destPercentY, animate) {
					scrollToY(destPercentY * (contentHeight - paneHeight), animate);
				},
				// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
				// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
				scrollBy : function(deltaX, deltaY, animate) {
					jsp.scrollByX(deltaX, animate);
					jsp.scrollByY(deltaY, animate);
				},
				// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
				// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
				scrollByX : function(deltaX, animate) {
					var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX), percentScrolled = destX / (contentWidth - paneWidth);
					positionDragX(percentScrolled * dragMaxX, animate);
				},
				// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
				// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
				scrollByY : function(deltaY, animate) {
					var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY), percentScrolled = destY / (contentHeight - paneHeight);
					positionDragY(percentScrolled * dragMaxY, animate);
				},
				// Positions the horizontal drag at the specified x position (and updates the viewport to reflect
				// this). animate is optional and if not passed then the value of animateScroll from the settings
				// object this jScrollPane was initialised with is used.
				positionDragX : function(x, animate) {
					positionDragX(x, animate);
				},
				// Positions the vertical drag at the specified y position (and updates the viewport to reflect
				// this). animate is optional and if not passed then the value of animateScroll from the settings
				// object this jScrollPane was initialised with is used.
				positionDragY : function(y, animate) {
					positionDragY(y, animate);
				},
				// This method is called when jScrollPane is trying to animate to a new position. You can override
				// it if you want to provide advanced animation functionality. It is passed the following arguments:
				//  * ele          - the element whose position is being animated
				//  * prop         - the property that is being animated
				//  * value        - the value it's being animated to
				//  * stepCallback - a function that you must execute each time you update the value of the property
				// You can use the default implementation (below) as a starting point for your own implementation.
				animate : function(ele, prop, value, stepCallback) {
					var params = {};
					params[prop] = value;
					ele.animate(params, {
						'duration' : settings.animateDuration,
						'ease' : settings.animateEase,
						'queue' : false,
						'step' : stepCallback
					});
				},
				// Returns the current x position of the viewport with regards to the content pane.
				getContentPositionX : function() {
					return contentPositionX();
				},
				// Returns the current y position of the viewport with regards to the content pane.
				getContentPositionY : function() {
					return contentPositionY();
				},
				// Returns the width of the content within the scroll pane.
				getContentWidth : function() {
					return contentWidth;
				},
				// Returns the height of the content within the scroll pane.
				getContentHeight : function() {
					return contentHeight;
				},
				// Returns the horizontal position of the viewport within the pane content.
				getPercentScrolledX : function() {
					return contentPositionX() / (contentWidth - paneWidth);
				},
				// Returns the vertical position of the viewport within the pane content.
				getPercentScrolledY : function() {
					return contentPositionY() / (contentHeight - paneHeight);
				},
				// Returns whether or not this scrollpane has a horizontal scrollbar.
				getIsScrollableH : function() {
					return isScrollableH;
				},
				// Returns whether or not this scrollpane has a vertical scrollbar.
				getIsScrollableV : function() {
					return isScrollableV;
				},
				// Gets a reference to the content pane. It is important that you use this method if you want to
				// edit the content of your jScrollPane as if you access the element directly then you may have some
				// problems (as your original element has had additional elements for the scrollbars etc added into
				// it).
				getContentPane : function() {
					return pane;
				},
				// Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
				// animateScroll value from settings is used instead.
				scrollToBottom : function(animate) {
					positionDragY(dragMaxY, animate);
				},
				// Hijacks the links on the page which link to content inside the scrollpane. If you have changed
				// the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
				// contents of your scroll pane will work then call this function.
				hijackInternalLinks : function() {
					hijackInternalLinks();
				},
				// Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
				// initialised.
				destroy : function() {
					destroy();
				}
			});

			initialise(s);
		}

		// Pluginifying code...
		settings = $.extend({}, $.fn.jScrollPane.defaults, settings);

		// Apply default speed
		$.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
			settings[this] = settings[this] || settings.speed;
		});
		return this.each(function() {
			var elem = $(this), jspApi = elem.data('jsp');
			if(jspApi) {
				jspApi.reinitialise(settings);
			} else {
				jspApi = new JScrollPane(elem, settings);
				elem.data('jsp', jspApi);
			}
		});
	};

	$.fn.jScrollPane.defaults = {
		showArrows : false,
		maintainPosition : true,
		stickToBottom : false,
		stickToRight : false,
		clickOnTrack : true,
		autoReinitialise : false,
		autoReinitialiseDelay : 500,
		verticalDragMinHeight : 0,
		verticalDragMaxHeight : 99999,
		horizontalDragMinWidth : 0,
		horizontalDragMaxWidth : 99999,
		contentWidth : undefined,
		animateScroll : false,
		animateDuration : 300,
		animateEase : 'linear',
		hijackInternalLinks : false,
		verticalGutter : 4,
		horizontalGutter : 4,
		mouseWheelSpeed : 0,
		arrowButtonSpeed : 0,
		arrowRepeatFreq : 50,
		arrowScrollOnHover : false,
		trackClickSpeed : 0,
		trackClickRepeatFreq : 70,
		verticalArrowPositions : 'split',
		horizontalArrowPositions : 'split',
		enableKeyboardNavigation : true,
		hideFocus : false,
		keyboardSpeed : 0,
		initialDelay : 300, // Delay before starting repeating
		speed : 30, // Default speed when others falsey
		scrollPagePercent : .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
	};

})(jQuery, this);

/*!
 * iScroll v4.1.5 ~ Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */

(function() {
	var m = Math, vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' : (/firefox/i).test(navigator.userAgent) ? 'Moz' : 'opera' in window ? 'O' : '',

	// Browser capabilities
	has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(), hasTouch = 'ontouchstart' in window, hasTransform = vendor + 'Transform' in document.documentElement.style, isAndroid = (/android/gi).test(navigator.appVersion), isIDevice = (/iphone|ipad/gi).test(navigator.appVersion), isPlaybook = (/playbook/gi).test(navigator.appVersion), hasTransitionEnd = isIDevice || isPlaybook, nextFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function(callback) {
			return setTimeout(callback, 17);
		}

	})(), cancelFrame = (function() {
		return window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
	})(),

	// Events
	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize', START_EV = hasTouch ? 'touchstart' : 'mousedown', MOVE_EV = hasTouch ? 'touchmove' : 'mousemove', END_EV = hasTouch ? 'touchend' : 'mouseup', CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup', WHEEL_EV = vendor == 'Moz' ? 'DOMMouseScroll' : 'mousewheel',

	// Helpers
	trnOpen = 'translate' + ( has3d ? '3d(' : '('), trnClose = has3d ? ',0)' : ')',

	// Constructor
	iScroll = function(el, options) {
		var that = this, doc = document, i;

		that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
		that.wrapper.style.overflow = 'hidden';
		that.scroller = that.wrapper.children[0];

		// Default options
		that.options = {
			hScroll : true,
			vScroll : true,
			bounce : true,
			bounceLock : false,
			momentum : true,
			lockDirection : true,
			useTransform : true,
			useTransition : false,
			checkDOMChanges : false, // Experimental

			// Scrollbar
			hScrollbar : true,
			vScrollbar : true,
			fixedScrollbar : isAndroid,
			hideScrollbar : isIDevice,
			fadeScrollbar : isIDevice && has3d,
			scrollbarClass : '',

			// Zoom
			zoom : false,
			zoomMin : 1,
			zoomMax : 4,
			doubleTapZoom : 2,

			// Snap
			snap : false,
			snapThreshold : 1,

			// Events
			onRefresh : null,
			onBeforeScrollStart : function(e) {
				e.preventDefault();
			},
			onScrollStart : null,
			onBeforeScrollMove : null,
			onScrollMove : null,
			onBeforeScrollEnd : null,
			onScrollEnd : null,
			onTouchEnd : null,
			onDestroy : null,
			onZoomStart : null,
			onZoom : null,
			onZoomEnd : null
		};

		// User defined options
		for(i in options)
		that.options[i] = options[i];

		// Normalize options
		that.options.useTransform = hasTransform ? that.options.useTransform : false;
		that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
		that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
		that.options.zoom = that.options.useTransform && that.options.zoom;
		that.options.useTransition = hasTransitionEnd && that.options.useTransition;

		// Set some default styles
		that.scroller.style[vendor + 'TransitionProperty'] = that.options.useTransform ? '-' + vendor.toLowerCase() + '-transform' : 'top left';
		that.scroller.style[vendor + 'TransitionDuration'] = '0';
		that.scroller.style[vendor + 'TransformOrigin'] = '0 0';
		if(that.options.useTransition)
			that.scroller.style[vendor + 'TransitionTimingFunction'] = 'cubic-bezier(0.33,0.66,0.66,1)';

		if(that.options.useTransform)
			that.scroller.style[vendor + 'Transform'] = trnOpen + '0,0' + trnClose;
		else
			that.scroller.style.cssText += ';top:0;left:0';

		if(that.options.useTransition)
			that.options.fixedScrollbar = true;

		that.refresh();

		that._bind(RESIZE_EV, window);
		that._bind(START_EV);
		if(!hasTouch) {
			that._bind('mouseout', that.wrapper);
			that._bind(WHEEL_EV);
		}

		if(that.options.checkDOMChanges)
			that.checkDOMTime = setInterval(function() {
				that._checkDOMChanges()
			}, 500);
	};
	// iScroll prototype
	iScroll.prototype = {
		enabled : true,
		x : 0,
		y : 0,
		steps : [],
		scale : 1,
		currPageX : 0,
		currPageY : 0,
		pagesX : [],
		pagesY : [],
		aniTime : null,

		handleEvent : function(e) {
			var that = this;
			switch(e.type) {
				case START_EV:
					that._start(e);
					break;
				case MOVE_EV:
					that._move(e);
					break;
				case END_EV:
				case CANCEL_EV:
					that._end(e);
					break;
				case RESIZE_EV:
					that._resize();
					break;
				case WHEEL_EV:
					that._wheel(e);
					break;
				case 'mouseout':
					that._mouseout(e);
					break;
				case 'webkitTransitionEnd':
					that._transitionEnd(e);
					break;
			}
		},
		_checkDOMChanges : function() {
			if(this.moved || this.zoomed || this.animating || (this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale))
				return;

			this.refresh();
		},
		_scrollbar : function(dir) {
			var that = this, doc = document, bar;

			if(!that[dir + 'Scrollbar']) {
				if(that[dir + 'ScrollbarWrapper']) {
					if(hasTransform)
						that[dir + 'ScrollbarIndicator'].style[vendor + 'Transform'] = '';
					that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
					that[dir + 'ScrollbarWrapper'] = null;
					that[dir + 'ScrollbarIndicator'] = null;
				}

				return;
			}

			if(!that[dir + 'ScrollbarWrapper']) {
				// Create the scrollbar wrapper
				bar = doc.createElement('div');

				if(that.options.scrollbarClass)
					bar.className = that.options.scrollbarClass + dir.toUpperCase();
				else
					bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

				bar.style.cssText += ';pointer-events:none;-' + vendor + '-transition-property:opacity;-' + vendor + '-transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

				that.wrapper.appendChild(bar);
				that[dir + 'ScrollbarWrapper'] = bar;

				// Create the scrollbar indicator
				bar = doc.createElement('div');
				if(!that.options.scrollbarClass) {
					bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-' + vendor + '-background-clip:padding-box;-' + vendor + '-box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';-' + vendor + '-border-radius:3px;border-radius:3px';
				}
				bar.style.cssText += ';pointer-events:none;-' + vendor + '-transition-property:-' + vendor + '-transform;-' + vendor + '-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-' + vendor + '-transition-duration:0;-' + vendor + '-transform:' + trnOpen + '0,0' + trnClose;
				if(that.options.useTransition)
					bar.style.cssText += ';-' + vendor + '-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

				that[dir + 'ScrollbarWrapper'].appendChild(bar);
				that[dir + 'ScrollbarIndicator'] = bar;
			}

			if(dir == 'h') {
				that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
				that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
				that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
				that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
				that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
			} else {
				that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
				that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
				that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
				that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
				that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
			}

			// Reset position
			that._scrollbarPos(dir, true);
		},
		_resize : function() {
			this.refresh();
		},
		_pos : function(x, y) {
			x = this.hScroll ? x : 0;
			y = this.vScroll ? y : 0;

			if(this.options.useTransform) {
				this.scroller.style[vendor + 'Transform'] = trnOpen + x + 'px,' + y + 'px' + trnClose + ' scale(' + this.scale + ')';
			} else {
				x = m.round(x);
				y = m.round(y);
				this.scroller.style.left = x + 'px';
				this.scroller.style.top = y + 'px';
			}

			this.x = x;
			this.y = y;

			this._scrollbarPos('h');
			this._scrollbarPos('v');
		},
		_scrollbarPos : function(dir, hidden) {
			var that = this, pos = dir == 'h' ? that.x : that.y, size;

			if(!that[dir + 'Scrollbar'])
				return;
			pos = that[dir + 'ScrollbarProp'] * pos;

			if(pos < 0) {
				if(!that.options.fixedScrollbar) {
					size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
					if(size < 8)
						size = 8;
					that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
				}
				pos = 0;
			} else if(pos > that[dir + 'ScrollbarMaxScroll']) {
				if(!that.options.fixedScrollbar) {
					size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
					if(size < 8)
						size = 8;
					that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
					pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
				} else {
					pos = that[dir + 'ScrollbarMaxScroll'];
				}
			}

			that[dir + 'ScrollbarWrapper'].style[vendor + 'TransitionDelay'] = '0';
			that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
			that[dir + 'ScrollbarIndicator'].style[vendor + 'Transform'] = trnOpen + (dir == 'h' ? pos + 'px,0' : '0,' + pos + 'px') + trnClose;
		},
		_start : function(e) {
			var that = this, point = hasTouch ? e.touches[0] : e, matrix, x, y, c1, c2, target;

			if(!that.enabled)
				return;

			if(that.options.onBeforeScrollStart)
				that.options.onBeforeScrollStart.call(that, e);

			if(that.options.useTransition)
				that._transitionTime(0);

			that.moved = false;
			that.animating = false;
			that.zoomed = false;
			that.distX = 0;
			that.distY = 0;
			that.absDistX = 0;
			that.absDistY = 0;
			that.dirX = 0;
			that.dirY = 0;

			// Gesture start
			if(that.options.zoom && hasTouch && e.touches.length > 1) {
				c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
				c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
				that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

				that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
				that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

				if(that.options.onZoomStart)
					that.options.onZoomStart.call(that, e);
			}

			if(that.options.momentum) {
				if(that.options.useTransform) {
					// Very lame general purpose alternative to CSSMatrix
					matrix = getComputedStyle(that.scroller, null)[vendor + 'Transform'].replace(/[^0-9-.,]/g, '').split(',');
					x = matrix[4] * 1;
					y = matrix[5] * 1;
				} else {
					x = getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '') * 1;
					y = getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '') * 1;
				}

				if(x != that.x || y != that.y) {
					if(that.options.useTransition)
						that._unbind('webkitTransitionEnd');
					else
						cancelFrame(that.aniTime);
					that.steps = [];
					that._pos(x, y);
				}
			}

			that.absStartX = that.x;
			// Needed by snap threshold
			that.absStartY = that.y;

			that.startX = that.x;
			that.startY = that.y;
			that.pointX = point.pageX;
			that.pointY = point.pageY;

			that.startTime = e.timeStamp || (new Date()).getTime();

			if(that.options.onScrollStart)
				that.options.onScrollStart.call(that, e);

			that._bind(MOVE_EV);
			that._bind(END_EV);
			that._bind(CANCEL_EV);
		},
		_move : function(e) {
			var that = this, point = hasTouch ? e.touches[0] : e, deltaX = point.pageX - that.pointX, deltaY = point.pageY - that.pointY, newX = that.x + deltaX, newY = that.y + deltaY, c1, c2, scale, timestamp = e.timeStamp || (new Date()).getTime();

			if(that.options.onBeforeScrollMove)
				that.options.onBeforeScrollMove.call(that, e);

			// Zoom
			if(that.options.zoom && hasTouch && e.touches.length > 1) {
				c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
				c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
				that.touchesDist = m.sqrt(c1 * c1 + c2 * c2);

				that.zoomed = true;
				scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;
				if(scale < 0.5)
					scale = 0.5;
				else if(scale > that.options.zoomMax)
					scale = that.options.zoomMax;
				that.lastScale = scale / this.scale; newX = this.originX - this.originX * that.lastScale + this.x, newY = this.originY - this.originY * that.lastScale + this.y;

				this.scroller.style[vendor + 'Transform'] = trnOpen + newX + 'px,' + newY + 'px' + trnClose + ' scale(' + scale + ')';

				if(that.options.onZoom)
					that.options.onZoom.call(that, e);
				return;
			}

			that.pointX = point.pageX;
			that.pointY = point.pageY;

			// Slow down if outside of the boundaries
			if(newX > 0 || newX < that.maxScrollX) {
				newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
			}
			if(newY > 0 || newY < that.maxScrollY) {
				newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= 0 || that.maxScrollY >= 0 ? 0 : that.maxScrollY;
			}

			if(that.absDistX < 6 && that.absDistY < 6) {
				that.distX += deltaX;
				that.distY += deltaY;
				that.absDistX = m.abs(that.distX);
				that.absDistY = m.abs(that.distY);

				return;
			}

			// Lock direction
			if(that.options.lockDirection) {
				if(that.absDistX > that.absDistY + 5) {
					newY = that.y;
					deltaY = 0;
				} else if(that.absDistY > that.absDistX + 5) {
					newX = that.x;
					deltaX = 0;
				}
			}

			that.moved = true;
			that._pos(newX, newY);
			that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

			if(timestamp - that.startTime > 300) {
				that.startTime = timestamp;
				that.startX = that.x;
				that.startY = that.y;
			}

			if(that.options.onScrollMove)
				that.options.onScrollMove.call(that, e);
		},
		_end : function(e) {
			if(hasTouch && e.touches.length != 0)
				return;

			var that = this, point = hasTouch ? e.changedTouches[0] : e, target, ev, momentumX = {
				dist : 0,
				time : 0
			}, momentumY = {
				dist : 0,
				time : 0
			}, duration = (e.timeStamp || (new Date()).getTime()) - that.startTime, newPosX = that.x, newPosY = that.y, distX, distY, newDuration;

			that._unbind(MOVE_EV);
			that._unbind(END_EV);
			that._unbind(CANCEL_EV);

			if(that.options.onBeforeScrollEnd)
				that.options.onBeforeScrollEnd.call(that, e);

			if(that.zoomed) {
				that.scale = that.scale * that.lastScale;
				that.x = that.originX - that.originX * that.lastScale + that.x;
				that.y = that.originY - that.originY * that.lastScale + that.y;

				that.scroller.style.webkitTransform = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose + ' scale(' + that.scale + ')';

				that.refresh();

				if(that.options.onZoomEnd)
					that.options.onZoomEnd.call(that, e);
				return;
			}

			if(!that.moved) {
				if(hasTouch) {
					if(that.doubleTapTimer && that.options.zoom) {
						// Double tapped
						clearTimeout(that.doubleTapTimer);
						that.doubleTapTimer = null;
						that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
					} else {
						that.doubleTapTimer = setTimeout(function() {
							that.doubleTapTimer = null;

							// Find the last touched element
							target = point.target;
							while(target.nodeType != 1)
							target = target.parentNode;

							if(target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
								ev = document.createEvent('MouseEvents');
								ev.initMouseEvent('click', true, true, e.view, 1, point.screenX, point.screenY, point.clientX, point.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
								ev._fake = true;
								target.dispatchEvent(ev);
							}
						}, that.options.zoom ? 250 : 0);
					}
				}

				that._resetPos(200);

				if(that.options.onTouchEnd)
					that.options.onTouchEnd.call(that, e);
				return;
			}

			if(duration < 300 && that.options.momentum) {
				momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
				momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;
				newPosX = that.x + momentumX.dist;
				newPosY = that.y + momentumY.dist;

				if((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX))
					momentumX = {
						dist : 0,
						time : 0
					};
				if((that.y > 0 && newPosY > 0) || (that.y < that.maxScrollY && newPosY < that.maxScrollY))
					momentumY = {
						dist : 0,
						time : 0
					};
			}

			if(momentumX.dist || momentumY.dist) {
				newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

				// Do we need to snap?
				if(that.options.snap) {
					distX = newPosX - that.absStartX;
					distY = newPosY - that.absStartY;
					if(m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) {
						that.scrollTo(that.absStartX, that.absStartY, 200);
					} else {
						snap = that._snap(newPosX, newPosY);
						newPosX = snap.x;
						newPosY = snap.y;
						newDuration = m.max(snap.time, newDuration);
					}
				}

				that.scrollTo(newPosX, newPosY, newDuration);

				if(that.options.onTouchEnd)
					that.options.onTouchEnd.call(that, e);
				return;
			}

			// Do we need to snap?
			if(that.options.snap) {
				distX = newPosX - that.absStartX;
				distY = newPosY - that.absStartY;
				if(m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold)
					that.scrollTo(that.absStartX, that.absStartY, 200);
				else {
					snap = that._snap(that.x, that.y);
					if(snap.x != that.x || snap.y != that.y)
						that.scrollTo(snap.x, snap.y, snap.time);
				}

				if(that.options.onTouchEnd)
					that.options.onTouchEnd.call(that, e);
				return;
			}

			that._resetPos(200);
			if(that.options.onTouchEnd)
				that.options.onTouchEnd.call(that, e);
		},
		_resetPos : function(time) {
			var that = this, resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x, resetY = that.y >= 0 || that.maxScrollY > 0 ? 0 : that.y < that.maxScrollY ? that.maxScrollY : that.y;

			if(resetX == that.x && resetY == that.y) {
				if(that.moved) {
					that.moved = false;
					if(that.options.onScrollEnd)
						that.options.onScrollEnd.call(that);
					// Execute custom code on scroll end
				}

				if(that.hScrollbar && that.options.hideScrollbar) {
					if(vendor == 'webkit')
						that.hScrollbarWrapper.style[vendor + 'TransitionDelay'] = '300ms';
					that.hScrollbarWrapper.style.opacity = '0';
				}
				if(that.vScrollbar && that.options.hideScrollbar) {
					if(vendor == 'webkit')
						that.vScrollbarWrapper.style[vendor + 'TransitionDelay'] = '300ms';
					that.vScrollbarWrapper.style.opacity = '0';
				}

				return;
			}

			that.scrollTo(resetX, resetY, time || 0);
		},
		_wheel : function(e) {
			var that = this, deltaX, deltaY;

			if('wheelDeltaX' in e) { deltaX = that.x + e.wheelDeltaX / 12, deltaY = that.y + e.wheelDeltaY / 12;
			} else if('detail' in e) { deltaX = that.x - e.detail * 3, deltaY = that.y - e.detail * 3;
			} else { deltaX = that.x - e.wheelDelta, deltaY = that.y - e.wheelDelta;
			}

			if(deltaX > 0)
				deltaX = 0;
			else if(deltaX < that.maxScrollX)
				deltaX = that.maxScrollX;

			if(deltaY > 0)
				deltaY = 0;
			else if(deltaY < that.maxScrollY)
				deltaY = that.maxScrollY;

			that.scrollTo(deltaX, deltaY, 0);
		},
		_mouseout : function(e) {
			var t = e.relatedTarget;

			if(!t) {
				this._end(e);
				return;
			}

			while( t = t.parentNode)
			if(t == this.wrapper)
				return;

			this._end(e);
		},
		_transitionEnd : function(e) {
			var that = this;

			if(e.target != that.scroller)
				return;

			that._unbind('webkitTransitionEnd');

			that._startAni();
		},
		/**
		 *
		 * Utilities
		 *
		 */
		_startAni : function() {
			var that = this, startX = that.x, startY = that.y, startTime = (new Date).getTime(), step, easeOut;

			if(that.animating)
				return;

			if(!that.steps.length) {
				that._resetPos(400);
				return;
			}
			step = that.steps.shift();

			if(step.x == startX && step.y == startY)
				step.time = 0;

			that.animating = true;
			that.moved = true;

			if(that.options.useTransition) {
				that._transitionTime(step.time);
				that._pos(step.x, step.y);
				that.animating = false;
				if(step.time)
					that._bind('webkitTransitionEnd');
				else
					that._resetPos(0);
				return;
			}(function animate() {
				var now = (new Date).getTime(), newX, newY;

				if(now >= startTime + step.time) {
					that._pos(step.x, step.y);
					that.animating = false;
					if(that.options.onAnimationEnd)
						that.options.onAnimationEnd.call(that);
					// Execute custom code on animation end
					that._startAni();
					return;
				}
				now = (now - startTime) / step.time - 1;
				easeOut = m.sqrt(1 - now * now);
				newX = (step.x - startX) * easeOut + startX;
				newY = (step.y - startY) * easeOut + startY;
				that._pos(newX, newY);
				if(that.animating)
					that.aniTime = nextFrame(animate);
			})();
		},
		_transitionTime : function(time) {
			time += 'ms';
			this.scroller.style[vendor + 'TransitionDuration'] = time;
			if(this.hScrollbar)
				this.hScrollbarIndicator.style[vendor + 'TransitionDuration'] = time;
			if(this.vScrollbar)
				this.vScrollbarIndicator.style[vendor + 'TransitionDuration'] = time;
		},
		_momentum : function(dist, time, maxDistUpper, maxDistLower, size) {
			var deceleration = 0.0006, speed = m.abs(dist) / time, newDist = (speed * speed) / (2 * deceleration), newTime = 0, outsideDist = 0;

			// Proportinally reduce speed if we are outside of the boundaries
			if(dist > 0 && newDist > maxDistUpper) {
				outsideDist = size / (6 / (newDist / speed * deceleration));
				maxDistUpper = maxDistUpper + outsideDist;
				speed = speed * maxDistUpper / newDist;
				newDist = maxDistUpper;
			} else if(dist < 0 && newDist > maxDistLower) {
				outsideDist = size / (6 / (newDist / speed * deceleration));
				maxDistLower = maxDistLower + outsideDist;
				speed = speed * maxDistLower / newDist;
				newDist = maxDistLower;
			}
			newDist = newDist * (dist < 0 ? -1 : 1);
			newTime = speed / deceleration;

			return {
				dist : newDist,
				time : m.round(newTime)
			};
		},
		_offset : function(el) {
			var left = -el.offsetLeft, top = -el.offsetTop;

			while( el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}

			if(el != this.wrapper) {
				left *= this.scale;
				top *= this.scale;
			}

			return {
				left : left,
				top : top
			};
		},
		_snap : function(x, y) {
			var that = this, i, l, page, time, sizeX, sizeY;

			// Check page X
			page = that.pagesX.length - 1;
			for( i = 0, l = that.pagesX.length; i < l; i++) {
				if(x >= that.pagesX[i]) {
					page = i;
					break;
				}
			}
			if(page == that.currPageX && page > 0 && that.dirX < 0)
				page--;
			x = that.pagesX[page];
			sizeX = m.abs(x - that.pagesX[that.currPageX]);
			sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
			that.currPageX = page;

			// Check page Y
			page = that.pagesY.length - 1;
			for( i = 0; i < page; i++) {
				if(y >= that.pagesY[i]) {
					page = i;
					break;
				}
			}
			if(page == that.currPageY && page > 0 && that.dirY < 0)
				page--;
			y = that.pagesY[page];
			sizeY = m.abs(y - that.pagesY[that.currPageY]);
			sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
			that.currPageY = page;

			// Snap with constant speed (proportional duration)
			time = m.round(m.max(sizeX, sizeY)) || 200;

			return {
				x : x,
				y : y,
				time : time
			};
		},
		_bind : function(type, el, bubble) {
			(el || this.scroller).addEventListener(type, this, !!bubble);
		},
		_unbind : function(type, el, bubble) {
			(el || this.scroller).removeEventListener(type, this, !!bubble);
		},
		/**
		 *
		 * Public methods
		 *
		 */
		destroy : function() {
			var that = this;

			that.scroller.style[vendor + 'Transform'] = '';

			// Remove the scrollbars
			that.hScrollbar = false;
			that.vScrollbar = false;
			that._scrollbar('h');
			that._scrollbar('v');

			// Remove the event listeners
			that._unbind(RESIZE_EV, window);
			that._unbind(START_EV);
			that._unbind(MOVE_EV);
			that._unbind(END_EV);
			that._unbind(CANCEL_EV);

			if(that.options.hasTouch) {
				that._unbind('mouseout', that.wrapper);
				that._unbind(WHEEL_EV);
			}

			if(that.options.useTransition)
				that._unbind('webkitTransitionEnd');

			if(that.options.checkDOMChanges)
				clearInterval(that.checkDOMTime);

			if(that.options.onDestroy)
				that.options.onDestroy.call(that);
		},
		refresh : function() {
			var that = this, offset, pos = 0, page = 0;

			if(that.scale < that.options.zoomMin)
				that.scale = that.options.zoomMin;
			that.wrapperW = that.wrapper.clientWidth || 1;
			that.wrapperH = that.wrapper.clientHeight || 1;

			that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
			that.scrollerH = m.round(that.scroller.offsetHeight * that.scale);
			that.maxScrollX = that.wrapperW - that.scrollerW;
			that.maxScrollY = that.wrapperH - that.scrollerH;
			that.dirX = 0;
			that.dirY = 0;

			that.hScroll = that.options.hScroll && that.maxScrollX < 0;
			that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

			that.hScrollbar = that.hScroll && that.options.hScrollbar;
			that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;
			offset = that._offset(that.wrapper);
			that.wrapperOffsetLeft = -offset.left;
			that.wrapperOffsetTop = -offset.top;

			// Prepare snap
			if( typeof that.options.snap == 'string') {
				that.pagesX = [];
				that.pagesY = [];
				els = that.scroller.querySelectorAll(that.options.snap);
				for( i = 0, l = els.length; i < l; i++) {
					pos = that._offset(els[i]);
					pos.left += that.wrapperOffsetLeft;
					pos.top += that.wrapperOffsetTop;
					that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
					that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
				}
			} else if(that.options.snap) {
				that.pagesX = [];
				while(pos >= that.maxScrollX) {
					that.pagesX[page] = pos;
					pos = pos - that.wrapperW;
					page++;
				}
				if(that.maxScrollX % that.wrapperW)
					that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length - 1] + that.pagesX[that.pagesX.length - 1];
				pos = 0;
				page = 0;
				that.pagesY = [];
				while(pos >= that.maxScrollY) {
					that.pagesY[page] = pos;
					pos = pos - that.wrapperH;
					page++;
				}
				if(that.maxScrollY % that.wrapperH)
					that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length - 1] + that.pagesY[that.pagesY.length - 1];
			}

			// Prepare the scrollbars
			that._scrollbar('h');
			that._scrollbar('v');

			that.scroller.style[vendor + 'TransitionDuration'] = '0';

			that._resetPos(200);
		},
		scrollTo : function(x, y, time, relative) {
			var that = this, step = x, i, l;

			that.stop();

			if(!step.length)
				step = [{
					x : x,
					y : y,
					time : time,
					relative : relative
				}];

			for( i = 0, l = step.length; i < l; i++) {
				if(step[i].relative) {
					step[i].x = that.x - step[i].x;
					step[i].y = that.y - step[i].y;
				}
				that.steps.push({
					x : step[i].x,
					y : step[i].y,
					time : step[i].time || 0
				});
			}

			that._startAni();
		},
		scrollToElement : function(el, time) {
			var that = this, pos;
			el = el.nodeType ? el : that.scroller.querySelector(el);
			if(!el)
				return;
			pos = that._offset(el);
			pos.left += that.wrapperOffsetLeft;
			pos.top += that.wrapperOffsetTop;

			pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
			pos.top = pos.top > 0 ? 0 : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
			time = time === undefined ? m.max(m.abs(pos.left) * 2, m.abs(pos.top) * 2) : time;

			that.scrollTo(pos.left, pos.top, time);
		},
		scrollToPage : function(pageX, pageY, time) {
			var that = this, x, y;

			if(that.options.snap) {
				pageX = pageX == 'next' ? that.currPageX + 1 : pageX == 'prev' ? that.currPageX - 1 : pageX;
				pageY = pageY == 'next' ? that.currPageY + 1 : pageY == 'prev' ? that.currPageY - 1 : pageY;
				pageX = pageX < 0 ? 0 : pageX > that.pagesX.length - 1 ? that.pagesX.length - 1 : pageX;
				pageY = pageY < 0 ? 0 : pageY > that.pagesY.length - 1 ? that.pagesY.length - 1 : pageY;

				that.currPageX = pageX;
				that.currPageY = pageY;
				x = that.pagesX[pageX];
				y = that.pagesY[pageY];
			} else {
				x = -that.wrapperW * pageX;
				y = -that.wrapperH * pageY;
				if(x < that.maxScrollX)
					x = that.maxScrollX;
				if(y < that.maxScrollY)
					y = that.maxScrollY;
			}

			that.scrollTo(x, y, time || 400);
		},
		disable : function() {
			this.stop();
			this._resetPos(0);
			this.enabled = false;

			// If disabled after touchstart we make sure that there are no left over events
			this._unbind(MOVE_EV);
			this._unbind(END_EV);
			this._unbind(CANCEL_EV);
		},
		enable : function() {
			this.enabled = true;
		},
		stop : function() {
			if(this.options.useTransition)
				this._unbind('webkitTransitionEnd');
			else
				cancelFrame(this.aniTime);
			this.steps = [];
			this.moved = false;
			this.animating = false;
		},
		zoom : function(x, y, scale, time) {
			var that = this, relScale = scale / that.scale;

			if(!that.options.useTransform)
				return;
			time = (time || 200) + 'ms';
			x = x - that.wrapperOffsetLeft - that.x;
			y = y - that.wrapperOffsetTop - that.y;
			that.x = x - x * relScale + that.x;
			that.y = y - y * relScale + that.y;

			that.scale = scale;

			that.scroller.style[vendor + 'TransitionDuration'] = time;
			that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose + ' scale(' + scale + ')';

			that.refresh();
		},
		isReady : function() {
			return !this.moved && !this.zoomed && !this.animating;
		}
	};

	if( typeof exports !== 'undefined')
		exports.iScroll = iScroll;
	else
		window.iScroll = iScroll;

})();

function addScroll(jScroll, iPadScrollbarClass) {
	if(global.BD.iPad) {
		jQuery(jScroll).each(function() {
			var jscroll = jQuery(this);
			new iScroll(jscroll.attr("id"), {
				desktopCompatibility : true,
				scrollbarClass : iPadScrollbarClass
			});
		})
	} else {
		jQuery(jScroll).each(function() {
			var jscroll = jQuery(this);
			jscroll.jScrollPane({
				verticalGutter : 0 //default is 4 - The amount of space between the side of the content and the vertical scrollbar.
			});
		})
	}
}