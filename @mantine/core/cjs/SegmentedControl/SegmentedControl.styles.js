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
const WRAPPER_PADDING = 4;
const sizes = {
  xs: [3, 6],
  sm: [5, 10],
  md: [7, 14],
  lg: [9, 16],
  xl: [12, 20]
};
var useStyles = theme.createMemoStyles({
  input: ({theme}) => ({
    height: 0,
    width: 0,
    position: "absolute",
    overflow: "hidden",
    whiteSpace: "nowrap",
    opacity: 0,
    "&:focus": {
      outline: "none",
      "& + $label": {
        outline: "none",
        boxShadow: `0 0 0 2px ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white}, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`
      },
      "&:focus:not(:focus-visible)": {
        "& + $label": {
          boxShadow: "none"
        }
      }
    }
  }),
  wrapper: ({theme: theme$1, fullWidth, radius}) => ({
    position: "relative",
    display: fullWidth ? "flex" : "inline-flex",
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[8] : theme$1.colors.gray[1],
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    overflow: "hidden",
    padding: WRAPPER_PADDING
  }),
  controlActive: {
    borderLeftColor: "transparent !important",
    "& + $control": {
      borderLeftColor: "transparent !important"
    }
  },
  control: ({
    theme,
    reduceMotion,
    transitionDuration,
    transitionTimingFunction
  }) => ({
    position: "relative",
    boxSizing: "border-box",
    flex: 1,
    zIndex: 2,
    transition: `border-left-color ${reduceMotion ? 0 : transitionDuration}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
    "&:not(:first-of-type)": {
      borderLeft: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
    }
  }),
  label: ({
    theme: theme$1,
    radius,
    reduceMotion,
    transitionDuration,
    transitionTimingFunction,
    size
  }) => __spreadProps(__spreadValues(__spreadValues({}, theme.getFocusStyles(theme$1)), theme.getFontStyles(theme$1)), {
    WebkitTapHighlightColor: "transparent",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    fontWeight: 500,
    fontSize: size in theme$1.fontSizes ? theme$1.fontSizes[size] : theme$1.fontSizes.sm,
    cursor: "pointer",
    display: "block",
    textAlign: "center",
    padding: sizes[size in sizes ? size : "sm"],
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[1] : theme$1.colors.gray[7],
    transition: `color ${reduceMotion ? 0 : transitionDuration}ms ${transitionTimingFunction || theme$1.transitionTimingFunction}`,
    "&:hover": {
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black
    }
  }),
  labelActive: ({theme, color}) => ({
    "&, &:hover": {
      color: color in theme.colors || theme.colorScheme === "dark" ? theme.white : theme.black
    }
  }),
  active: ({
    theme: theme$1,
    color,
    radius,
    reduceMotion,
    transitionDuration,
    transitionTimingFunction
  }) => ({
    boxSizing: "border-box",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    position: "absolute",
    top: 4,
    bottom: 4,
    zIndex: 1,
    boxShadow: color || theme$1.colorScheme === "dark" ? "none" : theme$1.shadows.xs,
    transition: `transform ${reduceMotion ? 0 : transitionDuration}ms ${theme$1.transitionTimingFunction}, width ${reduceMotion ? 0 : transitionDuration / 2}ms ${transitionTimingFunction || theme$1.transitionTimingFunction}`,
    backgroundColor: color in theme$1.colors ? theme.hexToRgba(theme.getThemeColor({theme: theme$1, color, shade: 6}), theme$1.colorScheme === "dark" ? 0.55 : 1) : theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.white
  })
});

exports.WRAPPER_PADDING = WRAPPER_PADDING;
exports.default = useStyles;
//# sourceMappingURL=SegmentedControl.styles.js.map
