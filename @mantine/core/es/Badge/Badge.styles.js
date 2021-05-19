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
  xs: {
    fontSize: 9,
    height: 16
  },
  sm: {
    fontSize: 10,
    height: 18
  },
  md: {
    fontSize: 11,
    height: 20
  },
  lg: {
    fontSize: 13,
    height: 26
  },
  xl: {
    fontSize: 16,
    height: 32
  }
};
const heights = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = sizes[key].height;
  return acc;
}, {});
var useStyles = createUseStyles({
  leftSection: ({theme}) => ({
    marginRight: theme.spacing.xs / 2
  }),
  rightSection: ({theme}) => ({
    marginLeft: theme.spacing.xs / 2
  }),
  inner: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  badge: ({theme, size, fullWidth, radius}) => {
    const {fontSize, height} = size in sizes ? sizes[size] : sizes.md;
    return __spreadProps(__spreadValues(__spreadValues({}, getFocusStyles(theme)), getFontStyles(theme)), {
      fontSize,
      height,
      WebkitTapHighlightColor: "transparent",
      lineHeight: `${height - 2}px`,
      border: "1px solid transparent",
      textDecoration: "none",
      padding: [0, getSizeValue({size, sizes: theme.spacing}) / 1.5],
      boxSizing: "border-box",
      display: fullWidth ? "flex" : "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: fullWidth ? "100%" : "auto",
      textTransform: "uppercase",
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      fontWeight: 700,
      letterSpacing: 0.25,
      cursor: "default",
      textOverflow: "ellipsis",
      overflow: "hidden"
    });
  },
  light: ({theme, color}) => ({
    backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 3 : 0}),
    color: theme.colorScheme === "dark" ? theme.colors.dark[9] : getThemeColor({theme, color, shade: 9})
  }),
  filled: ({theme, color}) => ({
    backgroundColor: getThemeColor({theme, color, shade: 7}),
    color: theme.white,
    textShadow: `1px 1px 0 ${getThemeColor({theme, color, shade: 9})}`
  }),
  outline: ({theme, color}) => ({
    backgroundColor: "transparent",
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    borderColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6})
  })
}, {link: true});

export default useStyles;
export { heights };
//# sourceMappingURL=Badge.styles.js.map
