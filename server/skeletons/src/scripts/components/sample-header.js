(function (fnlprjt, $) {
	 fnlprjt.Header = (function () {
		function _header() {
			this.init = function (selector) {
				console.log("Header");
				return this;
			};
		}
		return new _header();
	 }());
}(window.fnlprjt = ( typeof fnlprjt !== 'undefined' && fnlprjt instanceof Object ) ? fnlprjt : {}, $fnlprjt=jQuery.noConflict()));