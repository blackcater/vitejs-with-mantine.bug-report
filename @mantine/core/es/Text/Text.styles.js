import { createUseStyles } from 'react-jss';
import { getFocusStyles } from '../mantine-theme/src/utils/get-focus-styles/get-focus-styles.js';
import { getFontStyles } from '../mantine-theme/src/utils/get-font-styles/get-font-styles.js';
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
var useStyles = createUseStyles({
  text: ({theme, color, variant, size}) => __spreadProps(__spreadValues(__spreadValues({}, getFontStyles(theme)), getFocusStyles(theme)), {
    color: color in theme.colors ? theme.colors[color][theme.colorScheme === "dark" ? 4 : 6] : variant === "link" ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6] : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes[size],
    lineHeight: theme.lineHeight,
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
    "&:hover": {
      textDecoration: variant === "link" ? "underline" : "none"
    }
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=Text.styles.js.map
