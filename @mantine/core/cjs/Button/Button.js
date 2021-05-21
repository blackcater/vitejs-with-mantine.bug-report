'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var Button_styles = require('./Button.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BUTTON_SIZES = Button_styles.heights;
function Button(_a) {
  var _b = _a, {
    className,
    size = "md",
    color,
    type = "button",
    disabled = false,
    children,
    leftIcon,
    rightIcon,
    fullWidth = false,
    variant = "filled",
    radius = "sm",
    component: Element = "button",
    elementRef,
    themeOverride
  } = _b, others = __objRest(_b, [
    "className",
    "size",
    "color",
    "type",
    "disabled",
    "children",
    "leftIcon",
    "rightIcon",
    "fullWidth",
    "variant",
    "radius",
    "component",
    "elementRef",
    "themeOverride"
  ]);
  const classes = Button_styles['default']({
    radius,
    color,
    size,
    fullWidth,
    theme: theme.useMantineTheme(themeOverride)
  });
  return /* @__PURE__ */ React__default.createElement(Element, __spreadProps(__spreadValues({}, others), {
    className: cx__default(classes.shared, classes[variant], className),
    type,
    disabled,
    ref: elementRef,
    onTouchStart: () => {
    }
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.inner
  }, leftIcon && /* @__PURE__ */ React__default.createElement("span", {
    "data-mantine-left-icon": true,
    className: cx__default(classes.icon, classes.leftIcon)
  }, leftIcon), /* @__PURE__ */ React__default.createElement("span", {
    className: classes.label,
    "data-mantine-label": true
  }, children), rightIcon && /* @__PURE__ */ React__default.createElement("span", {
    "data-mantine-right-icon": true,
    className: cx__default(classes.icon, classes.rightIcon)
  }, rightIcon)));
}
Button.displayName = "@mantine/core/Button";

exports.BUTTON_SIZES = BUTTON_SIZES;
exports.Button = Button;
//# sourceMappingURL=Button.js.map
