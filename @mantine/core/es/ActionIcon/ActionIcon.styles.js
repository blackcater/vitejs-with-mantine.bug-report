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
const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44
};
var useStyles = createUseStyles({
  filled: ({theme, color}) => ({
    backgroundColor: getThemeColor({theme, color, shade: 6}),
    color: theme.white,
    "&:not(:disabled):hover": {
      backgroundColor: getThemeColor({theme, color, shade: 7})
    },
    "&:disabled": {
      backgroundColor: getThemeColor({
        theme,
        color: "gray",
        shade: theme.colorScheme === "dark" ? 8 : 1
      })
    }
  }),
  light: ({theme, color}) => ({
    backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 0}),
    color: theme.colorScheme === "dark" ? theme.colors.dark[9] : getThemeColor({theme, color, shade: 9}),
    "&:not(:disabled):hover": {
      backgroundColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === "dark" ? 5 : 1
      })
    },
    "&:disabled": {
      backgroundColor: getThemeColor({
        theme,
        color: "gray",
        shade: theme.colorScheme === "dark" ? 8 : 1
      })
    }
  }),
  hover: ({theme, color}) => ({
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    backgroundColor: "transparent",
    "&:not(:disabled):hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : getThemeColor({theme, color, shade: 0})
    }
  }),
  transparent: ({theme, color}) => ({
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    backgroundColor: "transparent"
  }),
  actionIcon: ({radius, theme, size}) => __spreadProps(__spreadValues(__spreadValues({}, getFocusStyles(theme)), getFontStyles(theme)), {
    appearance: "none",
    WebkitAppearance: "none",
    WebkitTapHighlightColor: "transparent",
    border: "1px solid transparent",
    boxSizing: "border-box",
    height: getSizeValue({size, sizes}),
    minHeight: getSizeValue({size, sizes}),
    width: getSizeValue({size, sizes}),
    minWidth: getSizeValue({size, sizes}),
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
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
      color: theme.colors.gray[theme.colorScheme === "dark" ? 6 : 4],
      cursor: "not-allowed"
    }
  }),
  outline: ({theme, color}) => ({
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    backgroundColor: "transparent",
    borderColor: getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === "dark" ? 4 : 6
    }),
    "&:not(:disabled):hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : getThemeColor({theme, color, shade: 0})
    },
    "&:disabled": {
      borderColor: theme.colors.gray[theme.colorScheme === "dark" ? 7 : 3]
    }
  })
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=ActionIcon.styles.js.map
