;
jQuery.floatingController = jQuery.floatingController || (function($) {
	//global variable
	var cartCaption = $('.my-cart'),
		cartCaptionClone,
		contentSlide = $('.content-slide'),
		myWindow = $(window),
		myDocument = $(document),
		htmlBody = $('html,body'),
		isIE6 = jQuery('html').hasClass('ie6') || !Modernizr.positionfixed,
		/*Temporary pause when sliding by clicking on menu*/
		tempPause = false,
		/*floating bar is element will be floated*/
		cartSticky = false,
		floatingBar,
		floatingBarH = 109,
		/*The element will be used for waypoint as anchor to detect when floating bar is shown or hidden*/
		anchorSection,
		anchorSectionH,
		/*
			we have 2 type of floating bar:
				+ 1: marketing bar include minimized version of marketing block (call marketing bar) and cart
				+ 2: product submenu bar include minimized version of product submenu block
			*/
		floatingBarType = 0,
		selectedSubSlide = '',
		menuChangeHandler = null,
		associatingMenu = '',
		alterSection = $(".alternative-section"),
		cartOverlay,
		displayStatus = 'hide',/*hide, temphide, show */		
		/*constants for animation*/
		animSettings = {
			//setting for floating bar
			floatHideTop: -80,
			floatShowTop: 0,
			/*setting for cart caption*/
			cartCapHideTop: 0,
			cartCapShowTop: 0,
			/*setting for cart overlay*/
			cartHideTop: 62,
			cartShowTop: 54,/*equal to height of floatingbar*/
			duration: 800
		}; /*show or hide*/

	var timeoutId = -1,
		displayTimeout = 5000,
		slideTimeOut = -1,
		alterVisible = false,
		easing = "easeOutQuart",
		reRenderTimeout = -1;

	var readyForDisplay = false;

	var scrollHandler = function(e) {		
		repositionFloatBar();
		repositionCart();
	};

	var scrollCheckingHandler = function(e) {
		var wH = myWindow.height();
		var pos = alterSection.offset(),
			y = pos.top,
			st = myWindow.scrollTop(),
			py = st + (wH);

		if (py < y){
			alterVisible = false;
		}else{
			alterVisible = true;
		}
		toggleBarVisibility();
		
		repositionFloatBar();
		repositionCart();
	};

	var hideCompleteHandler = function() {
		if (!isIE6) {
			cartOverlay.css({position:"static", top:0});
		} else {
			cartOverlay.css({position:"static", "margin-top":0});
		}
		detachCartOverlay();
	}

	var showCompleteHandler = function() {
	}

	var attachCartOverlay = function() {
		if (cartSticky !== true) return;
		if (!isIE6) {
			cartOverlay.css({position:"absolute", top:animSettings.cartShowTop});			
		} else {
			floatingBar.css("height", "auto");
			cartOverlay.css({position:"static", "margin-top": "10px"});
		}
		cartOverlay.appendTo(floatingBar);
	}

	var detachCartOverlay = function() {
		if (cartSticky !== true) return;
		cartOverlay.css({});
		cartOverlay.appendTo($('.menu'));
	}

	var showShortly = function() {
		/* don't need to show floating & cart overlay when it's hidden */
		if ($.floatingController.getFloatingBarStatus() == "hide") return;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(function() {
			var timeoutAniSpeed = 400;
			if (displayStatus == 'hide') {
				floatingBar.stop().animate({top:animSettings.floatHideTop}, timeoutAniSpeed, easing, hideCompleteHandler);
			}
		}, displayTimeout);
		attachCartOverlay();

		if (!isIE6) {
			floatingBar.stop().animate({top:animSettings.floatShowTop}, animSettings.duration, easing);
		} else {
			floatingBar.stop().slideDown(animSettings.duration, easing);
		}
		
	}

	var hideToolbar = function () {
		displayStatus = 'hide';
		if (isIE6) {
			clearTimeout(slideTimeOut);
			slideTimeOut = setTimeout(function() {
				floatingBar.stop().slideUp(animSettings.duration, easing,hideCompleteHandler);
			}, 400);
			if (cartSticky === true) cartOverlay.hide();
		} else {
			if (cartSticky === true) $.cartOverlayController.hide();
			floatingBar.stop().animate({top:animSettings.floatHideTop}, animSettings.duration, easing, hideCompleteHandler);
		}
	};

	var showToolbar = function () {
		clearTimeout(timeoutId);
		displayStatus = 'show';
		
		// floatingBar.stop();		
		attachCartOverlay();
		if (isIE6) {
			clearTimeout(slideTimeOut);
			slideTimeOut = setTimeout(function() {
				floatingBar.stop().slideDown(animSettings.duration, easing,showCompleteHandler);
			}, 400);
			
		} else {
			floatingBar.stop().animate({top:animSettings.floatShowTop}, animSettings.duration, easing, showCompleteHandler);
		}
	};

	var toggleBarVisibility = function() {
		if (alterVisible === true) {
			hideToolbar();
		} else {
			if (readyForDisplay) showToolbar();
			else hideToolbar();
		}
	};

	var repositionFloatBar = function() {
		var style = {};		
		var scrollTop = jQuery(window).scrollTop();
		var paddingTop = 0;

		if (isIE6) {
			paddingTop += scrollTop;
			// style.position = "absolute";
			style.top = scrollTop;
			floatingBar.css(style);
		}
	};

	var repositionCart = function() {
		var scrollTop = myWindow.scrollTop();

		//Overlay Cart
		var styleOverlay = {};
		var overlayPaddingTop = 0;

		if (isIE6) {
			overlayPaddingTop 	= scrollTop;// + animSettings.cartShowTop;
			// console.log("overlayPaddingTop " + scrollTop);
			styleOverlay = {
				"top": overlayPaddingTop + "px"
			};
			if (displayStatus == 'show') {
				styleOverlay.position 	= "absolute";
			} else {
				styleOverlay = cartOverlay.data('init-style');
			}
		}
		
		// cartOverlay.css(styleOverlay);
	};
	
	var initProductSubmenu = function () {
		var subSection = $(".content-slide");		
		
		subSection.waypoint(function (direction) {
			
			// Cache the variable of the data-slide attribute associated with each slide
			var dataSlide = $(this).attr('data-slide');
			var dataSlidePrev, current;
			var subSlide;

			if (tempPause) return;
			// console.log('selectedSubSlide ' + selectedSubSlide);
			
			//If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
			//remove the active class from the previous navigation link 
			if (direction === 'down') {
				
				menuItem = floatingBar.find('.scrolling-menu-item[data-slide="' + dataSlide + '"]');
				subSlide = menuItem.attr('data-sub-slide');
				// menuItem.addClass('active').siblings().removeClass('active');
			}
			// else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
			//remove the active class from the next navigation link 
			if (direction === 'up'){
				current = $(this).prev();
				var $parent = $(this).parent();
				dataSlidePrev = current.attr('data-slide');
				
				while (current.length > 0 && dataSlidePrev === undefined) {
					current = $parent.find(current.prev());
					dataSlidePrev = current.attr('data-slide');
				}
				
				dataSlide = dataSlidePrev ? dataSlidePrev : dataSlide;
				menuItem = floatingBar.find('.scrolling-menu-item[data-slide="' + dataSlide + '"]');
				subSlide = menuItem.prev().attr('data-sub-slide');
			}
			// console.log('selectedSubSlide ' + selectedSubSlide);
			selectedSubSlide = selectedSubSlide ? selectedSubSlide : menuItem.first().attr("data-sub-slide");
			if (subSlide && selectedSubSlide && selectedSubSlide != "") {
				menuItem.filter('[data-sub-slide="' + selectedSubSlide + '"]').addClass('active').siblings().removeClass('active');
			} else {

				menuItem.addClass('active').siblings().removeClass('active');
			}
			updateFloatingMenu(dataSlide, selectedSubSlide, true);

		}, {
			/*Cheat */
			offset: floatingBarH + 1
		});
		
		links = floatingBar.find('.scrolling-menu-item');
		links = links.add($(associatingMenu).find('.scrolling-menu-item'));

		links.click(function (e) {
			e.preventDefault();

			var dataSlide = $(this).attr('data-slide');
			var subSlide = $(this).attr('data-sub-slide');
			var items;
			
			goToByScroll(dataSlide);
			items = floatingBar.filter('.scrolling-menu-item[data-slide="' + dataSlide + '"]');
			if (subSlide) {
				selectedSubSlide = subSlide;
			}
			$(this).addClass('active').siblings().removeClass('active');
			selectedSubSlide = subSlide;
			updateFloatingMenu(dataSlide, selectedSubSlide, true);
		});

		function goToByScroll(dataSlide) {
			var dur = 1500;
			htmlBody.stop();
			htmlBody.animate({
				scrollTop: $('.content-slide[data-slide="' + dataSlide + '"]').offset().top - floatingBarH + 1
			}, dur, 'easeInOutQuint');
			tempPause = true;
			setTimeout(function() {
				tempPause = false;
			}, dur + 10);
		}
	}

	function updateFloatingMenu(slide, subSlide, triggerEvent) {
		var menuItem;
		if(!slide) return; 
		slide = slide.split('.').join('');
		menuItem = floatingBar.find('[data-slide=' + slide + ']');

		if (subSlide) {
			subSlide = subSlide.split('.').join('');
			menuItem = menuItem.filter('[data-sub-slide="' + subSlide + '"]');
			selectedSubSlide = subSlide;
		}
		menuItem.addClass('active').siblings().removeClass('active');

		if (triggerEvent) {
			if(menuChangeHandler) {
				menuChangeHandler(slide, selectedSubSlide);
			}
		}
	};

	function initForIE6() {
		if (isIE6) {
			//this settings should match static state of my-cart block.
			var cartCaptionInitStyle = {
				"position": cartCaption.css('position'),
				"top": 0,
				"left": 'auto',
				"right": 0
			};
			var cartOverlayInitStyle = {
				"position": "static",
				"top": 'auto',
				"left": 0,
				"right": 'auto',
				"margin-top": 0
			};

			floatingBar.css({display: "none"});
			cartCaptionClone.data('init-style', cartCaptionInitStyle);
			cartOverlay.data('init-style', cartOverlayInitStyle);
			$(window).unbind('scroll', scrollHandler).bind('scroll', scrollHandler);
			setTimeout(function() {
				$(window).trigger('scroll');
				toggleBarVisibility();
			}, 100);
			$(window).bind('resize', function() {
				//force re-render on IE6.
				clearTimeout(reRenderTimeout);
				reRenderTimeout = setTimeout(function() {
					cartCaptionClone.redraw();
				}, 200);
				
			})
		}
	}
	function init() {
		if (floatingBarType === 1) { /*configuration for marketing bar */
			/* if floatingBar & anchorSection are not specified they will get default value  */
			floatingBar = floatingBar ? floatingBar : $('.information-minimize.marketing');
			anchorSection = anchorSection ? anchorSection : $('.information.marketing');
			//marketingSection = marketingSection ? marketingSection : $('.information.marketing');
		}
		else if(floatingBarType === 2) { 
			/*configuration for product submenu bar */
			/* if floatingBar & anchorSection are not specified they will get default value  */
			floatingBar = floatingBar ? floatingBar : $('.scrolling-menu-minimize');
			anchorSection = anchorSection ? anchorSection : $(".collapsible-nav");
			setTimeout(function() {
				initProductSubmenu();
			}, 1000);
			
			animSettings = $.extend(animSettings, {
				floatHideTop: -109,
				floatShowTop: 0,
				cartCapHideTop: -44,
				cartCapShowTop: 55,
				cartShowTop: 109
			});
		}

		/* clone cart caption to be attached into floating bar for smooth animation and ease of sync*/
		cartCaptionClone = cartCaption.clone();
		floatingBar.find('.content-block').append(cartCaptionClone);
		alterSection = alterSection ? alterSection : $('.alternative-section');
		anchorSection.waypoint(function (direction) {			
			if (direction === 'down') {
				readyForDisplay = true;
				toggleBarVisibility();
			}

			if (direction === 'up'){
				readyForDisplay = false;
				toggleBarVisibility();
			}
			repositionFloatBar();
			repositionCart();
		}, {
			offset: function() {
				return -$(this).height();
			}
		});

		
		floatingBar.find(".go-to-top").off('click').on('click', function(e) {
			e.preventDefault();
			htmlBody.animate({
				scrollTop: 0
			}, 1500, 'easeInOutQuint');
		});

		if (alterSection.length > 0) {
			$(window).unbind('scroll', scrollCheckingHandler).bind('scroll', scrollCheckingHandler);
		}

		/*positioning for initial state of floating bar, cart overlay, cart caption */
		floatingBar.css({
			display: "block",
			top: animSettings.floatHideTop
		});
		
		cartCaptionClone.css({
			display: "block",
			top: animSettings.cartCapShowTop,
			position: "absolute"
		});
		cartCaptionClone.addClass('minimize');
		

		//for IE6
		initForIE6();

	}
	/*need to add some configuration for each page*/
	return {
		initialize:function(settings) {
			if (settings) {
				floatingBarType = settings.floatingBarType;				
				floatingBar = settings.floatingBar;				
				anchorSection = settings.anchorSection;
				menuChangeHandler = settings.menuChangeHandler;
				associatingMenu = settings.associatingMenu;
				alterSection = settings.alterSection;
				//We get default if cartOverlay is not passed in
				cartOverlay = settings.cartOverlay ? settings.cartOverlay : $('#cart-overlay');
			};
			
			init();
		},
		
		setMenuSelected: function(slide, subSlide) {
			if (floatingBarType == 2) {
				var currentSlide = floatingBar.find('.scrolling-menu-item[data-slide="' + slide + '"]');
				
				currentSlide = currentSlide.filter('[class*=active]');
				if (currentSlide.length > 0) {
					updateFloatingMenu(slide, subSlide);
				} else {
					selectedSubSlide = subSlide;
				}
				
			}
			
		},

		getFloatingBarStatus: function() {
			if (alterVisible === true) {
				return "tempHide";
			}
			return displayStatus;
		},

		getType: function() {
			return floatingBarType;
		}
		
	}
})(jQuery);

