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
const sizes = {
  xs: 16,
  sm: 26,
  md: 38,
  lg: 56,
  xl: 84
};
var useStyles = theme.createMemoStyles({
  avatar: ({size, radius, theme: theme$1}) => ({
    boxSizing: "border-box",
    position: "relative",
    userSelect: "none",
    overflow: "hidden",
    width: theme.getSizeValue({size, sizes}),
    height: theme.getSizeValue({size, sizes}),
    borderRadius: radius ? theme.getSizeValue({size: radius, sizes: theme$1.radius}) : size
  }),
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  },
  placeholder: ({theme: theme$1, size, color}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    fontSize: theme.getSizeValue({size, sizes}) / 2.5,
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 0 : 6}),
    fontWeight: 700,
    backgroundColor: theme.hexToRgba(theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 8 : 1}), theme$1.colorScheme === "dark" ? 0.5 : 1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    userSelect: "none"
  }),
  placeholderIcon: ({theme: theme$1, color}) => ({
    width: "70%",
    height: "70%",
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 0 : 6})
  })
});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Avatar.styles.js.map
