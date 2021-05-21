'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var ActionIcon_styles = require('./ActionIcon.styles.js');

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
const ACTION_ICON_SIZES = ActionIcon_styles.sizes;
function ActionIcon(_a) {
  var _b = _a, {
    className,
    color = "gray",
    children,
    radius = "sm",
    size = "md",
    variant = "hover",
    themeOverride,
    elementRef,
    component: Element = "button"
  } = _b, others = __objRest(_b, [
    "className",
    "color",
    "children",
    "radius",
    "size",
    "variant",
    "themeOverride",
    "elementRef",
    "component"
  ]);
  const classes = ActionIcon_styles['default']({
    size,
    radius,
    color,
    theme: theme.useMantineTheme(themeOverride)
  });
  return /* @__PURE__ */ React__default.createElement(Element, __spreadProps(__spreadValues({}, others), {
    className: cx__default(classes.actionIcon, classes[variant], className),
    type: "button",
    ref: elementRef
  }), children);
}
ActionIcon.displayName = "@mantine/core/ActionIcon";

exports.ACTION_ICON_SIZES = ACTION_ICON_SIZES;
exports.ActionIcon = ActionIcon;
//# sourceMappingURL=ActionIcon.js.map
