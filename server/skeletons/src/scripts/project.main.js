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
            if (AD[data]) {
                AD[data].init();
            }
		}
		//Page Specific components
        console.log("MODULES : %s", JSON.stringify(AD.initUI));
        for (components in AD.initUI) {
            data = AD.initUI[components];
            if (AD[data.module]) {
                AD[data.module].init(data.selector);
            }			
		}
    }());
    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================
}($AD));
