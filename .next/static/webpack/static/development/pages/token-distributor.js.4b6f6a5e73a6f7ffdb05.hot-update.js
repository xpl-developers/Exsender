webpackHotUpdate("static/development/pages/token-distributor.js",{

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

/***/ })

})
//# sourceMappingURL=token-distributor.js.4b6f6a5e73a6f7ffdb05.hot-update.js.map