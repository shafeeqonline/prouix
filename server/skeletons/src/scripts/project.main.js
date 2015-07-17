(function ($) {
    'use strict';
	//==================================================
    // DOCUMENT READY & BootStraping init method for all modules loaded in the page...
    //--------------------------------------------------
    $(function () {
        var components, data, globalComponents = ['Configs', 'Utils'];
        for (components in globalComponents) {
            data = globalComponents[components];
            if (nmspc[data]) {
                nmspc[data].init();
            }
		}
		//Page Specific components
        for (components in nmspc.initUI) {
            data = nmspc.initUI[components];
            if (nmspc[data]) {
                nmspc[data].init(components);
            }			
		}
    }());
    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================
}($nmspc));
