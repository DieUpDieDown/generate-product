;!function($){
	var isIE6 = $('html').hasClass('ie6');

	var Rating = function (element, options) {
		this.$element = $(element);
		this.options = options;
		this.init();
	};

	Rating.prototype = {
		constructor: Rating,
		init: function(){
			var $rater = this.$element;

			this.$mark = $rater.find('.rate-mark');
			this.$bed = $rater.find('.rate-bed');

			this.stars = this.$bed.children('img');

			this.update();
		},
		update: function () {
			var _this = this,
				options = this.options;

			var timeleave = null;

			//rate
			_this.$element.on({
				'mouseenter.rating': enterRate,
				'mouseleave.rating': leaveRate
			});

			function enterRate(e){
				_this.$mark.hide();
				options.onRateEnter && onRateEnter();
			};

			function leaveRate(e) {
				_this.$mark.show();
				options.onRateLeave && onRateLeave();	
			};
		
			//stars process
			function clickStar($star, index) {
				return function (e) {
					e.preventDefault();
					var j = index;
					var strStars = '';								
					while (j >= 0) {
						strStars += '<img src="'+options.blueStar+'" alt="" class="fixpng">';
						j--;
					};
					_this.$mark.html(strStars);
					options.onSelect && options.onSelect(_this, index+1);
				};
			};

			function enterStar ($star, index) {
				return function (e) {
					clearTimeout(timeleave);
					var j = index;					
					rLinks.removeClass(options.hoverClass);
					while (j >= 0) {
						$(rLinks[j]).addClass(options.hoverClass);						
						j--;
					};
				};
			};

			function leaveStar ($star, index) {
				return function (e) {
					timeleave = setTimeout(function(){
						var k = rLinks.length
						while (--k >= 0) {
							$(rLinks[k]).removeClass(options.hoverClass);
						};
					}, 20);
						
				};
			};

			var stars = _this.stars;
			var i = 0,
				l = stars.length;

			for (; i < l; i++) {
				iStar(stars[i], i)
			};

			function iStar (star, idx) {
				var $star = $(star),
					index = idx || 0;				
				
				$star.wrap('<a href="#" class="rater-link"></a>');

				var $rLinks = $star.parent();				
			};

			var rLinks = _this.$bed.children('a');

			for (var n = 0, nl = rLinks.length; n < nl; n++) {
				iRaterLink(rLinks[n], n);
			}

			function iRaterLink (link, idx) {
				var $link = $(link),
					index = idx || 0;

				$link.on({
					'click.rating': clickStar($link, index),
					'mouseenter.rating': enterStar($link, index),
					'mouseleave.rating': leaveStar($link, index)
				});
			};
		},
		reset: function () {
			this.$mark.empty();
		},
		destroy: function () {
			this.$element.removeData("rating");
			this.$element.off('.rating');
			this.stars.off('.rating');
		}
	};

	$.fn.rating = function (option) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('rating'),
				options = $.extend({}, $.fn.rating.defaults, $this.data(), typeof option == 'object' && option);
			if (!data) $this.data('rating', (data = new Rating(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};

	$.fn.rating.defaults = {
		blueStar: '../img/blue-star.png',
		grayStar: '../img/gray-star.png',
		hoverClass: 'rating-hover',
		onSelect: null,
		onRateEnter: null,
		onRateLeave: null
	};

	$.fn.rating.Constructor = Rating;
}(window.jQuery);