'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var Switch_styles = require('./Switch.styles.js');

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
const SWITCH_SIZES = Switch_styles.sizes;
function Switch(_a) {
  var _b = _a, {
    className,
    color,
    label,
    id,
    style,
    size = "md",
    radius = "xl",
    themeOverride,
    wrapperProps,
    inputStyle,
    inputClassName,
    elementRef,
    children
  } = _b, others = __objRest(_b, [
    "className",
    "color",
    "label",
    "id",
    "style",
    "size",
    "radius",
    "themeOverride",
    "wrapperProps",
    "inputStyle",
    "inputClassName",
    "elementRef",
    "children"
  ]);
  const classes = Switch_styles['default']({
    size,
    color,
    radius,
    reduceMotion: hooks.useReducedMotion(),
    theme: theme.useMantineTheme(themeOverride)
  });
  const uuid = hooks.useId(id);
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: cx__default(classes.wrapper, className),
    style
  }, wrapperProps), /* @__PURE__ */ React__default.createElement("input", __spreadProps(__spreadValues({}, others), {
    id: uuid,
    ref: elementRef,
    type: "checkbox",
    className: cx__default(classes.switch, inputClassName),
    style: inputStyle
  })), label && /* @__PURE__ */ React__default.createElement("label", {
    className: classes.label,
    htmlFor: uuid
  }, label));
}
Switch.displayName = "@mantine/core/Switch";

exports.SWITCH_SIZES = SWITCH_SIZES;
exports.Switch = Switch;
//# sourceMappingURL=Switch.js.map
