(function(jQuery){
	jQuery.fn.comboboxMobile = function(options){
		var defaults = {
			classWrapper : ""
		}, o = jQuery.extend(defaults, options);
		
		this.each(function(){
			var obj = jQuery(this),
				objWrapper = jQuery('<div class="combobox-wrapper ' + o.classWrapper + '"></div>'),
				objTitle = jQuery('<p class="combobox-title"></p>'),
				defaultVal = jQuery('options', obj).eq(0).val(); 
				
			var title = "", hasValue = false;
            jQuery('options', obj).each(function() {
                var option = jQuery(this);
                if (option.attr("selected")) {
                    title = option.text();
                    hasValue = true;
                }
            });
            if (!hasValue) {
                title = obj.find("option:first-child").text();
            }
			var initialize = function(){
				obj.before(objWrapper).appendTo(objWrapper).before(objTitle);
				objTitle.text(title);
				
				obj.bind("change", function(){
					var selectedVal = jQuery(this).val();
					title = jQuery(this).find("option:selected").text();
					objTitle.text(title);
				});
			};
			
			initialize();
		});
	};
})(jQuery);
