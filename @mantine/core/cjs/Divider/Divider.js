'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var Divider_styles = require('./Divider.styles.js');
var Text = require('../Text/Text.js');

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
const DIVIDER_SIZES = Divider_styles.sizes;
function Divider(_a) {
  var _b = _a, {
    color,
    className,
    orientation = "horizontal",
    size = "xs",
    label,
    labelPosition = "left",
    labelProps,
    themeOverride,
    variant = "solid",
    margins = 0
  } = _b, others = __objRest(_b, [
    "color",
    "className",
    "orientation",
    "size",
    "label",
    "labelPosition",
    "labelProps",
    "themeOverride",
    "variant",
    "margins"
  ]);
  const theme$1 = theme.useMantineTheme(themeOverride);
  const _color = color || (theme$1.colorScheme === "dark" ? "dark" : "gray");
  const classes = Divider_styles['default']({
    color: _color,
    theme: theme$1,
    margins,
    size,
    variant
  });
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    "data-mantine-hr": true,
    className: cx__default({
      [classes.vertical]: orientation === "vertical",
      [classes.horizontal]: orientation === "horizontal",
      [classes.withLabel]: !!label && orientation === "horizontal"
    }, className)
  }, others), !!label && orientation === "horizontal" && /* @__PURE__ */ React__default.createElement(Text.Text, __spreadProps(__spreadValues({
    "data-mantine-label": true
  }, labelProps), {
    color: _color,
    size: (labelProps == null ? void 0 : labelProps.size) || "xs",
    style: {marginTop: 2},
    className: cx__default(classes.label, classes[labelPosition])
  }), label));
}
Divider.displayName = "@mantine/core/Divider";

exports.DIVIDER_SIZES = DIVIDER_SIZES;
exports.Divider = Divider;
//# sourceMappingURL=Divider.js.map
