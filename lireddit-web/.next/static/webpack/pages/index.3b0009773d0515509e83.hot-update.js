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
    body = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Flex, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
        children: data.me.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
        variant: "link",
        children: " logout "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
    bg: "tomato",
    p: 4,
    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
      ml: "auto",
      mr: 2,
      children: body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VNZVF1ZXJ5IiwiZGF0YSIsImZldGNoaW5nIiwiYm9keSIsIm1lIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBUTtBQUFBOztBQUFBOztBQUFBLG9CQUN0QkMsOERBQVUsRUFEWTtBQUFBO0FBQUE7QUFBQSxNQUMxQ0MsSUFEMEMsaUJBQzFDQSxJQUQwQztBQUFBLE1BQ3BDQyxRQURvQyxpQkFDcENBLFFBRG9DOztBQUVuRCxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFDQSxNQUFJRCxRQUFKLEVBQWMsQ0FDWjtBQUNELEdBRkQsTUFFTyxJQUFJLEVBQUNELElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVHLEVBQVAsQ0FBSixFQUFlO0FBQ3BCO0FBQ0FELFFBQUksZ0JBQ0Y7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxlQUFLLEVBQUMsT0FBWjtBQUFvQixZQUFFLEVBQUUsQ0FBeEI7QUFBQSxxQkFDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLDhEQUFDLGtEQUFEO0FBQVUsWUFBSSxFQUFDLFdBQWY7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFNLGVBQUssRUFBQyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUEsb0JBREY7QUFhRCxHQWZNLE1BZUE7QUFDTDtBQUNBQSxRQUFJLGdCQUNGLDhEQUFDLG1EQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSxrQkFBTUYsSUFBSSxDQUFDRyxFQUFMLENBQVFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMscURBQUQ7QUFBUSxlQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU1EOztBQUVELHNCQUNFLDhEQUFDLGtEQUFEO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBaUIsS0FBQyxFQUFFLENBQXBCO0FBQUEsZUFDRyxHQURILGVBRUUsOERBQUMsa0RBQUQ7QUFBSyxRQUFFLEVBQUMsTUFBUjtBQUFlLFFBQUUsRUFBRSxDQUFuQjtBQUFBLGdCQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBdENNOztHQUFNSixNO1VBQ2tCQywwRDs7O0tBRGxCRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiMDAwOTc3M2QwNTE1NTA5ZTgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIExpbmsgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VNZVF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xyXG5pbnRlcmZhY2UgTmF2QmFyUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IFt7IGRhdGEsIGZldGNoaW5nIH1dID0gdXNlTWVRdWVyeSgpO1xyXG4gIGxldCBib2R5ID0gbnVsbDtcclxuICBpZiAoZmV0Y2hpbmcpIHtcclxuICAgIC8vICogRGF0YSdzIGxvYWRpbmdcclxuICB9IGVsc2UgaWYgKCFkYXRhPy5tZSkge1xyXG4gICAgLy8qIHVzZXIgbm90IGxvZ2dlZCBpblxyXG4gICAgYm9keSA9IChcclxuICAgICAgPD5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPExpbmsgY29sb3I9XCJ3aGl0ZVwiIG1yPXsyfT5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGNvbG9yPVwid2hpdGVcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vICogdXNlciBsb2dnZWQgaW5cclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDxGbGV4PlxyXG4gICAgICAgIDxCb3g+e2RhdGEubWUudXNlcm5hbWV9PC9Cb3g+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibGlua1wiPiBsb2dvdXQgPC9CdXR0b24+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBiZz1cInRvbWF0b1wiIHA9ezR9PlxyXG4gICAgICB7XCIgXCJ9XHJcbiAgICAgIDxCb3ggbWw9XCJhdXRvXCIgbXI9ezJ9PlxyXG4gICAgICAgIHtib2R5fVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=