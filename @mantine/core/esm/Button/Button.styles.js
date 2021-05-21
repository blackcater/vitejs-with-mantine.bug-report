import { createMemoStyles, getFontStyles, getFocusStyles, getSizeValue, getThemeColor, hexToRgba } from '@mantine/theme';

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
  xs: {
    fontSize: 10,
    height: 22,
    padding: [0, 11]
  },
  sm: {
    fontSize: 11,
    height: 26,
    padding: [0, 13]
  },
  md: {
    fontSize: 13,
    height: 30,
    padding: [0, 15]
  },
  lg: {
    fontSize: 14,
    height: 36,
    padding: [0, 18]
  },
  xl: {
    fontSize: 16,
    height: 44,
    padding: [0, 22]
  }
};
const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {});
const getWidthStyles = (fullWidth) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto"
});
var useStyles = createMemoStyles({
  icon: {
    display: "flex",
    alignItems: "center"
  },
  leftIcon: {
    marginRight: 10
  },
  rightIcon: {
    marginLeft: 10
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  label: {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  shared: (props) => __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, sizes[props.size]), getFontStyles(props.theme)), getFocusStyles(props.theme)), getWidthStyles(props.fullWidth)), {
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    boxSizing: "border-box",
    textDecoration: "none",
    cursor: "pointer",
    appearance: "none",
    WebkitAppearance: "none"
  }),
  outline: ({color, radius, theme}) => ({
    backgroundColor: "transparent",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    textTransform: "uppercase",
    fontWeight: "bold",
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 8}),
    border: `1px solid ${hexToRgba(getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 3 : 4}), theme.colorScheme === "dark" ? 0.45 : 1)}`,
    "&:not(:disabled):active": {
      transform: "translateY(1px)"
    },
    "&:disabled": {
      borderColor: "transparent",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
      cursor: "not-allowed"
    }
  }),
  light: ({color, size, radius, theme}) => ({
    border: "1px solid transparent",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: hexToRgba(getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 9 : 0}), theme.colorScheme === "dark" ? 0.3 : 1),
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 3 : 9}),
    "& $inner": {
      height: sizes[size].height - 2
    },
    "&:hover": {
      backgroundColor: hexToRgba(getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 8 : 1}), theme.colorScheme === "dark" ? 0.35 : 1)
    },
    "&:not(:disabled):active": {
      transform: "translateY(1px)"
    },
    "&:disabled": {
      borderColor: "transparent",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
      textShadow: "none",
      cursor: "not-allowed"
    }
  }),
  filled: ({color, size, radius, theme}) => ({
    border: "1px solid transparent",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: hexToRgba(getThemeColor({theme, color, shade: 7}), theme.colorScheme === "dark" ? 0.65 : 1),
    textShadow: theme.colorScheme === "dark" ? "none" : `1px 1px 0 ${getThemeColor({theme, color, shade: 8})}`,
    color: theme.white,
    "& $inner": {
      height: sizes[size].height - 2
    },
    "&:hover": {
      backgroundColor: hexToRgba(getThemeColor({theme, color, shade: 8}), theme.colorScheme === "dark" ? 0.95 : 1)
    },
    "&:not(:disabled):active": {
      transform: "translateY(1px)"
    },
    "&:disabled": {
      borderColor: "transparent",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
      textShadow: "none",
      cursor: "not-allowed"
    }
  }),
  link: ({color, radius, theme}) => ({
    padding: 0,
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    backgroundColor: "transparent",
    border: 0,
    display: "inline-block",
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    cursor: "pointer",
    lineHeight: theme.lineHeight,
    "&:hover": {
      textDecoration: "underline"
    },
    "&:disabled": {
      color: theme.colors.gray[5],
      cursor: "not-allowed",
      "&:hover": {
        textDecoration: "none"
      }
    }
  })
});

export default useStyles;
export { heights };
//# sourceMappingURL=Button.styles.js.map
