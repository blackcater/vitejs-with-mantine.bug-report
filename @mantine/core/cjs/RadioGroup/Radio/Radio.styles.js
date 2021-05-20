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
  labelDisabled: {},
  wrapper: {
    display: "flex",
    alignItems: "center",
    WebkitTapHighlightColor: "transparent"
  },
  radio: ({theme: theme$1, size, color}) => __spreadProps(__spreadValues({}, theme.getFocusStyles(theme$1)), {
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[0],
    border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[4]}`,
    position: "relative",
    appearance: "none",
    width: theme.getSizeValue({sizes, size}),
    height: theme.getSizeValue({sizes, size}),
    borderRadius: theme.getSizeValue({sizes, size}),
    margin: 0,
    marginRight: theme$1.spacing.sm,
    background: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:checked": {
      background: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      borderColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      "&::before": {
        content: '""',
        display: "block",
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[7] : theme$1.white,
        width: theme.getSizeValue({sizes, size}) / 2,
        height: theme.getSizeValue({sizes, size}) / 2,
        borderRadius: theme.getSizeValue({sizes, size}) / 2
      }
    },
    "&:disabled": {
      borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[4],
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[1],
      "&::before": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[4]
      }
    }
  }),
  label: ({theme: theme$1, size}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    display: "flex",
    alignItems: "center",
    fontSize: theme$1.fontSizes[size] || theme$1.fontSizes.md,
    lineHeight: `${theme.getSizeValue({sizes, size})}px`,
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
    "&$labelDisabled": {
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[5]
    }
  })
}, {link: true});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Radio.styles.js.map
