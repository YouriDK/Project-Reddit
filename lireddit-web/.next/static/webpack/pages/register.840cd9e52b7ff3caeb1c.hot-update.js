self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./node_modules/@chakra-ui/layout/dist/esm/aspect-ratio.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/aspect-ratio.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AspectRatio": function() { return /* binding */ AspectRatio; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * React component used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 *
 * @see Docs https://chakra-ui.com/docs/layout/aspect-ratio
 */
var AspectRatio = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    ratio = 4 / 3,
    children,
    className
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["ratio", "children", "className"]); // enforce single child


  var child = react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);

  var _className = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-aspect-ratio", className);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    position: "relative",
    className: _className,
    _before: {
      height: 0,
      content: "\"\"",
      display: "block",
      paddingBottom: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.mapResponsive)(ratio, r => 1 / r * 100 + "%")
    },
    __css: {
      "& > *:not(style)": {
        overflow: "hidden",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
      "& > img, & > video": {
        objectFit: "cover"
      }
    }
  }, rest), child);
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  AspectRatio.displayName = "AspectRatio";
}
//# sourceMappingURL=aspect-ratio.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/badge.js":
/*!**********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/badge.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Badge": function() { return /* binding */ Badge; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * React component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://chakra-ui.com/docs/data-display/badge
 */
var Badge = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Badge", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.span, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-badge", props.className)
  }, rest, {
    __css: _extends({
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle"
    }, styles)
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Badge.displayName = "Badge";
}
//# sourceMappingURL=badge.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/box.js":
/*!********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/box.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "Square": function() { return /* binding */ Square; },
/* harmony export */   "Circle": function() { return /* binding */ Circle; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Box is the most abstract component on top of which other chakra
 * components are built. It renders a `div` element by default.
 *
 * @see Docs https://chakra-ui.com/docs/layout/box
 */
var Box = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra)("div");

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Box.displayName = "Box";
}
/**
 * As a constraint, you can't pass size related props
 * Only `size` would be allowed
 */


var Square = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    size,
    centerContent = true
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["size", "centerContent"]);

  var styles = centerContent ? {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Box, _extends({
    ref: ref,
    boxSize: size,
    __css: _extends({}, styles, {
      flexShrink: 0,
      flexGrow: 0
    })
  }, rest));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Square.displayName = "Square";
}

var Circle = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    size
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Square, _extends({
    size: size,
    ref: ref,
    borderRadius: "9999px"
  }, rest));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Circle.displayName = "Circle";
}
//# sourceMappingURL=box.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/center.js":
/*!***********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/center.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Center": function() { return /* binding */ Center; },
/* harmony export */   "AbsoluteCenter": function() { return /* binding */ AbsoluteCenter; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * React component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://chakra-ui.com/docs/layout/center
 */
var Center = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra)("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Center.displayName = "Center";
}

var centerStyles = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
/**
 * React component used to horizontally and vertically center an element
 * relative to its parent dimensions.
 *
 * It uses the `position: absolute` strategy.
 *
 * @see Docs https://chakra-ui.com/docs/layout/center
 * @see WebDev https://web.dev/centering-in-css/#5.-pop-and-plop
 */

var AbsoluteCenter = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    axis = "both"
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["axis"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    __css: centerStyles[axis]
  }, rest, {
    position: "absolute"
  }));
});
//# sourceMappingURL=center.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/code.js":
/*!*********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/code.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Code": function() { return /* binding */ Code; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * React component to render inline code snippets.
 *
 * @see Docs https://chakra-ui.com/docs/data-display/code
 */
var Code = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Code", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.code, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-code", props.className)
  }, rest, {
    __css: _extends({
      display: "inline-block"
    }, styles)
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Code.displayName = "Code";
}
//# sourceMappingURL=code.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/container.js":
/*!**************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/container.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Layout component used to wrap app or website content
 *
 * It sets `margin-left` and `margin-right` to `auto`,
 * to keep its content centered.
 *
 * It also sets a default max-width of `60ch` (60 characters).
 */
var Container = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      {
    className,
    centerContent
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "centerContent"]);

  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Container", props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-container", className)
  }, rest, {
    __css: _extends({}, styles, centerContent && {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    })
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Container.displayName = "Container";
}
//# sourceMappingURL=container.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/divider.js":
/*!************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/divider.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Divider": function() { return /* binding */ Divider; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Layout component used to visually separate content in a list or group.
 * It display a thin horizontal or vertical line, and renders a `hr` tag.
 *
 * @see Docs https://chakra-ui.com/docs/data-display/divider
 */

var Divider = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var _useStyleConfig = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Divider", props),
      {
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderRightWidth,
    borderWidth,
    borderStyle,
    borderColor
  } = _useStyleConfig,
      styles = _objectWithoutPropertiesLoose(_useStyleConfig, ["borderLeftWidth", "borderBottomWidth", "borderTopWidth", "borderRightWidth", "borderWidth", "borderStyle", "borderColor"]);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      {
    className,
    orientation = "horizontal",
    __css
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "orientation", "__css"]);

  var dividerStyles = {
    vertical: {
      borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
      width: "100%"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.hr, _extends({
    ref: ref,
    "aria-orientation": orientation
  }, rest, {
    __css: _extends({}, styles, {
      border: "0",
      borderColor,
      borderStyle
    }, dividerStyles[orientation], __css),
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-divider", className)
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Divider.displayName = "Divider";
}
//# sourceMappingURL=divider.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/flex.js":
/*!*********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/flex.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flex": function() { return /* binding */ Flex; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * React component used to create flexbox layouts.
 *
 * It renders a `div` with `display: flex` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/docs/layout/flex
 */
var Flex = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    direction,
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["direction", "align", "justify", "wrap", "basis", "grow", "shrink"]);

  var styles = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    __css: styles
  }, rest));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Flex.displayName = "Flex";
}
//# sourceMappingURL=flex.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/grid.js":
/*!*********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/grid.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Grid": function() { return /* binding */ Grid; },
/* harmony export */   "GridItem": function() { return /* binding */ GridItem; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * React component used to create grid layouts.
 *
 * It renders a `div` with `display: grid` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/docs/layout/grid
 */
var Grid = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    area,
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["area", "templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "autoColumns", "templateColumns"]);

  var styles = {
    display: "grid",
    gridArea: area,
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    __css: styles
  }, rest));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Grid.displayName = "Grid";
}

function spanFn(span) {
  return (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.mapResponsive)(span, value => value === "auto" ? "auto" : "span " + value + "/span " + value);
}

var GridItem = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    colSpan,
    colStart,
    colEnd,
    rowEnd,
    rowSpan,
    rowStart
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["colSpan", "colStart", "colEnd", "rowEnd", "rowSpan", "rowStart"]);

  var styles = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.filterUndefined)({
    gridColumn: spanFn(colSpan),
    gridRow: spanFn(rowSpan),
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    __css: styles
  }, rest));
});
//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/heading.js":
/*!************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/heading.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heading": function() { return /* binding */ Heading; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Heading = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Heading", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.h2, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-heading", props.className)
  }, rest, {
    __css: styles
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Heading.displayName = "Heading";
}
//# sourceMappingURL=heading.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio */ "./node_modules/@chakra-ui/layout/dist/esm/aspect-ratio.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _aspect_ratio__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge */ "./node_modules/@chakra-ui/layout/dist/esm/badge.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _badge__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _badge__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _box__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _box__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./center */ "./node_modules/@chakra-ui/layout/dist/esm/center.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _center__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _center__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./node_modules/@chakra-ui/layout/dist/esm/code.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _code__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _code__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container */ "./node_modules/@chakra-ui/layout/dist/esm/container.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _container__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _container__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./divider */ "./node_modules/@chakra-ui/layout/dist/esm/divider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _divider__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _divider__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flex */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _flex__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _flex__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid */ "./node_modules/@chakra-ui/layout/dist/esm/grid.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _grid__WEBPACK_IMPORTED_MODULE_8__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _grid__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./heading */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _heading__WEBPACK_IMPORTED_MODULE_9__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _heading__WEBPACK_IMPORTED_MODULE_9__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _kbd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kbd */ "./node_modules/@chakra-ui/layout/dist/esm/kbd.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _kbd__WEBPACK_IMPORTED_MODULE_10__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _kbd__WEBPACK_IMPORTED_MODULE_10__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./link */ "./node_modules/@chakra-ui/layout/dist/esm/link.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _link__WEBPACK_IMPORTED_MODULE_11__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _link__WEBPACK_IMPORTED_MODULE_11__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list */ "./node_modules/@chakra-ui/layout/dist/esm/list.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list__WEBPACK_IMPORTED_MODULE_12__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _list__WEBPACK_IMPORTED_MODULE_12__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _simple_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./simple-grid */ "./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _simple_grid__WEBPACK_IMPORTED_MODULE_13__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _simple_grid__WEBPACK_IMPORTED_MODULE_13__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./spacer */ "./node_modules/@chakra-ui/layout/dist/esm/spacer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _spacer__WEBPACK_IMPORTED_MODULE_14__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _spacer__WEBPACK_IMPORTED_MODULE_14__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stack */ "./node_modules/@chakra-ui/layout/dist/esm/stack.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _stack__WEBPACK_IMPORTED_MODULE_15__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _stack__WEBPACK_IMPORTED_MODULE_15__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text */ "./node_modules/@chakra-ui/layout/dist/esm/text.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _text__WEBPACK_IMPORTED_MODULE_16__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _text__WEBPACK_IMPORTED_MODULE_16__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wrap */ "./node_modules/@chakra-ui/layout/dist/esm/wrap.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wrap__WEBPACK_IMPORTED_MODULE_17__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _wrap__WEBPACK_IMPORTED_MODULE_17__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _link_box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./link-box */ "./node_modules/@chakra-ui/layout/dist/esm/link-box.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _link_box__WEBPACK_IMPORTED_MODULE_18__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _link_box__WEBPACK_IMPORTED_MODULE_18__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/kbd.js":
/*!********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/kbd.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kbd": function() { return /* binding */ Kbd; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Semantic component to render a keyboard shortcut
 * within an application.
 *
 * @example
 *
 * ```jsx
 * <Kbd>⌘ + T</Kbd>
 * ```
 *
 * @see Docs https://chakra-ui.com/docs/data-display/kbd
 */
var Kbd = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Kbd", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      {
    className
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.kbd, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-kbd", className)
  }, rest, {
    __css: _extends({
      fontFamily: "mono"
    }, styles)
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Kbd.displayName = "Kbd";
}
//# sourceMappingURL=kbd.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/link-box.js":
/*!*************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/link-box.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkOverlay": function() { return /* binding */ LinkOverlay; },
/* harmony export */   "LinkBox": function() { return /* binding */ LinkBox; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var LinkOverlay = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    isExternal,
    target,
    rel,
    className
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["isExternal", "target", "rel", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.a, _extends({}, rest, {
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-linkbox__overlay", className),
    rel: isExternal ? "noopener noreferrer" : rel,
    target: isExternal ? "_blank" : target,
    __css: {
      position: "static",
      "&::before": {
        content: "''",
        cursor: "inherit",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%"
      }
    }
  }));
});

