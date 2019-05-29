module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/token-distributor.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./abi/distributor.json":
/*!******************************!*\
  !*** ./abi/distributor.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, default */
/***/ (function(module) {

module.exports = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenContract","type":"address[]"},{"name":"_receiver","type":"address"},{"name":"_amounts","type":"uint256[]"}],"name":"liftTokensToSingleAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_array","type":"uint256[]"}],"name":"sumArray","outputs":[{"name":"sum_","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"_tokenContract","type":"address"},{"name":"who","type":"address"}],"name":"getForeignTokenBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenContract","type":"address"},{"name":"_addresses","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"distributeForeignTokenWithUnifiedAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addresses","type":"address[]"}],"name":"distributeEtherWithUnifiedAmount","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenContract","type":"address[]"},{"name":"_receiver","type":"address[]"},{"name":"_amounts","type":"uint256[]"}],"name":"liftTokensToMultipleAddresses","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addresses","type":"address[]"},{"name":"_amounts","type":"uint256[]"}],"name":"distributeEtherWithSplittedAmount","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawFund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenContract","type":"address"}],"name":"withdrawForeignTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenContract","type":"address"},{"name":"_addresses","type":"address[]"},{"name":"_amounts","type":"uint256[]"}],"name":"distributeForeignTokenWithSplittedAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TransferEther","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

/***/ }),

/***/ "./app.config.js":
/*!***********************!*\
  !*** ./app.config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AppConfig = {
  name: "Exsender",
  description: "Free, simplified and fully automated token and ETH distributor on the blockchain",
  author: "Exclusive Platform",
  website: "https://exclusiveplatform.com",
  privacyPolicy: {
    name: "Privacy policy",
    link: 'https://exclusiveplatform.com'
  },
  termsOfService: {
    name: "Terms of service",
    link: 'https://exclusiveplatform.com'
  },
  donation: {
    message: "Support us through donation, we appreciate it a lot.",
    eth: "0xfe3da3708036aec603a8cc9538ac98ce8358a558",
    btc: "39ydztrvFDzE4xnygLojgijGg81J4foTVA"
  },
  social: {
    twitter: "https://twitter.com/Ex_platform",
    telegram: "https://t.me/xpl_chat",
    facebook: "https://facebook.com/exclusiveplatform",
    linkedin: "https://linkedin.com/company/exclusiveplatform",
    github: "https://github.com/xpl-developers",
    medium: "https://medium.com/@exclusiveplatform"
  },
  navLink: [{
    name: 'Home',
    link: '/'
  }, {
    name: 'FAQs',
    link: '/faq'
  }, {
    name: 'Go Exclusive!',
    link: 'https://exclusiveplatform.com'
  }],
  subNavLink: [{
    name: 'Token Distributor',
    link: '/token-distributor'
  }, {
    name: 'ETH Distributor',
    link: '/eth-distributor'
  }, {
    name: 'Wallet Lifter',
    link: '/wallet-lifter'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (AppConfig);

/***/ }),

/***/ "./components/Contract.js":
/*!********************************!*\
  !*** ./components/Contract.js ***!
  \********************************/
/*! exports provided: ConnectedContractProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedContractProps", function() { return ConnectedContractProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/Contract.js";

function ConnectedContractProps(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-size-6 has-background-white border-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, " Target Contract: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " ", props.contractAddress || "input a valid contract address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Name: "), " ", props.contractName || "not available", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Symbol: "), " ", props.contractSymbol || "not available"));
}

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.config */ "./app.config.js");
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationLink */ "./components/NavigationLink.js");
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialLink */ "./components/SocialLink.js");
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/Footer.js";





var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].name, " by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].website,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].author)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].termsOfService.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].termsOfService.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].privacyPolicy.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].privacyPolicy.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].donation.message, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "BTC: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, " ", _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].donation.btc, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), "ETH: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, " ", _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].donation.eth, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FormElements.js":
/*!************************************!*\
  !*** ./components/FormElements.js ***!
  \************************************/
/*! exports provided: Input, Select, TextArea, CheckBox, Button, FileInput, MultipleCheckBoxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return CheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return FileInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleCheckBoxes", function() { return MultipleCheckBoxes; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/FormElements.js";

function Input(props) {
  var options = [];

  if (props.options && props.list) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(props.options), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var option = _step.value;
        options.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
          value: option.value,
          key: option.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          },
          __self: this
        }));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "input " + props.className,
    type: props.type,
    placeholder: props.placeholder || null,
    name: props.name || null,
    onBlur: props.onBlur || null,
    onFocus: props.onFocus || null,
    onChange: props.onChange || null,
    list: props.list || null,
    id: props.id || null,
    value: props.value,
    disabled: props.disabled || null,
    readOnly: props.readOnly || null,
    autoComplete: props.autoComplete || "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), options.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("datalist", {
    id: props.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, options)));
}
function Select(props) {
  var options = [];

  if (props.options.length) {
    options.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      key: "-1",
      value: "",
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, " Select an option "));
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(props.options), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var option = _step2.value;
        options.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
          value: option.value,
          key: option.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, " ", option.name || option.value, " "));
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "select " + props.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
      name: props.name || null,
      id: props.id || null,
      value: props.value || "",
      onChange: props.onChange || null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, options));
  }

  return null;
}
function TextArea(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
    className: "textarea " + props.className,
    placeholder: props.placeholder || null,
    onChange: props.onChange || null,
    onBlur: props.onBlur || null,
    name: props.name || null,
    id: props.id || null,
    value: props.value || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })));
}
function CheckBox(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: props.type,
    name: props.name || null,
    defaultChecked: props.defaultChecked || null,
    id: props.id || null,
    disabled: props.disabled || null,
    onChange: props.onChange || null,
    onClick: props.onClick || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), "\xA0 ", props.placeholder);
}
function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: props.type,
    className: props.className || null,
    title: props.title,
    disabled: props.disabled || null,
    onClick: props.onClick || null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, props.text);
}
function FileInput(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "file is-link has-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "file-input",
    type: "file",
    name: props.name,
    id: props.id || props.name,
    onChange: props.onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "file-cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "file-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, props.label)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "file-name",
    title: props.fileName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, props.fileName)))));
}
function MultipleCheckBoxes(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, props.inputArray.map(function (box, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CheckBox, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, box, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }));
  })));
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationLink */ "./components/NavigationLink.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./app.config.js");
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/Header.js";






