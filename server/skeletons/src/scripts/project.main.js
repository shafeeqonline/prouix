(function ($) {
    'use strict';
	//==================================================
    // DOCUMENT READY & BootStraping init method for all modules loaded in the page...
    //--------------------------------------------------
    $(function () {
        var components, data, globalComponents = ['Configs', 'Utils'];
        for (components in globalComponents) {
            data = globalComponents[components];
            if (nmspjs[data]) {
                nmspjs[data].init();
            }
		}
		//Page Specific components
        for (components in nmspjs.initUI) {
            data = nmspjs.initUI[components];
            if (nmspjs[data]) {
                nmspjs[data].init(components);
            }			
		}
    }());
    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================
}($nmspjs));
