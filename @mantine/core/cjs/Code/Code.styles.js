'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

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
var useStyles = reactJss.createUseStyles({
  code: ({theme: theme$1, color}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    lineHeight: theme$1.lineHeight,
    padding: [1, theme$1.spacing.xs / 2],
    borderRadius: theme$1.radius.sm,
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 1 : 9}),
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 9 : 0}),
    fontFamily: theme$1.fontFamilyMonospace,
    fontSize: theme$1.fontSizes.xs,
    border: `1px solid ${theme.getThemeColor({
      theme: theme$1,
      color,
      shade: theme$1.colorScheme === "dark" ? 9 : 3
    })}`
  }),
  pre: ({theme}) => ({
    padding: theme.spacing.xs,
    margin: 0,
    overflowX: "auto"
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Code.styles.js.map
