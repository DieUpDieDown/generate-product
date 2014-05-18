// Show hide label
jQuery(".DefaultLabel").each(function() {
	if (jQuery(this).val() == "") {
		jQuery(this).siblings(".default-label-content").show();
	} else {
		jQuery(this).siblings(".default-label-content").hide();
	}
	jQuery(this).focus(function() {
		jQuery(this).siblings(".default-label-content").hide();
	}).blur(function() {
		if (jQuery(this).val() == "") {
			jQuery(this).siblings(".default-label-content").show();
		}
	});
});

/* FILE BROWSE OBJECT */
/*
 * FileBrowseUI will be created to replace the original file browse FileBrowseUI
 * will be created like this : <div> : Wrapper for all elements <input
 * type="text" /> : Fake Text Input to show the browse path ID and Name of the
 * origin browse will be copy to this textbox and remove them on the original
 * browse <div><input type="file" /></div> : <div> = wrapper for original file
 * browse </div> Options : browseButtonPos : set the Browse button position
 * left/right then top/bottom(affected when breakline==TRUE) default: "right"
 * breakline : if set to TRUE, textbox and Browse button are on 2 line
 * (top/bottom available) browseButtonClassName : set the classname for Browse
 * button, default = DefaultBrowseBtn browseTextBoxClassName : set the classname
 * for the TextBox, default = DefaultBrowseTextBox
 */
