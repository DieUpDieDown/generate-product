(function($) {

    var $el = null,
        $docEl = $(document),
        IS_IE6 = $('html').hasClass('ie6'),
        IS_LT_IE9 = $('html').hasClass('lt-ie9'),
        IS_SAFARI5 = $('html').hasClass('safari5');

    baseUrl = location.href.substring(0, location.href.lastIndexOf('/')),
    IS_EN_LANGUAGE = $('.outer').hasClass('en');

    function BannerAccessoriesController($el) {
        var _controller = this,
            $mainImg = $el.find('.accessory-img'),
            $thumbImgs = $el.find('.accessory-img-list'),
            $thumbImgItems   = $thumbImgs.find('a'),
            $activeImg = null,
            $activeThumb = null;

        _controller.SPEED = 150;

        _controller.init = function() {
            bindEvent();
        }
        var bindEvent = function() {
            $thumbImgs
                .on('click', 'a', changeThumbHandler);
        };
        var changeThumbHandler = function(e) {

            var _this = $(this);
            var idToShow = _this.data('img');
            if (!IS_LT_IE9) {
                $mainImg.fadeOut(_controller.SPEED, function() {
                    changeClass(_this, idToShow);
                    $mainImg.fadeIn(_controller.SPEED);
                })
            } else {
                changeClass(_this, idToShow);
            }
            e.preventDefault();
        };
        var changeClass = function(_this, idToShow) {
            $mainImg.find('.active').removeClass('active').hide();
            $thumbImgs.find('.active').removeClass('active');

            $('[data-id=' + idToShow + ']').addClass('active').show();
            $thumbImgItems.addClass('inactive');
            _this.addClass('active').removeClass('inactive')
        };
    } //end BannerAccessoriesController

    var bindEventForComputersBanner = function($el) {
        $el.find('.product-image-item img').click(function() {
            var data = $(this).data('slide'),
                $mainImg = $el.find('.main-img'),
                $img = $('<img class="fixpng" src="' + data + '" alt="">');
            if (data) {
                if (IS_LT_IE9) $mainImg.html($img);
                else {
                    $mainImg.fadeOut(_controller.SPEED, function() {
                        $mainImg.html($img);
                        $mainImg.fadeIn(_controller.SPEED);
                    })
                }

            }
        });
    }

    function PriceColumnController($topEl) {
        //$topEl: '.price-col'
        var $priceColsWrap = $topEl.find('.link-block'),
            _controller = this,
            _activing = null,
            _formOption = $topEl.find('.form-option'),
            _selectedIndex = 0,
            _productCodePost = 0;

        _controller.init = function() {
            _productCodePost = $('#add_to_cart_form').find('input[name=productCodePost]').val();

            detectAddToCartForm();
            _selectedIndex = 0;
            _activing = $topEl.find('.block.active');
            
            initUI();
            
            detectParentActive();
          
            bindEvent();
        }; //End: init
        var initUI = function() {

            var activeOption = _activing.parents('.link-block').data('option');
            //turnActiveOption(activeOption);
        }; //End: InitUI


        var detectParentActive = function() {
            //_productCodePost;
            //alert(_productCodePost);
            var $bundle = $topEl.find('.bundle-option');
                if($bundle.length == 0) return;
            var $activeBundle = $('input[product-info=' + _productCodePost + ']').parents('.bundle-item');
            var $parent = $('#' + $activeBundle.data('parent'));
            var $activeSubBundle = $activeBundle.find('.active');
            var currentSelectionIndex = $activeBundle.find('.sub-item-link').index($activeSubBundle);
            
            $topEl.find('.block').removeClass('active');
            $parent.addClass('active');
            $activeBundle.addClass('active').siblings().removeClass('active');
            changeLinkForOtherParents(currentSelectionIndex);
        }
        var changeLinkForOtherParents = function(currentSelectionIndex) {
            var $bundleItems = $topEl.find('.bundle-item');     

            $bundleItems.each(function(i, obj) {
                var $this = $(this);
                var parentData = $this.attr('id').replace('bundle-', '');
                var $parent = $topEl.find('.link-block[data-option=' + parentData + ']');
                var tempIndex = currentSelectionIndex;
                var $subOptions = $this.find('a');

                if(currentSelectionIndex + 1 >= $subOptions.length) {
                    tempIndex = $subOptions.length - 1;
                }
                
                var urlCurrentChildByIndex = $subOptions.eq(tempIndex).attr('href');

                $parent.attr('href', urlCurrentChildByIndex);

            });
        }
        var detectAddToCartForm = function() {
            
            var $productInfo = $('input[product-info=' + _productCodePost + ']');
            displayAddToCartForm($productInfo);

        }
        var bindEvent = function() {
            $priceColsWrap.on('click', function(e) {

               // e.preventDefault();
                e.stopPropagation();

                if(IS_SAFARI5) {
                  $(this)
                    .find('.block')
                    .removeClass('de-active')
                    .end()
                  .siblings('.link-block')
                    .find('.block')
                      .addClass('de-active');
                }

                var activeOption = $(this).data('option');
                _activing.removeClass('active');
                _activing = $(this).find('.block').addClass('active');
                //turnActiveOption(activeOption);
                
                // Move code to
                
                // Load Ajax
            });

            if (IS_IE6) {
                $priceColsWrap
                    .find('.block')
                    .hover(function() {
                        $(this).addClass('hover');
                    }, function() {
                        $(this).removeClass('hover');
                    })
            };
            /*
            var radioGroupSettings = {
                changeHandler: function(e) {
                    var $this = $(e.target);

                    var val = $this.radioGroupCustom('selectedValue');
                    
                  
                    
                    var $parent = $this.parents('.bundle-item');
                    var $rad = $('input:radio[value="' + val + '"]');
                    _selectedIndex = $parent.find('.radio-ui').index($rad);

                    //pre order
                    var id = "#" + $this.attr("id") + "-stock";

                    if ($(id) && $(id).length > 0) {
                        $(id).attr('checked', 'true');
                        var productStockLevel = $(id).val();

                        // Save stock level object.
                        productStockLevelObject = $(id);
                       
                        // Check for show comming soon button
                        displayAddToCartForm(productStockLevelObject);
                    }
                    $('[name=productCodePost]').length && $('[name=productCodePost]').val($this.radioGroupCustom('selectedValue'));
                }
            }; //End: radioGroupSettings

            $.each($('.bundle-item'), function(index) {
                var $firstRadio = $(this).find('.radio-ui').eq(1);
                //$firstRadio.radioGroupCustom(radioGroupSettings);
            }); */
        }; //End: bindEvent
        
        var serializeObject = function($form) {

            var arrKeyValue = $form.serializeArray();
            var _re = {};

            for (var i = 0; i < arrKeyValue.length; i++) {
                var key = arrKeyValue[i].name;
                var value = arrKeyValue[i].value;

                _re[key] = value;
            }

            return _re;
        }; //End: serializeObject
        /*
        var turnActiveOption = function(id) {

            var $this = $('#' + id);
            var gName = $this.attr('name');
            var $bundle = $topEl.find('.bundle-option');

            if ($this.length > 0) {
                $('input[name="' + gName + '"]').removeAttr('checked');
                $this.attr('checked', 'true');
            }

            if ($bundle.length > 0) {

                $bundle.find('.bundle-item input:radio').attr('disabled', 'disabled');
                $bundle.find('.bundle-item.active').removeClass('active');
                var $curOption = $('#bundle-' + id),
                    $form = $bundle.parents('.form-option');
                $curOption.addClass('active');
                $curOption.find('input:radio').removeAttr('disabled');
                $curOption.find('label').removeClass('active');

                optionQuantity = $('#bundle-' + id).find('.radio-ui').length;

                if (_selectedIndex > optionQuantity - 1) {
                    _selectedIndex = _selectedIndex - 1;
                }
                //find option by index
                var $selectedOptionByIndex = $curOption.find('.radio-ui').eq(_selectedIndex);

                //set checked
                $selectedOptionByIndex.prop('checked', true);

                var stockLeveRadioButtonId = $selectedOptionByIndex.attr("id") + "-stock";

                //find option by index
                var $selectedstockLeveOptionByIndex = $curOption.find('#' + stockLeveRadioButtonId);
                //set checked
                $selectedstockLeveOptionByIndex.prop('checked', true);

                //find current label to set active
                var curSubID = $selectedOptionByIndex.attr('id');
                var curKey = curSubID.slice(0, 8)
                $curOption.find('label[for=' + curSubID + ']').addClass('active');

                //get current value
                var currentOpt = serializeObject($form)[curKey];

                //pre order
                if ($form.serializeArray().length > 1) {
                    var productStockLevel = 0;

                    for (var i = 0; i < $form.serializeArray().length; i++) {
                        if ($form.serializeArray()[i] && $form.serializeArray()[i].name && $form.serializeArray()[i].name == curKey + "-stock") {
                            productStockLevel = $form.serializeArray()[i].value;
                        }
                    }

                    // Save stock level object.
                    productStockLevelObject = $(('#' + curSubID + '-stock'));

                    // Check for show comming soon button
                    displayAddToCartForm(productStockLevelObject);
                }
                $('[name=productCodePost]').length && $('[name=productCodePost]').val(currentOpt);
            } else {

                if ($('[data-option=' + id + ']').find('.variantProductStock').length > 0) {
                    // Save stock level object.
                    productStockLevelObject = $('[data-option=' + id + ']').find('.variantProductStock');
                    // Check for show comming soon button
                    displayAddToCartForm(productStockLevelObject);
                }
            }
        }
        */
        //End: turnActiveOption

        // Add aditional function for Price column.
        // Update purchase button
        /*
        $priceColsWrap.click(function(event) {

            // Gets new value base on the version user click on GUI
            var productPrice = $(this).find('.big-price').html();
            var productCode = $(this).find('.productVersionCode').val();

            // Save stock level object.
            if ($(this).find('.variantProductStock').length > 0) {
            	productStockLevelObject = $(this).find('.variantProductStock');
            }
            
            // Check for show comming soon button

            displayAddToCartForm(productStockLevelObject);

            // Get the value of current product code
            var currentProductCode = $('#currentCode').val();
            // Get add to cart form for change the value
            var addToCartForm = $('#addToCartForm_' + currentProductCode);

            // Change the current product code to new code
            addToCartForm.find('.addToCartCode').val(productCode);
            $('[name=productCodePost]').length && $('[name=productCodePost]').val(productCode);

            // Update price value on GUI
            $('.block-price .big-price').html(productPrice);
        });
        */
         //End: priceColsWrap.click

    }; // End: PriceColumnController

    //========================================================================
    // Start method AddToCartFrom
    // This function use to control the display of buttons in ADD_TO_CART from

    function displayAddToCartForm(stockObject) {
    	
    	if (!stockObject || !stockObject.length) return;

        // Hide PRE_ORDER ,NOTIFY_ME, ADD_TO_CART, BUY_NOW, COMMING_SOON
        $('#add_to_cart_form .bntCommingSoon').hide();
        $("#add_to_cart_form .btnNotifyButton").addClass("hidden");
        $("#add_to_cart_form .add-to-cart").addClass("hidden");
        $("#add_to_cart_form .btnPreOrderButton").hide();
        // Add CSS for button
        $('.wrap-product-slider').css('padding-bottom', '45px');

        var product_status = $(stockObject).attr('data-control-availableForPurchase').toUpperCase();
        
        // Hidden the first button block;
        $('#add_to_cart_form .department0001').hide();

        if (product_status == 'COMMING_SOON') {
            // Show COMMING_SOON
            $('#add_to_cart_form .bntCommingSoon').show();
            // Hide bundle and recommended products
            if ($('#add_to_cart_form .product-slider').length > 0) {
                $('#add_to_cart_form .product-slider').hide();
            }
        } else if (product_status == 'MARKETING') {
            // Remove space if there is not any button on for current SKU.
            $('.wrap-product-slider').css('padding-bottom', '0px');
            // Hide bundle and recommended products
            if ($('#add_to_cart_form .product-slider').length > 0) {
                $('#add_to_cart_form .product-slider').hide();
            }
        } else if (product_status == 'PREORDER' || product_status == 'FOR_SALE') {
            var productStockLevel = stockObject.val();

            // Show bundle and recommended products
            var $productSlider = $('#add_to_cart_form .product-slider');
            if ($productSlider.length > 0 && $productSlider.is(":hidden")) {
                $productSlider.show();
                refreshSlider($productSlider.find(".slider-extra"));
            }
            
            // Check whether the Base Product is PRE_ORDER or not
            if ($('#hdBlnPreOrder').val() == 'true') {
                if (productStockLevel && (productStockLevel > 0)) {
                    $("#add_to_cart_form .btnPreOrderButton").show();
                    $("#add_to_cart_form .btnPreOrderButton").removeClass("hidden");
                } else {
                    $("#add_to_cart_form .btnNotifyButton").removeClass("hidden");
                }
            } else {
                if (productStockLevel && (productStockLevel > 0)) {
                    // Show ADD_TO_CART and BUY_NOW
                    $("#add_to_cart_form .add-to-cart").removeClass("hidden");
                } else {
                    $("#add_to_cart_form .btnNotifyButton").removeClass("hidden");
                }
            }
            
            if ($('#add_to_cart_form .product-slider').length >= 1) {
            	$('#add_to_cart_form .department0001').css('padding-bottom', '45px');
            	$('#add_to_cart_form .department0001').show();
            }
        }
    }
    // End

    function refreshSlider(sliders){
        sliders.each(function(){
        	$(this).data('bxSlider') && $(this).data('bxSlider').destroySlider();
        });

        sliders.bxSlider({
            slideWidth: 220,
            minSlides: 4,
            maxSlides: 4,
            slideMargin: 20,
            pager: false,
            useCSS: true,
            infiniteLoop: false,
            onSliderLoad: function(slider, activeIndex) {
                if (activeIndex == 0) {
                    slider.controls.prev.addClass('slide-first');
                }
                setTimeout(function() {
                    slider.loader && slider.loader.hide().remove();
                }, 50)
            },
            onSlideNext: function(slider, $slideElement, oldIndex, newIndex) {
                var numItem = slider.children.length;
                var numSlide = Math.ceil(numItem / 4);
                if (newIndex == numSlide - 1) {
                    slider.controls.next.addClass('slide-last');
                    slider.controls.prev.removeClass('slide-first');
                }
            },
            onSlidePrev: function(slider, $slideElement, oldIndex, newIndex) {
                if (newIndex == 0) {
                    slider.controls.prev.addClass('slide-first');
                    slider.controls.next.removeClass('slide-last');
                }
            }
        });
    };

    function BannerWindowsPhoneController($el) {
        var _controller = this,
            $mainImg = $el.find('.main-img'),
            $thumbs = $el.find('.thumbnail');

        _controller.SPEED = 150;

        _controller.init = function() {
            bindEvent();
        };
        var bindEvent = function() {
            $thumbs.on('click', 'li a', thumbItemClickHandler);
        };
        var thumbItemClickHandler = function(e) {
            var srcToShow = $(this).data('slide'),
                $img = $('<img class="fixpng" src="' + srcToShow + '" alt="">');
            if (IS_LT_IE9) {
                $mainImg.html($img)
            } else {
                $mainImg.fadeOut(_controller.SPEED, function() {
                    $mainImg.html($img);
                    $mainImg.fadeIn(_controller.SPEED);
                })
            }

            return false;
        };
    };

    $docEl.ready(function() {
        var controller = null;

        $('.windows8 a.link-block').each(function(){
            var $link = $(this);
            $link.attr('href', 'javascript:void(0);');
            $link.on('click', function(e){
                e.preventDefault();
                return false;
            });
        });

        if ($('.product-banner-accessory').length > 0) { //is banner accessories

            $el = $('.product-banner-accessory');
            controller = new BannerAccessoriesController($el);

            controller.init();
        } else if ($('.product-banner-computers').length > 0) {

            $el = $('.product-banner-computers');
            bindEventForComputersBanner($el);

        } else if ($('.banner-product-windows-phone').length > 0) {

            $el = $('.banner-product-windows-phone');
            controller = new BannerWindowsPhoneController($el);
            controller.init();

        }

        if ($('.price-col').length > 0) {
            var priceColumnController = new PriceColumnController($('.price-col'));
            priceColumnController.init();
        }

        $("#add_to_cart_form .btnStartNotifyEmailButton").click(function() {
            $.colorbox({
                inline: true,
                href: "#confirm_dialog",
                onLoad: function() {
                    // Reset confirm popup form
                    $("#confirm_dialog .link-bottom").removeClass('single-button');
                    $("#inputEmailAddressDiv").hide();
                    $("#inputEmailAddressError").hide();
                    $("#inputEmailAddress").val("");
                    // Show popup
                    $("#confirm_dialog").show();
                },
                onCleanup: function() {
                    $("#confirm_dialog").hide();
                }

            });
        });

        $("#notifyConfirmButton").click(function() {
            var emailAddress = $("#inputEmailAddress").val();
            var productCode = $('[name=productCodePost]').val();

            if (!emailAddress || emailAddress == "") {
                return false;
            }

            // Post notify me email for preorder product
            var defaulURL = "/p/notifyEmail?";

            // Post notify me email for regular product
            if ($('#hdBlnPreOrder').val() != 'true') {
                defaulURL = "/p/notifyEmailForRegular?";
            }

            $.ajax({
                url: defaulURL + "productCode=" + productCode + "&" + "emailAddress=" + emailAddress,
                type: "get",
                success: function(response) {
                    var html = "<span style='color:";
                    if (response.status == "error") {
                        html += "red;";
                    } else {
                        html += '#1570A6;';
                        $("#inputEmailAddressContainer").hide();
                        $("#inputEmailAddressContainer").hide();
                        $("#notifyConfirmButton").hide();
                        $("#content-info").hide();
                        $("#confirm_dialog .link-bottom").addClass('single-button');
                    }
                    html += "'>" + response.message + "</span>";
                    $("#inputEmailAddressError").html(html);
                    $("#inputEmailAddressError").show();
                    $.colorbox.resize();
                }
            });

        });

    });

    
    
    window.displayAddToCartForm = displayAddToCartForm;
})(jQuery);
