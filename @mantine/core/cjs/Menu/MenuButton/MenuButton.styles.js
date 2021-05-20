'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = require('@mantine/theme');
var reactJss = require('react-jss');

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
  hovered: {},
  item: ({theme: theme$1, color}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    WebkitTapHighlightColor: "transparent",
    fontSize: theme$1.fontSizes.sm,
    border: 0,
    backgroundColor: "transparent",
    outline: 0,
    width: "100%",
    textAlign: "left",
    height: 32,
    padding: [0, theme$1.spacing.sm],
    cursor: "pointer",
    color: color ? theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}) : theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.colors.gray[9],
    "&:disabled": {
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[5],
      cursor: "not-allowed"
    },
    "&$hovered:not(:disabled), &:not(:disabled):hover": {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[1],
      "&:not(:disabled):active": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[2]
      }
    }
  }),
  inner: {
    display: "flex",
    alignItems: "center"
  },
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1
  },
  icon: ({theme}) => ({
    marginRight: theme.spacing.xs,
    "& > *": {
      display: "block"
    }
  }),
  label: {
    lineHeight: 1
  }
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=MenuButton.styles.js.map
