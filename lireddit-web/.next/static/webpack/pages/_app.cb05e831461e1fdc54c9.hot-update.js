self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @urql/exchange-graphcache */ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\liReddit\\lireddit-web\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function betterUpdateQuery(cache, qi, result, fn) {
  return cache.updateQuery(qi, function (data) {
    return fn(result, data);
  });
}

var client = (0,urql__WEBPACK_IMPORTED_MODULE_4__.createClient)({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  },
  // * Permet de rajouter le cookie
  exchanges: [urql__WEBPACK_IMPORTED_MODULE_4__.dedupExchange, (0,_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_5__.cacheExchange)({
    updates: {
      Mutation: {
        login: function login(_result, _args, cache, _info) {
          /*cache.updateQuery({ query :  MeDocument} , data => { data.value = })*/
          betterUpdateQuery(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument
          }, _result, function (result, query) {
            if (result.login.errors) {
              return query;
            } else {
              return {
                me: result.login.user
              };
            }
          });
        }
        /* register: (_result, args, cache, info) => {
        
          betterUpdateQuery<RegisterMutation, MeQuery>(
            cache,
            { query: MeDocument },
            _result,
            (result, query) => {
              if (result.register.errors) {
                return query;
              } else {
                return { me: result.register.user };
              }
            }
          );
        },*/

      }
    }
  }), urql__WEBPACK_IMPORTED_MODULE_4__.fetchExchange]
});

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(urql__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    value: client,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {
      resetCSS: true,
      theme: _theme__WEBPACK_IMPORTED_MODULE_2__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ColorModeProvider, {
        options: {
          useSystemColorMode: true,
          initialColorMode: "dark"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbImJldHRlclVwZGF0ZVF1ZXJ5IiwiY2FjaGUiLCJxaSIsInJlc3VsdCIsImZuIiwidXBkYXRlUXVlcnkiLCJkYXRhIiwiY2xpZW50IiwiY3JlYXRlQ2xpZW50IiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImxvZ2luIiwiX3Jlc3VsdCIsIl9hcmdzIiwiX2luZm8iLCJxdWVyeSIsIk1lRG9jdW1lbnQiLCJlcnJvcnMiLCJtZSIsInVzZXIiLCJmZXRjaEV4Y2hhbmdlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsImluaXRpYWxDb2xvck1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBT0EsU0FBU0EsaUJBQVQsQ0FDRUMsS0FERixFQUVFQyxFQUZGLEVBR0VDLE1BSEYsRUFJRUMsRUFKRixFQUtFO0FBQ0EsU0FBT0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCSCxFQUFsQixFQUFzQixVQUFDSSxJQUFEO0FBQUEsV0FBVUYsRUFBRSxDQUFDRCxNQUFELEVBQVNHLElBQVQsQ0FBWjtBQUFBLEdBQXRCLENBQVA7QUFDRDs7QUFFRCxJQUFNQyxNQUFNLEdBQUdDLGtEQUFZLENBQUM7QUFDMUJDLEtBQUcsRUFBRSwrQkFEcUI7QUFFMUJDLGNBQVksRUFBRTtBQUFFQyxlQUFXLEVBQUU7QUFBZixHQUZZO0FBRWdCO0FBQzFDQyxXQUFTLEVBQUUsQ0FDVEMsK0NBRFMsRUFFVEMsd0VBQWEsQ0FBQztBQUNaQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFO0FBQ1JDLGFBQUssRUFBRSxlQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBaUJsQixLQUFqQixFQUF3Qm1CLEtBQXhCLEVBQWtDO0FBQ3ZDO0FBQ0FwQiwyQkFBaUIsQ0FDZkMsS0FEZSxFQUVmO0FBQUVvQixpQkFBSyxFQUFFQywwREFBVUE7QUFBbkIsV0FGZSxFQUdmSixPQUhlLEVBSWYsVUFBQ2YsTUFBRCxFQUFTa0IsS0FBVCxFQUFtQjtBQUNqQixnQkFBSWxCLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhTSxNQUFqQixFQUF5QjtBQUN2QixxQkFBT0YsS0FBUDtBQUNELGFBRkQsTUFFTztBQUNMLHFCQUFPO0FBQUVHLGtCQUFFLEVBQUVyQixNQUFNLENBQUNjLEtBQVAsQ0FBYVE7QUFBbkIsZUFBUDtBQUNEO0FBQ0YsV0FWYyxDQUFqQjtBQVlEO0FBQ0Q7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTlCa0I7QUFESDtBQURHLEdBQUQsQ0FGSixFQXNDVEMsK0NBdENTO0FBSGUsQ0FBRCxDQUEzQjs7QUE2Q0EsU0FBU0MsS0FBVCxPQUE4QztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFsQkMsU0FBa0IsUUFBbEJBLFNBQWtCO0FBQzVDLHNCQUNFLDhEQUFDLDBDQUFEO0FBQVUsU0FBSyxFQUFFdEIsTUFBakI7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFnQixjQUFRLE1BQXhCO0FBQXlCLFdBQUssRUFBRXVCLDJDQUFoQztBQUFBLDZCQUNFLDhEQUFDLCtEQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQ1BDLDRCQUFrQixFQUFFLElBRGI7QUFFUEMsMEJBQWdCLEVBQUU7QUFGWCxTQURYO0FBQUEsK0JBTUUsOERBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7S0FmUUYsSztBQWlCVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNiMDVlODMxNDYxZTFmZGM1NGM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29sb3JNb2RlUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBkZWR1cEV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlLCBQcm92aWRlciB9IGZyb20gXCJ1cnFsXCI7XG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBDYWNoZSwgUXVlcnlJbnB1dCB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7XG4gIExvZ2luTXV0YXRpb24sXG4gIE1lRG9jdW1lbnQsXG4gIC8vIFJlZ2lzdGVyTXV0YXRpb24sXG4gIE1lUXVlcnksXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5mdW5jdGlvbiBiZXR0ZXJVcGRhdGVRdWVyeTxSZXN1bHQsIFF1ZXJ5PihcbiAgY2FjaGU6IENhY2hlLFxuICBxaTogUXVlcnlJbnB1dCxcbiAgcmVzdWx0OiBhbnksXG4gIGZuOiAocjogUmVzdWx0LCBxOiBRdWVyeSkgPT4gUXVlcnlcbikge1xuICByZXR1cm4gY2FjaGUudXBkYXRlUXVlcnkocWksIChkYXRhKSA9PiBmbihyZXN1bHQsIGRhdGEgYXMgYW55KSBhcyBhbnkpO1xufVxuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcbiAgZmV0Y2hPcHRpb25zOiB7IGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiB9LCAvLyAqIFBlcm1ldCBkZSByYWpvdXRlciBsZSBjb29raWVcbiAgZXhjaGFuZ2VzOiBbXG4gICAgZGVkdXBFeGNoYW5nZSxcbiAgICBjYWNoZUV4Y2hhbmdlKHtcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIF9hcmdzLCBjYWNoZSwgX2luZm8pID0+IHtcbiAgICAgICAgICAgIC8qY2FjaGUudXBkYXRlUXVlcnkoeyBxdWVyeSA6ICBNZURvY3VtZW50fSAsIGRhdGEgPT4geyBkYXRhLnZhbHVlID0gfSkqL1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbWU6IHJlc3VsdC5sb2dpbi51c2VyIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLyogcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sKi9cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgZmV0Y2hFeGNoYW5nZSxcbiAgXSxcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciB2YWx1ZT17Y2xpZW50fT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciByZXNldENTUyB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29sb3JNb2RlUHJvdmlkZXJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsQ29sb3JNb2RlOiBcImRhcmtcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=