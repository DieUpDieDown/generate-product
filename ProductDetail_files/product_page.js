;(function ($) {
    jQuery(document).ready(function($) {
        if ($('.reviews-faq').length > 0 && $('.customer-review').length > 0 && $('.container-review-faq').length > 0) {
            $('.reviews-faq').multiTab({
                defaultTab: '.customer-review',
                tabContainer: '.container-review-faq', //must be a jquery selector
                changeHandler: function(section, subsection) {
                    $.floatingController.setMenuSelected(section, subsection);
                }
            });
        }
    });

    $(window).load(function() {
        $('.slider-extra').bxSlider({
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
    });
})(window.jQuery);