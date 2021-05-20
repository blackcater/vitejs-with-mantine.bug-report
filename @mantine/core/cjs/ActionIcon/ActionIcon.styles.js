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
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44
};
var useStyles = reactJss.createUseStyles({
  filled: ({theme: theme$1, color}) => ({
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
    color: theme$1.white,
    "&:not(:disabled):hover": {
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 7})
    },
    "&:disabled": {
      backgroundColor: theme.getThemeColor({
        theme: theme$1,
        color: "gray",
        shade: theme$1.colorScheme === "dark" ? 8 : 1
      })
    }
  }),
  light: ({theme: theme$1, color}) => ({
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 0}),
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme.getThemeColor({theme: theme$1, color, shade: 9}),
    "&:not(:disabled):hover": {
      backgroundColor: theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 5 : 1
      })
    },
    "&:disabled": {
      backgroundColor: theme.getThemeColor({
        theme: theme$1,
        color: "gray",
        shade: theme$1.colorScheme === "dark" ? 8 : 1
      })
    }
  }),
  hover: ({theme: theme$1, color}) => ({
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
    backgroundColor: "transparent",
    "&:not(:disabled):hover": {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[8] : theme.getThemeColor({theme: theme$1, color, shade: 0})
    }
  }),
  transparent: ({theme: theme$1, color}) => ({
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
    backgroundColor: "transparent"
  }),
  actionIcon: ({radius, theme: theme$1, size}) => __spreadProps(__spreadValues(__spreadValues({}, theme.getFocusStyles(theme$1)), theme.getFontStyles(theme$1)), {
    appearance: "none",
    WebkitAppearance: "none",
    WebkitTapHighlightColor: "transparent",
    border: "1px solid transparent",
    boxSizing: "border-box",
    height: theme.getSizeValue({size, sizes}),
    minHeight: theme.getSizeValue({size, sizes}),
    width: theme.getSizeValue({size, sizes}),
    minWidth: theme.getSizeValue({size, sizes}),
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    padding: 0,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "color 100ms ease, background-color 100ms ease",
    "&:not(:disabled):active": {
      transform: "translateY(1px)"
    },
    "&:disabled": {
      color: theme$1.colors.gray[theme$1.colorScheme === "dark" ? 6 : 4],
      cursor: "not-allowed"
    }
  }),
  outline: ({theme: theme$1, color}) => ({
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
    backgroundColor: "transparent",
    borderColor: theme.getThemeColor({
      theme: theme$1,
      color,
      shade: theme$1.colorScheme === "dark" ? 4 : 6
    }),
    "&:not(:disabled):hover": {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[8] : theme.getThemeColor({theme: theme$1, color, shade: 0})
    },
    "&:disabled": {
      borderColor: theme$1.colors.gray[theme$1.colorScheme === "dark" ? 7 : 3]
    }
  })
}, {link: true});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=ActionIcon.styles.js.map
