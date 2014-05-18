

;(function($, window){
	var isIE7 = $('html').hasClass('ie7');
	var $doc = $(document);
	var isIE6 = $('html').hasClass('ie6');

	window.DroplistManager = function() {
		this.els = [];
		
		this.activeName = null;
		var that = this;
		var windowEventBinded = false;		
		
		this.hideActiveCombobox = function() {
			if (this.activeName != null && this.els[jQueryDroplistManager.activeName] != undefined) {
				this.els[this.activeName].hideList();
			}
		};
		
		function _hideCombobox(e){
			that.hideActiveCombobox();
		};

		this.bindWindowEvents = function() {
			if (!windowEventBinded) {
				
				$.event.remove(window, 'resize', _hideCombobox); //remove event resize if exist on window
				$.event.add(window, 'resize', _hideCombobox); //add event resize on window
				
				var etype = 'touchstart' in window ? 'touchstart' : 'click';				
				
				$.event.remove(document, etype, _hideCombobox); //remove event if exist on document
				$.event.add(document, etype, _hideCombobox); //add event on document				
				
				windowEventBinded = true;
			}
		}
	};
	
	window.jQueryDroplistManager = new DroplistManager();
	
	window.jQueryDropListController = function(jEl, options) {
		var o = this;
		var objMobileWrapper, objMobileTitle;
		var isMobile = false;
		o.isShown = true;	
		
		var setup = function() {
			initParameters();
			if ($('html').hasClass('mobile') || $('html').hasClass('tablet')) {
				renderOnMobile();
			} else {
				renderOnDesktop();
			}
			
			!o.options.noTrig && o.setSelectedValue(o.select.val());
			bindFormEvents();
			
		};
		
		/**
		 * use only one event binding for all radio group
		 */
		var bindFormEvents = function () {

				var resetHandler = function () {
					setTimeout(resetValue, 100);
				};
				
				// jQuery(p).off('reset', resetHandler).on('reset', resetHandler);
				var form = o.select.closest('form');				
				form.off('reset', resetHandler).on('reset', resetHandler);
		};

		var resetValue = function() {			
				o.setSelectedValue(o.select.val());
		};
		
		var initParameters = function() {
			o.options = {
				noTrig: options != undefined && options.noTrig != undefined ? options.noTrig : false,
				verticalGutter : options != undefined && options.verticalGutter != undefined ? parseInt(options.verticalGutter) : 10,
				classWrapper : options != undefined && options.classWrapper != undefined ? options.classWrapper : '',
				classDisableState : options != undefined && options.classDisableState != undefined ? options.classDisableState : '',
				scrollbarSide : options != undefined && options.scrollbarSide != undefined ? options.scrollbarSide : "right",
				isFilter : options != undefined && options.isFilter != undefined ? options.isFilter : false,
				dropDownWidth : options != undefined && options.dropDownWidth != undefined ? options.dropDownWidth : 0,
				captionWidth : options != undefined && options.captionWidth != undefined ? options.captionWidth : 120,
				changeHandler : options != undefined && options.changeHandler != undefined ? options.changeHandler : undefined,
				onAfterInit : options != undefined && options.onAfterInit != undefined ? options.onAfterInit : function() {
				}
			}
			o.select = jEl;
		};
		var renderOnDesktop = function() {

			renderWrapContainers();
			renderInnerElements();
		};
		var renderOnMobile = function() {
			isMobile = true;
			var obj = o.select;
			var defaultVal;
			if (objMobileWrapper && objMobileWrapper.length){				
				var title = "", hasValue = false;
				jQuery('options', obj).each(function() {
					var option = jQuery(this);
					if (option.attr("selected")) {
						title = $.trim(option.text());
						hasValue = true;
					}
				});
				if (!hasValue) {
					title = $.trim(obj.find("option:first-child").text());
				}
				objMobileTitle.find("span").text(title);
				return;	
			} 
			
			objMobileWrapper = jQuery('<div class="combobox-wrapper ' + o.options.classWrapper + '"></div>');
			objMobileTitle = jQuery('<p class="combobox-title"><span></span></p>');
			defaultVal = jQuery('options', obj).eq(0).val();
			
			var title = "", hasValue = false;
			obj.children().each(function() {
				var option = jQuery(this);
				if (option.attr("selected")) {
					title = $.trim(option.text());
					hasValue = true;
				}
			});


			var elClasses = obj.attr("class").split(" ");
			for (var i = 0; i < elClasses.length; i++) {
				if (elClasses[i].match(/^theme/)) {
					objMobileWrapper.addClass(elClasses[i]);
				}
			}
			if (!hasValue) {
				title = $.trim(obj.find("option:first-child").text());
			}
			obj.before(objMobileWrapper).appendTo(objMobileWrapper).before(objMobileTitle);
			objMobileTitle.find("span").text(title);

			obj.unbind("change", mobileChangeHandler).bind("change", mobileChangeHandler);
		};
		
		var mobileChangeHandler = function() {			
				var selectedVal = jQuery(this).val();
				
				title = jQuery(this).find("option:selected").text();
				objMobileTitle.find("span").text(title);
				
				if (o.options.changeHandler != undefined) {
					o.options.changeHandler(o, selectedVal);
				}

		};
		
		var renderWrapContainers = function() {
			o.select.addClass("has-select-ui");
			o.select.css({
				opacity : 0,
				position : "absolute",
				left : "-1000em"
			});

			o.select.bind('focus', function() {
				o.droplistTITLE.css({
					/* 'border' : '1px dotted #000' */
					'border' : 'none'
				});
			});

			o.select.bind('blur', function() {
				o.droplistTITLE.css({
					'border' : 'none'
				});
			});

			o.select.bind('keyup', function(e) {
				var keycode;
				if (window.event)
					keycode = window.event.keyCode;
				else if (e)
					keycode = e.which;

				if (keycode == 38 || keycode == 40) {
					var optionSelected = jQuery(this).find('option').filter(":selected"), title = $.trim(optionSelected.text()), i = jQuery(this).find('option').index(optionSelected);
					o.droplistTITLE.find("span").text(title);
					o.el.find("ul > li").removeClass("active");
					o.elUL.find("li").eq(i).addClass("active");
					if (o.options.changeHandler != undefined) {
						o.options.changeHandler(o, o.select.val());
					}
					if (o.select.hasClass("combobox-link")) {
						window.location.href = o.select.val();
					}
					o.afterCall();
				}
			});

			o.reservedHolder = null;
			o.elUL = jQuery('<ul title="' + o.select.attr("title") + '"></ul>');
			o.elUL.addClass(o.select.attr("class"));
			o.select.before(o.elUL);
			o.el = jQuery('<div class="drop-list-ui-container ' + o.options.classWrapper + '"></div>');
			o.elULWrap = jQuery('<div class="scroll-wrap"></div>');
			o.elUL.before(o.el);
			o.elUL.before(o.elULWrap);
			o.elULWrap.html(o.elUL);
			o.el.html(o.elULWrap);
			
			var $wrapper = $('[data-select-id='+o.select.attr('id')+']');
			$wrapper.length && $wrapper.remove();
			
			o.elWrapper = jQuery('<div class="drop-list-ui" data-select-id="'+o.select.attr('id')+'"></div>');
			o.el.before(o.elWrapper);
			o.elWrapper.html(o.el);
			
			o.droplistInput = jQuery('<input type="text" class="drop-list-input"/>');
			o.el.before(o.droplistInput);
			o.droplistInput.hide();
			var droplistArrowFilterOnClick = function(evt) {
				if (options.beforeAction != undefined) {
					options.beforeAction();
				}

				if (!o.select.attr("disabled")) {
					jQueryDroplistManager.els[jQueryDroplistManager.activeName].eventFire = true;
					if (o.el.hasClass("drop-list-ui-show")) {
						o.hideList();
					} else {
						if (jQueryDroplistManager.activeName != null) {
							jQueryDroplistManager.els[jQueryDroplistManager.activeName].hideList();
						}
						o.showList();
					}
					
				}
				return false;
			};
			var dropListTitleFilterOnClick = function(evt) {
				o.hideList();
				o.droplistInput.show();
				o.droplistInput.val('');
				o.droplistInput.focus();
			};
			var dropListTitleOnClick = function(evt) {
				var activeName;				
				
				if(!isIE7) {
    				o.select.focus();	
				}
				
				if (options.beforeAction != undefined) {
					options.beforeAction();
				}

				if (!o.select.attr("disabled")) {
					activeName = jQueryDroplistManager.activeName;
					if (o.el.hasClass("drop-list-ui-show")) {
						o.hideList();
					} else {
						if (jQueryDroplistManager.activeName != null) {
							var activeObject = jQueryDroplistManager.els[activeName];
							if (activeObject !== o) {
								activeObject.hideList();
							}
						}

						o.showList();
						activeName = o.select.attr("id");
						jQueryDroplistManager.activeName = activeName;
					}
					
					jQueryDroplistManager.els[activeName].eventFire = true;
				}
				return false;
			};
			if (!o.select.attr("multiple")) {
				o.droplistTITLE = jQuery("<p><span></span></p>");
				o.el.before(o.droplistTITLE);
				var renderForFilter = function() {
					o.droplistArrow = jQuery('<span class="arrow"></span>');
					o.el.before(o.droplistArrow);

					o.droplistArrow.unbind("click").bind("click", droplistArrowFilterOnClick);
					o.droplistTITLE.unbind("click").bind("click", dropListTitleFilterOnClick);
				};
				if (options.isFilter) {
					renderForFilter();
				} else {
					o.droplistTITLE.focus(function() {
					});

					o.droplistTITLE.unbind("click").bind("click", dropListTitleOnClick);
				}
			} else {
				o.elWrapper.addClass("multiple");
				o.el.addClass("multiple-container");
			}
			
			o.select.unbind("change", changeHandler).bind("change", changeHandler);
			
		};
		
		var changeHandler = function() {			
			var selectedVal = jQuery(this).val();			
			title = jQuery(this).find("option:selected").text();
			
			o.setSelectedValue(selectedVal);			
		};
		
		var renderSingleChoiceElement = function() {
			o.maxDropListHeight = options != undefined && options.maxDropListHeight != undefined ? parseInt(options.maxDropListHeight) : 124;
			o.config = {
				maxDropListHeight : o.maxDropListHeight
			}
			var title = "";
			var hasValue = false;
			o.select.find("option").each(function() {
				var option = jQuery(this);
				if (option.attr("selected")) {
					title = option.text();
					hasValue = true;
				}
			});
			if (!hasValue) {
				title = o.select.attr("title") != "" ? o.select.attr("title") : o.select.find("option:first-child").text();
			}
			if (!o.select.attr("disabled")) {
				o.droplistTITLE.find("span").text(title);
				o.elWrapper.removeClass("disabled");
			} else {
				o.droplistTITLE.find("span").text(title);
				o.elWrapper.addClass("disabled");
			}
			o.el.show();

			o.el.css({
				position : "absolute",
				left : 0,
				display : "none",
				overflow : "hidden",
				width : o.elUL.width() + 2
			});
			o.el.hide();
			o.el.find("ul > li").each(function(index) {
				var self = jQuery(this);

				if (index == 0) {
					self.addClass("first");
				}
				var singleItemOnClick = function() {
					if(!isIE7) {
	    				o.select.focus();	
					}
					if (self.find("span.optgroup-label:first-child").length > 0) {
						return false;
					} else {
						if (!o.select.attr("disabled")) {
							o.el.find("ul > li").removeClass("active");
							self.addClass("active");
							o.droplistTITLE.find("span").text(self.text());
							o.droplistInput.hide();
							o.hideList();
							o.select.val(o.select.find("option").eq(self.attr("value") - 1).val());
							if (o.options.changeHandler != undefined) {
								o.options.changeHandler(o, o.select.val());
							}

							if (o.select.hasClass("combobox-link")) {
								window.location.href = o.select.val();
							}

							self.removeClass("hover");
							o.afterCall();
							return false;
						}
					}
				};
				self.unbind("click").bind("click", singleItemOnClick);
			});
			o.el.unbind("click").bind("click", function(evt) {
				return false;
			});
		};
		var renderMultiChoiceElement = function() {
			var size = o.select.attr("size");
			var _height = 0;

			if (!o.elUL.parent().hasClass("jspContainer")) {
				o.elUL.parent().jScrollPane({
					verticalGutter : o.options.verticalGutter,
					scrollbarOnLeft : o.options.scrollbarSide == "left" ? true : false
				});
			}
			var keyChar = null;
			var beginVal_INDEX = null;
			var endVal_INDEX = null;

			var clearValues = function() {
				o.select.find("option").removeAttr("selected");
				o.elUL.find("li").removeClass("active");
			};
			o.el.find("ul > li").each(function(index) {
				var self = jQuery(this);
				var multiChoiceItemOnClick = function(e) {
					if (self.find("span.optgroup-label:first-child").length > 0) {
						return false;
					}
					if (!o.select.attr("disabled")) {
						if (e.ctrlKey && !e.shiftKey) {
							beginVal_INDEX = index;
							o.select.find("option").eq(index).attr("selected", "selected");
						} else if ((!e.ctrlKey && e.shiftKey) || (e.ctrlKey && e.shiftKey)) {
							if (!e.ctrlKey) {
								clearValues();
							}
							if (beginVal_INDEX == null) {
								beginVal_INDEX = index;
							} else {
								endVal_INDEX = index;
								if (beginVal_INDEX != null && endVal_INDEX != null) {
									o.el.find("ul > li").each(function(index) {
										var self = jQuery(this);
										if ((beginVal_INDEX <= endVal_INDEX && index >= beginVal_INDEX && index <= endVal_INDEX) || (beginVal_INDEX >= endVal_INDEX && index <= beginVal_INDEX && index >= endVal_INDEX)) {
											o.select.find("option").eq(index).attr("selected", "selected");
											self.addClass("active");
										}
									});
									endVal_INDEX = null;
								}
							}
						} else {
							clearValues();
							o.select.find("option").eq(index).attr("selected", "selected");
							beginVal_INDEX = index;
						}
						self.addClass("active");
						self.removeClass("hover");
						if (o.options.changeHandler != undefined) {
							o.options.changeHandler(o, o.select.val());
						}
						return false;
					}
				};
				self.unbind("click").bind("click", multiChoiceItemOnClick);
			});
		};
		var renderInnerElements = function() {
			var offset = 0;
			o.select.find("> *").each(function(index) {
				var el = jQuery(this);
				var count = index;
				if (this.tagName.toLowerCase() == "optgroup") {
					el.each(function() {
						var optgroup = jQuery(this);
						var optName = optgroup.attr("label");
						var optgroup_el = jQuery("<li></li>");
						optgroup_el.prepend('<span class="optgroup-label">' + optName + '</span>');
						var optgroup_elsubUL = jQuery("<ul></ul>");
						o.elUL.append(optgroup_el);
						optgroup_el.append(optgroup_elsubUL);
						optgroup.find("option").each(function(index) {

							var self = jQuery(this);
							if (self.attr("value") == "") {
								optgroup_elsubUL.append("<li class=\"select-ui-title\" value=\"" + parseInt(count + index + offset + 1) + "\"><a href=\"#\" title=\"" + $.trim(self.text()) + "\" rel=\"" + self.attr("label") + "\">" + self.text() + "</a></li><li class=\"select-ui-title\" value=\"" + parseInt(count + index + offset + 1) + "\"><a href=\"#\" title=\"" + $.trim(self.text()) + "\" rel=\"" + self.attr("label") + "\">" + self.text() + "</a></li>");
							} else if (self.attr("selected")) {
								optgroup_elsubUL.append("<li class=\"active\" value=\"" + parseInt(count + index + offset + 1) + "\"><a href=\"#\" title=\"" + $.trim(self.text()) + "\" rel=\"" + self.attr("label") + "\">" + self.text() + "</a></li>");
							} else {
								optgroup_elsubUL.append("<li value=\"" + parseInt(count + index + offset + 1) + "\"><a href=\"#\" title=\"" + $.trim(self.text()) + "\" rel=\"" + self.attr("label") + "\">" + self.text() + "</a></li>");
							}
						});
						offset += optgroup.find("option").length - 1;
					});
				} else {
					if (el.attr("value") == "") {
						o.elUL.append("<li class=\"select-ui-title\" value=\"" + parseInt(index + offset + 1) + "\"><a href=\"javascript:void();\" title=\"" + $.trim(el.text()) + "\" rel=\"" + el.attr("label") + "\">" + el.text() + "</a></li>");
					} else if (el.attr("selected")) {
						o.elUL.append("<li class=\"active\" value=\"" + parseInt(index + offset + 1) + "\"><a href=\"javascript:void();\" title=\"" + $.trim(el.text()) + "\" rel=\"" + el.attr("label") + "\">" + el.text() + "</a></li>");
					} else {
						o.elUL.append("<li value=\"" + parseInt(index + offset + 1) + "\"><a href=\"javascript:void();\" title=\"" + $.trim(el.text()) + "\" rel=\"" + el.attr("label") + "\">" + el.text() + "</a></li>");
					}
				}
			});
			var elClasses = o.elUL.attr("class").split(" ");
			var addDefaultTheme = true;
			for (var i = 0; i < elClasses.length; i++) {
				if (elClasses[i].match(/^theme/)) {
					o.elWrapper.addClass(elClasses[i]);
					addDefaultTheme = false;
				}
			}
			if (addDefaultTheme) {
				o.elWrapper.addClass("theme-default");
				o.elUL.addClass("theme-default");
			}

			if (!o.select.attr("multiple")) {
				renderSingleChoiceElement();
			} else {
				renderMultiChoiceElement();
			}
			bindEventOpts(o.el.find("ul > li"));
		};
		
		function bindEventOpts(opts){
			opts.each(function(index) {
				var self = jQuery(this);
				// self.unbind("mouseover").bind("mouseover", function() {
				self.bind("mouseover", function() {
					self.addClass("hover");
					// return false;
				});
				// self.unbind("mouseout").bind("mouseout", function() {
				self.bind("mouseout", function() {
					self.removeClass("hover");
					// return false;
				});
			});
		};

		this.selectedValue = function (param) {
			if (!param) {
				return this.getSelectedValue();
			} else {
				this.setSelectedValue(param);
			}
			return ;
		};
		
		this.getSelectedValue = function() {
			return o.select.val();
		};
		
		this.setSelectedValue = function(values) {
			if (!values) return;
			var valArray = [];
			if ( typeof values == 'array') {
				valArray = values;
			} else {
				valArray.push(values);
			}
			o.select.val(valArray);
			if (isMobile) {
				optionValue = o.select.find("option[value=" + valArray[0] + "]").text();
				objMobileTitle.find('span').text(optionValue);
				return;
			}
			o.el.find("ul > li").removeClass("active");
			for (var i = 0; i < valArray.length; i++) {
				var value = valArray[i];
				var finalText = '';

				o.select.find("option").each(function() {
					var optionValue = jQuery(this).val();
					if (optionValue === value) {
						var index = jQuery(this).index() + 1;
						var liItem = o.el.find('ul > li[value=' + index + ']');
						liItem.addClass('active');
						liItem.removeClass("hover");
						finalText = liItem.text();
					}
				});
			}
			if (o.droplistTITLE != undefined) {
				o.droplistTITLE.find("span").text(finalText);
			}

			if (o.options.changeHandler != undefined) {
				//Clark add code for checkout address error message tracking.
				if(arguments[1] && arguments[1] =="noChangeFunctionCall"){
					
				} else { 
					o.options.changeHandler(o, o.select.val(),arguments);
				}
			}

		};
		this.changeHandler = function(func) {
			o.options.changeHandler = func;
		}
		this.reset = function() {
			o.elUL.empty();
			o.elUL.removeAttr("class");
			o.elUL.attr("title", o.select.attr("title"));
			o.elUL.addClass(o.select.attr("class"));
			this.setupDropListUI();
		};
		this.showList = function() {

			o.elWrapper.addClass("top-level");
			o.el.addClass("drop-list-ui-show");
			o.reservedHolder = o.elWrapper.clone(true).empty();

			o.reservedHolder.css({
				visibility : "hidden",
				height : o.elWrapper.outerHeight()
			});
			o.elWrapper.before(o.reservedHolder);
			var borderLeftWidth = 0;
			var borderTopWidth = 0;
			var offset = {
				left : 0,
				top : 0
			};
			o.elWrapper.hide();
			o.elWrapper.appendTo("body");
			if (navigator.userAgent.match(/OS 3/i)) {
				offset.top = o.reservedHolder.offset().top - jQuery(window).scrollTop();
			} else {
				offset.top = o.reservedHolder.offset().top;
			}

			offset.left = o.reservedHolder.offset().left;
			o.elWrapper.css({
				position : "absolute",
				top : offset.top + borderTopWidth,
				left : offset.left + borderLeftWidth,
				margin : 0
			});

			o.elWrapper.show();
			if(isIE6) o.el.show();
			else o.el.slideDown(350);
			
			o.setDirection();
			if (!o.elUL.parent().hasClass("jspContainer")) {
				o.elUL.parent().jScrollPane({
					verticalGutter : o.options.verticalGutter,
					scrollbarOnLeft : o.options.scrollbarSide == "left" ? true : false
				});
			}

			o.eventFire = false;
			o.isShown = true;
			jQueryDroplistManager.activeName = o.select.attr("id");
			
		};
		this.hideList = function() {

			o.el.prepend(o.elUL);
			o.elUL.removeAttr("style");
			o.elUL.next().remove();
			o.elULWrap.html(o.elUL);
			o.el.html(o.elULWrap);
			
			o.select.after(o.elWrapper.removeAttr("style"));
			if(isIE6){
				o.el.hide();
				o.elWrapper.removeClass("top-level");
				o.el.removeClass("drop-list-ui-show");	
			} 
			else o.el.fadeOut(200, function () {
				o.elWrapper.removeClass("top-level");
				o.el.removeClass("drop-list-ui-show");
			});
			if (o.reservedHolder != null) {
				o.reservedHolder.remove();
			}
			o.isShown = false;
			jQueryDroplistManager.activeName = null;

		};
		this.afterCall = function() {
			if (options.afterAction != undefined) {
				options.afterAction();
			}
		};
		this.onAfterInit = function() {
			if (options.onAfterInit != undefined) {
				options.onAfterInit();
			}
		};
		
		this.setDirection = function() {
			var windowHeight = jQuery.browser.safari ? window.innerHeight : jQuery(window).height();
			windowHeight = windowHeight + jQuery(window).scrollTop();
			var elPostion_Top = o.elWrapper.offset().top;
			var elPostion_Bottom = o.elWrapper.offset().top + o.elWrapper.height();
			var elULHeight = o.elUL.outerHeight();
			var direction = "";
			if (o.config.maxDropListHeight > o.maxDropListHeight) {
				o.maxDropListHeight = o.config.maxDropListHeight;
			}
			if (elULHeight <= windowHeight - elPostion_Bottom) {
				direction = "down";
			} else if (windowHeight - elPostion_Bottom > o.maxDropListHeight) {
				direction = "down";
			} else if (elULHeight < elPostion_Top - jQuery(window).scrollTop()) {
				direction = "up";
			} else if (elPostion_Top - jQuery(window).scrollTop() > o.maxDropListHeight) {
				direction = "up";
			} else if (windowHeight - elPostion_Bottom >= elPostion_Top - jQuery(window).scrollTop()) {
				direction = "down";
				o.maxDropListHeight = windowHeight - elPostion_Bottom;
			} else {
				direction = "up";
				o.maxDropListHeight = elPostion_Top - jQuery(window).scrollTop();
			}
			var borderTop = (/[0-9]+/).test(o.el.css("borderTopWidth")) ? parseInt(o.el.css("borderTopWidth")) : 0;
			var borderBottom = (/[0-9]+/).test(o.el.css("borderBottomWidth")) ? parseInt(o.el.css("borderBottomWidth")) : 0;
			o.maxDropListHeight -= (borderTop + borderBottom);
			if (direction == "up") {
				o.el.css({
					bottom : o.elWrapper.height() + 0 + "px",
					top : "auto"
				});
				o.el.addClass("drop-list-ui-containerUp");
				o.el.removeClass("drop-list-ui-container");
			} else {
				o.el.css({
					top : "100%",
					bottom : "auto"
				});
				o.el.addClass("drop-list-ui-container");
				o.el.removeClass("drop-list-ui-containerUp");
			}
		};
		
		this.show = function() {
			o.elWrapper.show();
		};
		
		this.hide = function() {
			this.hideList();
			o.elWrapper.hide();
		};
		
		this.rerender = function () {
			o.elWrapper && o.elWrapper.length && o.elWrapper.remove();
			if ($('html').hasClass('mobile') || $('html').hasClass('tablet')) {
				renderOnMobile();
			} else {
				renderOnDesktop();
			}
		};
		
		this.addValues = function(values) {
			if (!values) return false;
			values = $.isArray(values)
					? values 
					: [values];
			var html = '';
			var i = 0, l = values.length;
			for (var i = 0; i < l; i++) {
			//clark add for address, make sure data and component use same label name.
				html += '<option value="' + values[i].code + '">' + values[i].name + '</option>';
			};
			o.select.append($(html));
			this.rerender();
		}

		this.updateValues = function(values) {
			if (!values) return false;
			values = $.isArray(values)
					? values 
					: [values];
			var html = '';
			var i = 0, l = values.length;
			for (var i = 0; i < l; i++) {
                /**
                 * @author Stuart Li
                 * @date 2013-9-12
                 * when updating values, keep the selected status.
                 * this is useful when the dropdown has pre-selected value when the DOM is initializing, especially in the edit scenario.
                 */
                if (undefined == values[i].selected) {
				    html += '<option value="' + values[i].code + '">' + values[i].name + '</option>';
                } else {
                    html += '<option selected value="' + values[i].code + '">' + values[i].name + '</option>';
                }
			};
			o.select.html(html);
			this.rerender();
		}
		setup();
	};
})(jQuery, window);

