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
  withIcon: {},
  inputWrapper: ({radius, theme: theme$1}) => ({
    position: "relative",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    "&, & *": {boxSizing: "border-box"}
  }),
  defaultVariant: ({theme: theme$1, radius}) => ({
    "& $input": {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.white,
      minHeight: 36,
      padding: [7, theme$1.spacing.sm],
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[4]}`,
      transition: "border-color 100ms ease, box-shadow 100ms ease",
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      "&:focus": {
        outline: "none",
        borderColor: theme$1.colors[theme$1.primaryColor][6],
        boxShadow: `0 0 4px ${theme$1.colors.gray[3]}`
      }
    },
    "&$invalid $input": {
      borderColor: theme$1.colors.red[theme$1.colorScheme === "dark" ? 4 : 6]
    },
    "& $withIcon": {
      paddingLeft: 35
    },
    "& $icon": {
      width: 36
    }
  }),
  filledVariant: ({theme: theme$1, radius}) => ({
    "& $input": {
      minHeight: 36,
      paddingLeft: theme$1.spacing.md,
      paddingRight: theme$1.spacing.md,
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      border: "1px solid transparent",
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[1],
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      "&:focus": {
        outline: "none",
        borderColor: `${theme$1.colors[theme$1.primaryColor][theme$1.colorScheme === "dark" ? 4 : 6]} !important`,
        boxShadow: `0 0 4px ${theme$1.colors.gray[3]}`
      },
      "&::placeholder": {
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6]
      }
    },
    "& $input:disabled": {
      "&::placeholder": {
        color: theme$1.colors.gray[5]
      }
    },
    "&$invalid $input": {
      borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.red[4] : "transparent",
      backgroundColor: theme$1.colorScheme !== "dark" && theme$1.colors.red[0]
    },
    "& $withIcon": {
      paddingLeft: 35
    },
    "& $icon": {
      width: 36,
      color: theme$1.colors.gray[6]
    }
  }),
  unstyledVariant: ({theme}) => ({
    "& $input": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      backgroundColor: "transparent",
      height: 28,
      border: 0,
      outline: 0,
      "&:disabled": {
        backgroundColor: "transparent"
      }
    },
    "& $icon": {
      width: 28
    },
    "& $withIcon": {
      paddingLeft: 34
    }
  }),
  input: ({theme: theme$1}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    WebkitTapHighlightColor: "transparent",
    lineHeight: theme$1.lineHeight,
    appearance: "none",
    resize: "none",
    boxSizing: "border-box",
    fontSize: 14,
    width: "100%",
    color: theme$1.black,
    display: "block",
    textAlign: "left",
    "&:disabled": {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[1],
      opacity: 0.6,
      cursor: "not-allowed"
    },
    "&::placeholder": {
      opacity: 1,
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[5]
    },
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
      appearance: "none"
    },
    "&[type=number]": {
      MozAppearance: "textfield"
    }
  }),
  icon: ({theme}) => ({
    pointerEvents: "none",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }),
  invalid: ({theme}) => ({
    "& $input": {
      color: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6],
      borderColor: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6],
      "&::placeholder": {
        color: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
      }
    },
    "& $icon": {
      color: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
    }
  }),
  rightSection: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Input.styles.js.map
