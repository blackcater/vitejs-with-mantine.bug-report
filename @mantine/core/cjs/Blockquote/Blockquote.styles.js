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
var useStyles = reactJss.createUseStyles({
  blockquote: ({theme: theme$1, color}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    fontSize: theme$1.fontSizes.lg,
    lineHeight: theme$1.lineHeight,
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[0],
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
    margin: 0,
    borderTopRightRadius: theme$1.radius.sm,
    borderBottomRightRadius: theme$1.radius.sm,
    borderLeft: `3px solid ${theme.getThemeColor({
      theme: theme$1,
      color,
      shade: theme$1.colorScheme === "dark" ? 4 : 6
    })}`,
    padding: [theme$1.spacing.md, theme$1.spacing.lg]
  }),
  inner: {
    display: "flex"
  },
  body: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  icon: ({theme: theme$1, color}) => ({
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
    marginRight: theme$1.spacing.md,
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

exports.default = useStyles;
//# sourceMappingURL=Blockquote.styles.js.map