var MainNavigation = function MainNavigation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar is-light pt-2 pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "is-size-4 has-text-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " Exsender "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-burger burger",
    "data-target": "mainNav",
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "mainNav",
    className: "navbar-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-end is-size-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    linkList: _app_config__WEBPACK_IMPORTED_MODULE_4__["default"].navLink,
    classList: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
};

function toggleMenu(e) {
  var burger = e.target;
  var menu = e.target.getAttribute('data-target');
  var target = document.getElementById(menu);

  if (target) {
    target.classList.toggle('is-active');
    burger.classList.toggle('is-active');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

/***/ }),

/***/ "./components/LoadingIndicator.js":
/*!****************************************!*\
  !*** ./components/LoadingIndicator.js ***!
  \****************************************/
/*! exports provided: default, LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/LoadingIndicator.js";

function LoadingIndicator() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button is-text is-link is-large is-loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "loading"));
}
function LoadingSpinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "has-text-link fas fa-spinner fa-spin is-size-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/Logo.js";


var Logo = function Logo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo.svg",
    alt: "XPL logo",
    width: "60",
    height: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/NavigationLink.js":
/*!**************************************!*\
  !*** ./components/NavigationLink.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/NavigationLink.js";



var NavigationLink =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavigationLink, _React$Component);

  function NavigationLink() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavigationLink);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationLink).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationLink, [{
    key: "render",

    /*componentDidMount() {
    	this.location = window.location.pathname;
    }
    */
    value: function render() {
      var _this = this;

      // console.log("this.location",this.location)
      var navLinks;

      if (this.props.type) {
        navLinks = this.props.linkList.map(function (lk, index) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            key: index,
            className: _this.location == lk.link ? "is-active" : null,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: lk.link,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            className: _this.props.classList || "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, " ", lk.name, " ")));
        });
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, " ", navLinks, " ");
      }

      navLinks = this.props.linkList.map(function (lk, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: lk.link,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: _this.props.classList || "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, " ", lk.name, " "));
      });
      return navLinks;
    }
  }]);

  return NavigationLink;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavigationLink);

/***/ }),

/***/ "./components/SocialLink.js":
/*!**********************************!*\
  !*** ./components/SocialLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.config */ "./app.config.js");
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/SocialLink.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var channels = [];
  var socials = _app_config__WEBPACK_IMPORTED_MODULE_1__["default"].social;

  for (var link in socials) {
    var temp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: socials[link],
      target: "_blank",
      className: props.classList || "has-text-grey-lighter mr-2",
      key: link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fab fa-".concat(link, " fa-").concat(props.size || "1", "x"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
    channels.push(temp);
  }

  return channels;
});

/***/ }),

/***/ "./components/SubHeader.js":
/*!*********************************!*\
  !*** ./components/SubHeader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationLink */ "./components/NavigationLink.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./app.config.js");
/* harmony import */ var _Web3Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Web3Status */ "./components/Web3Status.js");
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/SubHeader.js";





var SubHeader = function SubHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tabs pt-2 pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    linkList: _app_config__WEBPACK_IMPORTED_MODULE_2__["default"].subNavLink,
    type: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Web3Status__WEBPACK_IMPORTED_MODULE_3__["Web3ConnectionProps"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubHeader);

/***/ }),

/***/ "./components/TransactionMonitor.js":
/*!******************************************!*\
  !*** ./components/TransactionMonitor.js ***!
  \******************************************/
/*! exports provided: TransactionMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionMonitor", function() { return TransactionMonitor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/TransactionMonitor.js";

function TransactionMonitor(props) {
  if (!props.monitorArray instanceof Array || props.monitorArray.length < 1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-overlay box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "is-pulled-right is-small button fas fa-times",
      onClick: props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "No transaction found"));
  }

  var transactionList = props.monitorArray.map(function (tx, i) {
    var icon;

    if (tx.status == "pending") {
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "has-text-link fas fa-exclamation-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      });
    } else if (tx.status == "processing") {
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "has-text-primary fas fa-spinner fa-spin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    } else if (tx.status == "success") {
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "has-text-success fas fa-check-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });
    } else {
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "has-text-danger fas fa-times-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button is-danger is-small",
        "data-index": i,
        onClick: tx.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, " retry "), " ");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, i + 1, ". ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, tx.hash || "txhash unknown"), "\xA0 ", icon);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-overlay box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "is-pulled-right is-small button fas fa-times",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), transactionList);
}

/***/ }),

/***/ "./components/Warning.js":
/*!*******************************!*\
  !*** ./components/Warning.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Warning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/Warning.js";


function Warning() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-2 content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "has-text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Please note:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Recommended transfer per transaction is 180."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Do not transfer to an exchange wallet."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Checkout", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/faq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " FAQs ")), "for usage, approval transaction and slow Metamask.")));
}

/***/ }),

