(function ($) {
    'use strict';
	//==================================================
    // DOCUMENT READY & BootStraping init method for all modules loaded in the page...
    //--------------------------------------------------
    $(function () {
        var components, data, globalComponents = ['Configs', 'Utils'];
        for (components in globalComponents) {
            data = globalComponents[components];
            if (nmspcjs[data]) {
                nmspcjs[data].init();
            }
		}
		//Page Specific components
        for (components in nmspcjs.initUI) {
            data = nmspcjs.initUI[components];
            if (nmspcjs[data]) {
                nmspcjs[data].init(components);
            }			
		}
    }());
    //--------------------------------------------------
    // end DOCUMENT READY...
    //==================================================
}($nmspcjs));
