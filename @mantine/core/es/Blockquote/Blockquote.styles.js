import { createUseStyles } from 'react-jss';
import { getThemeColor } from '../mantine-theme/src/utils/get-theme-color/get-theme-color.js';
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
  blockquote: ({theme, color}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    fontSize: theme.fontSizes.lg,
    lineHeight: theme.lineHeight,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[0],
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    margin: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `3px solid ${getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === "dark" ? 4 : 6
    })}`,
    padding: [theme.spacing.md, theme.spacing.lg]
  }),
  inner: {
    display: "flex"
  },
  body: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  icon: ({theme, color}) => ({
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    marginRight: theme.spacing.md,
    marginTop: 2,
    width: 22
  }),
  cite: ({theme}) => ({
    display: "block",
    fontSize: theme.fontSizes.sm,
    marginTop: theme.spacing.xs,
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
    overflow: "hidden",
    textOverflow: "ellipsis"
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=Blockquote.styles.js.map