/***/ "./components/Web3Status.js":
/*!**********************************!*\
  !*** ./components/Web3Status.js ***!
  \**********************************/
/*! exports provided: LockedWeb3Browser, NoWeb3Browser, Web3ConnectionProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedWeb3Browser", function() { return LockedWeb3Browser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoWeb3Browser", function() { return NoWeb3Browser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3ConnectionProps", function() { return Web3ConnectionProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_web3_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/web3-connect */ "./utils/web3-connect.js");
var _jsxFileName = "/home/abdulhakeem/Express/exsender/components/Web3Status.js";


function LockedWeb3Browser(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "halfpage-height",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container pl-4 pr-4 mt-4 pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "is-size-3 has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Token Distributor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns center-align",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column pt-4 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, " Please unlock Metamask to continue."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), props.children))));
}
function NoWeb3Browser() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "halfpage-height",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container pl-4 pr-4 mt-4 pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "is-size-3 has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Token Distributor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column center-align mt-4 pt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "is-size-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "This feature requires Metamask to be installed.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button is-danger is-large",
    href: "https://metamask.io",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Download Metamask"))))));
}
function Web3ConnectionProps() {
  if (!_utils_web3_connect__WEBPACK_IMPORTED_MODULE_1__["Web3ConnectionHandler"].checkBrowserCompatibility()) {
    return null;
  }

  var network = _utils_web3_connect__WEBPACK_IMPORTED_MODULE_1__["Web3ConnectionHandler"].connectedNetwork();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "is-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tag is-medium is-".concat(network.colour || "danger"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, network.name || "Unknown Network")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tag is-medium is-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, _utils_web3_connect__WEBPACK_IMPORTED_MODULE_1__["Web3ConnectionHandler"].checkBrowserCompatibility().selectedAddress)));
}

/***/ }),

/***/ "./layouts/Main.js":
/*!*************************!*\
  !*** ./layouts/Main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/abdulhakeem/Express/exsender/layouts/Main.js";




__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../styles/styles.scss */ "./styles/styles.scss", 7));
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    key: "viewport",
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Automated token and ETH distributor on the blockchain")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/token-distributor.js":
/*!************************************!*\
  !*** ./pages/token-distributor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layouts/Main */ "./layouts/Main.js");
/* harmony import */ var _components_FormElements__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/FormElements */ "./components/FormElements.js");
/* harmony import */ var _components_Web3Status__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Web3Status */ "./components/Web3Status.js");
/* harmony import */ var _components_Contract__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Contract */ "./components/Contract.js");
/* harmony import */ var _components_TransactionMonitor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/TransactionMonitor */ "./components/TransactionMonitor.js");
/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/SubHeader */ "./components/SubHeader.js");
/* harmony import */ var _components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/LoadingIndicator */ "./components/LoadingIndicator.js");
/* harmony import */ var _components_Warning__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Warning */ "./components/Warning.js");
/* harmony import */ var _utils_fileHelpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/fileHelpers */ "./utils/fileHelpers.js");
/* harmony import */ var _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/web3-connect */ "./utils/web3-connect.js");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/misc */ "./utils/misc.js");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_utils_misc__WEBPACK_IMPORTED_MODULE_23__);












var _jsxFileName = "/home/abdulhakeem/Express/exsender/pages/token-distributor.js";












var xplAddress = "0x51f43d0c05eEfdEB70eEAf973e0b8286E494902D";

