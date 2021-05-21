import { createMemoStyles, getSizeValue, getFontStyles, getFocusStyles, hexToRgba, getThemeColor } from '@mantine/theme';

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
var useStyles = createMemoStyles({
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
  wrapper: ({theme, fullWidth, radius}) => ({
    position: "relative",
    display: fullWidth ? "flex" : "inline-flex",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
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
    theme,
    radius,
    reduceMotion,
    transitionDuration,
    transitionTimingFunction,
    size
  }) => __spreadProps(__spreadValues(__spreadValues({}, getFocusStyles(theme)), getFontStyles(theme)), {
    WebkitTapHighlightColor: "transparent",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    fontWeight: 500,
    fontSize: size in theme.fontSizes ? theme.fontSizes[size] : theme.fontSizes.sm,
    cursor: "pointer",
    display: "block",
    textAlign: "center",
    padding: sizes[size in sizes ? size : "sm"],
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
    transition: `color ${reduceMotion ? 0 : transitionDuration}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
    }
  }),
  labelActive: ({theme, color}) => ({
    "&, &:hover": {
      color: color in theme.colors || theme.colorScheme === "dark" ? theme.white : theme.black
    }
  }),
  active: ({
    theme,
    color,
    radius,
    reduceMotion,
    transitionDuration,
    transitionTimingFunction
  }) => ({
    boxSizing: "border-box",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    position: "absolute",
    top: 4,
    bottom: 4,
    zIndex: 1,
    boxShadow: color || theme.colorScheme === "dark" ? "none" : theme.shadows.xs,
    transition: `transform ${reduceMotion ? 0 : transitionDuration}ms ${theme.transitionTimingFunction}, width ${reduceMotion ? 0 : transitionDuration / 2}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
    backgroundColor: color in theme.colors ? hexToRgba(getThemeColor({theme, color, shade: 6}), theme.colorScheme === "dark" ? 0.55 : 1) : theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white
  })
});

export default useStyles;
export { WRAPPER_PADDING };
//# sourceMappingURL=SegmentedControl.styles.js.map
