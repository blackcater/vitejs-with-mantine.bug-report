import { getThemeColor } from '../../mantine-theme/src/utils/get-theme-color/get-theme-color.js';
import { getFontStyles } from '../../mantine-theme/src/utils/get-font-styles/get-font-styles.js';
import '../../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../../mantine-theme/src/MantineProvider/theme-context.js';
import { createUseStyles } from 'react-jss';

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
  hovered: {},
  item: ({theme, color}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    WebkitTapHighlightColor: "transparent",
    fontSize: theme.fontSizes.sm,
    border: 0,
    backgroundColor: "transparent",
    outline: 0,
    width: "100%",
    textAlign: "left",
    height: 32,
    padding: [0, theme.spacing.sm],
    cursor: "pointer",
    color: color ? getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}) : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
    "&:disabled": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[5],
      cursor: "not-allowed"
    },
    "&$hovered:not(:disabled), &:not(:disabled):hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      "&:not(:disabled):active": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
      }
    }
  }),
  inner: {
    display: "flex",
    alignItems: "center"
  },
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1
  },
  icon: ({theme}) => ({
    marginRight: theme.spacing.xs,
    "& > *": {
      display: "block"
    }
  }),
  label: {
    lineHeight: 1
  }
}, {link: true});

export default useStyles;
//# sourceMappingURL=MenuButton.styles.js.map
