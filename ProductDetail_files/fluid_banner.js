jQuery(document).ready(function ($) {
	
	var fluitIt = function(obj){
		var fluidBanner = obj;
		var winWidth = $(window).width();
		var fluidBannerParent = fluidBanner.closest('.banner-image-fluid');
		var fluidBannerParentHeight = fluidBannerParent.height();
		var bannerHeight = fluidBanner.height();
		var bannerWidth = fluidBanner.width();
		// var fluidBannerParentWidth = fluidBannerParent.width();
		var specifications = fluidBanner.parents('.technical-specifications');
		if(specifications.length) {
			fluidBannerParentHeight = specifications.height();
			fluidBannerParent.height(fluidBannerParentHeight);
		}

		if(bannerHeight < fluidBannerParentHeight) {
			fluidBanner.css({
				'height': fluidBannerParentHeight + 'px',
				'width': 'auto'
			});
		}

		if(bannerWidth < winWidth) {
			fluidBanner.css({
				'width': '100%',
				'height': 'auto',
				'margin-left': 0
			});
		}

		// if(winWidth < 940) {
		// 	var tempWinWidth = 940;
		// }
		// if(bannerWidth > tempWinWidth + 1) {
		// 	var remainingWidth = bannerWidth - tempWinWidth;
		// 	if(remainingWidth > 0) {
		// 		fluidBanner.css({
		// 			'margin-left': -(remainingWidth / 2) + 'px'
		// 		});
		// 	}
		// }
	}

	// jQuery('.fluid-banner').each(function(){
	// 	var fluidBanner = jQuery(this);
	// 	fluidBanner.load(function(){
	// 		fluitIt(jQuery(this));
	// 	}).trigger('load');
	// });
	
	jQuery('.banner-product-fluid .banner-image-fluid img').each(function(){
		var fluidBanner = jQuery(this);
		fluidBanner.load(function(){
			fluitIt(jQuery(this));
		}).trigger('load');
	});
	
	jQuery(window).resize(function(){
		// jQuery('.fluid-banner').each(function(){
		// 	fluitIt($(this));	
		// });
		jQuery('.banner-image-fluid img').each(function(){
			fluitIt($(this));	
		});
	});	
}); 