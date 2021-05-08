self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./node_modules/@chakra-ui/button/dist/esm/button-group.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@chakra-ui/button/dist/esm/button-group.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useButtonGroup": function() { return /* binding */ useButtonGroup; },
/* harmony export */   "ButtonGroup": function() { return /* binding */ ButtonGroup; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react-utils */ "./node_modules/@chakra-ui/react-utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var [ButtonGroupProvider, useButtonGroup] = (0,_chakra_ui_react_utils__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  strict: false,
  name: "ButtonGroupContext"
});

var ButtonGroup = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref) => {
  var {
    size,
    colorScheme,
    variant,
    className,
    spacing = "0.5rem",
    isAttached,
    isDisabled
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["size", "colorScheme", "variant", "className", "spacing", "isAttached", "isDisabled"]);

  var _className = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-button__group", className);

  var context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    size,
    colorScheme,
    variant,
    isDisabled
  }), [size, colorScheme, variant, isDisabled]);
  var groupStyles = {
    display: "inline-flex"
  };

  if (isAttached) {
    groupStyles = _extends({}, groupStyles, {
      "> *:first-of-type:not(:last-of-type)": {
        borderEndRadius: 0
      },
      "> *:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0
      },
      "> *:not(:first-of-type):last-of-type": {
        borderStartRadius: 0
      }
    });
  } else {
    groupStyles = _extends({}, groupStyles, {
      "& > *:not(style) ~ *:not(style)": {
        marginStart: spacing
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonGroupProvider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.chakra.div, _extends({
    ref: ref,
    role: "group",
    __css: groupStyles,
    className: _className
  }, rest)));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
//# sourceMappingURL=button-group.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/button/dist/esm/button.js":
/*!***********************************************************!*\
  !*** ./node_modules/@chakra-ui/button/dist/esm/button.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react-utils */ "./node_modules/@chakra-ui/react-utils/dist/esm/index.js");
/* harmony import */ var _chakra_ui_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/spinner */ "./node_modules/@chakra-ui/spinner/dist/esm/index.js");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-group */ "./node_modules/@chakra-ui/button/dist/esm/button-group.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var Button = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var _styles$_focus;

  var group = (0,_button_group__WEBPACK_IMPORTED_MODULE_2__.useButtonGroup)();
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Button", _extends({}, group, props));

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      {
    isDisabled = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    isFullWidth,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"]);
  /**
   * When button is used within ButtonGroup (i.e flushed with sibling buttons),
   * it is important to add a `zIndex` on focus.
   *
   * So let's read the component styles and then add `zIndex` to it.
   */


  var _focus = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.mergeWith)({}, (_styles$_focus = styles == null ? void 0 : styles["_focus"]) != null ? _styles$_focus : {}, {
    zIndex: 1
  });

  var buttonStyles = _extends({
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 250ms",
    userSelect: "none",
    position: "relative",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    outline: "none",
    width: isFullWidth ? "100%" : "auto"
  }, styles, !!group && {
    _focus
  });

  var [isButton, setIsButton] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!as);
  var refCallback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if (!node) return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  var defaultType = isButton ? "button" : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.button, _extends({
    disabled: isDisabled || isLoading,
    ref: (0,_chakra_ui_react_utils__WEBPACK_IMPORTED_MODULE_4__.mergeRefs)(ref, refCallback),
    as: as,
    type: type != null ? type : defaultType,
    "data-active": (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.dataAttr)(isActive),
    "data-loading": (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.dataAttr)(isLoading),
    __css: buttonStyles,
    className: (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-button", className)
  }, rest), leftIcon && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonIcon, {
    marginEnd: iconSpacing
  }, leftIcon), isLoading && spinnerPlacement === "start" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonSpinner, {
    label: loadingText,
    placement: "start"
  }, spinner), isLoading ? loadingText || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.span, {
    opacity: 0
  }, children) : children, isLoading && spinnerPlacement === "end" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonSpinner, {
    label: loadingText,
    placement: "end"
  }, spinner), rightIcon && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonIcon, {
    marginStart: iconSpacing
  }, rightIcon));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  Button.displayName = "Button";
}

