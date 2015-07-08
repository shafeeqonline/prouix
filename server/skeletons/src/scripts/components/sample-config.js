(function (fnlprjt, $) {

    fnlprjt.getCookie =function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
     }
	 fnlprjt.Configs = (function () {
		function _config() {
			this.activeClass = 'fnlprjt-active',
            this.views = {
                'small'  : tabbrkpnt,
                'medium' : deskbrkpnt,
                'large'  : lgdskbrkpnt
            },
            this.isMobile = {
                Android: (function() {
                    return navigator.userAgent.match(/Android/i);
                })(),
                BlackBerry: (function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                })(),
                iOS: (function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                })(),
                Opera: (function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                })(),
                Windows: (function() {
                    return navigator.userAgent.match(/IEMobile/i);
                })()
            },
			this.init = function () {
				return this;
			};
		}
		return new _config();
	 }());
	 fnlprjt.Utils = (function () {
		function _utils() {
			this.getIEVersion = function(){
                var agent = navigator.userAgent;
                var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
                var matches = agent.match(reg);
                if (matches !== null) {
                    return { major: matches[1], minor: matches[2] };
                }
                return { major: '-1', minor: '-1' };
            }
            this.getViewport = function() {
                var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

                var size;
                if( $('html').hasClass('lt-ie9') ) {
                    size = 'large';
                } else {
                    size = ( w <= fnlprjt.Configs.views.xsmall )? 'xsmall' : size;
                    size = ( w >  fnlprjt.Configs.views.xsmall && w <= fnlprjt.Configs.views.small  )? 'small'  : size;
                    size = ( w >  fnlprjt.Configs.views.small  )? 'medium' : size;
                    size = ( w >  fnlprjt.Configs.views.medium )? 'large'  : size;
                    size = ( w >  fnlprjt.Configs.views.large  )? 'xlarge' : size;
                }

                fnlprjt.Configs.viewport = {
                    size: size,
                    width: w,
                    height: h
                };

                return fnlprjt.Configs.viewport;
            },
            this.isMobileView = function() {
                return (this.getViewport().size == 'small' || this.getViewport().size == 'xsmall');
            },
            this.isTabletView = function() {
                return (this.getViewport().size == 'medium');
            }
            this.setTooltip = function() {
                 $('[data-toggle="tooltip"]').tooltip();
            }
            /*this.setHandlebarHelpers = function() {
                if(Handlebars) {                
                    Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {
                        var operators, result;

                        if (arguments.length < 3) {
                            throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
                        }

                        if (options === undefined) {
                            options = rvalue;
                            rvalue = operator;
                            operator = "===";
                        }

                        operators = {
                            '==': function (l, r) { return l == r; },
                            '===': function (l, r) { return l === r; },
                            '!=': function (l, r) { return l != r; },
                            '!==': function (l, r) { return l !== r; },
                            '<': function (l, r) { return l < r; },
                            '>': function (l, r) { return l > r; },
                            '<=': function (l, r) { return l <= r; },
                            '>=': function (l, r) { return l >= r; },
                            'typeof': function (l, r) { return typeof l == r; }
                        };

                        if (!operators[operator]) {
                            throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
                        }

                        result = operators[operator](lvalue, rvalue);

                        if (result) {return options.fn(this);}
                        else        {return options.inverse(this);}
                    });                
                    Handlebars.registerHelper('ifCond', function (v1, v2, options) {
                        if (v1 === v2) {return options.fn(this);}
                        return options.inverse(this);
                    });
                }
            };*/
			this.init = function () {
				var that = this; //to behave proxy
				this.getViewport();
				//--------------------------------------------------
				// Add IE10 Class
				//--------------------------------------------------
				if(this.getIEVersion().major === '10') {
					$('html').addClass('ie10');
				}
				//--------------------------------------------------
				//--------------------------------------------------
				// RESIZE EVENT
				// Fires "windowResize" on $(window)
				//--------------------------------------------------
                console.log("CONFIG");
                that.setTooltip();
				return this;
			};
		}
		return new _utils();
	 }());
}(window.fnlprjt = ( typeof fnlprjt !== 'undefined' && fnlprjt instanceof Object ) ? fnlprjt : {}, $fnlprjt=jQuery.noConflict()));