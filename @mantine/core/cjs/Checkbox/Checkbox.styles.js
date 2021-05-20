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
  xs: 12,
  sm: 16,
  md: 20,
  lg: 26,
  xl: 36
};
var useStyles = reactJss.createUseStyles({
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  checkboxWrapper: ({size}) => ({
    position: "relative",
    width: theme.getSizeValue({size, sizes}),
    height: theme.getSizeValue({size, sizes})
  }),
  label: ({theme: theme$1, size}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    WebkitTapHighlightColor: "transparent",
    paddingLeft: theme$1.spacing.sm,
    fontSize: theme.getSizeValue({size, sizes: theme$1.fontSizes}),
    lineHeight: `${theme.getSizeValue({size, sizes})}px`,
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black
  }),
  checkbox: ({size, theme: theme$1, color}) => __spreadProps(__spreadValues({}, theme.getFocusStyles(theme$1)), {
    appearance: "none",
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[0],
    border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[4]}`,
    width: theme.getSizeValue({size, sizes}),
    height: theme.getSizeValue({size, sizes}),
    borderRadius: theme$1.radius.sm,
    padding: 0,
    outline: 0,
    display: "block",
    margin: 0,
    "&:checked": {
      backgroundColor: theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 4 : 6
      }),
      borderColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      color: theme$1.white,
      "& + $icon": {
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
        display: "block"
      }
    },
    "&:disabled": {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
      borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[3],
      cursor: "not-allowed",
      "& + $icon": {
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[5]
      }
    }
  }),
  icon: {
    display: "none",
    pointerEvents: "none",
    width: "80%",
    height: "80%",
    position: "absolute",
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto"
  }
}, {link: true});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Checkbox.styles.js.map