var ButtonIcon = props => {
  var {
    children,
    className
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["children", "className"]);

  var _children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;

  var _className = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-button__icon", className);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.span, _extends({
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0
  }, rest, {
    className: _className
  }), _children);
};

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  ButtonIcon.displayName = "ButtonIcon";
}

var ButtonSpinner = props => {
  var {
    label,
    placement,
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_spinner__WEBPACK_IMPORTED_MODULE_5__.Spinner, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className,
    __css
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["label", "placement", "spacing", "children", "className", "__css"]);

  var _className = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.cx)("chakra-button__spinner", className);

  var marginProp = placement === "start" ? "marginEnd" : "marginStart";

  var spinnerStyles = _extends({
    display: "flex",
    alignItems: "center",
    position: label ? "relative" : "absolute",
    [marginProp]: label ? "0.5rem" : 0,
    fontSize: "1em",
    lineHeight: "normal"
  }, __css);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    className: _className
  }, rest, {
    __css: spinnerStyles
  }), children);
};

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  ButtonSpinner.displayName = "ButtonSpinner";
}
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/button/dist/esm/icon-button.js":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/button/dist/esm/icon-button.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButton": function() { return /* binding */ IconButton; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./node_modules/@chakra-ui/button/dist/esm/button.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var IconButton = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var {
    icon,
    children,
    isRound,
    "aria-label": ariaLabel
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["icon", "children", "isRound", "aria-label"]);
  /**
   * Passing the icon as prop or children should work
   */


  var element = icon || children;

  var _children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, {
    "aria-hidden": true,
    focusable: false
  }) : null;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.Button, _extends({
    padding: "0",
    borderRadius: isRound ? "full" : "md",
    ref: ref,
    "aria-label": ariaLabel
  }, rest), _children);
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
  IconButton.displayName = "IconButton";
}
//# sourceMappingURL=icon-button.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/button/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@chakra-ui/button/dist/esm/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./node_modules/@chakra-ui/button/dist/esm/button.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _button__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-group */ "./node_modules/@chakra-ui/button/dist/esm/button-group.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button_group__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _button_group__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-button */ "./node_modules/@chakra-ui/button/dist/esm/icon-button.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon_button__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _icon_button__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/spinner/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@chakra-ui/spinner/dist/esm/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner */ "./node_modules/@chakra-ui/spinner/dist/esm/spinner.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _spinner__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _spinner__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/spinner/dist/esm/spinner.js":
/*!*************************************************************!*\
  !*** ./node_modules/@chakra-ui/spinner/dist/esm/spinner.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spinner": function() { return /* binding */ Spinner; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");
/* harmony import */ var _chakra_ui_visually_hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/visually-hidden */ "./node_modules/@chakra-ui/visually-hidden/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var spin = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.keyframes)({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});

/**
 * Spinner is used to indicate the loading state of a page or a component,
 * It renders a `div` by default.
 *
 * @see Docs https://chakra-ui.com/docs/feedback/spinner
 */
var Spinner = /*#__PURE__*/(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.useStyleConfig)("Spinner", props);

  var _omitThemingProps = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.omitThemingProps)(props),
      {
    label = "Loading...",
    thickness = "2px",
    speed = "0.45s",
    emptyColor = "transparent",
    className
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["label", "thickness", "speed", "emptyColor", "className"]);

  var _className = (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.cx)("chakra-spinner", className);

  var spinnerStyles = _extends({
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: spin + " " + speed + " linear infinite"
  }, styles);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div, _extends({
    ref: ref,
    __css: spinnerStyles,
    className: _className
  }, rest), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, null, label));
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.__DEV__) {
  Spinner.displayName = "Spinner";
}
//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/visually-hidden/dist/esm/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@chakra-ui/visually-hidden/dist/esm/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _visually_hidden__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _visually_hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visually-hidden */ "./node_modules/@chakra-ui/visually-hidden/dist/esm/visually-hidden.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _visually_hidden__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _visually_hidden__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@chakra-ui/visually-hidden/dist/esm/visually-hidden.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@chakra-ui/visually-hidden/dist/esm/visually-hidden.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visuallyHiddenStyle": function() { return /* binding */ visuallyHiddenStyle; },
/* harmony export */   "VisuallyHidden": function() { return /* binding */ VisuallyHidden; },
/* harmony export */   "VisuallyHiddenInput": function() { return /* binding */ VisuallyHiddenInput; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/esm/index.js");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/utils */ "./node_modules/@chakra-ui/utils/dist/esm/index.js");



/**
 * Styles to visually hide an element
 * but make it accessible to screen-readers
 */
var visuallyHiddenStyle = {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
/**
 * Visually hidden component used to hide
 * elements on screen
 */

var VisuallyHidden = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.chakra)("span", {
  baseStyle: visuallyHiddenStyle
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_1__.__DEV__) {
  VisuallyHidden.displayName = "VisuallyHidden";
}
/**
 * Visually hidden input component for designing
 * custom input components using the html `input`
 * as a proxy
 */


var VisuallyHiddenInput = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_0__.chakra)("input", {
  baseStyle: visuallyHiddenStyle
});

if (_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_1__.__DEV__) {
  VisuallyHiddenInput.displayName = "VisuallyHiddenInput";
}

/* harmony default export */ __webpack_exports__["default"] = (VisuallyHidden);
//# sourceMappingURL=visually-hidden.js.map

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
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InputField */ "./src/components/InputField.tsx");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\Reddit-CloneBase\\lireddit-web\\src\\pages\\register.tsx",
    _this = undefined;







