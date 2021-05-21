'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var theme = require('@mantine/theme');
var Col = require('./Col.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
function Grid(_a) {
  var _b = _a, {
    themeOverride,
    gutter = "md",
    children,
    grow = false,
    justify = "flex-start",
    align = "stretch",
    style,
    columns = 12
  } = _b, others = __objRest(_b, [
    "themeOverride",
    "gutter",
    "children",
    "grow",
    "justify",
    "align",
    "style",
    "columns"
  ]);
  const theme$1 = theme.useMantineTheme(themeOverride);
  const spacing = theme.getSizeValue({size: gutter, sizes: theme$1.spacing});
  const cols = React.Children.toArray(children).map((col, index) => React__default.cloneElement(col, {gutter, grow, columns, key: index}));
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    style: __spreadValues({
      margin: -spacing / 2,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: justify,
      alignItems: align
    }, style)
  }, others), cols);
}
Grid.displayName = "@mantine/core/Grid";

exports.Col = Col.Col;
exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map
