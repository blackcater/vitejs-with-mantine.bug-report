'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

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
var useStyles = reactJss.createUseStyles({
  alert: ({color, theme: theme$1}) => ({
    position: "relative",
    padding: [theme$1.spacing.xs, theme$1.spacing.md],
    paddingLeft: theme$1.spacing.md + theme$1.spacing.xs / 2 + LINE_WIDTH,
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
    border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[2]}`,
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: theme$1.spacing.xs,
      bottom: theme$1.spacing.xs,
      left: theme$1.spacing.xs,
      width: LINE_WIDTH,
      borderRadius: LINE_WIDTH,
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6})
    }
  }),
  title: ({color, theme: theme$1}) => ({
    boxSizing: "border-box",
    color: theme.getThemeColor({theme: theme$1, color, shade: 6}),
    margin: 0,
    marginBottom: theme$1.spacing.xs / 2,
    textOverflow: "ellipsis",
    overflow: "hidden"
  }),
  body: ({theme: theme$1}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    lineHeight: theme$1.lineHeight,
    borderBottomLeftRadius: theme$1.radius.sm,
    borderBottomRightRadius: theme$1.radius.sm,
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: theme$1.fontSizes.sm,
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
    "&:only-child": {
      borderTopRightRadius: theme$1.radius.sm,
      borderTopLeftRadius: theme$1.radius.sm
    }
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Alert.styles.js.map
