import { createMemoStyles, getSizeValue, getFocusStyles, getThemeColor } from '@mantine/theme';

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
  sm: 18,
  md: 24,
  lg: 34,
  xl: 42
};
var useStyles = createMemoStyles({
  opened: {},
  wrapper: ({size, theme}) => __spreadProps(__spreadValues({}, getFocusStyles(theme)), {
    WebkitTapHighlightColor: "transparent",
    borderRadius: theme.radius.sm,
    width: getSizeValue({size, sizes}) + theme.spacing.xs,
    height: getSizeValue({size, sizes}) + theme.spacing.xs,
    padding: theme.spacing.xs / 2,
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer"
  }),
  burger: ({size, theme, color, reduceMotion}) => {
    const sizeValue = getSizeValue({size, sizes});
    return {
      position: "relative",
      userSelect: "none",
      boxSizing: "border-box",
      "&, &:before, &:after": {
        display: "block",
        width: sizeValue,
        height: Math.ceil(sizeValue / 12),
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === "dark" ? 4 : 7
        }),
        outline: "1px solid transparent",
        transitionProperty: "background-color, transform",
        transitionDuration: reduceMotion ? "0ms" : "300ms"
      },
      "&:before, &:after": {
        position: "absolute",
        content: '""',
        left: 0
      },
      "&:before": {
        top: sizeValue / 3 * -1
      },
      "&:after": {
        top: sizeValue / 3
      },
      "&$opened": {
        backgroundColor: "transparent !important",
        "&:before": {
          transform: `translateY(${sizeValue / 3}px) rotate(45deg)`
        },
        "&:after": {
          transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`
        }
      }
    };
  }
});

export default useStyles;
export { sizes };
//# sourceMappingURL=Burger.styles.js.map
