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
const sizes = {
  xs: {
    fontSize: 9,
    height: 16
  },
  sm: {
    fontSize: 10,
    height: 18
  },
  md: {
    fontSize: 11,
    height: 20
  },
  lg: {
    fontSize: 13,
    height: 26
  },
  xl: {
    fontSize: 16,
    height: 32
  }
};
const heights = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = sizes[key].height;
  return acc;
}, {});
var useStyles = reactJss.createUseStyles({
  leftSection: ({theme}) => ({
    marginRight: theme.spacing.xs / 2
  }),
  rightSection: ({theme}) => ({
    marginLeft: theme.spacing.xs / 2
  }),
  inner: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  badge: ({theme: theme$1, size, fullWidth, radius}) => {
    const {fontSize, height} = size in sizes ? sizes[size] : sizes.md;
    return __spreadProps(__spreadValues(__spreadValues({}, theme.getFocusStyles(theme$1)), theme.getFontStyles(theme$1)), {
      fontSize,
      height,
      WebkitTapHighlightColor: "transparent",
      lineHeight: `${height - 2}px`,
      border: "1px solid transparent",
      textDecoration: "none",
      padding: [0, theme.getSizeValue({size, sizes: theme$1.spacing}) / 1.5],
      boxSizing: "border-box",
      display: fullWidth ? "flex" : "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: fullWidth ? "100%" : "auto",
      textTransform: "uppercase",
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      fontWeight: 700,
      letterSpacing: 0.25,
      cursor: "default",
      textOverflow: "ellipsis",
      overflow: "hidden"
    });
  },
  light: ({theme: theme$1, color}) => ({
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 3 : 0}),
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme.getThemeColor({theme: theme$1, color, shade: 9})
  }),
  filled: ({theme: theme$1, color}) => ({
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 7}),
    color: theme$1.white,
    textShadow: `1px 1px 0 ${theme.getThemeColor({theme: theme$1, color, shade: 9})}`
  }),
  outline: ({theme: theme$1, color}) => ({
    backgroundColor: "transparent",
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
    borderColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6})
  })
}, {link: true});

exports.default = useStyles;
exports.heights = heights;
//# sourceMappingURL=Badge.styles.js.map
