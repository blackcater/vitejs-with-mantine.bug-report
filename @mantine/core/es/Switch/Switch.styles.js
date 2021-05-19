import { createUseStyles } from 'react-jss';
import { getThemeColor } from '../mantine-theme/src/utils/get-theme-color/get-theme-color.js';
import { getFocusStyles } from '../mantine-theme/src/utils/get-focus-styles/get-focus-styles.js';
import { getFontStyles } from '../mantine-theme/src/utils/get-font-styles/get-font-styles.js';
import { getSizeValue } from '../mantine-theme/src/utils/get-size-value/get-size-value.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

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
var useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  switch: ({size, radius, theme, reduceMotion, color}) => {
    const handleSize = getSizeValue({size, sizes: handleSizes});
    const borderRadius = getSizeValue({size: radius, sizes: theme.radius});
    return __spreadProps(__spreadValues({}, getFocusStyles(theme)), {
      WebkitTapHighlightColor: "transparent",
      position: "relative",
      borderRadius,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2],
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`,
      height: getSizeValue({size, sizes: switchHeight}),
      width: getSizeValue({size, sizes: switchWidth}),
      minWidth: getSizeValue({size, sizes: switchWidth}),
      padding: [0, 2],
      margin: 0,
      transitionProperty: "background-color, border-color",
      transitionTimingFunction: theme.transitionTimingFunction,
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
        backgroundColor: theme.white,
        height: handleSize,
        width: handleSize,
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`,
        transition: reduceMotion ? "none" : `transform 150ms ${theme.transitionTimingFunction}`
      },
      "&:checked": {
        backgroundColor: getThemeColor({theme, color, shade: 6}),
        borderColor: getThemeColor({theme, color, shade: 6}),
        "&::before": {
          transform: `translateX(${getSizeValue({size, sizes: switchWidth}) - getSizeValue({size, sizes: handleSizes}) - 6}px)`,
          borderColor: getThemeColor({theme, color, shade: 6})
        }
      },
      "&:disabled": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        cursor: "not-allowed",
        "&::before": {
          borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[0]
        }
      }
    });
  },
  label: ({theme, size}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    WebkitTapHighlightColor: "transparent",
    fontSize: getSizeValue({size, sizes: theme.fontSizes}),
    fontFamily: theme.fontFamily,
    paddingLeft: theme.spacing.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
  })
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=Switch.styles.js.map
