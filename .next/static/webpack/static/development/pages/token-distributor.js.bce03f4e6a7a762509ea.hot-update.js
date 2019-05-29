webpackHotUpdate("static/development/pages/token-distributor.js",{

/***/ "./components/SocialLink.js":
/*!**********************************!*\
  !*** ./components/SocialLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=token-distributor.js.bce03f4e6a7a762509ea.hot-update.js.map