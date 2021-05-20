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
  wrapper: {
    position: "relative",
    overflow: "hidden"
  },
  image: ({theme: theme$1, radius}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    border: 0
  }),
  placeholderIcon: ({theme: theme$1, radius}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6],
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[8] : theme$1.colors.gray[0],
    position: "absolute",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Image.styles.js.map
