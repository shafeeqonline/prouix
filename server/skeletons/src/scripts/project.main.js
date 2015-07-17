(function ($) {
    'use strict';
	//==================================================
    // DOCUMENT READY & BootStraping init method for all modules loaded in the page...
    //--------------------------------------------------
    $(function () {
        var components, data, globalComponents = ['Configs', 'Utils'];
        for (components in globalComponents) {
            data = globalComponents[components];
            if (fnlprjt[data]) {
                fnlprjt[data].init();
            }
		}
		//Page Specific components
        for (components in fnlprjt.initUI) {
            data = fnlprjt.initUI[components];
            if (fnlprjt[data]) {
                fnlprjt[data].init(components);
            }			
		}
    }());
    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================
}($fnlprjt));