var TokenDistributor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(TokenDistributor, _React$Component);

  function TokenDistributor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, TokenDistributor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(TokenDistributor).call(this, props));
    _this.contractProps = {
      contractName: "",
      contractDecimals: "",
      contractSymbol: "",
      addressBalance: "",
      distributorContractAllowance: ""
    };
    _this.newDistribution = {
      selectedFileName: "No file selected",
      textAreaWithAddresses: "",
      tokenAmount: "",
      totalAmount: "",
      totalAddresses: "",
      showTransactionMonitor: false,
      transactionBatch: "",
      transferPerBatch: 180,
      //recommeded
      transactionInProgress: false
    };
    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({
      isUnifiedAmount: true,
      isWeb3Browser: false,
      web3BrowserConnected: false,
      isProcessing: false,
      contractAddress: ""
    }, _this.contractProps, _this.newDistribution);
    _this.toggleAmount = _this.toggleAmount.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.toggleTransactionMonitor = _this.toggleTransactionMonitor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.restartDistribution = _this.restartDistribution.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.unlockBrowser = _this.unlockBrowser.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.handleBlur = _this.handleBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this));
    _this.handleReset = _this.handleReset.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this)); // this.fileInput = React.createRef();

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(TokenDistributor, [{
    key: "unlockBrowser",
    value: function unlockBrowser() {
      var self = this;
      _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].enableWeb3Browser().then(function () {
        self.setState({
          web3BrowserConnected: true
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "toggleAmount",
    value: function toggleAmount() {
      this.setState({
        isUnifiedAmount: !this.state.isUnifiedAmount
      });
    }
  }, {
    key: "toggleTransactionMonitor",
    value: function toggleTransactionMonitor() {
      this.setState({
        showTransactionMonitor: !this.state.showTransactionMonitor
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value));

      if (name == "contractAddress") {
        this.handleContractAddress(value);
      } else if (name == "textAreaWithAddresses") {
        this.handleAddresses(value);
      } else if (name == "tokenAmount") {
        this.handleAmount(value);
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target2 = e.target,
          name = _e$target2.name,
          value = _e$target2.value;
      var self = this;

      if (name == "uploadFileInput") {
        var uploadElement = document.getElementById(name);
        var files = uploadElement.files;

        if (files.length > 0) {
          self.setState({
            selectedFileName: files[0].name,
            isProcessing: true
          });
          _utils_fileHelpers__WEBPACK_IMPORTED_MODULE_21__["SpreadsheetHelper"].readFile(files[0]).then(function (json) {
            return _utils_fileHelpers__WEBPACK_IMPORTED_MODULE_21__["SpreadsheetHelper"].readObjectProperty(json);
          }).then(function (columnsObject) {
            console.log(columnsObject);

            if (columnsObject["amounts"]) {
              /*self.setState({
              	tokenAmount: columnsObject["amounts"],
              	textAreaWithAddresses: columnsObject["addresses"]
              })*/
              self.handleAmount(columnsObject["amounts"].join());
              self.handleAddresses(columnsObject["addresses"].join());
            } else {
              /*self.setState({
              	textAreaWithAddresses: columnsObject["addresses"]
              })*/
              self.handleAddresses(columnsObject["addresses"].join());
            }
          }).catch(function (err) {
            window.alert("Invalid file.");
          }).finally(function () {
            self.setState({
              isProcessing: false
            });
            uploadElement.value = "";
          });
        }
      } else {
        self.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, name, value));
      }
    }
  }, {
    key: "handleContractAddress",
    value: function () {
      var _handleContractAddress = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(value) {
        var validAddress, contractName, contractSymbol, contractDecimals, addressBalance, distributorContractAllowance;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                validAddress = _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].validateAddress(value);

                if (!validAddress) {
                  _context.next = 34;
                  break;
                }

                this.setState({
                  isProcessing: true
                });
                _context.prev = 3;
                _context.next = 6;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'name');

              case 6:
                contractName = _context.sent;
                _context.next = 9;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'symbol');

              case 9:
                contractSymbol = _context.sent;
                _context.next = 12;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'decimals');

              case 12:
                contractDecimals = _context.sent.toNumber();
                _context.next = 15;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'balanceOf', _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].checkBrowserCompatibility().selectedAddress);

              case 15:
                _context.t0 = _context.sent.toNumber();
                _context.t1 = Math.pow(10, contractDecimals);
                addressBalance = (_context.t0 / _context.t1).toString();
                _context.next = 20;
                return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getContractProp(value, 'allowance', _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].checkBrowserCompatibility().selectedAddress, xplAddress);

              case 20:
                _context.t2 = _context.sent;
                _context.t3 = Math.pow(10, contractDecimals);
                distributorContractAllowance = _context.t2 / _context.t3;
                // update state
                this.setState({
                  contractName: contractName,
                  contractSymbol: contractSymbol,
                  contractDecimals: contractDecimals,
                  addressBalance: addressBalance,
                  distributorContractAllowance: distributorContractAllowance,
                  contractInputCssClass: "is-success"
                });
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t4 = _context["catch"](3);
                // console.log("Invalid contract Address / Check network");
                this.emptyContractProps();

              case 29:
                _context.prev = 29;
                this.setState({
                  isProcessing: false
                });
                return _context.finish(29);

              case 32:
                _context.next = 35;
                break;

              case 34:
                this.emptyContractProps();

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 26, 29, 32]]);
      }));

      function handleContractAddress(_x) {
        return _handleContractAddress.apply(this, arguments);
      }

      return handleContractAddress;
    }()
  }, {
    key: "handleAmount",
    value: function handleAmount(amountValue) {
      var totalAmount;

      if (!this.state.isUnifiedAmount) {
        var amountsArray = amountValue.replace(/\s+/g, "").split(',');
        amountsArray = _utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.removeFalsey(amountsArray);
        var validateAmounts = !amountsArray.some(function (amt) {
          return !Number(amt);
        });

        if (validateAmounts && amountsArray.length) {
          var amountCount = amountsArray.length;
          totalAmount = amountCount + " (" + amountsArray.reduce(_utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.numberReducer) + ")";
          this.setState({
            totalAmount: totalAmount,
            tokenAmount: amountsArray,
            tokenAmountInputCssClass: "is-success"
          });
        } else {
          this.setState({
            tokenAmountInputCssClass: "is-danger"
          });
        }
      } else if (this.state.isUnifiedAmount) {
        var amounts = Number(amountValue);

        if (amounts) {
          totalAmount = "Unified";
          this.setState({
            totalAmount: totalAmount,
            tokenAmount: amounts,
            tokenAmountInputCssClass: "is-success"
          });
        } else {
          this.setState({
            tokenAmountInputCssClass: "is-danger"
          });
        }
      }
    }
  }, {
    key: "handleAddresses",
    value: function handleAddresses(addressesValue) {
      var totalAddresses,
          addressesArray = addressesValue.replace(/\s+/g, "").split(',');
      addressesArray = _utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.removeFalsey(addressesArray);
      addressesArray = _utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.removeSpecialChars(addressesArray); // let validAddresses = Web3ConnectionHandler.validateAddress(addressesArray);

      if (
      /*validAddresses*/
      addressesArray.length) {
        totalAddresses = addressesArray.length;
        this.setState({
          totalAddresses: totalAddresses,
          textAreaWithAddresses: addressesArray,
          textAreaWithAddressesInputCssClass: "is-success"
        });
      } else {
        this.setState({
          textAreaWithAddressesInputCssClass: "is-danger"
        });
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var self = this; //handle addresses

      if (!(self.state.textAreaWithAddresses instanceof Array) || !(self.state.textAreaWithAddresses.length > 0)) {
        return window.alert("ETH Addresses must be comma separated and not empty.");
      } // handle amount


      var sumAmount;

      if (self.state.isUnifiedAmount) {
        if (!Number(this.state.tokenAmount)) {
          return window.alert("Invalid amount of token.");
        }

        sumAmount = this.state.tokenAmount * this.state.textAreaWithAddresses.length;
      } else {
        if (!(self.state.tokenAmount instanceof Array) || !(self.state.tokenAmount.length > 0)) {
          return window.alert("Amount is splitted and amount must be comma separated.");
        }

        if (self.state.tokenAmount.length != self.state.textAreaWithAddresses.length) {
          return window.alert("Amount is splitted and addresses count must be the same with amount count.");
        }

        sumAmount = self.state.tokenAmount.reduce(_utils_misc__WEBPACK_IMPORTED_MODULE_23___default.a.numberReducer);
      } //handle contract address


      var contractReady = self.state.contractAddress && self.state.contractDecimals !== "";
      var hasEnoughBalance = self.state.addressBalance >= sumAmount;

      if (!contractReady) {
        var message = "Contract address is invalid";
        return window.alert(message);
      } else if (!hasEnoughBalance) {
        var _message = "You do not have enough balance.";
        return window.alert(_message);
      } // window.alert("Contract is ready to be sent");


      self.handleDistribution();
    }
  }, {
    key: "handleDistribution",
    value: function handleDistribution() {
      var self = this;

      var init = function init() {
        if (self.state.isUnifiedAmount) {
          self.handleDistributionWithUnifiedAmount();
        } else {
          self.handleDistributionWithSplittedAmount();
        } // update transactionBatch


        var batches = [],
            length = Math.ceil(self.state.textAreaWithAddresses.length / self.state.transferPerBatch);

        for (var i = 0; i < length; i++) {
          var temp = {
            status: "pending",
            hash: "waiting for broadcast"
          };
          batches[i] = temp;
        }

        self.setState({
          transactionBatch: batches,
          showTransactionMonitor: true
        });
      };

      if (self.state.distributorContractAllowance < 1) {
        _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].approveSpender(self.state.contractAddress, self.state.addressBalance * Math.pow(10, self.state.contractDecimals)).then(function (txHash) {
          self.setState({
            isProcessing: true,
            transactionInProgress: true
          });
          return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getMinedTransactionReceipt(txHash);
        }).then(function (txReceipt) {
          if (txReceipt.status == "0x0") {
            //transaction failed!
            return window.alert("Approval transaction failed.");
          }

          self.setState({
            distributorContractAllowance: self.state.addressBalance
          });
          init();
        }).catch(function (err) {
          window.alert("Error occurred in approval.");
        }).finally(function () {
          self.setState({
            isProcessing: false,
            transactionInProgress: false
          });
        });
      } else {
        init();
      }
    }
  }, {
    key: "handleDistributionWithSplittedAmount",
    value: function handleDistributionWithSplittedAmount() {
      var iterator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.transferPerBatch;
      iterator = Number(iterator);
      size = Number(size);
      var self = this;
      var chunkAddresses = self.state.textAreaWithAddresses.slice(iterator * size, (iterator + 1) * size);
      var chunkAmount = self.state.tokenAmount.slice(iterator * size, (iterator + 1) * size);
      chunkAmount = chunkAmount.map(function (amt) {
        return amt * Math.pow(10, self.state.contractDecimals);
      });

      if (!chunkAddresses.length) {
        return window.alert("Distribution completed!");
      }

      self.setState({
        isProcessing: true,
        transactionInProgress: true
      });
      _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].distributeToken("distributeForeignTokenWithSplittedAmount", self.state.contractAddress, chunkAddresses, chunkAmount).then(function (txHash) {
        self.updateMonitor(iterator, {
          status: "processing",
          hash: txHash
        });
        return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getMinedTransactionReceipt(txHash);
      }).then(function (txReceipt) {
        if (txReceipt.status == "0x0") {
          //transaction failed!
          self.updateMonitor(iterator, {
            hash: txReceipt.transactionHash,
            onClick: self.restartDistribution
          });
          return window.alert("Transaction at index " + iterator + " failed.");
        }

        self.updateMonitor(iterator, {
          status: "success",
          hash: txReceipt.transactionHash
        }); //call the next transaction

        self.handleDistributionWithSplittedAmount(iterator + 1);
      }).catch(function (err) {
        self.updateMonitor(iterator, {
          hash: "txhash unknown",
          onClick: self.restartDistribution
        });
        window.alert("Error occurred at transaction index " + iterator);
      }).finally(function () {
        self.setState({
          isProcessing: false,
          transactionInProgress: false
        });
      });
    }
  }, {
    key: "handleDistributionWithUnifiedAmount",
    value: function handleDistributionWithUnifiedAmount() {
      var iterator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.transferPerBatch;
      iterator = Number(iterator);
      size = Number(size);
      var self = this;
      var chunkAddresses = self.state.textAreaWithAddresses.slice(iterator * size, (iterator + 1) * size);
      var amount = self.state.tokenAmount * Math.pow(10, self.state.contractDecimals);

      if (!chunkAddresses.length) {
        return window.alert("Distribution completed!");
      }

      self.setState({
        isProcessing: true,
        transactionInProgress: true
      });
      _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].distributeToken("distributeForeignTokenWithUnifiedAmount", self.state.contractAddress, chunkAddresses, amount).then(function (txHash) {
        self.updateMonitor(iterator, {
          status: "processing",
          hash: txHash
        });
        return _utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].getMinedTransactionReceipt(txHash);
      }).then(function (txReceipt) {
        if (txReceipt.status == "0x0") {
          //transaction failed!
          self.updateMonitor(iterator, {
            hash: txReceipt.transactionHash,
            onClick: self.restartDistribution
          });
          return window.alert("Transaction at index " + iterator + " failed.");
        }

        self.updateMonitor(iterator, {
          status: "success",
          hash: txReceipt.transactionHash
        }); //call the next transaction

        self.handleDistributionWithUnifiedAmount(iterator + 1);
      }).catch(function (err) {
        self.updateMonitor(iterator, {
          hash: "txhash unknown",
          onClick: self.restartDistribution
        });
        window.alert("Error occurred at transaction index " + iterator);
        console.log(err);
      }).finally(function () {
        self.setState({
          isProcessing: false,
          transactionInProgress: false
        });
      });
    }
  }, {
    key: "updateMonitor",
    value: function updateMonitor(index, properties) {
      this.setState(function (state, props) {
        var newBatch = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.transactionBatch);

        newBatch[index] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, properties);
        return {
          transactionBatch: newBatch
        };
      });
    }
  }, {
    key: "restartDistribution",
    value: function restartDistribution(e) {
      var iterator = e.target.getAttribute("data-index");

      if (this.state.isUnifiedAmount) {
        this.handleDistributionWithUnifiedAmount(iterator);
      } else {
        this.handleDistributionWithSplittedAmount(iterator);
      }
    }
  }, {
    key: "emptyContractProps",
    value: function emptyContractProps() {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({
        contractInputCssClass: "is-danger"
      }, this.contractProps));
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({
        contractAddress: "",
        contractInputCssClass: "",
        tokenAmountInputCssClass: "",
        textAreaWithAddressesInputCssClass: ""
      }, this.newDistribution, this.contractProps));
    }
  }, {
    key: "formFields",
    value: function formFields() {
      return {
        contractAddress: {
          type: "text",
          name: "contractAddress",
          placeholder: "Contract Address",
          className: this.state.contractInputCssClass + " is-large",
          value: this.state.contractAddress,
          onBlur: this.handleBlur,
          onChange: this.handleChange
        },
        contractDecimals: {
          type: "text",
          name: "contractDecimals",
          placeholder: "Decimals",
          className: "is-medium",
          readOnly: true,
          value: this.state.contractDecimals
        },
        addressBalance: {
          type: "text",
          name: "addressBalance",
          placeholder: "Balance",
          className: "input is-medium",
          readOnly: true,
          value: this.state.addressBalance
        },
        distributorContractAllowance: {
          type: "text",
          name: "distributorContractAllowance",
          placeholder: "Allowance",
          className: "input is-medium",
          readOnly: true,
          value: this.state.distributorContractAllowance
        },
        amountController: [{
          type: "radio",
          name: "amountController",
          placeholder: "Unified amount",
          defaultChecked: true,
          onChange: this.toggleAmount
        }, {
          type: "radio",
          name: "amountController",
          placeholder: "Split amount",
          onChange: this.toggleAmount
        }],
        uploadFileInput: {
          name: "uploadFileInput",
          onChange: this.handleChange,
          label: "Import data (optional)",
          fileName: this.state.selectedFileName
        },
        tokenAmountInput: {
          type: "text",
          name: "tokenAmount",
          className: this.state.tokenAmountInputCssClass + " is-large",
          value: this.state.tokenAmount,
          placeholder: "Amount of token",
          onBlur: this.handleBlur,
          onChange: this.handleChange
        },
        tokenAmountTextArea: {
          name: "tokenAmount",
          className: this.state.tokenAmountInputCssClass,
          value: this.state.tokenAmount,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          placeholder: "Unlimited comma separated amount in order of addresses \n240, 50, 100, 10, 75, 13, 5",
          tokenAmountType: "textarea"
        },
        textAreaWithAddresses: {
          name: "textAreaWithAddresses",
          className: this.state.textAreaWithAddressesInputCssClass,
          value: this.state.textAreaWithAddresses,
          placeholder: "Unlimited comma separated addresses\n0x138e326c28114f65202b4ed82a1eecdf81451e09, 0xca353c48ab32b8baba846477d28254309be5e7c6",
          onBlur: this.handleBlur,
          onChange: this.handleChange
        },
        submitButton: {
          type: "submit",
          text: "Send Transaction",
          className: "button is-large is-link",
          disabled: this.state.transactionInProgress ? true : null
        },
        resetButton: {
          type: "button",
          text: "Reset",
          className: "button is-medium is-danger",
          onClick: this.handleReset
        },
        monitorButton: {
          type: "button",
          text: "Show monitor",
          className: "button is-warning is-small",
          onClick: this.toggleTransactionMonitor
        },
        transferPerBatch: {
          name: "transferPerBatch",
          value: this.state.transferPerBatch,
          onChange: this.handleChange,
          className: "is-small",
          options: [{
            value: "100"
          }, {
            value: "150"
          }, {
            value: "180"
          }, {
            value: "200"
          }, {
            value: "220"
          }, {
            value: "250"
          }]
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_utils_web3_connect__WEBPACK_IMPORTED_MODULE_22__["Web3ConnectionHandler"].checkBrowserCompatibility()) {
        this.setState({
          isWeb3Browser: true
        });
        this.unlockBrowser();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.web3BrowserConnected && this.state.isWeb3Browser) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 594
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_SubHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section", {
          className: "halfpage-height mb-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 596
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "columns",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 598
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column is-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 599
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Contract__WEBPACK_IMPORTED_MODULE_16__["ConnectedContractProps"], {
          contractAddress: this.state.contractAddress,
          contractName: this.state.contractName,
          contractSymbol: this.state.contractSymbol,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 600
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 606
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "is-size-6 has-background-white border-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 607
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().monitorButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 608
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 610
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          },
          __self: this
        }, "Transfer per transaction"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Select"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().transferPerBatch, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 612
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "columns",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 618
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("form", {
          className: "column is-8",
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 619
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().contractAddress, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 620
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "columns",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 622
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().contractDecimals, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 624
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 626
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().addressBalance, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 627
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 629
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().distributorContractAllowance, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 630
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["MultipleCheckBoxes"], {
          inputArray: this.formFields().amountController,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 634
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["FileInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().uploadFileInput, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 637
          },
          __self: this
        })), this.state.isUnifiedAmount && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().tokenAmountInput, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 643
          },
          __self: this
        })), !this.state.isUnifiedAmount && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["TextArea"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().tokenAmountTextArea, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 647
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["TextArea"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().textAreaWithAddresses, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 652
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 656
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "control buttons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 657
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().submitButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 658
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_FormElements__WEBPACK_IMPORTED_MODULE_14__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.formFields().resetButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 661
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 668
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(DistributionStat, {
          totalAmount: this.state.totalAmount,
          totalAddresses: this.state.totalAddresses,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 669
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 673
          },
          __self: this
        }), this.state.isProcessing && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 676
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 678
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Warning__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 679
          },
          __self: this
        }))))), this.state.showTransactionMonitor && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_TransactionMonitor__WEBPACK_IMPORTED_MODULE_17__["TransactionMonitor"], {
          onClick: this.toggleTransactionMonitor,
          monitorArray: this.state.transactionBatch,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 686
          },
          __self: this
        }));
      } else if (this.state.isWeb3Browser) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 695
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_SubHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 696
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Web3Status__WEBPACK_IMPORTED_MODULE_15__["LockedWeb3Browser"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 697
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
          className: "button is-warning is-large",
          onClick: this.unlockBrowser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 698
          },
          __self: this
        }, "Unlock Metamask")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_layouts_Main__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 709
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_SubHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 710
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Web3Status__WEBPACK_IMPORTED_MODULE_15__["NoWeb3Browser"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 711
          },
          __self: this
        }));
      }
    }
  }]);

  return TokenDistributor;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

