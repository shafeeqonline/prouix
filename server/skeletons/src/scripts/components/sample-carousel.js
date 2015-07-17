(function (nmspc, $) {
	 nmspc.Carousel = (function () {
		function _carousel() {
            this.initCarousel = function(selector) {
                $(selector).each(function() {
					var el = $(this);
					var settings = {
						dots: el.attr("data-slider-dots") == "true",
						infinite: el.attr("data-slider-infinite") == "true",
						speed: el.attr("data-slider-animate-speed") ? el.attr("data-slider-animate-speed") : 300,
						slidesToShow: el.attr("data-slidestoshow") ? el.attr("data-slidestoshow") : 1,
						slidesToScroll: el.attr("data-slidestoscroll") ? el.attr("data-slidestoscroll") : (el.attr("data-slidestoshow") ? el.attr("data-slidestoshow") : 1)
					};
					el.slick(settings);
                });
                          }
			this.init = function (selector) {
                this.initCarousel(selector);
				return this;
			};
		}
		return new _carousel();
	 }());
}(window.nmspc = ( typeof nmspc !== 'undefined' && nmspc instanceof Object ) ? nmspc : {}, $nmspc=jQuery.noConflict()));