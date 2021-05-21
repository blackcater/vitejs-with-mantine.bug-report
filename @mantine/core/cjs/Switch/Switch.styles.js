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
const switchHeight = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 34
};
const switchWidth = {
  xs: 28,
  sm: 36,
  md: 42,
  lg: 54,
  xl: 66
};
const handleSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26
};
const sizes = Object.keys(switchHeight).reduce((acc, size) => {
  acc[size] = {width: switchWidth[size], height: switchHeight[size]};
  return acc;
}, {});
var useStyles = theme.createMemoStyles({
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  switch: ({size, radius, theme: theme$1, reduceMotion, color}) => {
    const handleSize = theme.getSizeValue({size, sizes: handleSizes});
    const borderRadius = theme.getSizeValue({size: radius, sizes: theme$1.radius});
    return __spreadProps(__spreadValues({}, theme.getFocusStyles(theme$1)), {
      WebkitTapHighlightColor: "transparent",
      position: "relative",
      borderRadius,
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
      border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`,
      height: theme.getSizeValue({size, sizes: switchHeight}),
      width: theme.getSizeValue({size, sizes: switchWidth}),
      minWidth: theme.getSizeValue({size, sizes: switchWidth}),
      padding: [0, 2],
      margin: 0,
      transitionProperty: "background-color, border-color",
      transitionTimingFunction: theme$1.transitionTimingFunction,
      transitionDuration: reduceMotion ? "1ms" : "150ms",
      boxSizing: "border-box",
      appearance: "none",
      display: "flex",
      alignItems: "center",
      "&::before": {
        borderRadius,
        boxSizing: "border-box",
        content: "''",
        display: "block",
        backgroundColor: theme$1.white,
        height: handleSize,
        width: handleSize,
        border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.white : theme$1.colors.gray[3]}`,
        transition: reduceMotion ? "none" : `transform 150ms ${theme$1.transitionTimingFunction}`
      },
      "&:checked": {
        backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
        borderColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
        "&::before": {
          transform: `translateX(${theme.getSizeValue({size, sizes: switchWidth}) - theme.getSizeValue({size, sizes: handleSizes}) - 6}px)`,
          borderColor: theme$1.white
        }
      },
      "&:disabled": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
        borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
        cursor: "not-allowed",
        "&::before": {
          borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
          backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[0]
        }
      }
    });
  },
  label: ({theme: theme$1, size}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    WebkitTapHighlightColor: "transparent",
    fontSize: theme.getSizeValue({size, sizes: theme$1.fontSizes}),
    fontFamily: theme$1.fontFamily,
    paddingLeft: theme$1.spacing.sm,
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black
  })
});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Switch.styles.js.map
