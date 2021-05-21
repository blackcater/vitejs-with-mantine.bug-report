import { createMemoStyles, getSizeValue, getFontStyles } from '@mantine/theme';

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
var useStyles = createMemoStyles({
  wrapper: {
    position: "relative",
    overflow: "hidden"
  },
  image: ({theme, radius}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    border: 0
  }),
  placeholderIcon: ({theme, radius}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
    position: "absolute",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  })
});

export default useStyles;
//# sourceMappingURL=Image.styles.js.map