FileBrowseUIGroup = function() {
	this.FileBrowseUIGroup = getElementsByClassName(arguments[0]);
	for ( var i = 0; i < this.FileBrowseUIGroup.length; i++) {
		new FileBrowseUI(this.FileBrowseUIGroup[i], arguments[1]);
	}
};
FileBrowseUI = function() {
	this.options = {
		browseButtonPos : arguments[1] && arguments[1].browseButtonPos ? arguments[1].browseButtonPos
				: "right",
		browseButtonClassName : arguments[1]
				&& arguments[1].browseButtonClassName ? arguments[1].browseButtonClassName
				: "default-browse-btn",
		browseTextBoxClassName : arguments[1]
				&& arguments[1].browseTextBoxClassName ? arguments[1].browseTextBoxClassName
				: "default-browse-textbox",
		breakline : arguments[1] && arguments[1].breakline ? arguments[1].breakline
				: false,
		browseButtonText : arguments[1].browseButtonText ? arguments[1].browseButtonText
				: "Browse",
		browseTextBoxValue : arguments[1].browseTextBoxValue ? arguments[1].browseTextBoxValue
				: ""

	};
	// Left/Right + Top/Bottom
	var lr = this.options.browseButtonPos.split(" ")[0];
	var tb = this.options.browseButtonPos.split(" ")[1];
	// Original file browse
	this.originalFileBrowse = arguments[0];
	// Create file browse wrapper
	var inputWrapper = document.createElement("div");
	this.originalFileBrowse.parentNode.insertBefore(inputWrapper,
			this.originalFileBrowse);
	inputWrapper.appendChild(this.originalFileBrowse);

	// Create fake input text for fake Browse...
	var fakeTextBoxWrapper = document.createElement("div");
	this.fakeTextBoxInput = document.createElement("input");
	this.fakeTextBoxInput.id = "fake_" + this.originalFileBrowse.id;
	// this.originalFileBrowse.id = "";
	this.fakeTextBoxInput.name = "fake_" + this.originalFileBrowse.name;
	// this.originalFileBrowse.name = "";
	inputWrapper.parentNode.insertBefore(fakeTextBoxWrapper, inputWrapper);
	fakeTextBoxWrapper.appendChild(this.fakeTextBoxInput);

	// Create BrowseUI Wrapper for al element
	var browseUIWrapper = document.createElement("div");
	inputWrapper.parentNode.insertBefore(browseUIWrapper, inputWrapper);
	// Append to Browser
	if (typeof (tb) == "undefined" || tb == "bottom") {
		browseUIWrapper.appendChild(fakeTextBoxWrapper);
		browseUIWrapper.appendChild(inputWrapper);
	} else {
		browseUIWrapper.appendChild(inputWrapper);
		browseUIWrapper.appendChild(fakeTextBoxWrapper);
	}
	browseUIWrapper.className = this.originalFileBrowse.className;

	// Prepare styling...
	browseUIWrapper.style.overflow = "hidden";
	// Browse button
	inputWrapper.style.position = "relative";
	inputWrapper.style.overflow = "hidden";
	this.originalFileBrowse.style.fontSize = "10em";
	this.originalFileBrowse.style.position = "absolute";
	this.originalFileBrowse.style.Zindex = "1";
	this.originalFileBrowse.style.top = "0px";
	this.originalFileBrowse.style.right = "0px";
	this.originalFileBrowse.className = "";
	inputWrapper.className += this.options.browseButtonClassName;

	// Start Modify
	var textBrowse = document.createElement("div");
	inputWrapper.appendChild(textBrowse);
	textBrowse.innerHTML = this.options.browseButtonText;
	// End Modify
	// Event: onmousedown state
	inputWrapper.onmousedown = function() {
		inputWrapper.className += " file-browse-mousedown";
	};
	inputWrapper.onmouseout = function() {
		inputWrapper.className = inputWrapper.className.replace(
				/file-browse-mousedown/, "");
	};

	var ie = document.all;
	if (ie) {
		inputWrapper.style.styleFloat = lr;
		this.originalFileBrowse.style.filter = "alpha(opacity=0)";
	} else {
		inputWrapper.style.cssFloat = lr;
		this.originalFileBrowse.style.opacity = 0;
		this.originalFileBrowse.style.MozOpacity = 0;
	}
	// Browse TextBox: this.fakeTextBoxInput
	fakeTextBoxWrapper.className += "textbox-wrapper";
	this.fakeTextBoxInput.className += this.options.browseTextBoxClassName;
	this.fakeTextBoxInput.style.margin = "0px";
	this.fakeTextBoxInput.style.outline = "none";
	this.fakeTextBoxInput.value = this.options.browseTextBoxValue;
	if (ie) {
		if (lr == "left") {
			fakeTextBoxWrapper.style.styleFloat = "right";
		} else {
			fakeTextBoxWrapper.style.styleFloat = "left";
		}
		this.fakeTextBoxInput.style.marginTop = "-1px"; /* fix for IE */
	} else {
		if (lr == "left") {
			fakeTextBoxWrapper.style.cssFloat = "right";
		} else {
			fakeTextBoxWrapper.style.cssFloat = "left";
		}
		fakeTextBoxWrapper.style.width = this.fakeTextBoxInput.offsetWidth
				+ "px"; /* fix for MAC Safari not effected others */
	}
	// browseUIWrapper dimension
	browseUIWrapper.style.width = this.options.breakline ? this.fakeTextBoxInput.offsetWidth
			+ "px"
			: inputWrapper.offsetWidth + this.fakeTextBoxInput.offsetWidth + 6
					+ "px";
	// Event
	var self = this;
	this.originalFileBrowse.onchange = function() {
		self.updatedFileBrowseUI();
	};

	/* method */
	// Update FileBrowseUI
	FileBrowseUI.prototype.updatedFileBrowseUI = function() {
		this.fakeTextBoxInput.value = this.originalFileBrowse.value;
	};
};

/* Misc functions */
function getElementsByClassName(className) {
	var children = document.getElementsByTagName('*') || document.all;
	var elements = new Array();

	for ( var i = 0; i < children.length; i++) {
		var child = children[i];
		var classNames = child.className.split(' ');
		for ( var j = 0; j < classNames.length; j++) {
			if (classNames[j] == className) {
				elements.push(child);
				break;
			}
		}
	}
	return elements;
}

// Cancel Bubling
function stopEventBubling(e) {
	if (!e)
		e = window.event;
	if (e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}

// Change CSS style to DOM style
function DOMStyle(styleProp) {
	parseString = styleProp.split("-");
	styleProp = "";
	for ( var i = 1; i < parseString.length; i++) {
		parseString[i] = parseString[i].replace(parseString[i].charAt(0),
				parseString[i].charAt(0).toUpperCase());
	}
	for ( var i = 0; i < parseString.length; i++) {
		styleProp += parseString[i];
	}
	return styleProp;
}

function getStyle(element, styleProp) {
	if (element.currentStyle) {
		styleProp = DOMStyle(styleProp);
		var value = element.currentStyle[styleProp];
	} else {
		if (window.getComputedStyle) {
			var value = document.defaultView.getComputedStyle(element, null)
					.getPropertyValue(styleProp);
		}
	}
	return value;
}

function findAbsPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
	return {
		left : curleft,
		top : curtop
	};
}

