'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var Badge_styles = require('./Badge.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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
const BADGE_SIZES = Badge_styles.heights;
function Badge(_a) {
  var _b = _a, {
    component: Component = "div",
    className,
    color,
    variant = "light",
    fullWidth,
    children,
    themeOverride,
    size = "md",
    leftSection,
    rightSection,
    radius = "xl"
  } = _b, others = __objRest(_b, [
    "component",
    "className",
    "color",
    "variant",
    "fullWidth",
    "children",
    "themeOverride",
    "size",
    "leftSection",
    "rightSection",
    "radius"
  ]);
  const classes = Badge_styles['default']({
    size,
    fullWidth,
    color,
    radius,
    theme: theme.useMantineTheme(themeOverride)
  });
  return /* @__PURE__ */ React__default['default'].createElement(Component, __spreadProps(__spreadValues({}, others), {
    "data-mantine-composable": true,
    className: cx__default['default'](classes.badge, classes[variant], className)
  }), leftSection && /* @__PURE__ */ React__default['default'].createElement("span", {
    "data-mantine-badge-left": true,
    className: classes.leftSection
  }, leftSection), /* @__PURE__ */ React__default['default'].createElement("span", {
    className: classes.inner
  }, children), rightSection && /* @__PURE__ */ React__default['default'].createElement("span", {
    "data-mantine-badge-right": true,
    className: classes.rightSection
  }, rightSection));
}
Badge.displayName = "@mantine/core/Badge";

exports.BADGE_SIZES = BADGE_SIZES;
exports.Badge = Badge;
//# sourceMappingURL=Badge.js.map