function DistributionStat(props) {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "is-size-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
    className: "is-size-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: this
  }, "Statistics"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: this
  }, "Amount count: ", props.totalAmount || 0, " ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }), "Address count: ", props.totalAddresses || 0));
}

/* harmony default export */ __webpack_exports__["default"] = (TokenDistributor);

/***/ }),

/***/ "./utils/fileHelpers.js":
/*!******************************!*\
  !*** ./utils/fileHelpers.js ***!
  \******************************/
/*! exports provided: SpreadsheetHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadsheetHelper", function() { return SpreadsheetHelper; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "xlsx");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




var SpreadsheetHelper =
/*#__PURE__*/
function () {
  function SpreadsheetHelper() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SpreadsheetHelper);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SpreadsheetHelper, null, [{
    key: "validateFileType",
    value: function validateFileType(type) {
      var types = ["application/vnd.oasis.opendocument.spreadsheet", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/json"];
      return types.includes(type);
    }
  }, {
    key: "readFile",
    value: function readFile(file) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        if (!SpreadsheetHelper.validateFileType(file.type)) {
          return reject("Invalid file type");
        }

        var reader = new FileReader();

        reader.onload = function (e) {
          var result = e.target.result,
              json;

          if (file.type === "application/json") {
            return resolve(result);
          } else {
            var sheet = xlsx__WEBPACK_IMPORTED_MODULE_3___default.a.read(result, {
              type: "binary"
            });
            var sheetName = sheet.SheetNames[0] || sheet.Workbook.Sheets[0].name;
            var sheetToJson = xlsx__WEBPACK_IMPORTED_MODULE_3___default.a.utils.sheet_to_json(sheet.Sheets[sheetName]);
            return resolve(sheetToJson);
          }
        };

        reader.onerror = function (e) {
          reader.abort();
          return reject("Error reading file");
        };

        reader.readAsBinaryString(file);
      });
    }
  }, {
    key: "readObjectProperty",
    value: function readObjectProperty(arrayOfObject) {
      // columns -> ["address", ?"amount"]
      var addresses = [],
          amounts = [];

      for (var i = 0; i < arrayOfObject.length; i++) {
        var temp = arrayOfObject[i];
        var addr = temp["Address"] || temp["address"] || temp["Addresses"] || temp["addresses"];
        var amt = temp["Amount"] || temp["amount"] || temp["Amounts"] || temp["amounts"];
        if (addr) addresses.push(addr);
        if (amt) amounts.push(temp["amount"]);
      }

      if (amounts.length > 0) return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve({
        addresses: addresses,
        amounts: amounts
      });
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve({
        addresses: addresses
      });
    }
  }]);

  return SpreadsheetHelper;
}();

