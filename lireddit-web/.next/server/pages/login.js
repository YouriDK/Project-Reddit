(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
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

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\liReddit\\lireddit-web\\src\\components\\InputField.tsx";

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

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\liReddit\\lireddit-web\\src\\components\\Wrapper.tsx";


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

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginDocument": function() { return /* binding */ LoginDocument; },
/* harmony export */   "useLoginMutation": function() { return /* binding */ useLoginMutation; },
/* harmony export */   "RegisterDocument": function() { return /* binding */ RegisterDocument; },
/* harmony export */   "useRegisterMutation": function() { return /* binding */ useRegisterMutation; }
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ "urql");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);


const LoginDocument = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    mutation Login($options: UsernamePasswordInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      username
    }
  }
}
    `;
function useLoginMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__.useMutation(LoginDocument);
}
;
const RegisterDocument = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      username
    }
  }
}
    `;
function useRegisterMutation() {
  return urql__WEBPACK_IMPORTED_MODULE_1__.useMutation(RegisterDocument);
}
;

/***/ }),

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": function() { return /* binding */ Login; }
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
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/toErrorMap */ "./src/utils/toErrorMap.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\liReddit\\lireddit-web\\src\\pages\\login.tsx";









const Login = ({}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const [, login] = (0,_generated_graphql__WEBPACK_IMPORTED_MODULE_7__.useLoginMutation)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {
    variant: "small",
    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
      initialValues: {
        username: "",
        password: ""
      },
      onSubmit: async (values, {
        setErrors
      }) => {
        var _response$data, _response$data2;

        const response = await login({
          options: values
        });

        if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.login.errors) {
          // * Avec le ? on va pouvoir gérer le fait que response puisse être undefined
          setErrors((0,_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_8__.default)(response.data.login.errors));
        } else if ((_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.login.user) {
          // * Worked
          router.push("/");
        }
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
          lineNumber: 33,
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
            lineNumber: 40,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
          mt: 4,
          type: "submit",
          colorScheme: "teal",
          isLoading: isSubmitting,
          children: "LOGIN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/utils/toErrorMap.ts":
/*!*********************************!*\
  !*** ./src/utils/toErrorMap.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const toErrorMap = errors => {
  const errorMap = {};
  errors.forEach(({
    field,
    message
  }) => {
    errorMap[field] = message;
  });
  return errorMap;
};

/* harmony default export */ __webpack_exports__["default"] = (toErrorMap);

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

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("urql");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy9jb21wb25lbnRzL0lucHV0RmllbGQudHN4Iiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4Iiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS8uL3NyYy91dGlscy90b0Vycm9yTWFwLnRzIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpL2V4dGVybmFsIFwiQGNoYWtyYS11aS9idXR0b25cIiIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvZm9ybS1jb250cm9sXCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2lucHV0XCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2xheW91dFwiIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL3dpdGgtY2hha3JhLXVpL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC1jaGFrcmEtdWkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly93aXRoLWNoYWtyYS11aS9leHRlcm5hbCBcInVycWxcIiJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkIiwibGFiZWwiLCJzaXplIiwiXyIsInByb3BzIiwiZmllbGQiLCJlcnJvciIsInVzZUZpZWxkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiV3JhcHBlciIsImNoaWxkcmVuIiwidmFyaWFudCIsIkxvZ2luRG9jdW1lbnQiLCJncWwiLCJ1c2VMb2dpbk11dGF0aW9uIiwiVXJxbCIsIlJlZ2lzdGVyRG9jdW1lbnQiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwiTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJyZXNwb25zZSIsIm9wdGlvbnMiLCJkYXRhIiwiZXJyb3JzIiwidG9FcnJvck1hcCIsInVzZXIiLCJwdXNoIiwiaXNTdWJtaXR0aW5nIiwiZXJyb3JNYXAiLCJmb3JFYWNoIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVPLE1BQU1BLFVBQXFDLEdBQUcsVUFJL0M7QUFBQSxNQUpnRDtBQUNwREMsU0FEb0Q7QUFFcERDLFFBQUksRUFBRUM7QUFGOEMsR0FJaEQ7QUFBQSxNQUREQyxLQUNDOztBQUNKLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRO0FBQUVDO0FBQUYsR0FBUixJQUFxQkMsZ0RBQVEsQ0FBQ0gsS0FBRCxDQUFuQyxDQURJLENBQ3dDOztBQUM1QyxzQkFDRSw4REFBQyxnRUFBRDtBQUFhLGFBQVMsRUFBRSxDQUFDLENBQUNFLEtBQTFCO0FBQUEsNEJBQ0UsOERBQUMsOERBQUQ7QUFBVyxhQUFPLEVBQUMsTUFBbkI7QUFBQSxnQkFBMkJMO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxtREFBRCxnREFDTUksS0FETixHQUVNRCxLQUZOO0FBR0UsUUFBRSxFQUFFQyxLQUFLLENBQUNHLElBSFo7QUFJRSxpQkFBVyxFQUFFSixLQUFLLENBQUNLO0FBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFRR0gsS0FBSyxn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RUFBQyxVQURQO0FBRUUsdUJBQVcsRUFBQyxVQUZkO0FBR0UsaUJBQUssRUFBQyxVQUhSO0FBSUUsZ0JBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBZUUsOERBQUMscURBQUQ7QUFDRSxZQUFFLEVBQUUsQ0FETjtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UscUJBQVcsRUFBQyxNQUhkO0FBSUUsbUJBQVMsRUFBRUEsWUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNkNELENBaERNO0FBa0RQLCtEQUFlZixLQUFmLEU7Ozs7Ozs7Ozs7OztBQzNEQSxNQUFNWSxVQUFVLEdBQUlELE1BQUQsSUFBMEI7QUFDM0MsUUFBTUssUUFBZ0MsR0FBRyxFQUF6QztBQUNBTCxRQUFNLENBQUNNLE9BQVAsQ0FBZSxDQUFDO0FBQUUvQixTQUFGO0FBQVNnQztBQUFULEdBQUQsS0FBd0I7QUFDckNGLFlBQVEsQ0FBQzlCLEtBQUQsQ0FBUixHQUFrQmdDLE9BQWxCO0FBQ0QsR0FGRDtBQUdBLFNBQU9GLFFBQVA7QUFDRCxDQU5EOztBQVFBLCtEQUFlSixVQUFmLEU7Ozs7Ozs7Ozs7O0FDVkEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1FcnJvck1lc3NhZ2UsXHJcbiAgRm9ybUxhYmVsLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2Zvcm0tY29udHJvbFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL2lucHV0XCI7XHJcbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBJbnB1dEZpZWxkUHJvcHMgPSBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nOyAvLyAqICBGYWlyZSBlbiBzb3J0ZSBxdWUgbGEgcHJvcHMgc29pdCBleGlnw6llXHJcbn07XHJcblxyXG4vLyAqICAnJyA9PiBmYWxzZVxyXG4vLyAqICAnIGVycm9yIG1lc3NhZ2Ugc3R1ZmYgPT4gdHJ1ZVxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElucHV0RmllbGRQcm9wcz4gPSAoe1xyXG4gIGxhYmVsLFxyXG4gIHNpemU6IF8sIC8vICogIERlc3RydWN0dXJlIFNpemUgLCBuZSBzZXJhIHN1cmVtZW50IHBhcyB1dGlsaXPDqVxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBbZmllbGQsIHsgZXJyb3IgfV0gPSB1c2VGaWVsZChwcm9wcyk7IC8vICogIFJlc3NlbWJsZSDDoCB1c2VTdGF0ZVxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXshIWVycm9yfT5cclxuICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibmFtZVwiPntsYWJlbH08L0Zvcm1MYWJlbD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICBpZD17ZmllbGQubmFtZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvciA/IDxGb3JtRXJyb3JNZXNzYWdlPntlcnJvcn08L0Zvcm1FcnJvck1lc3NhZ2U+IDogbnVsbH1cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qXHJcbiAqIERhbnMgbCdpbnRlcmZhbmNlIG9uIG1ldCBsZXMgcHJvcHMgcXVpIHBlcm1ldCBkZSBtaWV1eCBjb25maWd1cmVyIGxlIHdyYXBwZXJcclxuICogIGxlIHdyYXBwZXIgdmEgZG9ubmVyIHVuZSBmb3JtZSBob21vZ8OobmUgZGFucyBub3MgcGFnZXNcclxuICpcclxuICovXHJcbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xyXG4gIHZhcmlhbnQ/OiBcInNtYWxsXCIgfCBcInJlZ3VsYXJcIjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXI6IFJlYWN0LkZDPFdyYXBwZXJQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHZhcmlhbnQgPSBcInJlZ3VsYXJcIixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIG1heFc9e3ZhcmlhbnQgPT09IFwicmVndWxhclwiID8gXCI4MDBweFwiIDogXCI0MDBweCBcIn1cclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBtdD1cIjhcIlxyXG4gICAgICBteD1cImF1dG9cIlxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCAqIGFzIFVycWwgZnJvbSAndXJxbCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE1ha2VPcHRpb25hbDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdPzogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgTWFrZU1heWJlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS106IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE9taXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gUGljazxULCBFeGNsdWRlPGtleW9mIFQsIEs+Pjtcbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgRmllbGRFcnJvciA9IHtcbiAgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgQ3JlYXRlUG9zdD86IE1heWJlPFBvc3Q+O1xuICB1cGRhdGVQb3N0PzogTWF5YmU8UG9zdD47XG4gIGRlbGV0ZVBvc3Q/OiBNYXliZTxTY2FsYXJzWydCb29sZWFuJ10+O1xuICByZWdpc3RlcjogVXNlclJlc3BvbnNlO1xuICBsb2dpbjogVXNlclJlc3BvbnNlO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVBvc3RBcmdzID0ge1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlUG9zdEFyZ3MgPSB7XG4gIHRpdGxlPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1Bvc3QnO1xuICBfaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgaGVsbG86IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwb3N0czogQXJyYXk8UG9zdD47XG4gIHBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgX2lkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBVc2VybmFtZVBhc3N3b3JkSW5wdXQgPSB7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBsb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJz5cbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAndXNlcm5hbWUnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIGxvZ2luKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczoge3VzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmR9KSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCk7XG59OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5cclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcclxuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0RmllbGRcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VMb2dpbk11dGF0aW9uIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB0b0Vycm9yTWFwIGZyb20gXCIuLi91dGlscy90b0Vycm9yTWFwXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luOiBSZWFjdC5GQzxhbnk+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgWywgbG9naW5dID0gdXNlTG9naW5NdXRhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciB2YXJpYW50PVwic21hbGxcIj5cclxuICAgICAge1wiIFwifVxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRFcnJvcnMgfSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb2dpbih7IG9wdGlvbnM6IHZhbHVlcyB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhPy5sb2dpbi5lcnJvcnMpIHtcclxuICAgICAgICAgICAgLy8gKiBBdmVjIGxlID8gb24gdmEgcG91dm9pciBnw6lyZXIgbGUgZmFpdCBxdWUgcmVzcG9uc2UgcHVpc3NlIMOqdHJlIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBzZXRFcnJvcnModG9FcnJvck1hcChyZXNwb25zZS5kYXRhLmxvZ2luLmVycm9ycykpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhPy5sb2dpbi51c2VyKSB7XHJcbiAgICAgICAgICAgIC8vICogV29ya2VkXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgID48L0lucHV0RmllbGQ+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgPjwvSW5wdXRGaWVsZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBtdD17NH1cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxyXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTE9HSU5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iLCJpbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5jb25zdCB0b0Vycm9yTWFwID0gKGVycm9yczogRmllbGRFcnJvcltdKSA9PiB7XHJcbiAgY29uc3QgZXJyb3JNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuICBlcnJvcnMuZm9yRWFjaCgoeyBmaWVsZCwgbWVzc2FnZSB9KSA9PiB7XHJcbiAgICBlcnJvck1hcFtmaWVsZF0gPSBtZXNzYWdlO1xyXG4gIH0pO1xyXG4gIHJldHVybiBlcnJvck1hcDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvRXJyb3JNYXA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvYnV0dG9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2Zvcm0tY29udHJvbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pbnB1dFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9sYXlvdXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cnFsXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9