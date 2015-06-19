(function (AD, $) {
	 AD.Header = (function () {
		function _header() {
			this.init = function (selector) {
				console.log("Header");
				return this;
			};
		}
		return new _header();
	 }());
}(window.AD = ( typeof AD !== 'undefined' && AD instanceof Object ) ? AD : {}, $AD=jQuery.noConflict()));