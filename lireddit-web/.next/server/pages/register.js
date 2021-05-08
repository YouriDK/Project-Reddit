(function() {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputField": function() { return /* binding */ InputField; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/form-control */ "@chakra-ui/form-control");
/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/input */ "@chakra-ui/input");
/* harmony import */ var _chakra_ui_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\components\\InputField.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





// *  '' => false
// *  ' error message stuff => true
const InputField = (_ref) => {
  let {
    label,
    size: _
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "size"]);

  const [field, {
    error
  }] = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useField)(props); // *  Ressemble à useState

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
    isInvalid: !!error,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
      htmlFor: "name",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, _objectSpread(_objectSpread(_objectSpread({}, field), props), {}, {
      id: field.name,
      placeholder: props.placeholder
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 16
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ "@chakra-ui/layout");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\components\\Wrapper.tsx";


/*
 * Dans l'interfance on met les props qui permet de mieux configurer le wrapper
 *  le wrapper va donner une forme homogène dans nos pages
 *
 */

const Wrapper = ({
  children,
  variant = "regular"
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
    maxW: variant === "regular" ? "800px" : "400px ",
    w: "100%",
    mt: "8",
    mx: "auto",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register": function() { return /* binding */ Register; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ "@chakra-ui/layout");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/button */ "@chakra-ui/button");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\pages\\register.tsx";






const Register = ({}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    variant: "small",
    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: {
        username: "",
        password: ""
      },
      onSubmit: values => {
        console.log(values);
      },
      children: ({
        isSubmitting
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_4__.InputField, {
          name: "username",
          placeholder: "username",
          label: "username",
          type: "username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Box, {
          mt: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_4__.InputField, {
            name: "password",
            placeholder: "password",
            label: "password",
            type: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
          tm: 4,
          type: "submit",
          colorScheme: "teal",
          isLoading: isSubmitting,
          children: "REGISTER"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "@chakra-ui/button":
/*!************************************!*\
  !*** external "@chakra-ui/button" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/button");;

/***/ }),

/***/ "@chakra-ui/form-control":
/*!******************************************!*\
  !*** external "@chakra-ui/form-control" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/form-control");;

/***/ }),

/***/ "@chakra-ui/input":
/*!***********************************!*\
  !*** external "@chakra-ui/input" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/input");;

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/layout");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/register.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy9jb21wb25lbnRzL0lucHV0RmllbGQudHN4Iiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4Iiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpL2V4dGVybmFsIFwiQGNoYWtyYS11aS9idXR0b25cIiIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvZm9ybS1jb250cm9sXCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2lucHV0XCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2xheW91dFwiIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW5wdXRGaWVsZCIsImxhYmVsIiwic2l6ZSIsIl8iLCJwcm9wcyIsImZpZWxkIiwiZXJyb3IiLCJ1c2VGaWVsZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIldyYXBwZXIiLCJjaGlsZHJlbiIsInZhcmlhbnQiLCJSZWdpc3RlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBRU8sTUFBTUEsVUFBcUMsR0FBRyxVQUkvQztBQUFB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QUF5Q1AsK0RBQWVOLFFBQWYsRTs7Ozs7Ozs7Ozs7QUNsREEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1FcnJvck1lc3NhZ2UsXHJcbiAgRm9ybUxhYmVsLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2Zvcm0tY29udHJvbFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL2lucHV0XCI7XHJcbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nOyAvLyAqICBGYWlyZSBlbiBzb3J0ZSBxdWUgbGEgcHJvcHMgc29pdCBleGlnw6llXHJcbn07XHJcblxyXG4vLyAqICAnJyA9PiBmYWxzZVxyXG4vLyAqICAnIGVycm9yIG1lc3NhZ2Ugc3R1ZmYgPT4gdHJ1ZVxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElucHV0RmllbGRQcm9wcz4gPSAoe1xyXG4gIGxhYmVsLFxyXG4gIHNpemU6IF8sIC8vICogIERlc3RydWN0dXJlIFNpemUgLCBuZSBzZXJhIHN1cmVtZW50IHBhcyB1dGlsaXPDqVxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBbZmllbGQsIHsgZXJyb3IgfV0gPSB1c2VGaWVsZChwcm9wcyk7IC8vICogIFJlc3NlbWJsZSDDoCB1c2VTdGF0ZVxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXshIWVycm9yfT5cclxuICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibmFtZVwiPntsYWJlbH08L0Zvcm1MYWJlbD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICBpZD17ZmllbGQubmFtZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvciA/IDxGb3JtRXJyb3JNZXNzYWdlPntlcnJvcn08L0Zvcm1FcnJvck1lc3NhZ2U+IDogbnVsbH1cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qXHJcbiAqIERhbnMgbCdpbnRlcmZhbmNlIG9uIG1ldCBsZXMgcHJvcHMgcXVpIHBlcm1ldCBkZSBtaWV1eCBjb25maWd1cmVyIGxlIHdyYXBwZXJcclxuICogIGxlIHdyYXBwZXIgdmEgZG9ubmVyIHVuZSBmb3JtZSBob21vZ8OobmUgZGFucyBub3MgcGFnZXNcclxuICpcclxuICovXHJcbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xyXG4gIHZhcmlhbnQ/OiBcInNtYWxsXCIgfCBcInJlZ3VsYXJcIjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXI6IFJlYWN0LkZDPFdyYXBwZXJQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHZhcmlhbnQgPSBcInJlZ3VsYXJcIixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIG1heFc9e3ZhcmlhbnQgPT09IFwicmVndWxhclwiID8gXCI4MDBweFwiIDogXCI0MDBweCBcIn1cclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBtdD1cIjhcIlxyXG4gICAgICBteD1cImF1dG9cIlxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuXHJcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyXCI7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9idXR0b25cIjtcclxuaW50ZXJmYWNlIHJlZ2lzdGVyUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8cmVnaXN0ZXJQcm9wcz4gPSAoe30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgdmFyaWFudD1cInNtYWxsXCI+XHJcbiAgICAgIHtcIiBcIn1cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICA+PC9JbnB1dEZpZWxkPlxyXG4gICAgICAgICAgICA8Qm94IG10PXs0fT5cclxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgID48L0lucHV0RmllbGQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdG09ezR9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJFR0lTVEVSXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9idXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvZm9ybS1jb250cm9sXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2lucHV0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2xheW91dFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9