/**
 * `LinkBox` is used to wrap content areas within a link while ensuring semantic html
 *
 * @see Docs https://www.chakra-ui.com/docs/link-overlay
 * @see Resources https://www.sarasoueidan.com/blog/nested-links
 */
var LinkBox = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    className
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    position: "relative"
  }, rest, {
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-linkbox", className),
    __css: {
      /* Elevate the links and abbreviations up */
      "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
        position: "relative",
        zIndex: 1
      }
    }
  }));
});
//# sourceMappingURL=link-box.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/link.js":
/*!*********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/link.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": function() { return /* binding */ Link; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Links are accessible elements used primarily for navigation.
 *
 * It integrates well with other routing libraries like
 * React Router, Reach Router and Next.js Link.
 *
 * @example
 *
 * ```jsx
 * <Link as={ReactRouterLink} to="/home">Home</Link>
 * ```
 *
 * @see Docs https://chakra-ui.com/docs/layout/link
 */
var Link = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Link", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      {
    className,
    isExternal
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "isExternal"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.a, _extends({
    target: isExternal ? "_blank" : undefined,
    rel: isExternal ? "noopener noreferrer" : undefined,
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-link", className)
  }, rest, {
    __css: styles
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Link.displayName = "Link";
}
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/list.js":
/*!*********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/list.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "OrderedList": function() { return /* binding */ OrderedList; },
/* harmony export */   "UnorderedList": function() { return /* binding */ UnorderedList; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icon */ "./node_modules/@chakra-ui/icon/dist/esm/index.js");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react-utils */ "./node_modules/@chakra-ui/react-utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * List is used to display list items, it renders a `<ul>` by default.
 *
 * @see Docs https://chakra-ui.com/docs/data-display/list
 */
var List = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useMultiStyleConfig)("List", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      {
    children,
    styleType = "none",
    stylePosition,
    spacing
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["children", "styleType", "stylePosition", "spacing"]);

  var validChildren = (0,_chakra_ui_react_utils__WEBPACK_IMPORTED_MODULE_2__.getValidChildren)(children);
  var selector = "& > *:not(style) ~ *:not(style)";
  var spacingStyle = spacing ? {
    [selector]: {
      mt: spacing
    }
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.StylesProvider, {
    value: styles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.ul, _extends({
    ref: ref,
    listStyleType: styleType,
    listStylePosition: stylePosition
    /**
     * We added this role to fix the Safari accessibility issue with list-style-type: none
     * @see https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
     */
    ,
    role: "list",
    __css: _extends({}, styles.container, spacingStyle)
  }, rest), validChildren));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  List.displayName = "List";
}

var OrderedList = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var rest = _objectWithoutPropertiesLoose(props, ["as"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(List, _extends({
    ref: ref,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em"
  }, rest));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  OrderedList.displayName = "OrderedList";
}

var UnorderedList = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var rest = _objectWithoutPropertiesLoose(props, ["as"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(List, _extends({
    ref: ref,
    as: "ul",
    styleType: "initial",
    marginStart: "1em"
  }, rest));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  UnorderedList.displayName = "UnorderedList";
}

/**
 * ListItem
 *
 * Used to render a list item
 */
var ListItem = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyles)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.li, _extends({
    ref: ref
  }, props, {
    __css: styles.item
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  ListItem.displayName = "ListItem";
}
/**
 * ListIcon
 *
 * Used to render an icon beside the list item text
 */


var ListIcon = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyles)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_icon__WEBPACK_IMPORTED_MODULE_4__.Icon, _extends({
    ref: ref,
    role: "presentation"
  }, props, {
    __css: styles.icon
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  ListIcon.displayName = "ListIcon";
}
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleGrid": function() { return /* binding */ SimpleGrid; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./node_modules/@chakra-ui/layout/dist/esm/grid.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * SimpleGrid
 *
 * React component make that providers a simpler interface, and
 * make its easy to create responsive grid layouts.
 *
 * @see Docs https://chakra-ui.com/docs/layout/simple-grid
 */
var SimpleGrid = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    columns,
    spacingX,
    spacingY,
    spacing,
    minChildWidth
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"]);

  var templateColumns = minChildWidth ? widthToColumns(minChildWidth) : countToColumns(columns);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grid__WEBPACK_IMPORTED_MODULE_2__.Grid, _extends({
    ref: ref,
    gap: spacing,
    columnGap: spacingX,
    rowGap: spacingY,
    templateColumns: templateColumns
  }, rest));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  SimpleGrid.displayName = "SimpleGrid";
}

function toPx(n) {
  return (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.isNumber)(n) ? n + "px" : n;
}

function widthToColumns(width) {
  return (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.mapResponsive)(width, value => (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.isNull)(value) ? null : "repeat(auto-fit, minmax(" + toPx(value) + ", 1fr))");
}

function countToColumns(count) {
  return (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.mapResponsive)(count, value => (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.isNull)(value) ? null : "repeat(" + value + ", minmax(0, 1fr))");
}
//# sourceMappingURL=simple-grid.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/spacer.js":
/*!***********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/spacer.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spacer": function() { return /* binding */ Spacer; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");



/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 *
 * @see Docs https://chakra-ui.com/docs/layout/flex#using-the-spacer
 */
var Spacer = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.chakra)("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_1__.__DEV__) {
  Spacer.displayName = "Spacer";
}
//# sourceMappingURL=spacer.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/stack.js":
/*!**********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/stack.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackDivider": function() { return /* binding */ StackDivider; },
/* harmony export */   "StackItem": function() { return /* binding */ StackItem; },
/* harmony export */   "Stack": function() { return /* binding */ Stack; },
/* harmony export */   "HStack": function() { return /* binding */ HStack; },
/* harmony export */   "VStack": function() { return /* binding */ VStack; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react-utils */ "./node_modules/@chakra-ui/react-utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stack_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stack.utils */ "./node_modules/@chakra-ui/layout/dist/esm/stack.utils.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var StackDivider = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
  className: "chakra-stack__divider"
}, props, {
  __css: _extends({}, props["__css"], {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto"
  })
}));
var StackItem = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
  className: "chakra-stack__item"
}, props, {
  __css: _extends({
    display: "inline-block",
    flex: "0 0 auto",
    minWidth: 0
  }, props["__css"])
}));

/**
 * Stacks help you easily create flexible and automatically distributed layouts
 *
 * You can stack elements in the horizontal or vertical direction,
 * and apply a space or/and divider between each element.
 *
 * It uses `display: flex` internally and renders a `div`.
 *
 * @see Docs https://chakra-ui.com/docs/layout/stack
 *
 */
var Stack = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren"]);

  var direction = isInline ? "row" : directionProp != null ? directionProp : "column";
  var styles = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_stack_utils__WEBPACK_IMPORTED_MODULE_2__.getStackStyles)({
    direction,
    spacing
  }), [direction, spacing]);
  var dividerStyle = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_stack_utils__WEBPACK_IMPORTED_MODULE_2__.getDividerStyles)({
    spacing,
    direction
  }), [spacing, direction]);
  var hasDivider = !!divider;
  var shouldUseChildren = !shouldWrapChildren && !hasDivider;
  var validChildren = (0,_chakra_ui_react_utils__WEBPACK_IMPORTED_MODULE_3__.getValidChildren)(children);
  var clones = shouldUseChildren ? validChildren : validChildren.map((child, index) => {
    var isLast = index + 1 === validChildren.length;
    var wrappedChild = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StackItem, {
      key: index
    }, child);

    var _child = shouldWrapChildren ? wrappedChild : child;

    if (!hasDivider) return _child;
    var clonedDivider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(divider, {
      __css: dividerStyle
    });

    var _divider = isLast ? null : clonedDivider;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, _child, _divider);
  });

  var _className = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-stack", className);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: styles.flexDirection,
    flexWrap: wrap,
    className: _className,
    __css: hasDivider ? {} : {
      [_stack_utils__WEBPACK_IMPORTED_MODULE_2__.selector]: styles[_stack_utils__WEBPACK_IMPORTED_MODULE_2__.selector]
    }
  }, rest), clones);
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
  Stack.displayName = "Stack";
}
/**
 * A view that arranges its children in a horizontal line.
 */


var HStack = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack, _extends({
  align: "center"
}, props, {
  direction: "row",
  ref: ref
})));

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
  HStack.displayName = "HStack";
}
/**
 * A view that arranges its children in a vertical line.
 */


var VStack = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stack, _extends({
  align: "center"
}, props, {
  direction: "column",
  ref: ref
})));

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
  VStack.displayName = "VStack";
}
//# sourceMappingURL=stack.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/stack.utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/stack.utils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selector": function() { return /* binding */ selector; },
/* harmony export */   "getStackStyles": function() { return /* binding */ getStackStyles; },
/* harmony export */   "getDividerStyles": function() { return /* binding */ getDividerStyles; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");


/**
 * If we ever run into SSR issues with this, check this post to find a fix for it:
 * @see https://medium.com/@emmenko/patching-lobotomized-owl-selector-for-emotion-ssr-5a582a3c424c
 */
var selector = "& > *:not(style) ~ *:not(style)";
function getStackStyles(options) {
  var {
    spacing,
    direction
  } = options;
  var directionStyles = {
    column: {
      marginTop: spacing,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0
    },
    row: {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: spacing
    },
    "column-reverse": {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: spacing,
      marginStart: 0
    },
    "row-reverse": {
      marginTop: 0,
      marginEnd: spacing,
      marginBottom: 0,
      marginStart: 0
    }
  };
  return {
    flexDirection: direction,
    [selector]: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_0__.mapResponsive)(direction, value => directionStyles[value])
  };
}
function getDividerStyles(options) {
  var {
    spacing,
    direction
  } = options;
  var dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_0__.mapResponsive)(direction, value => dividerStyles[value])
  };
}
//# sourceMappingURL=stack.utils.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/text.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": function() { return /* binding */ Text; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Used to render texts or paragraphs.
 *
 * @see Docs https://chakra-ui.com/docs/typography/text
 */
