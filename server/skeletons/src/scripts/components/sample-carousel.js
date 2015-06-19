(function (AD, $) {
	 AD.Carousel = (function () {
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
                          breakpoint: AD.Configs.views.medium,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: AD.Configs.views.small,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                          }
                        },
                        {
                          breakpoint: AD.Configs.views.xsmall,
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
}(window.AD = ( typeof AD !== 'undefined' && AD instanceof Object ) ? AD : {}, $AD=jQuery.noConflict()));