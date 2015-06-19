(function (fnlprjt, $) {
	 fnlprjt.Carousel = (function () {
		function _carousel() {
            this.initCarousel = function(selector) {
                console.log("CAROUSEL");
                $(selector).slick({
                    dots: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
                /*$(selector).slick({
                    dots: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    responsive: [
                        {
                          breakpoint: fnlprjt.Configs.views.medium,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: fnlprjt.Configs.views.small,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                          }
                        },
                        {
                          breakpoint: fnlprjt.Configs.views.xsmall,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });*/
            }
			this.init = function (selector) {
				//console.log("Carousel");
                this.initCarousel(selector);
				return this;
			};
		}
		return new _carousel();
	 }());
}(window.fnlprjt = ( typeof fnlprjt !== 'undefined' && fnlprjt instanceof Object ) ? fnlprjt : {}, $fnlprjt=jQuery.noConflict()));