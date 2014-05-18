/*
@defaultTab: set default item will be active
@tabContainer: a container contains list of tab-detailed children

*/
;
(function($){

  var 
    defaults = {
      defaultTab: null,
      tabList: null,
      selectedTab: '',
      tabHeader: 'ul.tabs a',//must be a jquery selector
      tabContainer: '.tab-container',//must be a jquery selector
      sectionName:'',
      isPreventDefault: false,
      changeHandler: function() {}
    },    
    instances = [],
    myWindow = $(window),
    myDocument = $(document),
    htmlBody = $('html,body'),
    isIE6 = jQuery('html').hasClass('ie6');

  var publicProps = {
      init: function(options) {
        var el = $(this);
        var p = publicProps;
        if (_.indexOf(instances, this) < 0) {
          instances.push(this);
        }
        var settings = $.extend({}, defaults, options);

        settings.sectionName = el.attr('data-slide');
        
        if (!settings.tabList) {
          settings.tabList = el.find(settings.tabContainer + " > div");
        }
        
        el.find(settings.tabHeader).off('click').click(function(e){
	  settings.isPreventDefault && e && e.preventDefault();
          p.setSelected.call(el, getTabSelector($(this).attr('class')), true);
        });

        p.setSettings.call(this, settings);

        p.setSelected.call(this, settings.defaultTab, true);
        
      },
      detach: function() {
        var pos = _.indexOf(instances,this);
        $.removeData(this, "settings");
        var el;
        if (pos>=0) {
          el = instances.splice(pos,1);
          el.find(settings.tabHeader).unbind();
        }

      },
      getSettings: function() {
        var val = $.data($(this)[0], 'settings');
        return val ? val : defaults;
      },
      setSettings: function(settings) {
        var val = $.data($(this)[0], 'settings');     
        val = val ? val : {};
        val = $.extend(val, settings);
        
        $.data($(this)[0],'settings', val);
        return true;
      },
      /*
        @value: must be a class name beginning with "." .
      */
      setSelected: function(value, trigger) {
        var p = publicProps;
        var el = $(this);
        var item;
        var settings = p.getSettings.call(this);
        value = getTabSelector(value);
        if (settings.selectedTab == value) {
          return;
        }
        if (typeof value == 'string') {          
          item = el.find(settings.tabHeader).filter(value);
        } else {
          item = value;
        }
        el.find(settings.tabHeader).removeClass('active');
        item.addClass('active');
        
        settings.tabList.hide();
        settings.tabList.filter(value).show();
        settings.selectedTab = value;
        el.find(settings.tabHeader).filter(value).addClass('active');

        p.setSettings.call(this, settings);
        if (trigger && settings.changeHandler) {
          settings.changeHandler(settings.sectionName,value);
        }
      },
      getSelected: function() {
        return publicProps.getSettings.call(this).selectedTab;
      }
    };

    var getTabSelector = function(value) {
      if (!value) return;
      var reg = /(\.|active|\s)/ig;
      value = value.replace(reg, "");
      
      value = '.' + value;

      return value;
    }
  $.fn.multiTab = function(param) {
	  try{
		  var args;
		  if (typeof param == 'string') {
			  args = Array.prototype.slice.call( arguments, 1 );
			  return publicProps[param].apply(this, args);
		  } else if (typeof param === 'object' || !param) {
			  return publicProps['init'].apply(this, arguments);
		  } else {
			  $.error( 'Method ' +  method + ' does not exist on jQuery.multiTab' );
		  }
	  } catch(e) {
		  
	  }
  };
})(jQuery);
// });

