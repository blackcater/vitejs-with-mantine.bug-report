import { createUseStyles } from 'react-jss';
import { getSizeValue, getFontStyles, getThemeColor, getFocusStyles } from '@mantine/theme';

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
  sm: 16,
  md: 20,
  lg: 26,
  xl: 36
};
var useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  checkboxWrapper: ({size}) => ({
    position: "relative",
    width: getSizeValue({size, sizes}),
    height: getSizeValue({size, sizes})
  }),
  label: ({theme, size}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    WebkitTapHighlightColor: "transparent",
    paddingLeft: theme.spacing.sm,
    fontSize: getSizeValue({size, sizes: theme.fontSizes}),
    lineHeight: `${getSizeValue({size, sizes})}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
  }),
  checkbox: ({size, theme, color}) => __spreadProps(__spreadValues({}, getFocusStyles(theme)), {
    appearance: "none",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
    width: getSizeValue({size, sizes}),
    height: getSizeValue({size, sizes}),
    borderRadius: theme.radius.sm,
    padding: 0,
    outline: 0,
    display: "block",
    margin: 0,
    "&:checked": {
      backgroundColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === "dark" ? 4 : 6
      }),
      borderColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      color: theme.white,
      "& + $icon": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
        display: "block"
      }
    },
    "&:disabled": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[3],
      cursor: "not-allowed",
      "& + $icon": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5]
      }
    }
  }),
  icon: {
    display: "none",
    pointerEvents: "none",
    width: "80%",
    height: "80%",
    position: "absolute",
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto"
  }
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=Checkbox.styles.js.map
