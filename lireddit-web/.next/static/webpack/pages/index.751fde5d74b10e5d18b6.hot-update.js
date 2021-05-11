self["webpackHotUpdate_N_E"]("pages/index",{

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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
      ml: "auto",
      children: body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
      variant: "link",
      children: " logout "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvYnV0dG9uL2Rpc3QvZXNtL2J1dHRvbi1ncm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvYnV0dG9uL2Rpc3QvZXNtL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvYnV0dG9uL2Rpc3QvZXNtL2ljb24tYnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9idXR0b24vZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL3NwaW5uZXIvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL3NwaW5uZXIvZGlzdC9lc20vc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGFrcmEtdWkvdmlzdWFsbHktaGlkZGVuL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS92aXN1YWxseS1oaWRkZW4vZGlzdC9lc20vdmlzdWFsbHktaGlkZGVuLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHN4Il0sIm5hbWVzIjpbIk5hdkJhciIsInVzZU1lUXVlcnkiLCJkYXRhIiwiZmV0Y2hpbmciLCJib2R5IiwibWUiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxQixnREFBZ0QsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlLEdBQUcsd0NBQXdDOztBQUUzVCwwREFBMEQsK0JBQStCLGlCQUFpQixzQ0FBc0MsWUFB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QTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMscURBQUQ7QUFBUSxhQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBL0JNOztHQUFNSixNO1VBQ2tCQywwRDs7O0tBRGxCRCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc1MWZkZTVkNzRiMTBlNWQxOGI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgY3gsIF9fREVWX18gfSBmcm9tIFwiQGNoYWtyYS11aS91dGlsc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0LXV0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBbQnV0dG9uR3JvdXBQcm92aWRlciwgdXNlQnV0dG9uR3JvdXBdID0gY3JlYXRlQ29udGV4dCh7XG4gIHN0cmljdDogZmFsc2UsXG4gIG5hbWU6IFwiQnV0dG9uR3JvdXBDb250ZXh0XCJcbn0pO1xuZXhwb3J0IHsgdXNlQnV0dG9uR3JvdXAgfTtcbmV4cG9ydCB2YXIgQnV0dG9uR3JvdXAgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIge1xuICAgIHNpemUsXG4gICAgY29sb3JTY2hlbWUsXG4gICAgdmFyaWFudCxcbiAgICBjbGFzc05hbWUsXG4gICAgc3BhY2luZyA9IFwiMC41cmVtXCIsXG4gICAgaXNBdHRhY2hlZCxcbiAgICBpc0Rpc2FibGVkXG4gIH0gPSBwcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wic2l6ZVwiLCBcImNvbG9yU2NoZW1lXCIsIFwidmFyaWFudFwiLCBcImNsYXNzTmFtZVwiLCBcInNwYWNpbmdcIiwgXCJpc0F0dGFjaGVkXCIsIFwiaXNEaXNhYmxlZFwiXSk7XG5cbiAgdmFyIF9jbGFzc05hbWUgPSBjeChcImNoYWtyYS1idXR0b25fX2dyb3VwXCIsIGNsYXNzTmFtZSk7XG5cbiAgdmFyIGNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgc2l6ZSxcbiAgICBjb2xvclNjaGVtZSxcbiAgICB2YXJpYW50LFxuICAgIGlzRGlzYWJsZWRcbiAgfSksIFtzaXplLCBjb2xvclNjaGVtZSwgdmFyaWFudCwgaXNEaXNhYmxlZF0pO1xuICB2YXIgZ3JvdXBTdHlsZXMgPSB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiXG4gIH07XG5cbiAgaWYgKGlzQXR0YWNoZWQpIHtcbiAgICBncm91cFN0eWxlcyA9IF9leHRlbmRzKHt9LCBncm91cFN0eWxlcywge1xuICAgICAgXCI+ICo6Zmlyc3Qtb2YtdHlwZTpub3QoOmxhc3Qtb2YtdHlwZSlcIjoge1xuICAgICAgICBib3JkZXJFbmRSYWRpdXM6IDBcbiAgICAgIH0sXG4gICAgICBcIj4gKjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKVwiOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogMFxuICAgICAgfSxcbiAgICAgIFwiPiAqOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bGFzdC1vZi10eXBlXCI6IHtcbiAgICAgICAgYm9yZGVyU3RhcnRSYWRpdXM6IDBcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBncm91cFN0eWxlcyA9IF9leHRlbmRzKHt9LCBncm91cFN0eWxlcywge1xuICAgICAgXCImID4gKjpub3Qoc3R5bGUpIH4gKjpub3Qoc3R5bGUpXCI6IHtcbiAgICAgICAgbWFyZ2luU3RhcnQ6IHNwYWNpbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25Hcm91cFByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLmRpdiwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIHJvbGU6IFwiZ3JvdXBcIixcbiAgICBfX2NzczogZ3JvdXBTdHlsZXMsXG4gICAgY2xhc3NOYW1lOiBfY2xhc3NOYW1lXG4gIH0sIHJlc3QpKSk7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgQnV0dG9uR3JvdXAuZGlzcGxheU5hbWUgPSBcIkJ1dHRvbkdyb3VwXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idXR0b24tZ3JvdXAuanMubWFwIiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgeyBtZXJnZVJlZnMgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdC11dGlsc1wiO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJAY2hha3JhLXVpL3NwaW5uZXJcIjtcbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiwgb21pdFRoZW1pbmdQcm9wcywgdXNlU3R5bGVDb25maWcgfSBmcm9tIFwiQGNoYWtyYS11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IGN4LCBkYXRhQXR0ciwgbWVyZ2VXaXRoLCBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQnV0dG9uR3JvdXAgfSBmcm9tIFwiLi9idXR0b24tZ3JvdXBcIjtcbmV4cG9ydCB2YXIgQnV0dG9uID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIF9zdHlsZXMkX2ZvY3VzO1xuXG4gIHZhciBncm91cCA9IHVzZUJ1dHRvbkdyb3VwKCk7XG4gIHZhciBzdHlsZXMgPSB1c2VTdHlsZUNvbmZpZyhcIkJ1dHRvblwiLCBfZXh0ZW5kcyh7fSwgZ3JvdXAsIHByb3BzKSk7XG5cbiAgdmFyIF9vbWl0VGhlbWluZ1Byb3BzID0gb21pdFRoZW1pbmdQcm9wcyhwcm9wcyksXG4gICAgICB7XG4gICAgaXNEaXNhYmxlZCA9IGdyb3VwID09IG51bGwgPyB2b2lkIDAgOiBncm91cC5pc0Rpc2FibGVkLFxuICAgIGlzTG9hZGluZyxcbiAgICBpc0FjdGl2ZSxcbiAgICBpc0Z1bGxXaWR0aCxcbiAgICBjaGlsZHJlbixcbiAgICBsZWZ0SWNvbixcbiAgICByaWdodEljb24sXG4gICAgbG9hZGluZ1RleHQsXG4gICAgaWNvblNwYWNpbmcgPSBcIjAuNXJlbVwiLFxuICAgIHR5cGUsXG4gICAgc3Bpbm5lcixcbiAgICBzcGlubmVyUGxhY2VtZW50ID0gXCJzdGFydFwiLFxuICAgIGNsYXNzTmFtZSxcbiAgICBhc1xuICB9ID0gX29taXRUaGVtaW5nUHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXRUaGVtaW5nUHJvcHMsIFtcImlzRGlzYWJsZWRcIiwgXCJpc0xvYWRpbmdcIiwgXCJpc0FjdGl2ZVwiLCBcImlzRnVsbFdpZHRoXCIsIFwiY2hpbGRyZW5cIiwgXCJsZWZ0SWNvblwiLCBcInJpZ2h0SWNvblwiLCBcImxvYWRpbmdUZXh0XCIsIFwiaWNvblNwYWNpbmdcIiwgXCJ0eXBlXCIsIFwic3Bpbm5lclwiLCBcInNwaW5uZXJQbGFjZW1lbnRcIiwgXCJjbGFzc05hbWVcIiwgXCJhc1wiXSk7XG4gIC8qKlxuICAgKiBXaGVuIGJ1dHRvbiBpcyB1c2VkIHdpdGhpbiBCdXR0b25Hcm91cCAoaS5lIGZsdXNoZWQgd2l0aCBzaWJsaW5nIGJ1dHRvbnMpLFxuICAgKiBpdCBpcyBpbXBvcnRhbnQgdG8gYWRkIGEgYHpJbmRleGAgb24gZm9jdXMuXG4gICAqXG4gICAqIFNvIGxldCdzIHJlYWQgdGhlIGNvbXBvbmVudCBzdHlsZXMgYW5kIHRoZW4gYWRkIGB6SW5kZXhgIHRvIGl0LlxuICAgKi9cblxuXG4gIHZhciBfZm9jdXMgPSBtZXJnZVdpdGgoe30sIChfc3R5bGVzJF9mb2N1cyA9IHN0eWxlcyA9PSBudWxsID8gdm9pZCAwIDogc3R5bGVzW1wiX2ZvY3VzXCJdKSAhPSBudWxsID8gX3N0eWxlcyRfZm9jdXMgOiB7fSwge1xuICAgIHpJbmRleDogMVxuICB9KTtcblxuICB2YXIgYnV0dG9uU3R5bGVzID0gX2V4dGVuZHMoe1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICBhcHBlYXJhbmNlOiBcIm5vbmVcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDI1MG1zXCIsXG4gICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgd2lkdGg6IGlzRnVsbFdpZHRoID8gXCIxMDAlXCIgOiBcImF1dG9cIlxuICB9LCBzdHlsZXMsICEhZ3JvdXAgJiYge1xuICAgIF9mb2N1c1xuICB9KTtcblxuICB2YXIgW2lzQnV0dG9uLCBzZXRJc0J1dHRvbl0gPSBSZWFjdC51c2VTdGF0ZSghYXMpO1xuICB2YXIgcmVmQ2FsbGJhY2sgPSBSZWFjdC51c2VDYWxsYmFjayhub2RlID0+IHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBzZXRJc0J1dHRvbihub2RlLnRhZ05hbWUgPT09IFwiQlVUVE9OXCIpO1xuICB9LCBbXSk7XG4gIHZhciBkZWZhdWx0VHlwZSA9IGlzQnV0dG9uID8gXCJidXR0b25cIiA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5idXR0b24sIF9leHRlbmRzKHtcbiAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCB8fCBpc0xvYWRpbmcsXG4gICAgcmVmOiBtZXJnZVJlZnMocmVmLCByZWZDYWxsYmFjayksXG4gICAgYXM6IGFzLFxuICAgIHR5cGU6IHR5cGUgIT0gbnVsbCA/IHR5cGUgOiBkZWZhdWx0VHlwZSxcbiAgICBcImRhdGEtYWN0aXZlXCI6IGRhdGFBdHRyKGlzQWN0aXZlKSxcbiAgICBcImRhdGEtbG9hZGluZ1wiOiBkYXRhQXR0cihpc0xvYWRpbmcpLFxuICAgIF9fY3NzOiBidXR0b25TdHlsZXMsXG4gICAgY2xhc3NOYW1lOiBjeChcImNoYWtyYS1idXR0b25cIiwgY2xhc3NOYW1lKVxuICB9LCByZXN0KSwgbGVmdEljb24gJiYgIWlzTG9hZGluZyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25JY29uLCB7XG4gICAgbWFyZ2luRW5kOiBpY29uU3BhY2luZ1xuICB9LCBsZWZ0SWNvbiksIGlzTG9hZGluZyAmJiBzcGlubmVyUGxhY2VtZW50ID09PSBcInN0YXJ0XCIgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uU3Bpbm5lciwge1xuICAgIGxhYmVsOiBsb2FkaW5nVGV4dCxcbiAgICBwbGFjZW1lbnQ6IFwic3RhcnRcIlxuICB9LCBzcGlubmVyKSwgaXNMb2FkaW5nID8gbG9hZGluZ1RleHQgfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY2hha3JhLnNwYW4sIHtcbiAgICBvcGFjaXR5OiAwXG4gIH0sIGNoaWxkcmVuKSA6IGNoaWxkcmVuLCBpc0xvYWRpbmcgJiYgc3Bpbm5lclBsYWNlbWVudCA9PT0gXCJlbmRcIiAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25TcGlubmVyLCB7XG4gICAgbGFiZWw6IGxvYWRpbmdUZXh0LFxuICAgIHBsYWNlbWVudDogXCJlbmRcIlxuICB9LCBzcGlubmVyKSwgcmlnaHRJY29uICYmICFpc0xvYWRpbmcgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uSWNvbiwge1xuICAgIG1hcmdpblN0YXJ0OiBpY29uU3BhY2luZ1xuICB9LCByaWdodEljb24pKTtcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBCdXR0b24uZGlzcGxheU5hbWUgPSBcIkJ1dHRvblwiO1xufVxuXG52YXIgQnV0dG9uSWNvbiA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWVcbiAgfSA9IHByb3BzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIF9jaGlsZHJlbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGZvY3VzYWJsZTogZmFsc2VcbiAgfSkgOiBjaGlsZHJlbjtcblxuICB2YXIgX2NsYXNzTmFtZSA9IGN4KFwiY2hha3JhLWJ1dHRvbl9faWNvblwiLCBjbGFzc05hbWUpO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuc3BhbiwgX2V4dGVuZHMoe1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gICAgZmxleFNocmluazogMFxuICB9LCByZXN0LCB7XG4gICAgY2xhc3NOYW1lOiBfY2xhc3NOYW1lXG4gIH0pLCBfY2hpbGRyZW4pO1xufTtcblxuaWYgKF9fREVWX18pIHtcbiAgQnV0dG9uSWNvbi5kaXNwbGF5TmFtZSA9IFwiQnV0dG9uSWNvblwiO1xufVxuXG52YXIgQnV0dG9uU3Bpbm5lciA9IHByb3BzID0+IHtcbiAgdmFyIHtcbiAgICBsYWJlbCxcbiAgICBwbGFjZW1lbnQsXG4gICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7XG4gICAgICBjb2xvcjogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHdpZHRoOiBcIjFlbVwiLFxuICAgICAgaGVpZ2h0OiBcIjFlbVwiXG4gICAgfSksXG4gICAgY2xhc3NOYW1lLFxuICAgIF9fY3NzXG4gIH0gPSBwcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wibGFiZWxcIiwgXCJwbGFjZW1lbnRcIiwgXCJzcGFjaW5nXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJfX2Nzc1wiXSk7XG5cbiAgdmFyIF9jbGFzc05hbWUgPSBjeChcImNoYWtyYS1idXR0b25fX3NwaW5uZXJcIiwgY2xhc3NOYW1lKTtcblxuICB2YXIgbWFyZ2luUHJvcCA9IHBsYWNlbWVudCA9PT0gXCJzdGFydFwiID8gXCJtYXJnaW5FbmRcIiA6IFwibWFyZ2luU3RhcnRcIjtcblxuICB2YXIgc3Bpbm5lclN0eWxlcyA9IF9leHRlbmRzKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBvc2l0aW9uOiBsYWJlbCA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcbiAgICBbbWFyZ2luUHJvcF06IGxhYmVsID8gXCIwLjVyZW1cIiA6IDAsXG4gICAgZm9udFNpemU6IFwiMWVtXCIsXG4gICAgbGluZUhlaWdodDogXCJub3JtYWxcIlxuICB9LCBfX2Nzcyk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNoYWtyYS5kaXYsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IF9jbGFzc05hbWVcbiAgfSwgcmVzdCwge1xuICAgIF9fY3NzOiBzcGlubmVyU3R5bGVzXG4gIH0pLCBjaGlsZHJlbik7XG59O1xuXG5pZiAoX19ERVZfXykge1xuICBCdXR0b25TcGlubmVyLmRpc3BsYXlOYW1lID0gXCJCdXR0b25TcGlubmVyXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idXR0b24uanMubWFwIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XG5leHBvcnQgdmFyIEljb25CdXR0b24gPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICB2YXIge1xuICAgIGljb24sXG4gICAgY2hpbGRyZW4sXG4gICAgaXNSb3VuZCxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gIH0gPSBwcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiaWNvblwiLCBcImNoaWxkcmVuXCIsIFwiaXNSb3VuZFwiLCBcImFyaWEtbGFiZWxcIl0pO1xuICAvKipcbiAgICogUGFzc2luZyB0aGUgaWNvbiBhcyBwcm9wIG9yIGNoaWxkcmVuIHNob3VsZCB3b3JrXG4gICAqL1xuXG5cbiAgdmFyIGVsZW1lbnQgPSBpY29uIHx8IGNoaWxkcmVuO1xuXG4gIHZhciBfY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgZm9jdXNhYmxlOiBmYWxzZVxuICB9KSA6IG51bGw7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIGJvcmRlclJhZGl1czogaXNSb3VuZCA/IFwiZnVsbFwiIDogXCJtZFwiLFxuICAgIHJlZjogcmVmLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxcbiAgfSwgcmVzdCksIF9jaGlsZHJlbik7XG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgSWNvbkJ1dHRvbi5kaXNwbGF5TmFtZSA9IFwiSWNvbkJ1dHRvblwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWNvbi1idXR0b24uanMubWFwIiwiZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9idXR0b24tZ3JvdXBcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ljb24tYnV0dG9uXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9zcGlubmVyXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IGNoYWtyYSwgZm9yd2FyZFJlZiwga2V5ZnJhbWVzLCBvbWl0VGhlbWluZ1Byb3BzLCB1c2VTdHlsZUNvbmZpZyB9IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgY3gsIF9fREVWX18gfSBmcm9tIFwiQGNoYWtyYS11aS91dGlsc1wiO1xuaW1wb3J0IHsgVmlzdWFsbHlIaWRkZW4gfSBmcm9tIFwiQGNoYWtyYS11aS92aXN1YWxseS1oaWRkZW5cIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIHNwaW4gPSBrZXlmcmFtZXMoe1xuICBcIjAlXCI6IHtcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKDBkZWcpXCJcbiAgfSxcbiAgXCIxMDAlXCI6IHtcbiAgICB0cmFuc2Zvcm06IFwicm90YXRlKDM2MGRlZylcIlxuICB9XG59KTtcblxuLyoqXG4gKiBTcGlubmVyIGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIGxvYWRpbmcgc3RhdGUgb2YgYSBwYWdlIG9yIGEgY29tcG9uZW50LFxuICogSXQgcmVuZGVycyBhIGBkaXZgIGJ5IGRlZmF1bHQuXG4gKlxuICogQHNlZSBEb2NzIGh0dHBzOi8vY2hha3JhLXVpLmNvbS9kb2NzL2ZlZWRiYWNrL3NwaW5uZXJcbiAqL1xuZXhwb3J0IHZhciBTcGlubmVyID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgdmFyIHN0eWxlcyA9IHVzZVN0eWxlQ29uZmlnKFwiU3Bpbm5lclwiLCBwcm9wcyk7XG5cbiAgdmFyIF9vbWl0VGhlbWluZ1Byb3BzID0gb21pdFRoZW1pbmdQcm9wcyhwcm9wcyksXG4gICAgICB7XG4gICAgbGFiZWwgPSBcIkxvYWRpbmcuLi5cIixcbiAgICB0aGlja25lc3MgPSBcIjJweFwiLFxuICAgIHNwZWVkID0gXCIwLjQ1c1wiLFxuICAgIGVtcHR5Q29sb3IgPSBcInRyYW5zcGFyZW50XCIsXG4gICAgY2xhc3NOYW1lXG4gIH0gPSBfb21pdFRoZW1pbmdQcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb21pdFRoZW1pbmdQcm9wcywgW1wibGFiZWxcIiwgXCJ0aGlja25lc3NcIiwgXCJzcGVlZFwiLCBcImVtcHR5Q29sb3JcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHZhciBfY2xhc3NOYW1lID0gY3goXCJjaGFrcmEtc3Bpbm5lclwiLCBjbGFzc05hbWUpO1xuXG4gIHZhciBzcGlubmVyU3R5bGVzID0gX2V4dGVuZHMoe1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgYm9yZGVyQ29sb3I6IFwiY3VycmVudENvbG9yXCIsXG4gICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOTk5OTlweFwiLFxuICAgIGJvcmRlcldpZHRoOiB0aGlja25lc3MsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGVtcHR5Q29sb3IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBlbXB0eUNvbG9yLFxuICAgIGFuaW1hdGlvbjogc3BpbiArIFwiIFwiICsgc3BlZWQgKyBcIiBsaW5lYXIgaW5maW5pdGVcIlxuICB9LCBzdHlsZXMpO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjaGFrcmEuZGl2LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgX19jc3M6IHNwaW5uZXJTdHlsZXMsXG4gICAgY2xhc3NOYW1lOiBfY2xhc3NOYW1lXG4gIH0sIHJlc3QpLCBsYWJlbCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWaXN1YWxseUhpZGRlbiwgbnVsbCwgbGFiZWwpKTtcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBTcGlubmVyLmRpc3BsYXlOYW1lID0gXCJTcGlubmVyXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGlubmVyLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gXCIuL3Zpc3VhbGx5LWhpZGRlblwiO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3Zpc3VhbGx5LWhpZGRlblwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgY2hha3JhIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBfX0RFVl9fIH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIjtcblxuLyoqXG4gKiBTdHlsZXMgdG8gdmlzdWFsbHkgaGlkZSBhbiBlbGVtZW50XG4gKiBidXQgbWFrZSBpdCBhY2Nlc3NpYmxlIHRvIHNjcmVlbi1yZWFkZXJzXG4gKi9cbmV4cG9ydCB2YXIgdmlzdWFsbHlIaWRkZW5TdHlsZSA9IHtcbiAgYm9yZGVyOiBcIjBweFwiLFxuICBjbGlwOiBcInJlY3QoMHB4LCAwcHgsIDBweCwgMHB4KVwiLFxuICBoZWlnaHQ6IFwiMXB4XCIsXG4gIHdpZHRoOiBcIjFweFwiLFxuICBtYXJnaW46IFwiLTFweFwiLFxuICBwYWRkaW5nOiBcIjBweFwiLFxuICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxufTtcbi8qKlxuICogVmlzdWFsbHkgaGlkZGVuIGNvbXBvbmVudCB1c2VkIHRvIGhpZGVcbiAqIGVsZW1lbnRzIG9uIHNjcmVlblxuICovXG5cbmV4cG9ydCB2YXIgVmlzdWFsbHlIaWRkZW4gPSBjaGFrcmEoXCJzcGFuXCIsIHtcbiAgYmFzZVN0eWxlOiB2aXN1YWxseUhpZGRlblN0eWxlXG59KTtcblxuaWYgKF9fREVWX18pIHtcbiAgVmlzdWFsbHlIaWRkZW4uZGlzcGxheU5hbWUgPSBcIlZpc3VhbGx5SGlkZGVuXCI7XG59XG4vKipcbiAqIFZpc3VhbGx5IGhpZGRlbiBpbnB1dCBjb21wb25lbnQgZm9yIGRlc2lnbmluZ1xuICogY3VzdG9tIGlucHV0IGNvbXBvbmVudHMgdXNpbmcgdGhlIGh0bWwgYGlucHV0YFxuICogYXMgYSBwcm94eVxuICovXG5cblxuZXhwb3J0IHZhciBWaXN1YWxseUhpZGRlbklucHV0ID0gY2hha3JhKFwiaW5wdXRcIiwge1xuICBiYXNlU3R5bGU6IHZpc3VhbGx5SGlkZGVuU3R5bGVcbn0pO1xuXG5pZiAoX19ERVZfXykge1xuICBWaXN1YWxseUhpZGRlbklucHV0LmRpc3BsYXlOYW1lID0gXCJWaXN1YWxseUhpZGRlbklucHV0XCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc3VhbGx5SGlkZGVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmlzdWFsbHktaGlkZGVuLmpzLm1hcCIsImltcG9ydCB7IEJveCwgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZU1lUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvYnV0dG9uXCI7XHJcbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VNZVF1ZXJ5KCk7XHJcbiAgbGV0IGJvZHkgPSBudWxsO1xyXG4gIGlmIChmZXRjaGluZykge1xyXG4gICAgLy8gKiBEYXRhJ3MgbG9hZGluZ1xyXG4gIH0gZWxzZSBpZiAoIWRhdGE/Lm1lKSB7XHJcbiAgICAvLyogdXNlciBub3QgbG9nZ2VkIGluXHJcbiAgICBib2R5ID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8TGluayBjb2xvcj1cIndoaXRlXCIgbXI9ezJ9PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgPExpbmsgY29sb3I9XCJ3aGl0ZVwiPlJlZ2lzdGVyPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gKiB1c2VyIGxvZ2dlZCBpblxyXG4gICAgYm9keSA9IDxCb3g+e2RhdGEubWUudXNlcm5hbWV9PC9Cb3g+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYmc9XCJ0b21hdG9cIiBwPXs0fT5cclxuICAgICAgPEJveCBtbD1cImF1dG9cIj57Ym9keX08L0JveD5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibGlua1wiPiBsb2dvdXQgPC9CdXR0b24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9