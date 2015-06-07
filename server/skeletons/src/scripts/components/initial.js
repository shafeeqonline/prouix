(function (AD, $) {
	 AD.AddtoPlanner = (function () {
		function _addtoplanner() {
			this.addElement = function(){
                var $element = $(".ad-carousel-list li" );
                
                $element.on("click", function(){ 
                    if($(this).hasClass('selected')){
                    	RemoveFromPlanner($(this).data('url'));
                    }else {
                    	AddToDayPlanner($(this).data('url'),-1);
                    }
                });
			},
			this.init = function (selector) {
				this.addElement();
				return this;
			};
		}
		return new _addtoplanner();
	 }());
}(window.AD = ( typeof AD !== 'undefined' && AD instanceof Object ) ? AD : {}, $AD=jQuery.noConflict()));