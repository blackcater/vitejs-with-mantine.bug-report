import { createUseStyles } from 'react-jss';
import { getSizeValue, getThemeColor, getFontStyles } from '@mantine/theme';

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
  xs: 16,
  sm: 26,
  md: 38,
  lg: 56,
  xl: 84
};
var useStyles = createUseStyles({
  avatar: ({size, radius, theme}) => ({
    boxSizing: "border-box",
    position: "relative",
    userSelect: "none",
    overflow: "hidden",
    width: getSizeValue({size, sizes}),
    height: getSizeValue({size, sizes}),
    borderRadius: radius ? getSizeValue({size: radius, sizes: theme.radius}) : size
  }),
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  },
  placeholder: ({theme, size, color}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    fontSize: getSizeValue({size, sizes}) / 2.5,
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 0 : 6}),
    fontWeight: 700,
    backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 9 : 1}),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    userSelect: "none"
  }),
  placeholderIcon: ({theme, color}) => ({
    width: "70%",
    height: "70%",
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 0 : 6})
  })
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=Avatar.styles.js.map