var Text = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Text", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "align", "decoration", "casing"]);

  var aliasedProps = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.filterUndefined)({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.p, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-text", props.className)
  }, aliasedProps, rest, {
    __css: styles
  }));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Text.displayName = "Text";
}
//# sourceMappingURL=text.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/esm/wrap.js":
/*!*********************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/esm/wrap.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrap": function() { return /* binding */ Wrap; },
/* harmony export */   "WrapItem": function() { return /* binding */ WrapItem; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Layout component used to stack elements that differ in length
 * and are liable to wrap.
 *
 * Common use cases:
 * - Buttons that appear together at the end of forms
 * - Lists of tags and chips
 *
 * @see Docs https://chakra-ui.com/docs/layout/wrap
 */
var Wrap = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    spacing = "0.5rem",
    children,
    justify,
    direction,
    align,
    className,
    shouldWrapChildren
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["spacing", "children", "justify", "direction", "align", "className", "shouldWrapChildren"]);

  var styles = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    "--chakra-wrap-spacing": theme => (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.mapResponsive)(spacing, value => (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.tokenToCSSVar)("space", value)(theme)),
    "--wrap-spacing": "calc(var(--chakra-wrap-spacing) / 2)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    listStyleType: "none",
    padding: "0",
    margin: "calc(var(--wrap-spacing) * -1)",
    "& > *:not(style)": {
      margin: "var(--wrap-spacing)"
    }
  }), [spacing, justify, align, direction]);
  var childrenToRender = shouldWrapChildren ? react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, (child, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrapItem, {
    key: index
  }, child)) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-wrap", className)
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.ul, {
    className: "chakra-wrap__list",
    __css: styles
  }, childrenToRender));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Wrap.displayName = "Wrap";
}

var WrapItem = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    className
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.li, _extends({
    ref: ref,
    __css: {
      display: "flex",
      alignItems: "flex-start"
    },
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-wrap__listitem", className)
  }, rest));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  WrapItem.displayName = "WrapItem";
}
//# sourceMappingURL=wrap.js.map

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": function() { return /* binding */ Wrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\components\\Wrapper.tsx",
    _this = undefined;



var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, _this);
};
_c = Wrapper;

var _c;

$RefreshReg$(_c, "Wrapper");

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


/***/ }),

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register": function() { return /* binding */ Register; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/form-control */ "./node_modules/@chakra-ui/form-control/dist/esm/index.js");
/* harmony import */ var _chakra_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/input */ "./node_modules/@chakra-ui/input/dist/esm/index.js");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\pages\\register.tsx",
    _this = undefined;






