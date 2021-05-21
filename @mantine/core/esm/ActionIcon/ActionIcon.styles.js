import { createMemoStyles, hexToRgba, getThemeColor, getSizeValue, getFontStyles, getFocusStyles } from '@mantine/theme';

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
var useStyles = createMemoStyles({
  filled: ({theme, color}) => ({
    backgroundColor: hexToRgba(getThemeColor({theme, color, shade: 7}), theme.colorScheme === "dark" ? 0.65 : 1),
    color: theme.white,
    "&:not(:disabled):hover": {
      backgroundColor: hexToRgba(getThemeColor({theme, color, shade: 8}), theme.colorScheme === "dark" ? 0.95 : 1)
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
    backgroundColor: hexToRgba(getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 9 : 0}), theme.colorScheme === "dark" ? 0.3 : 1),
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 3 : 9}),
    "&:not(:disabled):hover": {
      backgroundColor: hexToRgba(getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 8 : 1}), theme.colorScheme === "dark" ? 0.65 : 1)
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
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 5 : 7}),
    backgroundColor: "transparent",
    "&:not(:disabled):hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : getThemeColor({theme, color, shade: 0})
    }
  }),
  transparent: ({theme, color}) => ({
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 5 : 7}),
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
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 8}),
    backgroundColor: "transparent",
    border: `1px solid ${hexToRgba(getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 3 : 4}), theme.colorScheme === "dark" ? 0.45 : 1)}`,
    "&:not(:disabled):hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : getThemeColor({theme, color, shade: 0})
    },
    "&:disabled": {
      borderColor: theme.colors.gray[theme.colorScheme === "dark" ? 7 : 3]
    }
  })
});

export default useStyles;
export { sizes };
//# sourceMappingURL=ActionIcon.styles.js.map
