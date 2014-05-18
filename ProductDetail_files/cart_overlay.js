var MSCN = window.MSCN || {};

jQuery.cartOverlayController = jQuery.cartOverlayController || (function($) {
    var defaults = {
        template         : '',
        easing           : 'easeInOutCubic',
        speedAnimationIn : 1200,
        speedAnimationOut: 800,
        cartShowTime     : 5000,
        cartStatus       : 'hide',
        cartItemTemplate : null,
        urlToGetCartData : '../data/user-data/cart-item-list.json.txt',
        autoClose        : true,
        addItemTriggers  : [{
            context: '.banner-product',
            trigger: '.add-to-cart',
            provideItemData  : function (e) {
               
            }
        }],
            
        onShowCart       : function() {

            // console.log('cart height: ' + $cartOverlay.css('padding-bottom'));
        },
        onHideCart       : function() {
            //console.log("onHideCart")
        },
        onAddToCart      : function() {
            //console.log("onAddtoCart")

        }

    };

    var $cartOverlay          = $('#cart-overlay'),
        $cartContainer        = $cartOverlay.find('.added-to-cart'),
        $cartTotalItemsOnMenu = $('.menu .my-cart .open-cart'),
        $closeCartOverlay     = $cartOverlay.find('.button.continue-shopping'),
        $summary              = $cartOverlay.find('.wrap-content-summary');     
        autoCloseTimer        = null,
        opts                  = {},
        cartItems             = [],
        isIE6                 = $('html').hasClass('ie6'),
        isIE                  = $('html').hasClass('ie');

    function init(config) { //some init action
        opts = config ? $.extend({}, defaults, config) : defaults;
        //getCartData(renderCartSummary);       
        bindEvents();
    }

    function showCart() {
        
        scrollToTop();
        
        if(autoCloseTimer != null) clearTimeout(autoCloseTimer);
        
        if(isIE6) {
            $cartOverlay.show();
            onShowCartInternal();           
            return;
        }

        $cartOverlay.slideDown(opts.speedAnimationIn, opts.easing, function() {
            onShowCartInternal();
        });


        function onShowCartInternal() {
            $.waypoints('refresh');
            opts.cartStatus = 'show';
            opts.onShowCart();

            if (opts.autoClose) {
                if (!cartIsHover()) {
                    autoCloseTimer = setTimeout(hideCart, opts.cartShowTime);
                }
            }
            setHeightForTwoColumns();   
        }
    }

    function setHeightForTwoColumns() {
        var $addedTiem = $cartOverlay.find('.added-item'),
            $summary   = $cartOverlay.find('.wrap-content-summary');

        var padTop = parseInt($addedTiem.css('padding-top'), 10);
        var padBot = parseInt($addedTiem.css('padding-bottom'), 10);

        $addedTiem.removeAttr('style');
        $summary.removeAttr('style');

        var hLeft  = $addedTiem.outerHeight(),
            hRight = $summary.height();

        if (hLeft > hRight) {
            $summary.css({'height':hLeft});
        }
        else if (hLeft <= hRight) {
            $addedTiem.css({'height':hRight - (padTop + padBot)});
        }
    }
    function cartIsHover() {
        if(!isIE) {
            return $cartOverlay.is(':hover');
        } else {
            return $cartOverlay.hasClass('hover');
        }
    }
    function scrollToTop(callback) {
        $('html, body').animate({scrollTop: '0px'}, 500, opts.easing , callback);   
    }
    function hideCart() {       
        // return;
        if(autoCloseTimer != null) {
            clearTimeout(autoCloseTimer);
        }
        
        if(isIE6) {
            $cartOverlay.hide();
            opts.onHideCart();
            onHideCartInternal();
            return;
        }

        $cartOverlay.slideUp(opts.speedAnimationOut, opts.easing, function() {
            opts.onHideCart();
            onHideCartInternal();
        });
        
        function onHideCartInternal() {
            $cartOverlay.removeAttr('style');
            $.waypoints('refresh');
            opts.cartStatus = 'hide';
            if($.floatingController.getFloatingBarStatus() == 'show'){
                $('.scrolling-menu-item.active').trigger('click');
            }
        }

        return false;
    }

    function bindEvents() {        
        $cartOverlay
            .off('addItem').on('addItem', function(e, newItem) {                
                renderItemUI(newItem);
                renderCartSummary(newItem);
                $($.cartOverlayController).trigger('add', [cartItems]);
                // opts.onAddToCart();
            })
            .off('mouseover').on('mouseover', function() {
                clearTimeout(autoCloseTimer);
                if(isIE) $cartOverlay.addClass('hover');
            })
            .off('mouseout').on('mouseout', function() {
                clearTimeout(autoCloseTimer);
                autoCloseTimer = setTimeout(hideCart, opts.cartShowTime);
                if(isIE) $cartOverlay.removeClass('hover');
            })
            .off('click').on('click', function(e) {
                e.stopPropagation();

            });

        _.each(opts.addItemTriggers, function(addItemTrigger, i) {
            $(addItemTrigger.context)
                .off('click')
                .on('click', addItemTrigger.trigger, function (e) {
                    e.stopPropagation();
                    addItemTrigger.provideItemData(e);

                });
        })

        $cartOverlay.undelegate(".continue-shopping", "click").delegate(".continue-shopping", "click", hideCart);

        $(document).click(function() {
            if(opts.cartStatus == 'show')
                hideCart();
        });
    }

    function renderItemUI(item) {
        var template = opts.template || '';
        
        var temp = _.template(template, {cart: item});
        $cartOverlay.html(temp);
        showCart(); 
    }   

    function renderCartSummary(item) {        
        $cartTotalItemsOnMenu.html(item.dropDownCartNavText);
    }

    function getCartData(successCallback) {
        $.ajax({
            url: opts.urlToGetCartData,
            data: {},
            dataType: 'json',
            success: function(data) {
                cartItems = data.products;
                successCallback();
            }
        });
    }
    return {
        initialize   : function(config) {
            init(config);
        },
        show         : function() {
            showCart();
        },
        hide         : function() {
            hideCart();
        },
        hideImediately: function() {
            $cartOverlay.hide();
        },
        getCartStatus: function() {
            return opts.cartStatus;
        },
        addToCart    : function(objValue) {
            if (!objValue) return;            
            $cartOverlay.trigger('addItem', objValue);
        },
        getCartItems: function() {
            return cartItems;
        }
    }
 
})(jQuery);



