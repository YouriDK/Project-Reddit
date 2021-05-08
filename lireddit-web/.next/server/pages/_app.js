(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
    resetCSS: true,
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeProvider, {
      options: {
        useSystemColorMode: true
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\theme.tsx";


const fonts = {
  mono: `'Menlo', monospace`
};
const breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__.createBreakpoints)({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
  colors: {
    black: '#16161D'
  },
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        width: "3000",
        height: "3163",
        viewBox: "0 0 3000 3163",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
          width: "3000",
          height: "3162.95",
          fill: "none"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z",
          fill: "currentColor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined),
      viewBox: '0 0 3000 3163'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwiZm9udHMiLCJtb25vIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVCcmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIiwiZXh0ZW5kVGhlbWUiLCJjb2xvcnMiLCJibGFjayIsImljb25zIiwibG9nbyIsInBhdGgiLCJ2aWV3Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZ0IsWUFBUSxNQUF4QjtBQUF5QixTQUFLLEVBQUVDLDJDQUFoQztBQUFBLDJCQUNFLDhEQUFDLCtEQUFEO0FBQ0UsYUFBTyxFQUFFO0FBQ1BDLDBCQUFrQixFQUFFO0FBRGIsT0FEWDtBQUFBLDZCQUtFLDhEQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7QUFFRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBRUEsTUFBTUssS0FBSyxHQUFHO0FBQUVDLE1BQUksRUFBRztBQUFULENBQWQ7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlFQUFpQixDQUFDO0FBQ3BDQyxJQUFFLEVBQUUsTUFEZ0M7QUFFcENDLElBQUUsRUFBRSxNQUZnQztBQUdwQ0MsSUFBRSxFQUFFLE1BSGdDO0FBSXBDQyxJQUFFLEVBQUU7QUFKZ0MsQ0FBRCxDQUFyQztBQU9BLE1BQU1ULEtBQUssR0FBR1UsNkRBQVcsQ0FBQztBQUN4QkMsUUFBTSxFQUFFO0FBQ05DLFNBQUssRUFBRTtBQURELEdBRGdCO0FBSXhCVixPQUp3QjtBQUt4QkUsYUFMd0I7QUFNeEJTLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxlQUNGO0FBQ0UsYUFBSyxFQUFDLE1BRFI7QUFFRSxjQUFNLEVBQUMsTUFGVDtBQUdFLGVBQU8sRUFBQyxlQUhWO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFLRSxhQUFLLEVBQUMsNEJBTFI7QUFBQSxnQ0FPRTtBQUFNLGVBQUssRUFBQyxNQUFaO0FBQW1CLGdCQUFNLEVBQUMsU0FBMUI7QUFBb0MsY0FBSSxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFRRTtBQUNFLFdBQUMsRUFBQyxpSUFESjtBQUVFLGNBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZFO0FBZ0JKQyxhQUFPLEVBQUU7QUFoQkw7QUFERDtBQU5pQixDQUFELENBQXpCO0FBNEJBLCtEQUFlaEIsS0FBZixFOzs7Ozs7Ozs7OztBQ3hDQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb2xvck1vZGVQcm92aWRlclxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IGNyZWF0ZUJyZWFrcG9pbnRzIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcblxuY29uc3QgZm9udHMgPSB7IG1vbm86IGAnTWVubG8nLCBtb25vc3BhY2VgIH1cblxuY29uc3QgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyh7XG4gIHNtOiAnNDBlbScsXG4gIG1kOiAnNTJlbScsXG4gIGxnOiAnNjRlbScsXG4gIHhsOiAnODBlbScsXG59KVxuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29sb3JzOiB7XG4gICAgYmxhY2s6ICcjMTYxNjFEJyxcbiAgfSxcbiAgZm9udHMsXG4gIGJyZWFrcG9pbnRzLFxuICBpY29uczoge1xuICAgIGxvZ286IHtcbiAgICAgIHBhdGg6IChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPVwiMzAwMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzE2M1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAzMDAwIDMxNjNcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMzAwMFwiIGhlaWdodD1cIjMxNjIuOTVcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTQ3MC44OSAxNDQ4LjgxTDIxNzAgMjQ4OC4xOUg4MjBWNzA2LjM5MkgyMTcwTDE0NzAuODkgMTQ0OC44MVpNMTQwOC4yMSAxNTE1LjM3TDkwOS4xOTYgMjA0NS4zVjIzOTMuNDZIMTk5OC44NEwxNDA4LjIxIDE1MTUuMzdaXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMzAwMCAzMTYzJyxcbiAgICB9LFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==