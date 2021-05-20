import { createUseStyles } from 'react-jss';
import { getThemeColor, getFontStyles } from '@mantine/theme';

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
  code: ({theme, color}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    lineHeight: theme.lineHeight,
    padding: [1, theme.spacing.xs / 2],
    borderRadius: theme.radius.sm,
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 1 : 9}),
    backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 9 : 0}),
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
    border: `1px solid ${getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === "dark" ? 9 : 3
    })}`
  }),
  pre: ({theme}) => ({
    padding: theme.spacing.xs,
    margin: 0,
    overflowX: "auto"
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=Code.styles.js.map
