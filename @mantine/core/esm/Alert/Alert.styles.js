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
const LINE_WIDTH = 4;
var useStyles = createUseStyles({
  alert: ({color, theme}) => ({
    position: "relative",
    padding: [theme.spacing.xs, theme.spacing.md],
    paddingLeft: theme.spacing.md + theme.spacing.xs / 2 + LINE_WIDTH,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}`,
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: theme.spacing.xs,
      bottom: theme.spacing.xs,
      left: theme.spacing.xs,
      width: LINE_WIDTH,
      borderRadius: LINE_WIDTH,
      backgroundColor: getThemeColor({theme, color, shade: 6})
    }
  }),
  title: ({color, theme}) => ({
    boxSizing: "border-box",
    color: getThemeColor({theme, color, shade: 6}),
    margin: 0,
    marginBottom: theme.spacing.xs / 2,
    textOverflow: "ellipsis",
    overflow: "hidden"
  }),
  body: ({theme}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    lineHeight: theme.lineHeight,
    borderBottomLeftRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    "&:only-child": {
      borderTopRightRadius: theme.radius.sm,
      borderTopLeftRadius: theme.radius.sm
    }
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=Alert.styles.js.map
