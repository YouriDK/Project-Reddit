self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBar": function() { return /* binding */ NavBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\liReddit\\lireddit-web\\src\\components\\NavBar.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var NavBar = function NavBar(_ref) {
  _s();

  (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__.default)(_ref);

  var _useMeQuery = (0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useMeQuery)(),
      _useMeQuery2 = (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMeQuery, 1),
      _useMeQuery2$ = _useMeQuery2[0],
      data = _useMeQuery2$.data,
      fetching = _useMeQuery2$.fetching;

  var body = null;

  if (fetching) {// * Data's loading
  } else if (!(data !== null && data !== void 0 && data.me)) {//* user not logged in
  } else {// * user logged in
    }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
    bg: "tomato",
    p: 4,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
      ml: "auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Link, {
          color: "white",
          mr: 2,
          children: [" ", "Login"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/register",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Link, {
          color: "white",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(NavBar, "8DQvut1eX6vBh4GVSiANs/7NvU8=", false, function () {
  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useMeQuery];
});

_c = NavBar;

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VNZVF1ZXJ5IiwiZGF0YSIsImZldGNoaW5nIiwiYm9keSIsIm1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLG9CQUN0QkMsOERBQVUsRUFEWTtBQUFBO0FBQUE7QUFBQSxNQUMxQ0MsSUFEMEMsaUJBQzFDQSxJQUQwQztBQUFBLE1BQ3BDQyxRQURvQyxpQkFDcENBLFFBRG9DOztBQUVuRCxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFDQSxNQUFJRCxRQUFKLEVBQWMsQ0FDWjtBQUNELEdBRkQsTUFFTyxJQUFJLEVBQUNELElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVHLEVBQVAsQ0FBSixFQUFlLENBQ3BCO0FBQ0QsR0FGTSxNQUVBLENBQ0w7QUFDRDs7QUFFRCxzQkFDRSw4REFBQyxrREFBRDtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQWlCLEtBQUMsRUFBRSxDQUFwQjtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxlQUFLLEVBQUMsT0FBWjtBQUFvQixZQUFFLEVBQUUsQ0FBeEI7QUFBQSxxQkFDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLDhEQUFDLGtEQUFEO0FBQVUsWUFBSSxFQUFDLFdBQWY7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFNLGVBQUssRUFBQyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBMUJNOztHQUFNTCxNO1VBQ2tCQywwRDs7O0tBRGxCRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE4ZGY2M2NjM2E3MTIxYTg5MzUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIExpbmsgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VNZVF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VNZVF1ZXJ5KCk7XHJcbiAgbGV0IGJvZHkgPSBudWxsO1xyXG4gIGlmIChmZXRjaGluZykge1xyXG4gICAgLy8gKiBEYXRhJ3MgbG9hZGluZ1xyXG4gIH0gZWxzZSBpZiAoIWRhdGE/Lm1lKSB7XHJcbiAgICAvLyogdXNlciBub3QgbG9nZ2VkIGluXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vICogdXNlciBsb2dnZWQgaW5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGJnPVwidG9tYXRvXCIgcD17NH0+XHJcbiAgICAgIDxCb3ggbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxMaW5rIGNvbG9yPVwid2hpdGVcIiBtcj17Mn0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICA8TGluayBjb2xvcj1cIndoaXRlXCI+UmVnaXN0ZXI8L0xpbms+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9