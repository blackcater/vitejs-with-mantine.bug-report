'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var useStyles = core.createMemoStyles({
  tagPicker: {
    position: "relative"
  },
  dropdown: ({theme}) => ({
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]}`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    width: 280,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1
  }),
  control: ({theme}) => __spreadProps(__spreadValues({}, core.getFocusStyles(theme)), {
    backgroundColor: "transparent",
    border: 0,
    padding: [0, 0],
    borderRadius: 24,
    cursor: "pointer",
    appearance: "none",
    WebkitAppearance: "none"
  })
});

exports.default = useStyles;
//# sourceMappingURL=TagPicker.styles.js.map