/***/ }),

/***/ "./utils/misc.js":
/*!***********************!*\
  !*** ./utils/misc.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

module.exports = {
  numberReducer: function numberReducer(accumulator, currentValue) {
    return Number(accumulator) + Number(currentValue);
  },
  removeFalsey: function removeFalsey(arr) {
    return arr.filter(function (item) {
      return item;
    });
  },
  removeSpecialChars: function removeSpecialChars(arr) {
    var specialChars = ".\/|=+-)(*&^%₦#@!~`<>?:;\"'}{";
    return arr.filter(function (item) {
      return !specialChars.includes(item);
    });
  },
  chunkArray: function chunkArray(arr, size) {
    var container = [];

    for (var i = 0; i < arr.length; i += size) {
      var temp = arr.slice(i, i + size);
      container.push(temp);
    }

    return container;
  },
  delay: function delay(ms) {
    return new _promise.default(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
};

/***/ }),

/***/ "./utils/web3-connect.js":
/*!*******************************!*\
  !*** ./utils/web3-connect.js ***!
  \*******************************/
/*! exports provided: Web3ConnectionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3ConnectionHandler", function() { return Web3ConnectionHandler; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _abi_distributor_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abi/distributor.json */ "./abi/distributor.json");
var _abi_distributor_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../abi/distributor.json */ "./abi/distributor.json", 1);







