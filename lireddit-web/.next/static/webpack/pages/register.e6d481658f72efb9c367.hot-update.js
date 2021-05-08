self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputField": function() { return /* binding */ InputField; }
/* harmony export */ });
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/form-control */ "./node_modules/@chakra-ui/form-control/dist/esm/index.js");
/* harmony import */ var _chakra_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/input */ "./node_modules/@chakra-ui/input/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\components\\InputField.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





// *  '' => false
// *  ' error message stuff => true
var InputField = function InputField(_ref) {
  _s();

  var label = _ref.label,
      _ = _ref.size,
      props = (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref, ["label", "size"]);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useField)(props),
      _useField2 = (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useField, 2),
      field = _useField2[0],
      error = _useField2[1].error;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
    isInvalid: !!error,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {
      htmlFor: "name",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, _objectSpread(_objectSpread(_objectSpread({}, field), props), {}, {
      id: field.name,
      placeholder: props.placeholder
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_6__.FormErrorMessage, {
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 16
    }, _this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(InputField, "DpPuTb9nPdu6NyyZR63Xu5KSrwc=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_4__.useField];
});

_c = InputField;

var _c;

$RefreshReg$(_c, "InputField");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3giXSwibmFtZXMiOlsiSW5wdXRGaWVsZCIsImxhYmVsIiwiXyIsInNpemUiLCJwcm9wcyIsInVzZUZpZWxkIiwiZmllbGQiLCJlcnJvciIsIm5hbWUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVPLElBQU1BLFVBQXFDLEdBQUcsU0FBeENBLFVBQXdDLE9BSS9DO0FBQUE7O0FBQUEsTUFISkMsS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGRUMsQ0FFRixRQUZKQyxJQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxrQkFDdUJDLGdEQUFRLENBQUNELEtBQUQsQ0FEL0I7QUFBQTtBQUFBLE1BQ0dFLEtBREg7QUFBQSxNQUNZQyxLQURaLGlCQUNZQSxLQURaOztBQUVKLHNCQUNFLDhEQUFDLGdFQUFEO0FBQWEsYUFBUyxFQUFFLENBQUMsQ0FBQ0EsS0FBMUI7QUFBQSw0QkFDRSw4REFBQyw4REFBRDtBQUFXLGFBQU8sRUFBQyxNQUFuQjtBQUFBLGdCQUEyQk47QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsbURBQUQsZ0RBQ01LLEtBRE4sR0FFTUYsS0FGTjtBQUdFLFFBQUUsRUFBRUUsS0FBSyxDQUFDRSxJQUhaO0FBSUUsaUJBQVcsRUFBRUosS0FBSyxDQUFDSztBQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFRR0YsS0FBSyxnQkFBRyw4REFBQyxxRUFBRDtBQUFBLGdCQUFtQkE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQWtELElBUjFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FsQk07O0dBQU1QLFU7VUFLZ0JLLDRDOzs7S0FMaEJMLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuZTZkNDgxNjU4ZjcyZWZiOWMzNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUVycm9yTWVzc2FnZSxcclxuICBGb3JtTGFiZWwsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvZm9ybS1jb250cm9sXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIElucHV0RmllbGRQcm9wcyA9IElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4gJiB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7IC8vICogIEZhaXJlIGVuIHNvcnRlIHF1ZSBsYSBwcm9wcyBzb2l0IGV4aWfDqWVcclxufTtcclxuXHJcbi8vICogICcnID0+IGZhbHNlXHJcbi8vICogICcgZXJyb3IgbWVzc2FnZSBzdHVmZiA9PiB0cnVlXHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SW5wdXRGaWVsZFByb3BzPiA9ICh7XHJcbiAgbGFiZWwsXHJcbiAgc2l6ZTogXywgLy8gKiAgRGVzdHJ1Y3R1cmUgU2l6ZSAsIG5lIHNlcmEgc3VyZW1lbnQgcGFzIHV0aWxpc8OpXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtmaWVsZCwgeyBlcnJvciB9XSA9IHVzZUZpZWxkKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Db250cm9sIGlzSW52YWxpZD17ISFlcnJvcn0+XHJcbiAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cIm5hbWVcIj57bGFiZWx9PC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAvPlxyXG4gICAgICB7ZXJyb3IgPyA8Rm9ybUVycm9yTWVzc2FnZT57ZXJyb3J9PC9Gb3JtRXJyb3JNZXNzYWdlPiA6IG51bGx9XHJcbiAgICA8L0Zvcm1Db250cm9sPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=