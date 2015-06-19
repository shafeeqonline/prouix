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
            data = fnlprjt.initUI[components];
            if (fnlprjt[data.module]) {
                fnlprjt[data.module].init(data.selector);
            }			
		}
    }());
    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================
}($fnlprjt));
