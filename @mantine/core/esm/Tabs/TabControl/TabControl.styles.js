import { createUseStyles } from 'react-jss';
import { getFocusStyles, getFontStyles, getThemeColor } from '@mantine/theme';

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
var useStyles = createUseStyles({
  tab: ({theme, reduceMotion}) => __spreadProps(__spreadValues(__spreadValues({}, getFontStyles(theme)), getFocusStyles(theme)), {
    WebkitTapHighlightColor: "transparent",
    boxSizing: "border-box",
    display: "block",
    height: 40,
    backgroundColor: "transparent",
    border: 0,
    borderBottom: "2px solid transparent",
    padding: [0, theme.spacing.md],
    fontSize: theme.fontSizes.sm,
    cursor: "pointer",
    transition: reduceMotion ? "none" : "border-color 150ms ease, color 150ms ease",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    "&:disabled": {
      cursor: "not-allowed",
      color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
    }
  }),
  tabActive: ({theme, color}) => ({
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    borderBottomColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6})
  }),
  tabInner: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    height: 40
  },
  tabIcon: ({theme}) => ({
    "&:not(:only-child)": {
      marginRight: theme.spacing.xs
    },
    "& *": {
      display: "block"
    }
  })
});

export default useStyles;
//# sourceMappingURL=TabControl.styles.js.map
