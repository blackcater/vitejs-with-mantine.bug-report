'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var QuoteIcon = require('./QuoteIcon.js');
var Blockquote_styles = require('./Blockquote.styles.js');

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
const defaultIcon = /* @__PURE__ */ React__default.createElement(QuoteIcon.QuoteIcon, null);
function Blockquote(_a) {
  var _b = _a, {
    className,
    color,
    icon = defaultIcon,
    cite,
    children,
    themeOverride
  } = _b, others = __objRest(_b, [
    "className",
    "color",
    "icon",
    "cite",
    "children",
    "themeOverride"
  ]);
  const classes = Blockquote_styles['default']({color, theme: theme.useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React__default.createElement("blockquote", __spreadValues({
    className: cx__default(classes.blockquote, className)
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.inner
  }, icon && /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-icon": true,
    className: classes.icon
  }, icon), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.body
  }, children, cite && /* @__PURE__ */ React__default.createElement("cite", {
    className: classes.cite
  }, cite))));
}
Blockquote.displayName = "@mantine/core/Blockquote";

exports.Blockquote = Blockquote;
//# sourceMappingURL=Blockquote.js.map