var Register = function Register(_ref) {
  (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {
    children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
      initialValues: {
        username: "",
        password: ""
      },
      onSubmit: function onSubmit(values) {
        console.log(values);
      },
      children: function children(values, handleChange) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {
              htmlFor: "username",
              children: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {
              id: "username",
              placeholder: "username",
              onChange: handleChange,
              value: values.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};
_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL2FzcGVjdC1yYXRpby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL2JhZGdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9sYXlvdXQvZGlzdC9lc20vYm94LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9sYXlvdXQvZGlzdC9lc20vY2VudGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9sYXlvdXQvZGlzdC9lc20vY29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL2RpdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL2xheW91dC9kaXN0L2VzbS9mbGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9sYXlvdXQvZGlzdC9lc20vZ3JpZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL2xheW91dC9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL2tiZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL2xpbmstYm94LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9sYXlvdXQvZGlzdC9lc20vbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL2xpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL2xheW91dC9kaXN0L2VzbS9zaW1wbGUtZ3JpZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL3NwYWNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvbGF5b3V0L2Rpc3QvZXNtL3N0YWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9sYXlvdXQvZGlzdC9lc20vc3RhY2sudXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL2xheW91dC9kaXN0L2VzbS90ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9sYXlvdXQvZGlzdC9lc20vd3JhcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZWdpc3Rlci50c3giXSwibmFtZXMiOlsiV3JhcHBlciIsImNoaWxkcmVuIiwiUmVnaXN0ZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUIsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFM1Qs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O0FBQ3ZELHNCQUNFLDhEQUFDLHdEQUFEO0FBQUEsZUFDRyxHQURILGVBRUUsOERBQUMsMENBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQUVDLGdCQUFRLEVBQUUsRUFBWjtBQUFnQkMsZ0JBQVEsRUFBRTtBQUExQixPQURqQjtBQUVFLGNBQVEsRUFBRSxrQkFBQ0MsTUFBRCxFQUFZO0FBQ3BCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNELE9BSkg7QUFBQSxnQkFNRyxrQkFBQ0EsTUFBRCxFQUFTRyxZQUFUO0FBQUEsNEJBQ0MsOERBQUMsd0NBQUQ7QUFBQSxpQ0FDRSw4REFBQyxnRUFBRDtBQUFBLG9DQUNFLDhEQUFDLDhEQUFEO0FBQVcscUJBQU8sRUFBQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLG1EQUFEO0FBQ0UsZ0JBQUUsRUFBQyxVQURMO0FBRUUseUJBQVcsRUFBQyxVQUZkO0FBR0Usc0JBQVEsRUFBRUEsWUFIWjtBQUlFLG1CQUFLLEVBQUVILE1BQU0sQ0FBQ0Y7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0EzQk07S0FBTUQsUTtBQTZCYiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci44NDBjZDllNTJiN2ZmM2NhZWIxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYgfSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IGN4LCBtYXBSZXNwb25zaXZlLCBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIFJlYWN0IGNvbXBvbmVudCB1c2VkIHRvIGNyb3BwaW5nIG1lZGlhICh2aWRlb3MsIGltYWdlcyBhbmQgbWFwcylcbiAqIHRvIGEgZGVzaXJlZCBhc3BlY3QgcmF0aW8uXG4gKlxuICogQHNlZSBEb2NzIGh0dHBzOi8vY2hha3JhLXVpLmNvbS9kb2NzL2xheW91dC9hc3BlY3QtcmF0aW9cbiAqL1xuZXhwb3J0IHZhciBBc3BlY3RSYXRpbyA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciB7XG4gICAgcmF0aW8gPSA0IC8gMyxcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWVcbiAgfSA9IHByb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJyYXRpb1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCJdKTsgLy8gZW5mb3JjZSBzaW5nbGUgY2hpbGRcblxuXG4gIHZhciBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gIHZhciBfY2xhc3NOYW1lID0gY3goXCJjaGFrcmEtYXNwZWN0LXJhdGlvXCIsIGNsYXNzTmFtZSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5kaXYsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGNsYXNzTmFtZTogX2NsYXNzTmFtZSxcbiAgICBfYmVmb3JlOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBjb250ZW50OiBcIlxcXCJcXFwiXCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBwYWRkaW5nQm90dG9tOiBtYXBSZXNwb25zaXZlKHJhdGlvLCByID0+IDEgLyByICogMTAwICsgXCIlXCIpXG4gICAgfSxcbiAgICBfX2Nzczoge1xuICAgICAgXCImID4gKjpub3Qoc3R5bGUpXCI6IHtcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcbiAgICAgICAgYm90dG9tOiBcIjBcIixcbiAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICB9LFxuICAgICAgXCImID4gaW1nLCAmID4gdmlkZW9cIjoge1xuICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIlxuICAgICAgfVxuICAgIH1cbiAgfSwgcmVzdCksIGNoaWxkKTtcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBBc3BlY3RSYXRpby5kaXNwbGF5TmFtZSA9IFwiQXNwZWN0UmF0aW9cIjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzcGVjdC1yYXRpby5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiwgb21pdFRoZW1pbmdQcm9wcywgdXNlU3R5bGVDb25maWcgfSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IGN4LCBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIFJlYWN0IGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgbm90aWZpY2F0aW9ucywgbWVzc2FnZXMsIG9yXG4gKiBzdGF0dXNlcyBpbiBkaWZmZXJlbnQgc2hhcGVzIGFuZCBzaXplcy5cbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvZGF0YS1kaXNwbGF5L2JhZGdlXG4gKi9cbmV4cG9ydCB2YXIgQmFkZ2UgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIgc3R5bGVzID0gdXNlU3R5bGVDb25maWcoXCJCYWRnZVwiLCBwcm9wcyk7XG5cbiAgdmFyIF9vbWl0VGhlbWluZ1Byb3BzID0gb21pdFRoZW1pbmdQcm9wcyhwcm9wcyksXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXRUaGVtaW5nUHJvcHMsIFtcImNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5zcGFuLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjeChcImNoYWtyYS1iYWRnZVwiLCBwcm9wcy5jbGFzc05hbWUpXG4gIH0sIHJlc3QsIHtcbiAgICBfX2NzczogX2V4dGVuZHMoe1xuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG4gICAgfSwgc3R5bGVzKVxuICB9KSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgQmFkZ2UuZGlzcGxheU5hbWUgPSBcIkJhZGdlXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYWRnZS5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBCb3ggaXMgdGhlIG1vc3QgYWJzdHJhY3QgY29tcG9uZW50IG9uIHRvcCBvZiB3aGljaCBvdGhlciBjaGFrcmFcbiAqIGNvbXBvbmVudHMgYXJlIGJ1aWx0LiBJdCByZW5kZXJzIGEgYGRpdmAgZWxlbWVudCBieSBkZWZhdWx0LlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL2NoYWtyYS11aS5jb20vZG9jcy9sYXlvdXQvYm94XG4gKi9cbmV4cG9ydCB2YXIgQm94ID0gY2hha3JhKFwiZGl2XCIpO1xuXG5pZiAoX19ERVZfXykge1xuICBCb3guZGlzcGxheU5hbWUgPSBcIkJveFwiO1xufVxuLyoqXG4gKiBBcyBhIGNvbnN0cmFpbnQsIHlvdSBjYW4ndCBwYXNzIHNpemUgcmVsYXRlZCBwcm9wc1xuICogT25seSBgc2l6ZWAgd291bGQgYmUgYWxsb3dlZFxuICovXG5cblxuZXhwb3J0IHZhciBTcXVhcmUgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIge1xuICAgIHNpemUsXG4gICAgY2VudGVyQ29udGVudCA9IHRydWVcbiAgfSA9IHByb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJzaXplXCIsIFwiY2VudGVyQ29udGVudFwiXSk7XG5cbiAgdmFyIHN0eWxlcyA9IGNlbnRlckNvbnRlbnQgPyB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICB9IDoge307XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBib3hTaXplOiBzaXplLFxuICAgIF9fY3NzOiBfZXh0ZW5kcyh7fSwgc3R5bGVzLCB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgZmxleEdyb3c6IDBcbiAgICB9KVxuICB9LCByZXN0KSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgU3F1YXJlLmRpc3BsYXlOYW1lID0gXCJTcXVhcmVcIjtcbn1cblxuZXhwb3J0IHZhciBDaXJjbGUgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIge1xuICAgIHNpemVcbiAgfSA9IHByb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJzaXplXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3F1YXJlLCBfZXh0ZW5kcyh7XG4gICAgc2l6ZTogc2l6ZSxcbiAgICByZWY6IHJlZixcbiAgICBib3JkZXJSYWRpdXM6IFwiOTk5OXB4XCJcbiAgfSwgcmVzdCkpO1xufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIENpcmNsZS5kaXNwbGF5TmFtZSA9IFwiQ2lyY2xlXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib3guanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYgfSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IF9fREVWX18gfSBmcm9tIFwiQGNoYWtyYS11aS91dGlsc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogUmVhY3QgY29tcG9uZW50IHVzZWQgdG8gaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IGNlbnRlciBpdHMgY2hpbGQuXG4gKiBJdCB1c2VzIHRoZSBwb3B1bGFyIGBkaXNwbGF5OiBmbGV4YCBjZW50ZXJpbmcgdGVjaG5pcXVlLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL2NoYWtyYS11aS5jb20vZG9jcy9sYXlvdXQvY2VudGVyXG4gKi9cbmV4cG9ydCB2YXIgQ2VudGVyID0gY2hha3JhKFwiZGl2XCIsIHtcbiAgYmFzZVN0eWxlOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICB9XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgQ2VudGVyLmRpc3BsYXlOYW1lID0gXCJDZW50ZXJcIjtcbn1cblxudmFyIGNlbnRlclN0eWxlcyA9IHtcbiAgaG9yaXpvbnRhbDoge1xuICAgIGluc2V0U3RhcnQ6IFwiNTAlXCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIlxuICB9LFxuICB2ZXJ0aWNhbDoge1xuICAgIHRvcDogXCI1MCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiXG4gIH0sXG4gIGJvdGg6IHtcbiAgICBpbnNldFN0YXJ0OiBcIjUwJVwiLFxuICAgIHRvcDogXCI1MCVcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJcbiAgfVxufTtcbi8qKlxuICogUmVhY3QgY29tcG9uZW50IHVzZWQgdG8gaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IGNlbnRlciBhbiBlbGVtZW50XG4gKiByZWxhdGl2ZSB0byBpdHMgcGFyZW50IGRpbWVuc2lvbnMuXG4gKlxuICogSXQgdXNlcyB0aGUgYHBvc2l0aW9uOiBhYnNvbHV0ZWAgc3RyYXRlZ3kuXG4gKlxuICogQHNlZSBEb2NzIGh0dHBzOi8vY2hha3JhLXVpLmNvbS9kb2NzL2xheW91dC9jZW50ZXJcbiAqIEBzZWUgV2ViRGV2IGh0dHBzOi8vd2ViLmRldi9jZW50ZXJpbmctaW4tY3NzLyM1Li1wb3AtYW5kLXBsb3BcbiAqL1xuXG5leHBvcnQgdmFyIEFic29sdXRlQ2VudGVyID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHtcbiAgICBheGlzID0gXCJib3RoXCJcbiAgfSA9IHByb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJheGlzXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLmRpdiwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIF9fY3NzOiBjZW50ZXJTdHlsZXNbYXhpc11cbiAgfSwgcmVzdCwge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCJcbiAgfSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jZW50ZXIuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYsIG9taXRUaGVtaW5nUHJvcHMsIHVzZVN0eWxlQ29uZmlnIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBjeCwgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBSZWFjdCBjb21wb25lbnQgdG8gcmVuZGVyIGlubGluZSBjb2RlIHNuaXBwZXRzLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL2NoYWtyYS11aS5jb20vZG9jcy9kYXRhLWRpc3BsYXkvY29kZVxuICovXG5leHBvcnQgdmFyIENvZGUgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIgc3R5bGVzID0gdXNlU3R5bGVDb25maWcoXCJDb2RlXCIsIHByb3BzKTtcblxuICB2YXIgX29taXRUaGVtaW5nUHJvcHMgPSBvbWl0VGhlbWluZ1Byb3BzKHByb3BzKSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb21pdFRoZW1pbmdQcm9wcywgW1wiY2xhc3NOYW1lXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLmNvZGUsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGN4KFwiY2hha3JhLWNvZGVcIiwgcHJvcHMuY2xhc3NOYW1lKVxuICB9LCByZXN0LCB7XG4gICAgX19jc3M6IF9leHRlbmRzKHtcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJcbiAgICB9LCBzdHlsZXMpXG4gIH0pKTtcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBDb2RlLmRpc3BsYXlOYW1lID0gXCJDb2RlXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2RlLmpzLm1hcCIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IHsgY2hha3JhLCBmb3J3YXJkUmVmLCBvbWl0VGhlbWluZ1Byb3BzLCB1c2VTdHlsZUNvbmZpZyB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgY3gsIF9fREVWX18gfSBmcm9tIFwiQGNoYWtyYS11aS91dGlsc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogTGF5b3V0IGNvbXBvbmVudCB1c2VkIHRvIHdyYXAgYXBwIG9yIHdlYnNpdGUgY29udGVudFxuICpcbiAqIEl0IHNldHMgYG1hcmdpbi1sZWZ0YCBhbmQgYG1hcmdpbi1yaWdodGAgdG8gYGF1dG9gLFxuICogdG8ga2VlcCBpdHMgY29udGVudCBjZW50ZXJlZC5cbiAqXG4gKiBJdCBhbHNvIHNldHMgYSBkZWZhdWx0IG1heC13aWR0aCBvZiBgNjBjaGAgKDYwIGNoYXJhY3RlcnMpLlxuICovXG5leHBvcnQgdmFyIENvbnRhaW5lciA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciBfb21pdFRoZW1pbmdQcm9wcyA9IG9taXRUaGVtaW5nUHJvcHMocHJvcHMpLFxuICAgICAge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjZW50ZXJDb250ZW50XG4gIH0gPSBfb21pdFRoZW1pbmdQcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb21pdFRoZW1pbmdQcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwiY2VudGVyQ29udGVudFwiXSk7XG5cbiAgdmFyIHN0eWxlcyA9IHVzZVN0eWxlQ29uZmlnKFwiQ29udGFpbmVyXCIsIHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5kaXYsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGN4KFwiY2hha3JhLWNvbnRhaW5lclwiLCBjbGFzc05hbWUpXG4gIH0sIHJlc3QsIHtcbiAgICBfX2NzczogX2V4dGVuZHMoe30sIHN0eWxlcywgY2VudGVyQ29udGVudCAmJiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgfSlcbiAgfSkpO1xufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIENvbnRhaW5lci5kaXNwbGF5TmFtZSA9IFwiQ29udGFpbmVyXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250YWluZXIuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYsIG9taXRUaGVtaW5nUHJvcHMsIHVzZVN0eWxlQ29uZmlnIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBjeCwgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogTGF5b3V0IGNvbXBvbmVudCB1c2VkIHRvIHZpc3VhbGx5IHNlcGFyYXRlIGNvbnRlbnQgaW4gYSBsaXN0IG9yIGdyb3VwLlxuICogSXQgZGlzcGxheSBhIHRoaW4gaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBsaW5lLCBhbmQgcmVuZGVycyBhIGBocmAgdGFnLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL2NoYWtyYS11aS5jb20vZG9jcy9kYXRhLWRpc3BsYXkvZGl2aWRlclxuICovXG5cbmV4cG9ydCB2YXIgRGl2aWRlciA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciBfdXNlU3R5bGVDb25maWcgPSB1c2VTdHlsZUNvbmZpZyhcIkRpdmlkZXJcIiwgcHJvcHMpLFxuICAgICAge1xuICAgIGJvcmRlckxlZnRXaWR0aCxcbiAgICBib3JkZXJCb3R0b21XaWR0aCxcbiAgICBib3JkZXJUb3BXaWR0aCxcbiAgICBib3JkZXJSaWdodFdpZHRoLFxuICAgIGJvcmRlcldpZHRoLFxuICAgIGJvcmRlclN0eWxlLFxuICAgIGJvcmRlckNvbG9yXG4gIH0gPSBfdXNlU3R5bGVDb25maWcsXG4gICAgICBzdHlsZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdXNlU3R5bGVDb25maWcsIFtcImJvcmRlckxlZnRXaWR0aFwiLCBcImJvcmRlckJvdHRvbVdpZHRoXCIsIFwiYm9yZGVyVG9wV2lkdGhcIiwgXCJib3JkZXJSaWdodFdpZHRoXCIsIFwiYm9yZGVyV2lkdGhcIiwgXCJib3JkZXJTdHlsZVwiLCBcImJvcmRlckNvbG9yXCJdKTtcblxuICB2YXIgX29taXRUaGVtaW5nUHJvcHMgPSBvbWl0VGhlbWluZ1Byb3BzKHByb3BzKSxcbiAgICAgIHtcbiAgICBjbGFzc05hbWUsXG4gICAgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIixcbiAgICBfX2Nzc1xuICB9ID0gX29taXRUaGVtaW5nUHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXRUaGVtaW5nUHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcIm9yaWVudGF0aW9uXCIsIFwiX19jc3NcIl0pO1xuXG4gIHZhciBkaXZpZGVyU3R5bGVzID0ge1xuICAgIHZlcnRpY2FsOiB7XG4gICAgICBib3JkZXJMZWZ0V2lkdGg6IGJvcmRlckxlZnRXaWR0aCB8fCBib3JkZXJSaWdodFdpZHRoIHx8IGJvcmRlcldpZHRoIHx8IFwiMXB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgfSxcbiAgICBob3Jpem9udGFsOiB7XG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogYm9yZGVyQm90dG9tV2lkdGggfHwgYm9yZGVyVG9wV2lkdGggfHwgYm9yZGVyV2lkdGggfHwgXCIxcHhcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5ociwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIFwiYXJpYS1vcmllbnRhdGlvblwiOiBvcmllbnRhdGlvblxuICB9LCByZXN0LCB7XG4gICAgX19jc3M6IF9leHRlbmRzKHt9LCBzdHlsZXMsIHtcbiAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICBib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlclN0eWxlXG4gICAgfSwgZGl2aWRlclN0eWxlc1tvcmllbnRhdGlvbl0sIF9fY3NzKSxcbiAgICBjbGFzc05hbWU6IGN4KFwiY2hha3JhLWRpdmlkZXJcIiwgY2xhc3NOYW1lKVxuICB9KSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgRGl2aWRlci5kaXNwbGF5TmFtZSA9IFwiRGl2aWRlclwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGl2aWRlci5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBSZWFjdCBjb21wb25lbnQgdXNlZCB0byBjcmVhdGUgZmxleGJveCBsYXlvdXRzLlxuICpcbiAqIEl0IHJlbmRlcnMgYSBgZGl2YCB3aXRoIGBkaXNwbGF5OiBmbGV4YCBhbmRcbiAqIGNvbWVzIHdpdGggaGVscGZ1bCBzdHlsZSBzaG9ydGhhbmQuXG4gKlxuICogQHNlZSBEb2NzIGh0dHBzOi8vY2hha3JhLXVpLmNvbS9kb2NzL2xheW91dC9mbGV4XG4gKi9cbmV4cG9ydCB2YXIgRmxleCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciB7XG4gICAgZGlyZWN0aW9uLFxuICAgIGFsaWduLFxuICAgIGp1c3RpZnksXG4gICAgd3JhcCxcbiAgICBiYXNpcyxcbiAgICBncm93LFxuICAgIHNocmlua1xuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImRpcmVjdGlvblwiLCBcImFsaWduXCIsIFwianVzdGlmeVwiLCBcIndyYXBcIiwgXCJiYXNpc1wiLCBcImdyb3dcIiwgXCJzaHJpbmtcIl0pO1xuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXM6IGFsaWduLFxuICAgIGp1c3RpZnlDb250ZW50OiBqdXN0aWZ5LFxuICAgIGZsZXhXcmFwOiB3cmFwLFxuICAgIGZsZXhCYXNpczogYmFzaXMsXG4gICAgZmxleEdyb3c6IGdyb3csXG4gICAgZmxleFNocmluazogc2hyaW5rXG4gIH07XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuZGl2LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgX19jc3M6IHN0eWxlc1xuICB9LCByZXN0KSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgRmxleC5kaXNwbGF5TmFtZSA9IFwiRmxleFwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmxleC5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgZmlsdGVyVW5kZWZpbmVkLCBtYXBSZXNwb25zaXZlLCBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIFJlYWN0IGNvbXBvbmVudCB1c2VkIHRvIGNyZWF0ZSBncmlkIGxheW91dHMuXG4gKlxuICogSXQgcmVuZGVycyBhIGBkaXZgIHdpdGggYGRpc3BsYXk6IGdyaWRgIGFuZFxuICogY29tZXMgd2l0aCBoZWxwZnVsIHN0eWxlIHNob3J0aGFuZC5cbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvbGF5b3V0L2dyaWRcbiAqL1xuZXhwb3J0IHZhciBHcmlkID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHtcbiAgICBhcmVhLFxuICAgIHRlbXBsYXRlQXJlYXMsXG4gICAgZ2FwLFxuICAgIHJvd0dhcCxcbiAgICBjb2x1bW5HYXAsXG4gICAgY29sdW1uLFxuICAgIHJvdyxcbiAgICBhdXRvRmxvdyxcbiAgICBhdXRvUm93cyxcbiAgICB0ZW1wbGF0ZVJvd3MsXG4gICAgYXV0b0NvbHVtbnMsXG4gICAgdGVtcGxhdGVDb2x1bW5zXG4gIH0gPSBwcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiYXJlYVwiLCBcInRlbXBsYXRlQXJlYXNcIiwgXCJnYXBcIiwgXCJyb3dHYXBcIiwgXCJjb2x1bW5HYXBcIiwgXCJjb2x1bW5cIiwgXCJyb3dcIiwgXCJhdXRvRmxvd1wiLCBcImF1dG9Sb3dzXCIsIFwidGVtcGxhdGVSb3dzXCIsIFwiYXV0b0NvbHVtbnNcIiwgXCJ0ZW1wbGF0ZUNvbHVtbnNcIl0pO1xuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgZ3JpZEFyZWE6IGFyZWEsXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRlbXBsYXRlQXJlYXMsXG4gICAgZ3JpZEdhcDogZ2FwLFxuICAgIGdyaWRSb3dHYXA6IHJvd0dhcCxcbiAgICBncmlkQ29sdW1uR2FwOiBjb2x1bW5HYXAsXG4gICAgZ3JpZEF1dG9Db2x1bW5zOiBhdXRvQ29sdW1ucyxcbiAgICBncmlkQ29sdW1uOiBjb2x1bW4sXG4gICAgZ3JpZFJvdzogcm93LFxuICAgIGdyaWRBdXRvRmxvdzogYXV0b0Zsb3csXG4gICAgZ3JpZEF1dG9Sb3dzOiBhdXRvUm93cyxcbiAgICBncmlkVGVtcGxhdGVSb3dzOiB0ZW1wbGF0ZVJvd3MsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdGVtcGxhdGVDb2x1bW5zXG4gIH07XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuZGl2LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgX19jc3M6IHN0eWxlc1xuICB9LCByZXN0KSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgR3JpZC5kaXNwbGF5TmFtZSA9IFwiR3JpZFwiO1xufVxuXG5mdW5jdGlvbiBzcGFuRm4oc3Bhbikge1xuICByZXR1cm4gbWFwUmVzcG9uc2l2ZShzcGFuLCB2YWx1ZSA9PiB2YWx1ZSA9PT0gXCJhdXRvXCIgPyBcImF1dG9cIiA6IFwic3BhbiBcIiArIHZhbHVlICsgXCIvc3BhbiBcIiArIHZhbHVlKTtcbn1cblxuZXhwb3J0IHZhciBHcmlkSXRlbSA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciB7XG4gICAgY29sU3BhbixcbiAgICBjb2xTdGFydCxcbiAgICBjb2xFbmQsXG4gICAgcm93RW5kLFxuICAgIHJvd1NwYW4sXG4gICAgcm93U3RhcnRcbiAgfSA9IHByb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJjb2xTcGFuXCIsIFwiY29sU3RhcnRcIiwgXCJjb2xFbmRcIiwgXCJyb3dFbmRcIiwgXCJyb3dTcGFuXCIsIFwicm93U3RhcnRcIl0pO1xuXG4gIHZhciBzdHlsZXMgPSBmaWx0ZXJVbmRlZmluZWQoe1xuICAgIGdyaWRDb2x1bW46IHNwYW5Gbihjb2xTcGFuKSxcbiAgICBncmlkUm93OiBzcGFuRm4ocm93U3BhbiksXG4gICAgZ3JpZENvbHVtblN0YXJ0OiBjb2xTdGFydCxcbiAgICBncmlkQ29sdW1uRW5kOiBjb2xFbmQsXG4gICAgZ3JpZFJvd1N0YXJ0OiByb3dTdGFydCxcbiAgICBncmlkUm93RW5kOiByb3dFbmRcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuZGl2LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgX19jc3M6IHN0eWxlc1xuICB9LCByZXN0KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdyaWQuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYsIG9taXRUaGVtaW5nUHJvcHMsIHVzZVN0eWxlQ29uZmlnIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBjeCwgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB2YXIgSGVhZGluZyA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciBzdHlsZXMgPSB1c2VTdHlsZUNvbmZpZyhcIkhlYWRpbmdcIiwgcHJvcHMpO1xuXG4gIHZhciBfb21pdFRoZW1pbmdQcm9wcyA9IG9taXRUaGVtaW5nUHJvcHMocHJvcHMpLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vbWl0VGhlbWluZ1Byb3BzLCBbXCJjbGFzc05hbWVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuaDIsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGN4KFwiY2hha3JhLWhlYWRpbmdcIiwgcHJvcHMuY2xhc3NOYW1lKVxuICB9LCByZXN0LCB7XG4gICAgX19jc3M6IHN0eWxlc1xuICB9KSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgSGVhZGluZy5kaXNwbGF5TmFtZSA9IFwiSGVhZGluZ1wiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZGluZy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9hc3BlY3QtcmF0aW9cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2JhZGdlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ib3hcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NlbnRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29kZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29udGFpbmVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kaXZpZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9mbGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ncmlkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9oZWFkaW5nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9rYmRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpbmtcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpc3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NpbXBsZS1ncmlkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcGFjZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3N0YWNrXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90ZXh0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi93cmFwXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saW5rLWJveFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYsIG9taXRUaGVtaW5nUHJvcHMsIHVzZVN0eWxlQ29uZmlnIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBjeCwgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBTZW1hbnRpYyBjb21wb25lbnQgdG8gcmVuZGVyIGEga2V5Ym9hcmQgc2hvcnRjdXRcbiAqIHdpdGhpbiBhbiBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzeFxuICogPEtiZD7ijJggKyBUPC9LYmQ+XG4gKiBgYGBcbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvZGF0YS1kaXNwbGF5L2tiZFxuICovXG5leHBvcnQgdmFyIEtiZCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciBzdHlsZXMgPSB1c2VTdHlsZUNvbmZpZyhcIktiZFwiLCBwcm9wcyk7XG5cbiAgdmFyIF9vbWl0VGhlbWluZ1Byb3BzID0gb21pdFRoZW1pbmdQcm9wcyhwcm9wcyksXG4gICAgICB7XG4gICAgY2xhc3NOYW1lXG4gIH0gPSBfb21pdFRoZW1pbmdQcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb21pdFRoZW1pbmdQcm9wcywgW1wiY2xhc3NOYW1lXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLmtiZCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY3goXCJjaGFrcmEta2JkXCIsIGNsYXNzTmFtZSlcbiAgfSwgcmVzdCwge1xuICAgIF9fY3NzOiBfZXh0ZW5kcyh7XG4gICAgICBmb250RmFtaWx5OiBcIm1vbm9cIlxuICAgIH0sIHN0eWxlcylcbiAgfSkpO1xufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIEtiZC5kaXNwbGF5TmFtZSA9IFwiS2JkXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rYmQuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYgfSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IGN4IH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHZhciBMaW5rT3ZlcmxheSA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciB7XG4gICAgaXNFeHRlcm5hbCxcbiAgICB0YXJnZXQsXG4gICAgcmVsLFxuICAgIGNsYXNzTmFtZVxuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImlzRXh0ZXJuYWxcIiwgXCJ0YXJnZXRcIiwgXCJyZWxcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuYSwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGN4KFwiY2hha3JhLWxpbmtib3hfX292ZXJsYXlcIiwgY2xhc3NOYW1lKSxcbiAgICByZWw6IGlzRXh0ZXJuYWwgPyBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiA6IHJlbCxcbiAgICB0YXJnZXQ6IGlzRXh0ZXJuYWwgPyBcIl9ibGFua1wiIDogdGFyZ2V0LFxuICAgIF9fY3NzOiB7XG4gICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICAgIFwiJjo6YmVmb3JlXCI6IHtcbiAgICAgICAgY29udGVudDogXCInJ1wiLFxuICAgICAgICBjdXJzb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgekluZGV4OiAwLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbn0pO1xuXG4vKipcbiAqIGBMaW5rQm94YCBpcyB1c2VkIHRvIHdyYXAgY29udGVudCBhcmVhcyB3aXRoaW4gYSBsaW5rIHdoaWxlIGVuc3VyaW5nIHNlbWFudGljIGh0bWxcbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly93d3cuY2hha3JhLXVpLmNvbS9kb2NzL2xpbmstb3ZlcmxheVxuICogQHNlZSBSZXNvdXJjZXMgaHR0cHM6Ly93d3cuc2FyYXNvdWVpZGFuLmNvbS9ibG9nL25lc3RlZC1saW5rc1xuICovXG5leHBvcnQgdmFyIExpbmtCb3ggPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIge1xuICAgIGNsYXNzTmFtZVxuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5kaXYsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gIH0sIHJlc3QsIHtcbiAgICBjbGFzc05hbWU6IGN4KFwiY2hha3JhLWxpbmtib3hcIiwgY2xhc3NOYW1lKSxcbiAgICBfX2Nzczoge1xuICAgICAgLyogRWxldmF0ZSB0aGUgbGlua3MgYW5kIGFiYnJldmlhdGlvbnMgdXAgKi9cbiAgICAgIFwiYVtocmVmXTpub3QoLmNoYWtyYS1saW5rYm94X19vdmVybGF5KSwgYWJiclt0aXRsZV1cIjoge1xuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICB6SW5kZXg6IDFcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay1ib3guanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYsIG9taXRUaGVtaW5nUHJvcHMsIHVzZVN0eWxlQ29uZmlnIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBjeCwgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBMaW5rcyBhcmUgYWNjZXNzaWJsZSBlbGVtZW50cyB1c2VkIHByaW1hcmlseSBmb3IgbmF2aWdhdGlvbi5cbiAqXG4gKiBJdCBpbnRlZ3JhdGVzIHdlbGwgd2l0aCBvdGhlciByb3V0aW5nIGxpYnJhcmllcyBsaWtlXG4gKiBSZWFjdCBSb3V0ZXIsIFJlYWNoIFJvdXRlciBhbmQgTmV4dC5qcyBMaW5rLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganN4XG4gKiA8TGluayBhcz17UmVhY3RSb3V0ZXJMaW5rfSB0bz1cIi9ob21lXCI+SG9tZTwvTGluaz5cbiAqIGBgYFxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL2NoYWtyYS11aS5jb20vZG9jcy9sYXlvdXQvbGlua1xuICovXG5leHBvcnQgdmFyIExpbmsgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIgc3R5bGVzID0gdXNlU3R5bGVDb25maWcoXCJMaW5rXCIsIHByb3BzKTtcblxuICB2YXIgX29taXRUaGVtaW5nUHJvcHMgPSBvbWl0VGhlbWluZ1Byb3BzKHByb3BzKSxcbiAgICAgIHtcbiAgICBjbGFzc05hbWUsXG4gICAgaXNFeHRlcm5hbFxuICB9ID0gX29taXRUaGVtaW5nUHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXRUaGVtaW5nUHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcImlzRXh0ZXJuYWxcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuYSwgX2V4dGVuZHMoe1xuICAgIHRhcmdldDogaXNFeHRlcm5hbCA/IFwiX2JsYW5rXCIgOiB1bmRlZmluZWQsXG4gICAgcmVsOiBpc0V4dGVybmFsID8gXCJub29wZW5lciBub3JlZmVycmVyXCIgOiB1bmRlZmluZWQsXG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjeChcImNoYWtyYS1saW5rXCIsIGNsYXNzTmFtZSlcbiAgfSwgcmVzdCwge1xuICAgIF9fY3NzOiBzdHlsZXNcbiAgfSkpO1xufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIExpbmsuZGlzcGxheU5hbWUgPSBcIkxpbmtcIjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvblwiO1xuaW1wb3J0IHsgY2hha3JhLCBmb3J3YXJkUmVmLCBvbWl0VGhlbWluZ1Byb3BzLCB1c2VNdWx0aVN0eWxlQ29uZmlnLCBTdHlsZXNQcm92aWRlciwgdXNlU3R5bGVzIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGdldFZhbGlkQ2hpbGRyZW4gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdC11dGlsc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogTGlzdCBpcyB1c2VkIHRvIGRpc3BsYXkgbGlzdCBpdGVtcywgaXQgcmVuZGVycyBhIGA8dWw+YCBieSBkZWZhdWx0LlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL2NoYWtyYS11aS5jb20vZG9jcy9kYXRhLWRpc3BsYXkvbGlzdFxuICovXG5leHBvcnQgdmFyIExpc3QgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIgc3R5bGVzID0gdXNlTXVsdGlTdHlsZUNvbmZpZyhcIkxpc3RcIiwgcHJvcHMpO1xuXG4gIHZhciBfb21pdFRoZW1pbmdQcm9wcyA9IG9taXRUaGVtaW5nUHJvcHMocHJvcHMpLFxuICAgICAge1xuICAgIGNoaWxkcmVuLFxuICAgIHN0eWxlVHlwZSA9IFwibm9uZVwiLFxuICAgIHN0eWxlUG9zaXRpb24sXG4gICAgc3BhY2luZ1xuICB9ID0gX29taXRUaGVtaW5nUHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXRUaGVtaW5nUHJvcHMsIFtcImNoaWxkcmVuXCIsIFwic3R5bGVUeXBlXCIsIFwic3R5bGVQb3NpdGlvblwiLCBcInNwYWNpbmdcIl0pO1xuXG4gIHZhciB2YWxpZENoaWxkcmVuID0gZ2V0VmFsaWRDaGlsZHJlbihjaGlsZHJlbik7XG4gIHZhciBzZWxlY3RvciA9IFwiJiA+ICo6bm90KHN0eWxlKSB+ICo6bm90KHN0eWxlKVwiO1xuICB2YXIgc3BhY2luZ1N0eWxlID0gc3BhY2luZyA/IHtcbiAgICBbc2VsZWN0b3JdOiB7XG4gICAgICBtdDogc3BhY2luZ1xuICAgIH1cbiAgfSA6IHt9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVzUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3R5bGVzXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS51bCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGxpc3RTdHlsZVR5cGU6IHN0eWxlVHlwZSxcbiAgICBsaXN0U3R5bGVQb3NpdGlvbjogc3R5bGVQb3NpdGlvblxuICAgIC8qKlxuICAgICAqIFdlIGFkZGVkIHRoaXMgcm9sZSB0byBmaXggdGhlIFNhZmFyaSBhY2Nlc3NpYmlsaXR5IGlzc3VlIHdpdGggbGlzdC1zdHlsZS10eXBlOiBub25lXG4gICAgICogQHNlZSBodHRwczovL3d3dy5zY290dG9oYXJhLm1lL2Jsb2cvMjAxOS8wMS8xMi9saXN0cy1hbmQtc2FmYXJpLmh0bWxcbiAgICAgKi9cbiAgICAsXG4gICAgcm9sZTogXCJsaXN0XCIsXG4gICAgX19jc3M6IF9leHRlbmRzKHt9LCBzdHlsZXMuY29udGFpbmVyLCBzcGFjaW5nU3R5bGUpXG4gIH0sIHJlc3QpLCB2YWxpZENoaWxkcmVuKSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgTGlzdC5kaXNwbGF5TmFtZSA9IFwiTGlzdFwiO1xufVxuXG5leHBvcnQgdmFyIE9yZGVyZWRMaXN0ID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiYXNcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwib2xcIixcbiAgICBzdHlsZVR5cGU6IFwiZGVjaW1hbFwiLFxuICAgIG1hcmdpblN0YXJ0OiBcIjFlbVwiXG4gIH0sIHJlc3QpKTtcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBPcmRlcmVkTGlzdC5kaXNwbGF5TmFtZSA9IFwiT3JkZXJlZExpc3RcIjtcbn1cblxuZXhwb3J0IHZhciBVbm9yZGVyZWRMaXN0ID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiYXNcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwidWxcIixcbiAgICBzdHlsZVR5cGU6IFwiaW5pdGlhbFwiLFxuICAgIG1hcmdpblN0YXJ0OiBcIjFlbVwiXG4gIH0sIHJlc3QpKTtcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBVbm9yZGVyZWRMaXN0LmRpc3BsYXlOYW1lID0gXCJVbm9yZGVyZWRMaXN0XCI7XG59XG5cbi8qKlxuICogTGlzdEl0ZW1cbiAqXG4gKiBVc2VkIHRvIHJlbmRlciBhIGxpc3QgaXRlbVxuICovXG5leHBvcnQgdmFyIExpc3RJdGVtID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLmxpLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBfX2Nzczogc3R5bGVzLml0ZW1cbiAgfSkpO1xufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIExpc3RJdGVtLmRpc3BsYXlOYW1lID0gXCJMaXN0SXRlbVwiO1xufVxuLyoqXG4gKiBMaXN0SWNvblxuICpcbiAqIFVzZWQgdG8gcmVuZGVyIGFuIGljb24gYmVzaWRlIHRoZSBsaXN0IGl0ZW0gdGV4dFxuICovXG5cblxuZXhwb3J0IHZhciBMaXN0SWNvbiA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiXG4gIH0sIHByb3BzLCB7XG4gICAgX19jc3M6IHN0eWxlcy5pY29uXG4gIH0pKTtcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBMaXN0SWNvbi5kaXNwbGF5TmFtZSA9IFwiTGlzdEljb25cIjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpc3QuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBtYXBSZXNwb25zaXZlLCBpc051bWJlciwgaXNOdWxsLCBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL2dyaWRcIjtcblxuLyoqXG4gKiBTaW1wbGVHcmlkXG4gKlxuICogUmVhY3QgY29tcG9uZW50IG1ha2UgdGhhdCBwcm92aWRlcnMgYSBzaW1wbGVyIGludGVyZmFjZSwgYW5kXG4gKiBtYWtlIGl0cyBlYXN5IHRvIGNyZWF0ZSByZXNwb25zaXZlIGdyaWQgbGF5b3V0cy5cbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvbGF5b3V0L3NpbXBsZS1ncmlkXG4gKi9cbmV4cG9ydCB2YXIgU2ltcGxlR3JpZCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciB7XG4gICAgY29sdW1ucyxcbiAgICBzcGFjaW5nWCxcbiAgICBzcGFjaW5nWSxcbiAgICBzcGFjaW5nLFxuICAgIG1pbkNoaWxkV2lkdGhcbiAgfSA9IHByb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJjb2x1bW5zXCIsIFwic3BhY2luZ1hcIiwgXCJzcGFjaW5nWVwiLCBcInNwYWNpbmdcIiwgXCJtaW5DaGlsZFdpZHRoXCJdKTtcblxuICB2YXIgdGVtcGxhdGVDb2x1bW5zID0gbWluQ2hpbGRXaWR0aCA/IHdpZHRoVG9Db2x1bW5zKG1pbkNoaWxkV2lkdGgpIDogY291bnRUb0NvbHVtbnMoY29sdW1ucyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgZ2FwOiBzcGFjaW5nLFxuICAgIGNvbHVtbkdhcDogc3BhY2luZ1gsXG4gICAgcm93R2FwOiBzcGFjaW5nWSxcbiAgICB0ZW1wbGF0ZUNvbHVtbnM6IHRlbXBsYXRlQ29sdW1uc1xuICB9LCByZXN0KSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgU2ltcGxlR3JpZC5kaXNwbGF5TmFtZSA9IFwiU2ltcGxlR3JpZFwiO1xufVxuXG5mdW5jdGlvbiB0b1B4KG4pIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG4pID8gbiArIFwicHhcIiA6IG47XG59XG5cbmZ1bmN0aW9uIHdpZHRoVG9Db2x1bW5zKHdpZHRoKSB7XG4gIHJldHVybiBtYXBSZXNwb25zaXZlKHdpZHRoLCB2YWx1ZSA9PiBpc051bGwodmFsdWUpID8gbnVsbCA6IFwicmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoXCIgKyB0b1B4KHZhbHVlKSArIFwiLCAxZnIpKVwiKTtcbn1cblxuZnVuY3Rpb24gY291bnRUb0NvbHVtbnMoY291bnQpIHtcbiAgcmV0dXJuIG1hcFJlc3BvbnNpdmUoY291bnQsIHZhbHVlID0+IGlzTnVsbCh2YWx1ZSkgPyBudWxsIDogXCJyZXBlYXQoXCIgKyB2YWx1ZSArIFwiLCBtaW5tYXgoMCwgMWZyKSlcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGUtZ3JpZC5qcy5tYXAiLCJpbXBvcnQgeyBjaGFrcmEgfSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IF9fREVWX18gfSBmcm9tIFwiQGNoYWtyYS11aS91dGlsc1wiO1xuXG4vKipcbiAqIEEgZmxleGlibGUgZmxleCBzcGFjZXIgdGhhdCBleHBhbmRzIGFsb25nIHRoZSBtYWpvciBheGlzIG9mIGl0cyBjb250YWluaW5nIGZsZXggbGF5b3V0LlxuICogSXQgcmVuZGVycyBhIGBkaXZgIGJ5IGRlZmF1bHQsIGFuZCB0YWtlcyB1cCBhbnkgYXZhaWxhYmxlIHNwYWNlLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL2NoYWtyYS11aS5jb20vZG9jcy9sYXlvdXQvZmxleCN1c2luZy10aGUtc3BhY2VyXG4gKi9cbmV4cG9ydCB2YXIgU3BhY2VyID0gY2hha3JhKFwiZGl2XCIsIHtcbiAgYmFzZVN0eWxlOiB7XG4gICAgZmxleDogMSxcbiAgICBqdXN0aWZ5U2VsZjogXCJzdHJldGNoXCIsXG4gICAgYWxpZ25TZWxmOiBcInN0cmV0Y2hcIlxuICB9XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgU3BhY2VyLmRpc3BsYXlOYW1lID0gXCJTcGFjZXJcIjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwYWNlci5qcy5tYXAiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgY3gsIF9fREVWX18gfSBmcm9tIFwiQGNoYWtyYS11aS91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0VmFsaWRDaGlsZHJlbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0LXV0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldERpdmlkZXJTdHlsZXMsIGdldFN0YWNrU3R5bGVzLCBzZWxlY3RvciB9IGZyb20gXCIuL3N0YWNrLnV0aWxzXCI7XG5leHBvcnQgdmFyIFN0YWNrRGl2aWRlciA9IHByb3BzID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5kaXYsIF9leHRlbmRzKHtcbiAgY2xhc3NOYW1lOiBcImNoYWtyYS1zdGFja19fZGl2aWRlclwiXG59LCBwcm9wcywge1xuICBfX2NzczogX2V4dGVuZHMoe30sIHByb3BzW1wiX19jc3NcIl0sIHtcbiAgICBib3JkZXJXaWR0aDogMCxcbiAgICBhbGlnblNlbGY6IFwic3RyZXRjaFwiLFxuICAgIGJvcmRlckNvbG9yOiBcImluaGVyaXRcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIlxuICB9KVxufSkpO1xuZXhwb3J0IHZhciBTdGFja0l0ZW0gPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuZGl2LCBfZXh0ZW5kcyh7XG4gIGNsYXNzTmFtZTogXCJjaGFrcmEtc3RhY2tfX2l0ZW1cIlxufSwgcHJvcHMsIHtcbiAgX19jc3M6IF9leHRlbmRzKHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIGZsZXg6IFwiMCAwIGF1dG9cIixcbiAgICBtaW5XaWR0aDogMFxuICB9LCBwcm9wc1tcIl9fY3NzXCJdKVxufSkpO1xuXG4vKipcbiAqIFN0YWNrcyBoZWxwIHlvdSBlYXNpbHkgY3JlYXRlIGZsZXhpYmxlIGFuZCBhdXRvbWF0aWNhbGx5IGRpc3RyaWJ1dGVkIGxheW91dHNcbiAqXG4gKiBZb3UgY2FuIHN0YWNrIGVsZW1lbnRzIGluIHRoZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIGRpcmVjdGlvbixcbiAqIGFuZCBhcHBseSBhIHNwYWNlIG9yL2FuZCBkaXZpZGVyIGJldHdlZW4gZWFjaCBlbGVtZW50LlxuICpcbiAqIEl0IHVzZXMgYGRpc3BsYXk6IGZsZXhgIGludGVybmFsbHkgYW5kIHJlbmRlcnMgYSBgZGl2YC5cbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvbGF5b3V0L3N0YWNrXG4gKlxuICovXG5leHBvcnQgdmFyIFN0YWNrID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHtcbiAgICBpc0lubGluZSxcbiAgICBkaXJlY3Rpb246IGRpcmVjdGlvblByb3AsXG4gICAgYWxpZ24sXG4gICAganVzdGlmeSxcbiAgICBzcGFjaW5nID0gXCIwLjVyZW1cIixcbiAgICB3cmFwLFxuICAgIGNoaWxkcmVuLFxuICAgIGRpdmlkZXIsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3VsZFdyYXBDaGlsZHJlblxuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImlzSW5saW5lXCIsIFwiZGlyZWN0aW9uXCIsIFwiYWxpZ25cIiwgXCJqdXN0aWZ5XCIsIFwic3BhY2luZ1wiLCBcIndyYXBcIiwgXCJjaGlsZHJlblwiLCBcImRpdmlkZXJcIiwgXCJjbGFzc05hbWVcIiwgXCJzaG91bGRXcmFwQ2hpbGRyZW5cIl0pO1xuXG4gIHZhciBkaXJlY3Rpb24gPSBpc0lubGluZSA/IFwicm93XCIgOiBkaXJlY3Rpb25Qcm9wICE9IG51bGwgPyBkaXJlY3Rpb25Qcm9wIDogXCJjb2x1bW5cIjtcbiAgdmFyIHN0eWxlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2V0U3RhY2tTdHlsZXMoe1xuICAgIGRpcmVjdGlvbixcbiAgICBzcGFjaW5nXG4gIH0pLCBbZGlyZWN0aW9uLCBzcGFjaW5nXSk7XG4gIHZhciBkaXZpZGVyU3R5bGUgPSBSZWFjdC51c2VNZW1vKCgpID0+IGdldERpdmlkZXJTdHlsZXMoe1xuICAgIHNwYWNpbmcsXG4gICAgZGlyZWN0aW9uXG4gIH0pLCBbc3BhY2luZywgZGlyZWN0aW9uXSk7XG4gIHZhciBoYXNEaXZpZGVyID0gISFkaXZpZGVyO1xuICB2YXIgc2hvdWxkVXNlQ2hpbGRyZW4gPSAhc2hvdWxkV3JhcENoaWxkcmVuICYmICFoYXNEaXZpZGVyO1xuICB2YXIgdmFsaWRDaGlsZHJlbiA9IGdldFZhbGlkQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB2YXIgY2xvbmVzID0gc2hvdWxkVXNlQ2hpbGRyZW4gPyB2YWxpZENoaWxkcmVuIDogdmFsaWRDaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgIHZhciBpc0xhc3QgPSBpbmRleCArIDEgPT09IHZhbGlkQ2hpbGRyZW4ubGVuZ3RoO1xuICAgIHZhciB3cmFwcGVkQ2hpbGQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdGFja0l0ZW0sIHtcbiAgICAgIGtleTogaW5kZXhcbiAgICB9LCBjaGlsZCk7XG5cbiAgICB2YXIgX2NoaWxkID0gc2hvdWxkV3JhcENoaWxkcmVuID8gd3JhcHBlZENoaWxkIDogY2hpbGQ7XG5cbiAgICBpZiAoIWhhc0RpdmlkZXIpIHJldHVybiBfY2hpbGQ7XG4gICAgdmFyIGNsb25lZERpdmlkZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGRpdmlkZXIsIHtcbiAgICAgIF9fY3NzOiBkaXZpZGVyU3R5bGVcbiAgICB9KTtcblxuICAgIHZhciBfZGl2aWRlciA9IGlzTGFzdCA/IG51bGwgOiBjbG9uZWREaXZpZGVyO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7XG4gICAgICBrZXk6IGluZGV4XG4gICAgfSwgX2NoaWxkLCBfZGl2aWRlcik7XG4gIH0pO1xuXG4gIHZhciBfY2xhc3NOYW1lID0gY3goXCJjaGFrcmEtc3RhY2tcIiwgY2xhc3NOYW1lKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLmRpdiwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IGFsaWduLFxuICAgIGp1c3RpZnlDb250ZW50OiBqdXN0aWZ5LFxuICAgIGZsZXhEaXJlY3Rpb246IHN0eWxlcy5mbGV4RGlyZWN0aW9uLFxuICAgIGZsZXhXcmFwOiB3cmFwLFxuICAgIGNsYXNzTmFtZTogX2NsYXNzTmFtZSxcbiAgICBfX2NzczogaGFzRGl2aWRlciA/IHt9IDoge1xuICAgICAgW3NlbGVjdG9yXTogc3R5bGVzW3NlbGVjdG9yXVxuICAgIH1cbiAgfSwgcmVzdCksIGNsb25lcyk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgU3RhY2suZGlzcGxheU5hbWUgPSBcIlN0YWNrXCI7XG59XG4vKipcbiAqIEEgdmlldyB0aGF0IGFycmFuZ2VzIGl0cyBjaGlsZHJlbiBpbiBhIGhvcml6b250YWwgbGluZS5cbiAqL1xuXG5cbmV4cG9ydCB2YXIgSFN0YWNrID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0YWNrLCBfZXh0ZW5kcyh7XG4gIGFsaWduOiBcImNlbnRlclwiXG59LCBwcm9wcywge1xuICBkaXJlY3Rpb246IFwicm93XCIsXG4gIHJlZjogcmVmXG59KSkpO1xuXG5pZiAoX19ERVZfXykge1xuICBIU3RhY2suZGlzcGxheU5hbWUgPSBcIkhTdGFja1wiO1xufVxuLyoqXG4gKiBBIHZpZXcgdGhhdCBhcnJhbmdlcyBpdHMgY2hpbGRyZW4gaW4gYSB2ZXJ0aWNhbCBsaW5lLlxuICovXG5cblxuZXhwb3J0IHZhciBWU3RhY2sgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhY2ssIF9leHRlbmRzKHtcbiAgYWxpZ246IFwiY2VudGVyXCJcbn0sIHByb3BzLCB7XG4gIGRpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgcmVmOiByZWZcbn0pKSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIFZTdGFjay5kaXNwbGF5TmFtZSA9IFwiVlN0YWNrXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGFjay5qcy5tYXAiLCJpbXBvcnQgeyBtYXBSZXNwb25zaXZlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcblxuLyoqXG4gKiBJZiB3ZSBldmVyIHJ1biBpbnRvIFNTUiBpc3N1ZXMgd2l0aCB0aGlzLCBjaGVjayB0aGlzIHBvc3QgdG8gZmluZCBhIGZpeCBmb3IgaXQ6XG4gKiBAc2VlIGh0dHBzOi8vbWVkaXVtLmNvbS9AZW1tZW5rby9wYXRjaGluZy1sb2JvdG9taXplZC1vd2wtc2VsZWN0b3ItZm9yLWVtb3Rpb24tc3NyLTVhNTgyYTNjNDI0Y1xuICovXG5leHBvcnQgdmFyIHNlbGVjdG9yID0gXCImID4gKjpub3Qoc3R5bGUpIH4gKjpub3Qoc3R5bGUpXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhY2tTdHlsZXMob3B0aW9ucykge1xuICB2YXIge1xuICAgIHNwYWNpbmcsXG4gICAgZGlyZWN0aW9uXG4gIH0gPSBvcHRpb25zO1xuICB2YXIgZGlyZWN0aW9uU3R5bGVzID0ge1xuICAgIGNvbHVtbjoge1xuICAgICAgbWFyZ2luVG9wOiBzcGFjaW5nLFxuICAgICAgbWFyZ2luRW5kOiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgbWFyZ2luU3RhcnQ6IDBcbiAgICB9LFxuICAgIHJvdzoge1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luRW5kOiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgbWFyZ2luU3RhcnQ6IHNwYWNpbmdcbiAgICB9LFxuICAgIFwiY29sdW1uLXJldmVyc2VcIjoge1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luRW5kOiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiBzcGFjaW5nLFxuICAgICAgbWFyZ2luU3RhcnQ6IDBcbiAgICB9LFxuICAgIFwicm93LXJldmVyc2VcIjoge1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luRW5kOiBzcGFjaW5nLFxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgbWFyZ2luU3RhcnQ6IDBcbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgZmxleERpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIFtzZWxlY3Rvcl06IG1hcFJlc3BvbnNpdmUoZGlyZWN0aW9uLCB2YWx1ZSA9PiBkaXJlY3Rpb25TdHlsZXNbdmFsdWVdKVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdmlkZXJTdHlsZXMob3B0aW9ucykge1xuICB2YXIge1xuICAgIHNwYWNpbmcsXG4gICAgZGlyZWN0aW9uXG4gIH0gPSBvcHRpb25zO1xuICB2YXIgZGl2aWRlclN0eWxlcyA9IHtcbiAgICBjb2x1bW46IHtcbiAgICAgIG15OiBzcGFjaW5nLFxuICAgICAgbXg6IDAsXG4gICAgICBib3JkZXJMZWZ0V2lkdGg6IDAsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogXCIxcHhcIlxuICAgIH0sXG4gICAgXCJjb2x1bW4tcmV2ZXJzZVwiOiB7XG4gICAgICBteTogc3BhY2luZyxcbiAgICAgIG14OiAwLFxuICAgICAgYm9yZGVyTGVmdFdpZHRoOiAwLFxuICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IFwiMXB4XCJcbiAgICB9LFxuICAgIHJvdzoge1xuICAgICAgbXg6IHNwYWNpbmcsXG4gICAgICBteTogMCxcbiAgICAgIGJvcmRlckxlZnRXaWR0aDogXCIxcHhcIixcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAwXG4gICAgfSxcbiAgICBcInJvdy1yZXZlcnNlXCI6IHtcbiAgICAgIG14OiBzcGFjaW5nLFxuICAgICAgbXk6IDAsXG4gICAgICBib3JkZXJMZWZ0V2lkdGg6IFwiMXB4XCIsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogMFxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBcIiZcIjogbWFwUmVzcG9uc2l2ZShkaXJlY3Rpb24sIHZhbHVlID0+IGRpdmlkZXJTdHlsZXNbdmFsdWVdKVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhY2sudXRpbHMuanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYsIG9taXRUaGVtaW5nUHJvcHMsIHVzZVN0eWxlQ29uZmlnIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBjeCwgX19ERVZfXywgZmlsdGVyVW5kZWZpbmVkIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVuZGVyIHRleHRzIG9yIHBhcmFncmFwaHMuXG4gKlxuICogQHNlZSBEb2NzIGh0dHBzOi8vY2hha3JhLXVpLmNvbS9kb2NzL3R5cG9ncmFwaHkvdGV4dFxuICovXG5leHBvcnQgdmFyIFRleHQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIgc3R5bGVzID0gdXNlU3R5bGVDb25maWcoXCJUZXh0XCIsIHByb3BzKTtcblxuICB2YXIgX29taXRUaGVtaW5nUHJvcHMgPSBvbWl0VGhlbWluZ1Byb3BzKHByb3BzKSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb21pdFRoZW1pbmdQcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwiYWxpZ25cIiwgXCJkZWNvcmF0aW9uXCIsIFwiY2FzaW5nXCJdKTtcblxuICB2YXIgYWxpYXNlZFByb3BzID0gZmlsdGVyVW5kZWZpbmVkKHtcbiAgICB0ZXh0QWxpZ246IHByb3BzLmFsaWduLFxuICAgIHRleHREZWNvcmF0aW9uOiBwcm9wcy5kZWNvcmF0aW9uLFxuICAgIHRleHRUcmFuc2Zvcm06IHByb3BzLmNhc2luZ1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5wLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjeChcImNoYWtyYS10ZXh0XCIsIHByb3BzLmNsYXNzTmFtZSlcbiAgfSwgYWxpYXNlZFByb3BzLCByZXN0LCB7XG4gICAgX19jc3M6IHN0eWxlc1xuICB9KSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgVGV4dC5kaXNwbGF5TmFtZSA9IFwiVGV4dFwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiwgdG9rZW5Ub0NTU1ZhciB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgY3gsIG1hcFJlc3BvbnNpdmUsIF9fREVWX18gfSBmcm9tIFwiQGNoYWtyYS11aS91dGlsc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogTGF5b3V0IGNvbXBvbmVudCB1c2VkIHRvIHN0YWNrIGVsZW1lbnRzIHRoYXQgZGlmZmVyIGluIGxlbmd0aFxuICogYW5kIGFyZSBsaWFibGUgdG8gd3JhcC5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2VzOlxuICogLSBCdXR0b25zIHRoYXQgYXBwZWFyIHRvZ2V0aGVyIGF0IHRoZSBlbmQgb2YgZm9ybXNcbiAqIC0gTGlzdHMgb2YgdGFncyBhbmQgY2hpcHNcbiAqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvbGF5b3V0L3dyYXBcbiAqL1xuZXhwb3J0IHZhciBXcmFwID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHtcbiAgICBzcGFjaW5nID0gXCIwLjVyZW1cIixcbiAgICBjaGlsZHJlbixcbiAgICBqdXN0aWZ5LFxuICAgIGRpcmVjdGlvbixcbiAgICBhbGlnbixcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvdWxkV3JhcENoaWxkcmVuXG4gIH0gPSBwcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wic3BhY2luZ1wiLCBcImNoaWxkcmVuXCIsIFwianVzdGlmeVwiLCBcImRpcmVjdGlvblwiLCBcImFsaWduXCIsIFwiY2xhc3NOYW1lXCIsIFwic2hvdWxkV3JhcENoaWxkcmVuXCJdKTtcblxuICB2YXIgc3R5bGVzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIFwiLS1jaGFrcmEtd3JhcC1zcGFjaW5nXCI6IHRoZW1lID0+IG1hcFJlc3BvbnNpdmUoc3BhY2luZywgdmFsdWUgPT4gdG9rZW5Ub0NTU1ZhcihcInNwYWNlXCIsIHZhbHVlKSh0aGVtZSkpLFxuICAgIFwiLS13cmFwLXNwYWNpbmdcIjogXCJjYWxjKHZhcigtLWNoYWtyYS13cmFwLXNwYWNpbmcpIC8gMilcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IGp1c3RpZnksXG4gICAgYWxpZ25JdGVtczogYWxpZ24sXG4gICAgZmxleERpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIG1hcmdpbjogXCJjYWxjKHZhcigtLXdyYXAtc3BhY2luZykgKiAtMSlcIixcbiAgICBcIiYgPiAqOm5vdChzdHlsZSlcIjoge1xuICAgICAgbWFyZ2luOiBcInZhcigtLXdyYXAtc3BhY2luZylcIlxuICAgIH1cbiAgfSksIFtzcGFjaW5nLCBqdXN0aWZ5LCBhbGlnbiwgZGlyZWN0aW9uXSk7XG4gIHZhciBjaGlsZHJlblRvUmVuZGVyID0gc2hvdWxkV3JhcENoaWxkcmVuID8gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwSXRlbSwge1xuICAgIGtleTogaW5kZXhcbiAgfSwgY2hpbGQpKSA6IGNoaWxkcmVuO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLmRpdiwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY3goXCJjaGFrcmEtd3JhcFwiLCBjbGFzc05hbWUpXG4gIH0sIHJlc3QpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEudWwsIHtcbiAgICBjbGFzc05hbWU6IFwiY2hha3JhLXdyYXBfX2xpc3RcIixcbiAgICBfX2Nzczogc3R5bGVzXG4gIH0sIGNoaWxkcmVuVG9SZW5kZXIpKTtcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBXcmFwLmRpc3BsYXlOYW1lID0gXCJXcmFwXCI7XG59XG5cbmV4cG9ydCB2YXIgV3JhcEl0ZW0gPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIge1xuICAgIGNsYXNzTmFtZVxuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5saSwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIF9fY3NzOiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiXG4gICAgfSxcbiAgICBjbGFzc05hbWU6IGN4KFwiY2hha3JhLXdyYXBfX2xpc3RpdGVtXCIsIGNsYXNzTmFtZSlcbiAgfSwgcmVzdCkpO1xufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIFdyYXBJdGVtLmRpc3BsYXlOYW1lID0gXCJXcmFwSXRlbVwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d3JhcC5qcy5tYXAiLCJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXI6IFJlYWN0LkZDPFdyYXBwZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxCb3g+e2NoaWxkcmVufTwvQm94PjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUVycm9yTWVzc2FnZSxcclxuICBGb3JtTGFiZWwsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvZm9ybS1jb250cm9sXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcclxuaW50ZXJmYWNlIHJlZ2lzdGVyUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8cmVnaXN0ZXJQcm9wcz4gPSAoe30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIHtcIiBcIn1cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsodmFsdWVzLCBoYW5kbGVDaGFuZ2UpID0+IChcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLm5hbWV9PC9Gb3JtRXJyb3JNZXNzYWdlPiovfVxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==