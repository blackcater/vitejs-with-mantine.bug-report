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
    fontSize: 10,
    height: 22,
    padding: [0, 11]
  },
  sm: {
    fontSize: 11,
    height: 26,
    padding: [0, 13]
  },
  md: {
    fontSize: 13,
    height: 30,
    padding: [0, 15]
  },
  lg: {
    fontSize: 14,
    height: 36,
    padding: [0, 18]
  },
  xl: {
    fontSize: 16,
    height: 44,
    padding: [0, 22]
  }
};
const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {});
const getWidthStyles = (fullWidth) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto"
});
var useStyles = reactJss.createUseStyles({
  icon: {
    display: "flex",
    alignItems: "center"
  },
  leftIcon: {
    marginRight: 10
  },
  rightIcon: {
    marginLeft: 10
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  label: {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  shared: (props) => __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, sizes[props.size]), theme.getFontStyles(props.theme)), theme.getFocusStyles(props.theme)), getWidthStyles(props.fullWidth)), {
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    boxSizing: "border-box",
    textDecoration: "none",
    cursor: "pointer",
    appearance: "none",
    WebkitAppearance: "none"
  }),
  outline: ({color, radius, theme: theme$1}) => ({
    backgroundColor: "transparent",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    textTransform: "uppercase",
    fontWeight: "bold",
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 8}),
    border: `1px solid ${theme.getThemeColor({
      theme: theme$1,
      color,
      shade: theme$1.colorScheme === "dark" ? 4 : 8
    })}`,
    "&:not(:disabled):active": {
      transform: "translateY(1px)"
    },
    "&:disabled": {
      borderColor: "transparent",
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[5],
      cursor: "not-allowed"
    }
  }),
  light: ({color, size, radius, theme: theme$1}) => ({
    border: "1px solid transparent",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 0}),
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme.getThemeColor({theme: theme$1, color, shade: 9}),
    "& $inner": {
      height: sizes[size].height - 2
    },
    "&:hover": {
      backgroundColor: theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 5 : 1
      })
    },
    "&:not(:disabled):active": {
      transform: "translateY(1px)"
    },
    "&:disabled": {
      borderColor: "transparent",
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[5],
      textShadow: "none",
      cursor: "not-allowed"
    }
  }),
  filled: ({color, size, radius, theme: theme$1}) => ({
    border: "1px solid transparent",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
    textShadow: `1px 1px 0 ${theme.getThemeColor({theme: theme$1, color, shade: 8})}`,
    color: theme$1.white,
    "& $inner": {
      height: sizes[size].height - 2
    },
    "&:hover": {
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 7})
    },
    "&:not(:disabled):active": {
      transform: "translateY(1px)"
    },
    "&:disabled": {
      borderColor: "transparent",
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[5],
      textShadow: "none",
      cursor: "not-allowed"
    }
  }),
  link: ({color, radius, theme: theme$1}) => ({
    padding: 0,
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    backgroundColor: "transparent",
    border: 0,
    display: "inline-block",
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline"
    },
    "&:disabled": {
      color: theme$1.colors.gray[5],
      cursor: "not-allowed",
      "&:hover": {
        textDecoration: "none"
      }
    }
  })
}, {link: true});

exports.default = useStyles;
exports.heights = heights;
//# sourceMappingURL=Button.styles.js.map
