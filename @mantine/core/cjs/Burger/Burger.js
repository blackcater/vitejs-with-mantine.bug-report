'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var Burger_styles = require('./Burger.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var __defProp = Object.defineProperty;
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
const BURGER_SIZES = Burger_styles.sizes;
function Burger(_a) {
  var _b = _a, {
    className,
    opened,
    color = "gray",
    size = "md",
    themeOverride,
    elementRef
  } = _b, others = __objRest(_b, [
    "className",
    "opened",
    "color",
    "size",
    "themeOverride",
    "elementRef"
  ]);
  const classes = Burger_styles['default']({
    color,
    size,
    theme: theme.useMantineTheme(themeOverride),
    reduceMotion: hooks.useReducedMotion()
  });
  return /* @__PURE__ */ React__default['default'].createElement("button", __spreadValues({
    type: "button",
    className: cx__default['default'](classes.wrapper, className),
    ref: elementRef
  }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
    className: cx__default['default'](classes.burger, {[classes.opened]: opened})
  }));
}
Burger.displayName = "@mantine/core/Burger";

exports.BURGER_SIZES = BURGER_SIZES;
exports.Burger = Burger;
//# sourceMappingURL=Burger.js.map
