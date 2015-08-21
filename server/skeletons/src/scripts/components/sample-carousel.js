(function (nmspjs, $) {
	 nmspjs.Carousel = (function () {
		function _carousel() {
            this.initCarousel = function(selector) {
                var el = $(selector);
				var settings = {
					dots: el.attr("data-slider-dots") == "true",
					infinite: el.attr("data-slider-infinite") == "true",
					speed: el.attr("data-slider-animate-speed") ? el.attr("data-slider-animate-speed") : 300,
					slidesToShow: el.attr("data-slidestoshow") ? el.attr("data-slidestoshow") : 1,
					slidesToScroll: el.attr("data-slidestoscroll") ? el.attr("data-slidestoscroll") : (el.attr("data-slidestoshow") ? el.attr("data-slidestoshow") : 1)
				};
				el.slick(settings);
                          }
			this.init = function (selector) {
				var that = this;
				$(selector).each(function() {
					var jEl = $(this);
					that.initCarousel(jEl);
				});
				return this;
			};
		}
		return new _carousel();
	 }());
}(window.nmspjs = ( typeof nmspjs !== 'undefined' && nmspjs instanceof Object ) ? nmspjs : {}, $nmspjs));