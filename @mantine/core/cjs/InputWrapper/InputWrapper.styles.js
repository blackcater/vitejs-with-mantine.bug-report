'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var useStyles = theme.createMemoStyles({
  inputWrapper: ({theme: theme$1}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    lineHeight: theme$1.lineHeight
  }),
  label: ({theme}) => ({
    display: "block",
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 500,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
    wordBreak: "break-word"
  }),
  error: ({theme}) => ({
    marginTop: theme.spacing.xs / 2,
    wordBreak: "break-word"
  }),
  description: ({theme}) => ({
    marginTop: theme.spacing.xs / 2,
    marginBottom: theme.spacing.xs / 2,
    wordBreak: "break-word"
  }),
  required: ({theme}) => ({
    color: theme.colorScheme === "dark" ? theme.colors.red[5] : theme.colors.red[7]
  })
});

exports.default = useStyles;
//# sourceMappingURL=InputWrapper.styles.js.map
