(function (fnlprjt, $) {
	 fnlprjt.Carousel = (function () {
		function _carousel() {
            this.initCarousel = function(data) {
                console.log("CAROUSEL");
                var selector = data.selector;
				$(selector).each(function() {
					var el = $(this);
					var settings = {
						dots: el.attr("data-slider-dots") == "true",
						infinite: el.attr("data-slider-infinite") == "true",
						speed: el.attr("data-slider-animate-speed") ? el.attr("data-slider-animate-speed") : 300,
						slidesToShow: el.attr("data-slides") ? el.attr("data-slides") : 1,
						slidesToScroll: el.attr("data-slides-scroll") ? el.attr("data-slides-scroll") : (el.attr("data-slides") ? el.attr("data-slides") : 1)
					};
					console.log(JSON.stringify(settings));
					el.slick(settings);
                });
                          }
			this.init = function (data) {
				//console.log("Carousel");
                this.initCarousel(data);
				return this;
			};
		}
		return new _carousel();
	 }());
}(window.fnlprjt = ( typeof fnlprjt !== 'undefined' && fnlprjt instanceof Object ) ? fnlprjt : {}, $fnlprjt=jQuery.noConflict()));