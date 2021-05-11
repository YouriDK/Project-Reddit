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
        login: function login(_result, args, cache, info) {
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
        },
        register: function register(_result, args, cache, info) {
          /*cache.updateQuery({ query :  MeDocument} , data => { data.value = })*/
          betterUpdateQuery(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument
          }, _result, function (result, query) {
            if (result.register.errors) {
              return query;
            } else {
              return {
                me: result.register.user
              };
            }
          });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbImJldHRlclVwZGF0ZVF1ZXJ5IiwiY2FjaGUiLCJxaSIsInJlc3VsdCIsImZuIiwidXBkYXRlUXVlcnkiLCJkYXRhIiwiY2xpZW50IiwiY3JlYXRlQ2xpZW50IiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJleGNoYW5nZXMiLCJkZWR1cEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImxvZ2luIiwiX3Jlc3VsdCIsImFyZ3MiLCJpbmZvIiwicXVlcnkiLCJNZURvY3VtZW50IiwiZXJyb3JzIiwibWUiLCJ1c2VyIiwicmVnaXN0ZXIiLCJmZXRjaEV4Y2hhbmdlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsImluaXRpYWxDb2xvck1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBT0EsU0FBU0EsaUJBQVQsQ0FDRUMsS0FERixFQUVFQyxFQUZGLEVBR0VDLE1BSEYsRUFJRUMsRUFKRixFQUtFO0FBQ0EsU0FBT0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCSCxFQUFsQixFQUFzQixVQUFDSSxJQUFEO0FBQUEsV0FBVUYsRUFBRSxDQUFDRCxNQUFELEVBQVNHLElBQVQsQ0FBWjtBQUFBLEdBQXRCLENBQVA7QUFDRDs7QUFFRCxJQUFNQyxNQUFNLEdBQUdDLGtEQUFZLENBQUM7QUFDMUJDLEtBQUcsRUFBRSwrQkFEcUI7QUFFMUJDLGNBQVksRUFBRTtBQUFFQyxlQUFXLEVBQUU7QUFBZixHQUZZO0FBRWdCO0FBQzFDQyxXQUFTLEVBQUUsQ0FDVEMsK0NBRFMsRUFFVEMsd0VBQWEsQ0FBQztBQUNaQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFO0FBQ1JDLGFBQUssRUFBRSxlQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBZ0JsQixLQUFoQixFQUF1Qm1CLElBQXZCLEVBQWdDO0FBQ3JDO0FBQ0FwQiwyQkFBaUIsQ0FDZkMsS0FEZSxFQUVmO0FBQUVvQixpQkFBSyxFQUFFQywwREFBVUE7QUFBbkIsV0FGZSxFQUdmSixPQUhlLEVBSWYsVUFBQ2YsTUFBRCxFQUFTa0IsS0FBVCxFQUFtQjtBQUNqQixnQkFBSWxCLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhTSxNQUFqQixFQUF5QjtBQUN2QixxQkFBT0YsS0FBUDtBQUNELGFBRkQsTUFFTztBQUNMLHFCQUFPO0FBQUVHLGtCQUFFLEVBQUVyQixNQUFNLENBQUNjLEtBQVAsQ0FBYVE7QUFBbkIsZUFBUDtBQUNEO0FBQ0YsV0FWYyxDQUFqQjtBQVlELFNBZk87QUFnQlJDLGdCQUFRLEVBQUUsa0JBQUNSLE9BQUQsRUFBVUMsSUFBVixFQUFnQmxCLEtBQWhCLEVBQXVCbUIsSUFBdkIsRUFBZ0M7QUFDeEM7QUFDQXBCLDJCQUFpQixDQUNmQyxLQURlLEVBRWY7QUFBRW9CLGlCQUFLLEVBQUVDLDBEQUFVQTtBQUFuQixXQUZlLEVBR2ZKLE9BSGUsRUFJZixVQUFDZixNQUFELEVBQVNrQixLQUFULEVBQW1CO0FBQ2pCLGdCQUFJbEIsTUFBTSxDQUFDdUIsUUFBUCxDQUFnQkgsTUFBcEIsRUFBNEI7QUFDMUIscUJBQU9GLEtBQVA7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBTztBQUFFRyxrQkFBRSxFQUFFckIsTUFBTSxDQUFDdUIsUUFBUCxDQUFnQkQ7QUFBdEIsZUFBUDtBQUNEO0FBQ0YsV0FWYyxDQUFqQjtBQVlEO0FBOUJPO0FBREg7QUFERyxHQUFELENBRkosRUFzQ1RFLCtDQXRDUztBQUhlLENBQUQsQ0FBM0I7O0FBNkNBLFNBQVNDLEtBQVQsT0FBOEM7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjtBQUM1QyxzQkFDRSw4REFBQywwQ0FBRDtBQUFVLFNBQUssRUFBRXZCLE1BQWpCO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBZ0IsY0FBUSxNQUF4QjtBQUF5QixXQUFLLEVBQUV3QiwyQ0FBaEM7QUFBQSw2QkFDRSw4REFBQywrREFBRDtBQUNFLGVBQU8sRUFBRTtBQUNQQyw0QkFBa0IsRUFBRSxJQURiO0FBRVBDLDBCQUFnQixFQUFFO0FBRlgsU0FEWDtBQUFBLCtCQU1FLDhEQUFDLFNBQUQsb0JBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0tBZlFGLEs7QUFpQlQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zOWU5NWEzODhiYzM0YTQxYjU4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCwgZGVkdXBFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSwgUHJvdmlkZXIgfSBmcm9tIFwidXJxbFwiO1xuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgQ2FjaGUsIFF1ZXJ5SW5wdXQgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQge1xuICBMb2dpbk11dGF0aW9uLFxuICBNZURvY3VtZW50LFxuICBSZWdpc3Rlck11dGF0aW9uLFxuICBNZVF1ZXJ5LFxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcblxuZnVuY3Rpb24gYmV0dGVyVXBkYXRlUXVlcnk8UmVzdWx0LCBRdWVyeT4oXG4gIGNhY2hlOiBDYWNoZSxcbiAgcWk6IFF1ZXJ5SW5wdXQsXG4gIHJlc3VsdDogYW55LFxuICBmbjogKHI6IFJlc3VsdCwgcTogUXVlcnkpID0+IFF1ZXJ5XG4pIHtcbiAgcmV0dXJuIGNhY2hlLnVwZGF0ZVF1ZXJ5KHFpLCAoZGF0YSkgPT4gZm4ocmVzdWx0LCBkYXRhIGFzIGFueSkgYXMgYW55KTtcbn1cblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gIGZldGNoT3B0aW9uczogeyBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgfSwgLy8gKiBQZXJtZXQgZGUgcmFqb3V0ZXIgbGUgY29va2llXG4gIGV4Y2hhbmdlczogW1xuICAgIGRlZHVwRXhjaGFuZ2UsXG4gICAgY2FjaGVFeGNoYW5nZSh7XG4gICAgICB1cGRhdGVzOiB7XG4gICAgICAgIE11dGF0aW9uOiB7XG4gICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgLypjYWNoZS51cGRhdGVRdWVyeSh7IHF1ZXJ5IDogIE1lRG9jdW1lbnR9ICwgZGF0YSA9PiB7IGRhdGEudmFsdWUgPSB9KSovXG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBtZTogcmVzdWx0LmxvZ2luLnVzZXIgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICAvKmNhY2hlLnVwZGF0ZVF1ZXJ5KHsgcXVlcnkgOiAgTWVEb2N1bWVudH0gLCBkYXRhID0+IHsgZGF0YS52YWx1ZSA9IH0pKi9cbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG1lOiByZXN1bHQucmVnaXN0ZXIudXNlciB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBmZXRjaEV4Y2hhbmdlLFxuICBdLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHZhbHVlPXtjbGllbnR9PlxuICAgICAgPENoYWtyYVByb3ZpZGVyIHJlc2V0Q1NTIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDb2xvck1vZGVQcm92aWRlclxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxDb2xvck1vZGU6IFwiZGFya1wiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==