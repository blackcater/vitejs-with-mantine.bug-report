'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var Progress_styles = require('./Progress.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

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
const PROGRESS_SIZES = Progress_styles.sizes;
function Progress(_a) {
  var _b = _a, {
    className,
    value,
    color,
    size = "md",
    radius = "sm",
    striped = false,
    themeOverride,
    "aria-label": ariaLabel
  } = _b, others = __objRest(_b, [
    "className",
    "value",
    "color",
    "size",
    "radius",
    "striped",
    "themeOverride",
    "aria-label"
  ]);
  const classes = Progress_styles['default']({
    color,
    size,
    radius,
    striped,
    reduceMotion: hooks.useReducedMotion(),
    theme: theme.useMantineTheme(themeOverride)
  });
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: cx__default(classes.progress, className)
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-label": ariaLabel,
    className: classes.bar,
    style: {width: `${value}%`}
  }));
}
Progress.displayName = "@mantine/core/Progress";

exports.PROGRESS_SIZES = PROGRESS_SIZES;
exports.Progress = Progress;
//# sourceMappingURL=Progress.js.map
