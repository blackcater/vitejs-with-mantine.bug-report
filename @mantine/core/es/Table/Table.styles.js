import { createUseStyles } from 'react-jss';
import { getFontStyles } from '../mantine-theme/src/utils/get-font-styles/get-font-styles.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

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
var useStyles = createUseStyles({
  striped: {},
  hover: {},
  table: ({theme, captionSide}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    width: "100%",
    borderCollapse: "collapse",
    captionSide,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: theme.lineHeight,
    "& caption": {
      marginTop: captionSide === "top" ? 0 : theme.spacing.xs,
      marginBottom: captionSide === "bottom" ? 0 : theme.spacing.xs,
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6]
    },
    "& thead tr th, & tfoot tr th": {
      textAlign: "left",
      fontWeight: "bold",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: 14,
      padding: [7, 10]
    },
    "& thead tr th": {
      borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
    },
    "& tfoot tr th": {
      borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
    },
    "& tbody tr td": {
      padding: [7, 10],
      borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
      fontSize: 14
    },
    "& tbody tr:last-of-type td": {
      borderBottom: "none"
    },
    "&$striped tbody tr:nth-of-type(odd)": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
    },
    "&$hover tbody tr:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    }
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=Table.styles.js.map
