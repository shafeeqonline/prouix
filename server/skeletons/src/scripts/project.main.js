(function ($) {
    'use strict';
	//==================================================
    // DOCUMENT READY & BootStraping init method for all modules loaded in the page...
    //--------------------------------------------------
    $(function() {
		var globalComponents = ['Configs','Utils','Header'];
		for(var components in globalComponents){
			AD[globalComponents[components]].init();
		}
		//Page Specific components
		for(var components in AD.initUI){
			AD[AD.initUI[components].module].init(AD.initUI[components].selector);
		}
        
        $(".ad-discover-more").on('click', function(){
            $("html, body").animate({"scrollTop" : $(".ad-discover-more").offset().top});
        });
    }());
    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================
}($AD));
