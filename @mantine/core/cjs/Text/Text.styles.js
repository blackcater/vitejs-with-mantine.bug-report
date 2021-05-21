'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var useStyles = theme.createMemoStyles({
  text: ({theme: theme$1, color, variant, size}) => __spreadProps(__spreadValues(__spreadValues({}, theme.getFontStyles(theme$1)), theme.getFocusStyles(theme$1)), {
    color: color in theme$1.colors ? theme$1.colors[color][theme$1.colorScheme === "dark" ? 4 : 6] : variant === "link" ? theme$1.colors[theme$1.primaryColor][theme$1.colorScheme === "dark" ? 4 : 6] : theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
    fontSize: theme$1.fontSizes[size],
    lineHeight: theme$1.lineHeight,
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
    "&:hover": {
      textDecoration: variant === "link" ? "underline" : "none"
    }
  })
});

exports.default = useStyles;
//# sourceMappingURL=Text.styles.js.map
