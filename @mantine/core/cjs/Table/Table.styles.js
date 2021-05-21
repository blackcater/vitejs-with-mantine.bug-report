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
  striped: {},
  hover: {},
  table: ({theme: theme$1, captionSide}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    width: "100%",
    borderCollapse: "collapse",
    captionSide,
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
    lineHeight: theme$1.lineHeight,
    "& caption": {
      marginTop: captionSide === "top" ? 0 : theme$1.spacing.xs,
      marginBottom: captionSide === "bottom" ? 0 : theme$1.spacing.xs,
      fontSize: theme$1.fontSizes.sm,
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6]
    },
    "& thead tr th, & tfoot tr th": {
      textAlign: "left",
      fontWeight: "bold",
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.colors.gray[7],
      fontSize: 14,
      padding: [7, 10]
    },
    "& thead tr th": {
      borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`
    },
    "& tfoot tr th": {
      borderTop: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`
    },
    "& tbody tr td": {
      padding: [7, 10],
      borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`,
      fontSize: 14
    },
    "& tbody tr:last-of-type td": {
      borderBottom: "none"
    },
    "&$striped tbody tr:nth-of-type(odd)": {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[0]
    },
    "&$hover tbody tr:hover": {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[1]
    }
  })
});

exports.default = useStyles;
//# sourceMappingURL=Table.styles.js.map
