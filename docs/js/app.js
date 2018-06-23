/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _webusb = __webpack_require__(1);
	
	var webusb = _interopRequireWildcard(_webusb);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('webusb.js has been loaded');
	
	var auth = function auth() {
	    var vendorId = 0x0d28;
	    var productId = 0x0204;
	    navigator.usb.requestDevice({ 'filters': [{ 'vendorId': vendorId, 'productId': productId }]
	    }).then(function (device) {
	        console.log(device.vendorId);
	        console.log(device.productId);
	        console.log(device.serialNumber);
	        // invoke ivent for serial number
	        var event = new CustomEvent('bitsensei.usb_serial', { 'detail': { 'serialNumber': device.serialNumber } });
	        document.dispatchEvent(event);
	        // return device.open;
	    }).catch(function (error) {
	        console.log(error);
	    });
	};
	
	var button = document.getElementById('button');
	button.addEventListener('click', function (event) {
	    auth();
	});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map