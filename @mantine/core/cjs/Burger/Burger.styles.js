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
  xs: 12,
  sm: 18,
  md: 24,
  lg: 34,
  xl: 42
};
var useStyles = theme.createMemoStyles({
  opened: {},
  wrapper: ({size, theme: theme$1}) => __spreadProps(__spreadValues({}, theme.getFocusStyles(theme$1)), {
    WebkitTapHighlightColor: "transparent",
    borderRadius: theme$1.radius.sm,
    width: theme.getSizeValue({size, sizes}) + theme$1.spacing.xs,
    height: theme.getSizeValue({size, sizes}) + theme$1.spacing.xs,
    padding: theme$1.spacing.xs / 2,
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer"
  }),
  burger: ({size, theme: theme$1, color, reduceMotion}) => {
    const sizeValue = theme.getSizeValue({size, sizes});
    return {
      position: "relative",
      userSelect: "none",
      boxSizing: "border-box",
      "&, &:before, &:after": {
        display: "block",
        width: sizeValue,
        height: Math.ceil(sizeValue / 12),
        backgroundColor: theme.getThemeColor({
          theme: theme$1,
          color,
          shade: theme$1.colorScheme === "dark" ? 4 : 7
        }),
        outline: "1px solid transparent",
        transitionProperty: "background-color, transform",
        transitionDuration: reduceMotion ? "0ms" : "300ms"
      },
      "&:before, &:after": {
        position: "absolute",
        content: '""',
        left: 0
      },
      "&:before": {
        top: sizeValue / 3 * -1
      },
      "&:after": {
        top: sizeValue / 3
      },
      "&$opened": {
        backgroundColor: "transparent !important",
        "&:before": {
          transform: `translateY(${sizeValue / 3}px) rotate(45deg)`
        },
        "&:after": {
          transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`
        }
      }
    };
  }
});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Burger.styles.js.map
