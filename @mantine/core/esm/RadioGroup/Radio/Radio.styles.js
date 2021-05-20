import { createUseStyles } from 'react-jss';
import { getSizeValue, getThemeColor, getFocusStyles, getFontStyles } from '@mantine/theme';

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
  labelDisabled: {},
  wrapper: {
    display: "flex",
    alignItems: "center",
    WebkitTapHighlightColor: "transparent"
  },
  radio: ({theme, size, color}) => __spreadProps(__spreadValues({}, getFocusStyles(theme)), {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[0],
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]}`,
    position: "relative",
    appearance: "none",
    width: getSizeValue({sizes, size}),
    height: getSizeValue({sizes, size}),
    borderRadius: getSizeValue({sizes, size}),
    margin: 0,
    marginRight: theme.spacing.sm,
    background: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:checked": {
      background: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      borderColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      "&::before": {
        content: '""',
        display: "block",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        width: getSizeValue({sizes, size}) / 2,
        height: getSizeValue({sizes, size}) / 2,
        borderRadius: getSizeValue({sizes, size}) / 2
      }
    },
    "&:disabled": {
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
      "&::before": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[4]
      }
    }
  }),
  label: ({theme, size}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    display: "flex",
    alignItems: "center",
    fontSize: theme.fontSizes[size] || theme.fontSizes.md,
    lineHeight: `${getSizeValue({sizes, size})}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    "&$labelDisabled": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
    }
  })
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=Radio.styles.js.map
