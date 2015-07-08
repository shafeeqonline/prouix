(function ($) {
    'use strict';
	//==================================================
    // DOCUMENT READY & BootStraping init method for all modules loaded in the page...
    //--------------------------------------------------
    $(function () {
        var components, data, globalComponents = ['Configs', 'Utils', 'Header'];
        for (components in globalComponents) {
            data = globalComponents[components];
            console.log("UTILITY : %s", data);
            if (fnlprjt[data]) {
                fnlprjt[data].init();
            }
		}
		//Page Specific components
        console.log("MODULES : %s", JSON.stringify(fnlprjt.initUI));
        for (components in fnlprjt.initUI) {
            console.log("MODULE : %s", components);
            data = fnlprjt.initUI[components];
            console.log("MODULE : %s", JSON.stringify(data));
            if (fnlprjt[components]) {
                fnlprjt[components].init(data);
            }			
		}
    }());
    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================
}($fnlprjt));