var Register = function Register(_ref) {
  (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_Reddit_CloneBase_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {
    variant: "small",
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.InputField, {
            name: "username",
            placeholder: "username",
            label: "username",
            type: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
            mt: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.InputField, {
              name: "password",
              placeholder: "password",
              label: "password",
              type: "password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
            type: "submit",
            children: "REGISTER"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvYnV0dG9uL2Rpc3QvZXNtL2J1dHRvbi1ncm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvYnV0dG9uL2Rpc3QvZXNtL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvYnV0dG9uL2Rpc3QvZXNtL2ljb24tYnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9idXR0b24vZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL3NwaW5uZXIvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL3NwaW5uZXIvZGlzdC9lc20vc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvdmlzdWFsbHktaGlkZGVuL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS92aXN1YWxseS1oaWRkZW4vZGlzdC9lc20vdmlzdWFsbHktaGlkZGVuLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUIsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFM1QsMERBQTBELCtCQUErQixpQkFBaUIsc0NB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aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5kMTcyNzMyNGZmMjQ1YWJiMDA3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYgfSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IGN4LCBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdC11dGlsc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgW0J1dHRvbkdyb3VwUHJvdmlkZXIsIHVzZUJ1dHRvbkdyb3VwXSA9IGNyZWF0ZUNvbnRleHQoe1xuICBzdHJpY3Q6IGZhbHNlLFxuICBuYW1lOiBcIkJ1dHRvbkdyb3VwQ29udGV4dFwiXG59KTtcbmV4cG9ydCB7IHVzZUJ1dHRvbkdyb3VwIH07XG5leHBvcnQgdmFyIEJ1dHRvbkdyb3VwID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHtcbiAgICBzaXplLFxuICAgIGNvbG9yU2NoZW1lLFxuICAgIHZhcmlhbnQsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNwYWNpbmcgPSBcIjAuNXJlbVwiLFxuICAgIGlzQXR0YWNoZWQsXG4gICAgaXNEaXNhYmxlZFxuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInNpemVcIiwgXCJjb2xvclNjaGVtZVwiLCBcInZhcmlhbnRcIiwgXCJjbGFzc05hbWVcIiwgXCJzcGFjaW5nXCIsIFwiaXNBdHRhY2hlZFwiLCBcImlzRGlzYWJsZWRcIl0pO1xuXG4gIHZhciBfY2xhc3NOYW1lID0gY3goXCJjaGFrcmEtYnV0dG9uX19ncm91cFwiLCBjbGFzc05hbWUpO1xuXG4gIHZhciBjb250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHNpemUsXG4gICAgY29sb3JTY2hlbWUsXG4gICAgdmFyaWFudCxcbiAgICBpc0Rpc2FibGVkXG4gIH0pLCBbc2l6ZSwgY29sb3JTY2hlbWUsIHZhcmlhbnQsIGlzRGlzYWJsZWRdKTtcbiAgdmFyIGdyb3VwU3R5bGVzID0ge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIlxuICB9O1xuXG4gIGlmIChpc0F0dGFjaGVkKSB7XG4gICAgZ3JvdXBTdHlsZXMgPSBfZXh0ZW5kcyh7fSwgZ3JvdXBTdHlsZXMsIHtcbiAgICAgIFwiPiAqOmZpcnN0LW9mLXR5cGU6bm90KDpsYXN0LW9mLXR5cGUpXCI6IHtcbiAgICAgICAgYm9yZGVyRW5kUmFkaXVzOiAwXG4gICAgICB9LFxuICAgICAgXCI+ICo6bm90KDpmaXJzdC1vZi10eXBlKTpub3QoOmxhc3Qtb2YtdHlwZSlcIjoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDBcbiAgICAgIH0sXG4gICAgICBcIj4gKjpub3QoOmZpcnN0LW9mLXR5cGUpOmxhc3Qtb2YtdHlwZVwiOiB7XG4gICAgICAgIGJvcmRlclN0YXJ0UmFkaXVzOiAwXG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZ3JvdXBTdHlsZXMgPSBfZXh0ZW5kcyh7fSwgZ3JvdXBTdHlsZXMsIHtcbiAgICAgIFwiJiA+ICo6bm90KHN0eWxlKSB+ICo6bm90KHN0eWxlKVwiOiB7XG4gICAgICAgIG1hcmdpblN0YXJ0OiBzcGFjaW5nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uR3JvdXBQcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5kaXYsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBcImdyb3VwXCIsXG4gICAgX19jc3M6IGdyb3VwU3R5bGVzLFxuICAgIGNsYXNzTmFtZTogX2NsYXNzTmFtZVxuICB9LCByZXN0KSkpO1xufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIEJ1dHRvbkdyb3VwLmRpc3BsYXlOYW1lID0gXCJCdXR0b25Hcm91cFwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnV0dG9uLWdyb3VwLmpzLm1hcCIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IHsgbWVyZ2VSZWZzIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3QtdXRpbHNcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9zcGlubmVyXCI7XG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYsIG9taXRUaGVtaW5nUHJvcHMsIHVzZVN0eWxlQ29uZmlnIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBjeCwgZGF0YUF0dHIsIG1lcmdlV2l0aCwgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUJ1dHRvbkdyb3VwIH0gZnJvbSBcIi4vYnV0dG9uLWdyb3VwXCI7XG5leHBvcnQgdmFyIEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciBfc3R5bGVzJF9mb2N1cztcblxuICB2YXIgZ3JvdXAgPSB1c2VCdXR0b25Hcm91cCgpO1xuICB2YXIgc3R5bGVzID0gdXNlU3R5bGVDb25maWcoXCJCdXR0b25cIiwgX2V4dGVuZHMoe30sIGdyb3VwLCBwcm9wcykpO1xuXG4gIHZhciBfb21pdFRoZW1pbmdQcm9wcyA9IG9taXRUaGVtaW5nUHJvcHMocHJvcHMpLFxuICAgICAge1xuICAgIGlzRGlzYWJsZWQgPSBncm91cCA9PSBudWxsID8gdm9pZCAwIDogZ3JvdXAuaXNEaXNhYmxlZCxcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNBY3RpdmUsXG4gICAgaXNGdWxsV2lkdGgsXG4gICAgY2hpbGRyZW4sXG4gICAgbGVmdEljb24sXG4gICAgcmlnaHRJY29uLFxuICAgIGxvYWRpbmdUZXh0LFxuICAgIGljb25TcGFjaW5nID0gXCIwLjVyZW1cIixcbiAgICB0eXBlLFxuICAgIHNwaW5uZXIsXG4gICAgc3Bpbm5lclBsYWNlbWVudCA9IFwic3RhcnRcIixcbiAgICBjbGFzc05hbWUsXG4gICAgYXNcbiAgfSA9IF9vbWl0VGhlbWluZ1Byb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vbWl0VGhlbWluZ1Byb3BzLCBbXCJpc0Rpc2FibGVkXCIsIFwiaXNMb2FkaW5nXCIsIFwiaXNBY3RpdmVcIiwgXCJpc0Z1bGxXaWR0aFwiLCBcImNoaWxkcmVuXCIsIFwibGVmdEljb25cIiwgXCJyaWdodEljb25cIiwgXCJsb2FkaW5nVGV4dFwiLCBcImljb25TcGFjaW5nXCIsIFwidHlwZVwiLCBcInNwaW5uZXJcIiwgXCJzcGlubmVyUGxhY2VtZW50XCIsIFwiY2xhc3NOYW1lXCIsIFwiYXNcIl0pO1xuICAvKipcbiAgICogV2hlbiBidXR0b24gaXMgdXNlZCB3aXRoaW4gQnV0dG9uR3JvdXAgKGkuZSBmbHVzaGVkIHdpdGggc2libGluZyBidXR0b25zKSxcbiAgICogaXQgaXMgaW1wb3J0YW50IHRvIGFkZCBhIGB6SW5kZXhgIG9uIGZvY3VzLlxuICAgKlxuICAgKiBTbyBsZXQncyByZWFkIHRoZSBjb21wb25lbnQgc3R5bGVzIGFuZCB0aGVuIGFkZCBgekluZGV4YCB0byBpdC5cbiAgICovXG5cblxuICB2YXIgX2ZvY3VzID0gbWVyZ2VXaXRoKHt9LCAoX3N0eWxlcyRfZm9jdXMgPSBzdHlsZXMgPT0gbnVsbCA/IHZvaWQgMCA6IHN0eWxlc1tcIl9mb2N1c1wiXSkgIT0gbnVsbCA/IF9zdHlsZXMkX2ZvY3VzIDoge30sIHtcbiAgICB6SW5kZXg6IDFcbiAgfSk7XG5cbiAgdmFyIGJ1dHRvblN0eWxlcyA9IF9leHRlbmRzKHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgYXBwZWFyYW5jZTogXCJub25lXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAyNTBtc1wiLFxuICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIHdpZHRoOiBpc0Z1bGxXaWR0aCA/IFwiMTAwJVwiIDogXCJhdXRvXCJcbiAgfSwgc3R5bGVzLCAhIWdyb3VwICYmIHtcbiAgICBfZm9jdXNcbiAgfSk7XG5cbiAgdmFyIFtpc0J1dHRvbiwgc2V0SXNCdXR0b25dID0gUmVhY3QudXNlU3RhdGUoIWFzKTtcbiAgdmFyIHJlZkNhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2sobm9kZSA9PiB7XG4gICAgaWYgKCFub2RlKSByZXR1cm47XG4gICAgc2V0SXNCdXR0b24obm9kZS50YWdOYW1lID09PSBcIkJVVFRPTlwiKTtcbiAgfSwgW10pO1xuICB2YXIgZGVmYXVsdFR5cGUgPSBpc0J1dHRvbiA/IFwiYnV0dG9uXCIgOiB1bmRlZmluZWQ7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuYnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQgfHwgaXNMb2FkaW5nLFxuICAgIHJlZjogbWVyZ2VSZWZzKHJlZiwgcmVmQ2FsbGJhY2spLFxuICAgIGFzOiBhcyxcbiAgICB0eXBlOiB0eXBlICE9IG51bGwgPyB0eXBlIDogZGVmYXVsdFR5cGUsXG4gICAgXCJkYXRhLWFjdGl2ZVwiOiBkYXRhQXR0cihpc0FjdGl2ZSksXG4gICAgXCJkYXRhLWxvYWRpbmdcIjogZGF0YUF0dHIoaXNMb2FkaW5nKSxcbiAgICBfX2NzczogYnV0dG9uU3R5bGVzLFxuICAgIGNsYXNzTmFtZTogY3goXCJjaGFrcmEtYnV0dG9uXCIsIGNsYXNzTmFtZSlcbiAgfSwgcmVzdCksIGxlZnRJY29uICYmICFpc0xvYWRpbmcgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uSWNvbiwge1xuICAgIG1hcmdpbkVuZDogaWNvblNwYWNpbmdcbiAgfSwgbGVmdEljb24pLCBpc0xvYWRpbmcgJiYgc3Bpbm5lclBsYWNlbWVudCA9PT0gXCJzdGFydFwiICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblNwaW5uZXIsIHtcbiAgICBsYWJlbDogbG9hZGluZ1RleHQsXG4gICAgcGxhY2VtZW50OiBcInN0YXJ0XCJcbiAgfSwgc3Bpbm5lciksIGlzTG9hZGluZyA/IGxvYWRpbmdUZXh0IHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5zcGFuLCB7XG4gICAgb3BhY2l0eTogMFxuICB9LCBjaGlsZHJlbikgOiBjaGlsZHJlbiwgaXNMb2FkaW5nICYmIHNwaW5uZXJQbGFjZW1lbnQgPT09IFwiZW5kXCIgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uU3Bpbm5lciwge1xuICAgIGxhYmVsOiBsb2FkaW5nVGV4dCxcbiAgICBwbGFjZW1lbnQ6IFwiZW5kXCJcbiAgfSwgc3Bpbm5lciksIHJpZ2h0SWNvbiAmJiAhaXNMb2FkaW5nICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkljb24sIHtcbiAgICBtYXJnaW5TdGFydDogaWNvblNwYWNpbmdcbiAgfSwgcmlnaHRJY29uKSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgQnV0dG9uLmRpc3BsYXlOYW1lID0gXCJCdXR0b25cIjtcbn1cblxudmFyIEJ1dHRvbkljb24gPSBwcm9wcyA9PiB7XG4gIHZhciB7XG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lXG4gIH0gPSBwcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHZhciBfY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBmb2N1c2FibGU6IGZhbHNlXG4gIH0pIDogY2hpbGRyZW47XG5cbiAgdmFyIF9jbGFzc05hbWUgPSBjeChcImNoYWtyYS1idXR0b25fX2ljb25cIiwgY2xhc3NOYW1lKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLnNwYW4sIF9leHRlbmRzKHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICAgIGZsZXhTaHJpbms6IDBcbiAgfSwgcmVzdCwge1xuICAgIGNsYXNzTmFtZTogX2NsYXNzTmFtZVxuICB9KSwgX2NoaWxkcmVuKTtcbn07XG5cbmlmIChfX0RFVl9fKSB7XG4gIEJ1dHRvbkljb24uZGlzcGxheU5hbWUgPSBcIkJ1dHRvbkljb25cIjtcbn1cblxudmFyIEJ1dHRvblNwaW5uZXIgPSBwcm9wcyA9PiB7XG4gIHZhciB7XG4gICAgbGFiZWwsXG4gICAgcGxhY2VtZW50LFxuICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwge1xuICAgICAgY29sb3I6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICB3aWR0aDogXCIxZW1cIixcbiAgICAgIGhlaWdodDogXCIxZW1cIlxuICAgIH0pLFxuICAgIGNsYXNzTmFtZSxcbiAgICBfX2Nzc1xuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImxhYmVsXCIsIFwicGxhY2VtZW50XCIsIFwic3BhY2luZ1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiX19jc3NcIl0pO1xuXG4gIHZhciBfY2xhc3NOYW1lID0gY3goXCJjaGFrcmEtYnV0dG9uX19zcGlubmVyXCIsIGNsYXNzTmFtZSk7XG5cbiAgdmFyIG1hcmdpblByb3AgPSBwbGFjZW1lbnQgPT09IFwic3RhcnRcIiA/IFwibWFyZ2luRW5kXCIgOiBcIm1hcmdpblN0YXJ0XCI7XG5cbiAgdmFyIHNwaW5uZXJTdHlsZXMgPSBfZXh0ZW5kcyh7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwb3NpdGlvbjogbGFiZWwgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXG4gICAgW21hcmdpblByb3BdOiBsYWJlbCA/IFwiMC41cmVtXCIgOiAwLFxuICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgIGxpbmVIZWlnaHQ6IFwibm9ybWFsXCJcbiAgfSwgX19jc3MpO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuZGl2LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBfY2xhc3NOYW1lXG4gIH0sIHJlc3QsIHtcbiAgICBfX2Nzczogc3Bpbm5lclN0eWxlc1xuICB9KSwgY2hpbGRyZW4pO1xufTtcblxuaWYgKF9fREVWX18pIHtcbiAgQnV0dG9uU3Bpbm5lci5kaXNwbGF5TmFtZSA9IFwiQnV0dG9uU3Bpbm5lclwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnV0dG9uLmpzLm1hcCIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xuZXhwb3J0IHZhciBJY29uQnV0dG9uID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHtcbiAgICBpY29uLFxuICAgIGNoaWxkcmVuLFxuICAgIGlzUm91bmQsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbFxuICB9ID0gcHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImljb25cIiwgXCJjaGlsZHJlblwiLCBcImlzUm91bmRcIiwgXCJhcmlhLWxhYmVsXCJdKTtcbiAgLyoqXG4gICAqIFBhc3NpbmcgdGhlIGljb24gYXMgcHJvcCBvciBjaGlsZHJlbiBzaG91bGQgd29ya1xuICAgKi9cblxuXG4gIHZhciBlbGVtZW50ID0gaWNvbiB8fCBjaGlsZHJlbjtcblxuICB2YXIgX2NoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpID8gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGZvY3VzYWJsZTogZmFsc2VcbiAgfSkgOiBudWxsO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIF9leHRlbmRzKHtcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBib3JkZXJSYWRpdXM6IGlzUm91bmQgPyBcImZ1bGxcIiA6IFwibWRcIixcbiAgICByZWY6IHJlZixcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gIH0sIHJlc3QpLCBfY2hpbGRyZW4pO1xufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIEljb25CdXR0b24uZGlzcGxheU5hbWUgPSBcIkljb25CdXR0b25cIjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWljb24tYnV0dG9uLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gXCIuL2J1dHRvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uLWdyb3VwXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pY29uLWJ1dHRvblwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0ICogZnJvbSBcIi4vc3Bpbm5lclwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBjaGFrcmEsIGZvcndhcmRSZWYsIGtleWZyYW1lcywgb21pdFRoZW1pbmdQcm9wcywgdXNlU3R5bGVDb25maWcgfSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IGN4LCBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCB7IFZpc3VhbGx5SGlkZGVuIH0gZnJvbSBcIkBjaGFrcmEtdWkvdmlzdWFsbHktaGlkZGVuXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBzcGluID0ga2V5ZnJhbWVzKHtcbiAgXCIwJVwiOiB7XG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgwZGVnKVwiXG4gIH0sXG4gIFwiMTAwJVwiOiB7XG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzNjBkZWcpXCJcbiAgfVxufSk7XG5cbi8qKlxuICogU3Bpbm5lciBpcyB1c2VkIHRvIGluZGljYXRlIHRoZSBsb2FkaW5nIHN0YXRlIG9mIGEgcGFnZSBvciBhIGNvbXBvbmVudCxcbiAqIEl0IHJlbmRlcnMgYSBgZGl2YCBieSBkZWZhdWx0LlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL2NoYWtyYS11aS5jb20vZG9jcy9mZWVkYmFjay9zcGlubmVyXG4gKi9cbmV4cG9ydCB2YXIgU3Bpbm5lciA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHZhciBzdHlsZXMgPSB1c2VTdHlsZUNvbmZpZyhcIlNwaW5uZXJcIiwgcHJvcHMpO1xuXG4gIHZhciBfb21pdFRoZW1pbmdQcm9wcyA9IG9taXRUaGVtaW5nUHJvcHMocHJvcHMpLFxuICAgICAge1xuICAgIGxhYmVsID0gXCJMb2FkaW5nLi4uXCIsXG4gICAgdGhpY2tuZXNzID0gXCIycHhcIixcbiAgICBzcGVlZCA9IFwiMC40NXNcIixcbiAgICBlbXB0eUNvbG9yID0gXCJ0cmFuc3BhcmVudFwiLFxuICAgIGNsYXNzTmFtZVxuICB9ID0gX29taXRUaGVtaW5nUHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXRUaGVtaW5nUHJvcHMsIFtcImxhYmVsXCIsIFwidGhpY2tuZXNzXCIsIFwic3BlZWRcIiwgXCJlbXB0eUNvbG9yXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgX2NsYXNzTmFtZSA9IGN4KFwiY2hha3JhLXNwaW5uZXJcIiwgY2xhc3NOYW1lKTtcblxuICB2YXIgc3Bpbm5lclN0eWxlcyA9IF9leHRlbmRzKHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIGJvcmRlckNvbG9yOiBcImN1cnJlbnRDb2xvclwiLFxuICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjk5OTk5cHhcIixcbiAgICBib3JkZXJXaWR0aDogdGhpY2tuZXNzLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBlbXB0eUNvbG9yLFxuICAgIGJvcmRlckxlZnRDb2xvcjogZW1wdHlDb2xvcixcbiAgICBhbmltYXRpb246IHNwaW4gKyBcIiBcIiArIHNwZWVkICsgXCIgbGluZWFyIGluZmluaXRlXCJcbiAgfSwgc3R5bGVzKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLmRpdiwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIF9fY3NzOiBzcGlubmVyU3R5bGVzLFxuICAgIGNsYXNzTmFtZTogX2NsYXNzTmFtZVxuICB9LCByZXN0KSwgbGFiZWwgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmlzdWFsbHlIaWRkZW4sIG51bGwsIGxhYmVsKSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgU3Bpbm5lci5kaXNwbGF5TmFtZSA9IFwiU3Bpbm5lclwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Bpbm5lci5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi92aXN1YWxseS1oaWRkZW5cIjtcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi92aXN1YWxseS1oaWRkZW5cIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGNoYWtyYSB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgX19ERVZfXyB9IGZyb20gXCJAY2hha3JhLXVpL3V0aWxzXCI7XG5cbi8qKlxuICogU3R5bGVzIHRvIHZpc3VhbGx5IGhpZGUgYW4gZWxlbWVudFxuICogYnV0IG1ha2UgaXQgYWNjZXNzaWJsZSB0byBzY3JlZW4tcmVhZGVyc1xuICovXG5leHBvcnQgdmFyIHZpc3VhbGx5SGlkZGVuU3R5bGUgPSB7XG4gIGJvcmRlcjogXCIwcHhcIixcbiAgY2xpcDogXCJyZWN0KDBweCwgMHB4LCAwcHgsIDBweClcIixcbiAgaGVpZ2h0OiBcIjFweFwiLFxuICB3aWR0aDogXCIxcHhcIixcbiAgbWFyZ2luOiBcIi0xcHhcIixcbiAgcGFkZGluZzogXCIwcHhcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCJcbn07XG4vKipcbiAqIFZpc3VhbGx5IGhpZGRlbiBjb21wb25lbnQgdXNlZCB0byBoaWRlXG4gKiBlbGVtZW50cyBvbiBzY3JlZW5cbiAqL1xuXG5leHBvcnQgdmFyIFZpc3VhbGx5SGlkZGVuID0gY2hha3JhKFwic3BhblwiLCB7XG4gIGJhc2VTdHlsZTogdmlzdWFsbHlIaWRkZW5TdHlsZVxufSk7XG5cbmlmIChfX0RFVl9fKSB7XG4gIFZpc3VhbGx5SGlkZGVuLmRpc3BsYXlOYW1lID0gXCJWaXN1YWxseUhpZGRlblwiO1xufVxuLyoqXG4gKiBWaXN1YWxseSBoaWRkZW4gaW5wdXQgY29tcG9uZW50IGZvciBkZXNpZ25pbmdcbiAqIGN1c3RvbSBpbnB1dCBjb21wb25lbnRzIHVzaW5nIHRoZSBodG1sIGBpbnB1dGBcbiAqIGFzIGEgcHJveHlcbiAqL1xuXG5cbmV4cG9ydCB2YXIgVmlzdWFsbHlIaWRkZW5JbnB1dCA9IGNoYWtyYShcImlucHV0XCIsIHtcbiAgYmFzZVN0eWxlOiB2aXN1YWxseUhpZGRlblN0eWxlXG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgVmlzdWFsbHlIaWRkZW5JbnB1dC5kaXNwbGF5TmFtZSA9IFwiVmlzdWFsbHlIaWRkZW5JbnB1dFwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxseUhpZGRlbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpc3VhbGx5LWhpZGRlbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtRXJyb3JNZXNzYWdlLFxyXG4gIEZvcm1MYWJlbCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9mb3JtLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9pbnB1dFwiO1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvYnV0dG9uXCI7XHJcbmludGVyZmFjZSByZWdpc3RlclByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJzbWFsbFwiPlxyXG4gICAgICB7XCIgXCJ9XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9fVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHZhbHVlcywgaGFuZGxlQ2hhbmdlKSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgID48L0lucHV0RmllbGQ+XHJcbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgPjwvSW5wdXRGaWVsZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlJFR0lTVEVSPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9