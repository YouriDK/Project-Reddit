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
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
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
  } else if (!(data !== null && data !== void 0 && data.me)) {
    //* user not logged in
    body = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Link, {
          color: "white",
          mr: 2,
          children: [" ", "Login"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/register",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Link, {
          color: "white",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  } else {
    // * user logged in
    body = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
      children: data.me.username
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
    bg: "tomato",
    p: 4,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Flex, {
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
        ml: "auto",
        children: body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
        variant: "link",
        children: " logout "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VNZVF1ZXJ5IiwiZGF0YSIsImZldGNoaW5nIiwiYm9keSIsIm1lIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLG9CQUN0QkMsOERBQVUsRUFEWTtBQUFBO0FBQUE7QUFBQSxNQUMxQ0MsSUFEMEMsaUJBQzFDQSxJQUQwQztBQUFBLE1BQ3BDQyxRQURvQyxpQkFDcENBLFFBRG9DOztBQUVuRCxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFDQSxNQUFJRCxRQUFKLEVBQWMsQ0FDWjtBQUNELEdBRkQsTUFFTyxJQUFJLEVBQUNELElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVHLEVBQVAsQ0FBSixFQUFlO0FBQ3BCO0FBQ0FELFFBQUksZ0JBQ0Y7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxlQUFLLEVBQUMsT0FBWjtBQUFvQixZQUFFLEVBQUUsQ0FBeEI7QUFBQSxxQkFDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLDhEQUFDLGtEQUFEO0FBQVUsWUFBSSxFQUFDLFdBQWY7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFNLGVBQUssRUFBQyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUEsb0JBREY7QUFhRCxHQWZNLE1BZUE7QUFDTDtBQUNBQSxRQUFJLGdCQUFHLDhEQUFDLGtEQUFEO0FBQUEsZ0JBQU1GLElBQUksQ0FBQ0csRUFBTCxDQUFRQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFLDhEQUFDLGtEQUFEO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBaUIsS0FBQyxFQUFFLENBQXBCO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBQSxpQkFDRyxHQURILGVBRUUsOERBQUMsa0RBQUQ7QUFBSyxVQUFFLEVBQUMsTUFBUjtBQUFBLGtCQUFnQkY7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UsOERBQUMscURBQUQ7QUFBUSxlQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQWxDTTs7R0FBTUosTTtVQUNrQkMsMEQ7OztLQURsQkQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYjI2ZWY2ZDQ4MTA1ZjQyZTYwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBMaW5rIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlTWVRdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9idXR0b25cIjtcclxuaW50ZXJmYWNlIE5hdkJhclByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoe30pID0+IHtcclxuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZU1lUXVlcnkoKTtcclxuICBsZXQgYm9keSA9IG51bGw7XHJcbiAgaWYgKGZldGNoaW5nKSB7XHJcbiAgICAvLyAqIERhdGEncyBsb2FkaW5nXHJcbiAgfSBlbHNlIGlmICghZGF0YT8ubWUpIHtcclxuICAgIC8vKiB1c2VyIG5vdCBsb2dnZWQgaW5cclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxMaW5rIGNvbG9yPVwid2hpdGVcIiBtcj17Mn0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICA8TGluayBjb2xvcj1cIndoaXRlXCI+UmVnaXN0ZXI8L0xpbms+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyAqIHVzZXIgbG9nZ2VkIGluXHJcbiAgICBib2R5ID0gPEJveD57ZGF0YS5tZS51c2VybmFtZX08L0JveD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBiZz1cInRvbWF0b1wiIHA9ezR9PlxyXG4gICAgICA8RmxleD5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgPEJveCBtbD1cImF1dG9cIj57Ym9keX08L0JveD5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJsaW5rXCI+IGxvZ291dCA8L0J1dHRvbj5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==