var JQueryCheckboxController = function(jEl, opts) {
	var options = {
		onChangedCallBack : undefined,
		activeClass : 'active'
	};
	var self = this;
	var onCheckboxSelectedChange = function(evt) {
		var checkbox = self.checkbox.get(0);
		toggleLabelClass(checkbox);

		if (typeof options.onChangedCallBack != 'undefined') {
			options.onChangedCallBack(self.checkbox.get(0).checked,
					self.checkbox.val());
		}
	};
	var init = function() {
		$.extend(options, opts);

		self.checkbox = jEl;
		self.label = jEl.next();

		if (self.checkbox.prop("checked") == true) {
			self.label.addClass(options.activeClass);
		} else {
			self.label.removeClass(options.activeClass);
		}
		self.checkbox.unbind("change").bind("change", onCheckboxSelectedChange);
	};

	var toggleLabelClass = function(checkbox) {
		if (checkbox.checked == true) {
			self.label.addClass(options.activeClass);
		} else {
			self.label.removeClass(options.activeClass);
		}
	};

	this.getSelected = function() {
		return self.checkbox.get(0).checked;
	};

	this.setSelected = function(value) {
		self.checkbox.get(0).checked = value;
		toggleLabelClass(self.checkbox.get(0));
	};
	init();
};
/*
jQuery.fn.extend({
	checkbox : function(opts) {

		if (typeof opts != 'undefined') {
			this.each(function() {

				var checkBoxUI = new JQueryCheckboxController($(this), opts);
				$(this).get(0).checkbox = checkBoxUI;

			});
		} else {
			return $(this).get(0).checkbox;
		}

	}
});
*/
/**
 * jquery plugins checkbox
 */
(function ($) {
	var checkboxes = [];
	var options = {
		changeHandler : function(e){},
		activeClass : 'active',
		bindreset: true
	};
	
	var invalidate = function () {
		var checkbox = $(this);
		var options = $(this).data("options");
		var label = $(checkbox).parent().find("label[for=" + $(checkbox).attr("name") +"]");
		if (checkbox.prop("checked")) {
			label.addClass(options.activeClass);
		} else {
			label.removeClass(options.activeClass);
		}
	};
	
	var onCheckboxSelectedChange = function(evt) {
		var checkbox = $(this);
		var options = $(this).data("options");
		invalidate.call(checkbox);
		evt.data = checkbox.val();
		if (options.changeHandler != undefined) {
			options.changeHandler(evt);
		}
	};
	
	var bindFormEvents = function () {
		
	    var parent = jQuery(this).parent();
	    var p = null;
	    var toContinue = false;
	    do {        
	        p = jQuery(parent).get(0);
	        if (p && p.nodeName && p.nodeName.toLowerCase() == 'form') {
	            break;
	        }
	        toContinue = (parent.length > 0);
	        parent = parent.parent();	        
	    } while (toContinue);
	    
	    var resetHandler = function () {
	    	setTimeout(resetValue, 100);
	    }
	    
	    jQuery(p).unbind('reset', resetHandler).bind('reset', resetHandler);
	};

	var resetValue = function() {
		var el;
		for (var i in checkboxes) {
			el = checkboxes[i];			
			invalidate.call(el);
		}
	    
	};
	
	var checkbox = {
		init: function (opts) {
			return this.each(function (e) {
				var data = $(this).data("options");
				if (!data) {
					data = {};
					$.extend(data, options);
					$(this).data("options", data);					
				}			
				$.extend(data, opts);
				data.id = (new Date()).getTime();
				$(this).unbind("change", onCheckboxSelectedChange).bind("change", onCheckboxSelectedChange);
				invalidate.call($(this));
				if(options.bindreset) {					
					checkboxes[data.id] = this;
					bindFormEvents.call(this);
				}
            });
		},
		checked: function() {
			return $(this).prop("checked");
		},
		selectedValue: function (param) {
			if (!param) {
				return $(this).prop("checked");
			} else {
				$(this).prop("checked", value);
				invalidate.call($(this));
			}
			return ;
		},
		
		toggleCheck: function(value) {
			var checked = $(this).prop("checked");
			$(this).prop("checked", !checked);
			invalidate.call($(this));
		},
		changeHandler: function (func) {
			var options = $(this).data("options");
			options.changeHandler = func;
		},
		destroy: function() {
			//dereference to the object 			
			delete checkboxes[this];
			//unbind and events
			$(this).unbind("change", onCheckboxSelectedChange);
		}
	};
	
	$.fn.checkbox = function(param) {
        if (typeof param == 'string') {
            return checkbox[param].apply(this, Array.prototype.slice.call( arguments, 1 ));
        } else if (typeof param === 'object' || !param) {
            return checkbox.init.apply(this, arguments);
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.checkbox' );
        }
        
    }
})(jQuery);
/**
 * jquery plugins: radio group
 */
