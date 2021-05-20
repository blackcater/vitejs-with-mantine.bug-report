'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var core = require('@mantine/core');

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
  tagEdit: ({theme}) => ({
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    paddingTop: 10,
    paddingBottom: 10,
    position: "absolute",
    top: 0,
    width: 240,
    left: 240,
    zIndex: 5
  }),
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    flex: 1,
    marginRight: 10
  },
  deleteControl: ({theme}) => __spreadProps(__spreadValues(__spreadValues({}, core.getFontStyles(theme)), core.getFocusStyles(theme)), {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    border: 0,
    width: "100%",
    backgroundColor: "transparent",
    textAlign: "left",
    height: 32,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    cursor: "pointer",
    marginTop: 10,
    "&:hover, &:focus": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.red[9] : theme.colors.red[0],
      color: theme.colorScheme === "dark" ? theme.colors.red[0] : theme.colors.red[7]
    }
  }),
  deleteIcon: {
    marginRight: 10
  },
  colorsList: ({theme}) => ({
    marginTop: 5,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    paddingTop: 10
  }),
  colorControl: ({theme}) => __spreadProps(__spreadValues(__spreadValues({}, core.getFontStyles(theme)), core.getFocusStyles(theme)), {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    textTransform: "capitalize",
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "1px dotted transparent",
    paddingLeft: 10,
    paddingRight: 10,
    height: 28,
    cursor: "pointer",
    outline: 0,
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
    }
  }),
  colorLabel: {
    marginLeft: 10
  },
  colorControlBody: {
    display: "flex",
    alignItems: "center",
    flex: 1
  }
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=TagEdit.styles.js.map