/**
 * jquery plugins: combobox
 *	@method jQuery('...').combobox
 *	@param par
 *	+ if par is object, it invoke init method
 *	+ if par is string, it invoke 'par' method, and pass following parameters as parameter in calling method.
 *	public API
 *	+ init
 *	+ selectedValue (get, set)
 *	+ changeHandler
 *
 */
(function ($) {
    var comboboxList = [];
    
    $.fn.combobox = function() {    	
			var id;
    	var value;
    	var controller;    	
    	if (jQueryDroplistManager != undefined) {
				jQueryDroplistManager.bindWindowEvents();
			}
		
			jQuery(this).each(function (param) {
				id = $(this).attr("id");
				if ($(this).get(0).nodeName.toLowerCase() != 'select') {
					return;
				} else if (!id || id == '') {
					throw new Error("This select element have no id. " + id);
					return;
				}
				controller = comboboxList[id];	    	
				if (typeof param == 'string') {					
					if (controller) {
						value = controller[param].apply(controller, Array.prototype.slice.call( arguments ,1 ));	        		
					}
				} 
				else if (typeof param === 'object' || !param) {
					if (!controller) {
						comboboxList[id] = new jQueryDropListController(jQuery(this), arguments[0]);
						controller = comboboxList[id];
					}
					else {
						//need to rerender combobox with new data;
						if (param && param.isNew){
							comboboxList[id] = new jQueryDropListController(jQuery(this), arguments[0]);
							controller = comboboxList[id];		
						}else{
							value = controller['rerender'].apply(controller, Array.prototype.slice.call( arguments ,1 ));							
						}
					}				
					if (!$(this).hasClass("has-select-ui")) {
						jQuery(this).addClass("has-select-ui");
					}
					jQueryDroplistManager.els[id] = controller;
					jQueryDroplistManager.els[id].onAfterInit();				
				} else {
					$.error( 'Method ' +  method + ' does not exist on jQuery.combobox' );
				}	        
			}, arguments);
			return value;
		};
})(jQuery);