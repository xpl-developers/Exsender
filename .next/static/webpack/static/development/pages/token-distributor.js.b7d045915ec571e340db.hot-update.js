webpackHotUpdate("static/development/pages/token-distributor.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=token-distributor.js.b7d045915ec571e340db.hot-update.js.map