var xplAddress = "0x51f43d0c05eEfdEB70eEAf973e0b8286E494902D";
var networkKey = {
  "1": {
    "name": "Ethereum Main Network",
    "colour": "success"
  },
  "2": {
    "name": "Morden Test network",
    "colour": "dark"
  },
  "3": {
    "name": "Ropsten Test Network",
    "colour": "danger"
  },
  "4": {
    "name": "Rinkeby Test Network",
    "colour": "warning"
  },
  "42": {
    "name": "Kovan Test Network",
    "colour": "link"
  },
  "5": {
    "name": "Goerli Test Network",
    "colour": "info"
  },
  "60": {
    "name": "Gochain Network",
    "colour": "primary"
  }
};
var Web3ConnectionHandler =
/*#__PURE__*/
function () {
  function Web3ConnectionHandler() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Web3ConnectionHandler);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Web3ConnectionHandler, null, [{
    key: "checkBrowserCompatibility",
    value: function checkBrowserCompatibility() {
      if (typeof window !== 'undefined' && (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined')) {
        return window['ethereum'] || window.web3.currentProvider;
      }
    }
  }, {
    key: "enableWeb3Browser",
    value: function () {
      var _enableWeb3Browser = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var provider, browserProperties, request;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                provider = Web3ConnectionHandler.checkBrowserCompatibility();

                if (!provider) {
                  _context.next = 16;
                  break;
                }

                browserProperties = {};
                _context.prev = 3;
                _context.next = 6;
                return provider.enable();

              case 6:
                request = _context.sent;
                browserProperties.selectedAddress = request[0];
                browserProperties.networkVersion = provider.networkVersion;
                return _context.abrupt("return", browserProperties);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_context.t0));
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12]]);
      }));

      function enableWeb3Browser() {
        return _enableWeb3Browser.apply(this, arguments);
      }

      return enableWeb3Browser;
    }()
  }, {
    key: "instantiateWeb3Browser",
    value: function instantiateWeb3Browser() {
      var provider = Web3ConnectionHandler.checkBrowserCompatibility();

      if (provider) {
        var _web = new Web3(provider);

        return _web;
      }
    }
  }, {
    key: "connectedNetwork",
    value: function connectedNetwork() {
      return networkKey[Web3ConnectionHandler.checkBrowserCompatibility().networkVersion] || {
        "name": "Unknown Network",
        "colour": "black"
      };
    }
  }, {
    key: "getContractProp",
    value: function getContractProp(contractAddress, method) {
      for (var _len = arguments.length, methodParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        methodParams[_key - 2] = arguments[_key];
      }

      var web3 = Web3ConnectionHandler.instantiateWeb3Browser();
      var contract = web3.eth.contract(_abi_distributor_json__WEBPACK_IMPORTED_MODULE_6__).at(contractAddress);
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        contract[method].apply(contract, methodParams.concat([function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }]));
      });
    }
  }, {
    key: "approveSpender",
    value: function approveSpender(contractAddress, amount) {
      var spender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : xplAddress;
      var web3 = Web3ConnectionHandler.instantiateWeb3Browser();
      var contract = web3.eth.contract(_abi_distributor_json__WEBPACK_IMPORTED_MODULE_6__).at(contractAddress);
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        contract["approve"].sendTransaction(spender, amount, function (err, txHash) {
          if (err) {
            reject(err);
          } else {
            resolve(txHash);
          }
        });
      });
    }
  }, {
    key: "distributeToken",
    value: function distributeToken(method, foreignContractAddress, addresses, amount) {
      var contractAddress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : xplAddress;
      var web3 = Web3ConnectionHandler.instantiateWeb3Browser();
      var contract = web3.eth.contract(_abi_distributor_json__WEBPACK_IMPORTED_MODULE_6__).at(contractAddress);
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        contract[method].sendTransaction(foreignContractAddress, addresses, amount, function (err, txHash) {
          if (err) {
            reject(err);
          } else {
            resolve(txHash);
          }
        });
      });
    }
  }, {
    key: "delay",
    value: function delay() {
      var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }, {
    key: "getMinedTransactionReceipt",
    value: function getMinedTransactionReceipt(txHash) {
      var web3 = Web3ConnectionHandler.instantiateWeb3Browser();
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        web3.eth.getTransactionReceipt(txHash, function (err, receipt) {
          if (receipt) {
            resolve(receipt);
          } else if (err == null) {
            Web3ConnectionHandler.delay().then(function () {
              resolve(Web3ConnectionHandler.getMinedTransactionReceipt(txHash));
            });
          } else {
            reject();
          }
        });
      });
    }
  }, {
    key: "validateAddress",
    value: function validateAddress(address) {
      if (typeof address == "string") {
        return web3.isAddress(address);
      } else if (address instanceof Array && address.length > 0) {
        return !address.some(function (addr) {
          return !web3.isAddress(addr);
        });
      } else {
        return false;
      }
    }
  }]);

  return Web3ConnectionHandler;
}();

/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** multi ./pages/token-distributor.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abdulhakeem/Express/exsender/pages/token-distributor.js */"./pages/token-distributor.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "xlsx":
/*!***********************!*\
  !*** external "xlsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xlsx");

/***/ })

/******/ });
//# sourceMappingURL=token-distributor.js.map