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
  item: {
    position: "relative"
  },
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10
  },
  control: ({theme}) => __spreadProps(__spreadValues({}, core.getFocusStyles(theme)), {
    height: 32,
    flex: 1,
    textAlign: "left",
    padding: 0,
    backgroundColor: "transparent",
    border: "1px solid transparent",
    cursor: "pointer",
    paddingLeft: 10,
    maxWidth: "calc(100% - 34px)"
  }),
  controlInner: {
    display: "flex"
  },
  badge: {
    display: "block !important",
    width: "auto"
  },
  hovered: ({theme}) => ({
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
  })
});

exports.default = useStyles;
//# sourceMappingURL=TagItem.styles.js.map