(function ($) {
    //declare private methods,
	var radioGroups = [];
	
	var options = {
		changeHandler : function(value){},
		activeClass : 'active',
		bindreset: true
	};
	
	
	var invalidate = function () {
		var options;
		var groupName;
		var label = $(this).parent().find("label[for='" + $(this).attr("id") + "']");
		
		groupName = $(this).attr("name");
		options = radioGroups[groupName].options;
		$(this).parent().find('input:radio[name="' + groupName + '"]').each(function(){
			if ($(this).prop("checked") == true) {
				$(this).parent().find("label[for='" + $(this).attr("id") + "']").addClass(options.activeClass);
			} else {
				$(this).parent().find("label[for='" + $(this).attr("id") + "']").removeClass(options.activeClass);
			}
			
		})
		
	};
	
	var bindFormEvents = function () {
	    var parent = jQuery(this).parent();
	    var p = null;
	    var toContinue = false;
	    do {        
	        p = jQuery(parent).get(0);
	        if (p && p.nodeName && p.nodeName.toLowerCase() == 'form') {
	            break;
	        }
	        toContinue = (parent.length > 0);
	        parent = parent.parent();	        
	    } while (toContinue);
	    
	    var resetHandler = function () {
	    	setTimeout(resetValue, 100);
	    }
	    
	    jQuery(p).unbind('reset', resetHandler).bind('reset', resetHandler);
	};

	var resetValue = function() {
		for (var i in radioGroups) {
			var radioItem = radioGroups[i].parent.find('input:radio[name="' + i + '"]').eq(0);
			invalidate.call(radioItem);
		}
	    
	};
	
    var radioGroup = {
        init: function(opts) {
        	var radio = $(this),
        		label;
        		
        		var groupName = radio.attr("name");
	        	if (groupName && groupName != "") {
	        		if (!radioGroups[groupName]) {
	            		radioGroups[groupName] = {};
	            		radioGroups[groupName].options = {};
	            	}
	            	$.extend(radioGroups[groupName].options, options);
	            	$.extend(radioGroups[groupName].options, opts);
	            	radio.data(groupName, radioGroups[groupName]);
	            	radioGroups[groupName].parent = radio.parent();
	        	}
	        	label = radio.parent().find("label[for='" + radio.attr("id") + "']");            	
				radio.parent().find('input:radio[name="' + groupName + '"]').unbind("change").bind("change", function(evt) {
					var options = radioGroups[$(this).attr("name")].options;
					invalidate.call(this);
					evt.data = $(this).val();
					options.changeHandler(evt);					
					evt.stopPropagation();
				});
				
				invalidate.call(this);
				
				if (radioGroups[groupName].options.bindreset) {
					bindFormEvents.call(this);					
				}
				
            return this.each(function (e) {
            });
        },
        selectedValue: function(param) {
        	var gn = $(this).attr('name');
        	var selectedThis;
            var value;
            
            if (!param) {
            	selectedThis = $(this).parent().find('input[name=' + gn + ']:checked');            	
            	value = selectedThis.val();
            	return value;
            } else {
            	selectedThis = $(this).parent().find('input[value=' + param + ']:radio');
            	$(this).parent().find('input[name=' + gn + ']:radio').prop("checked", false);
	            selectedThis.prop("checked",true);
	            invalidate.call(selectedThis);
            }
            
            return ;
        },
        changeHandler: function (func) {
        	var options = $(this).data("options");
			options.changeHandler = func;
        }
    };
    
    $.fn.radioGroup = function(param) {
        if (typeof param == 'string') {
            return radioGroup[param].apply(this, Array.prototype.slice.call( arguments, 1 ));
        } else if (typeof param === 'object' || !param) {
            return radioGroup.init.apply(this, arguments);
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.radioGroup' );
        }
        
    }
})(jQuery);



