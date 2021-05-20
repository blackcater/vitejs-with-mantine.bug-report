'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var Paper = require('../Paper/Paper.js');
var Card_styles = require('./Card.styles.js');

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
function Card(_a) {
  var _b = _a, {
    className,
    themeOverride,
    padding = "md",
    radius = "sm"
  } = _b, others = __objRest(_b, [
    "className",
    "themeOverride",
    "padding",
    "radius"
  ]);
  const classes = Card_styles['default']({radius, padding, theme: theme.useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React__default['default'].createElement(Paper.Paper, __spreadValues({
    "data-mantine-card": true,
    className: cx__default['default'](classes.card, className),
    radius,
    padding
  }, others));
}
Card.displayName = "@mantine/core/Card";

exports.Card = Card;
//# sourceMappingURL=Card.js.map
