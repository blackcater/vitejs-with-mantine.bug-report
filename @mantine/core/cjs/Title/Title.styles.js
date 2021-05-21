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
  title: ({theme: theme$1, element}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    fontFamily: theme$1.headings.fontFamily,
    fontWeight: theme$1.headings.fontWeight,
    fontSize: theme$1.headings.sizes[element].fontSize,
    lineHeight: theme$1.headings.sizes[element].lineHeight,
    margin: 0,
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
    "@media (max-width: 755px)": {
      fontSize: typeof theme$1.headings.sizes[element].fontSize === "number" && theme$1.headings.sizes[element].fontSize / 1.3
    }
  })
});

exports.default = useStyles;
//# sourceMappingURL=Title.styles.js.map