/*
Ex:
$.cartOverlayController.initialize({
    addItemTrigger: { //selector that determind which object add to cart action 
        context: '.banner-product', //context
        trigger: '.add-this-to-cart' //the trigger
    },
    provideItemData: function() {
        //some code to get data to add to cart
        $.cartOverlayController.addToCart(data);
    }
});

*/
;(function($) {
    var KGroupCheckbox = function (element, options) {
        this.$element = $(element);
        this.options = options;
        this.init();
    };

    KGroupCheckbox.prototype = {
        constructor: KGroupCheckbox,
        init: function(){
            var _this = this;

            _this.update();

            _this.$element.delegate('.checkbox-product label', 'click', function(e){
                e.preventDefault();
                
                _this.change.call(_this, $(this));
            });
        },
        update: function () {
            this.checkboxes = this.$element.find('input[type=checkbox]');
            this.labels = this.$element.find('.checkbox-product label');
        },
        unchecked: function ($handle) {
            var $inp = $handle.parent().find("input[type=checkbox]");
            $handle.removeClass("active");

            $inp.prop("checked", false);
            this.options.onUncheck && this.options.onUncheck.call(this, $handle, $inp);

        },
        uncheckedAll: function () {
            this.checkboxes.prop("checked", false);
            this.labels.removeClass("active");
        },  
        checked: function ($handle) {   
            var $inp = $handle.parent().find("input[type=checkbox]");
            $handle.addClass("active");
            $inp.prop("checked", true);

            this.options.onCheck && this.options.onCheck.call(this, $handle, $inp);
        },
        change: function ($handle) {

            if ($handle.hasClass("active")){
                this.unchecked($handle);
            }
            else{
                if (!this.options.isMulti){
                    this.uncheckedAll();    
                }               
                this.checked($handle);  
            }           

            this.options.onChange && this.options.onChange.call(this, $handle);
        },      
        destroy: function () {
            this.$element.removeData("kgCheckbox");
        }
    };

    $.fn.kgCheckbox = function (option) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('kgCheckbox')
                , options = $.extend({}, $.fn.kgCheckbox.defaults, $this.data(), typeof option == 'object' && option);
            if (!data) $this.data('kgCheckbox', (data = new KGroupCheckbox(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.kgCheckbox.defaults = {
        isMulti: false,
        onUncheck: null,
        onCheck: null,
        onChange: null
    };

    $.fn.kgCheckbox.Constructor = KGroupCheckbox;
})(window.jQuery);