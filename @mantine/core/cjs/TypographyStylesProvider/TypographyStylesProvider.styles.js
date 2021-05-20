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
  innerHtml: ({theme: theme$1}) => {
    const headings = Object.keys(theme$1.headings.sizes).reduce((acc, h) => {
      acc[`& ${h}`] = __spreadProps(__spreadValues({
        fontFamily: theme$1.headings.fontFamily,
        fontWeight: theme$1.headings.fontWeight,
        marginTop: theme$1.spacing.lg * theme$1.headings.sizes[h].lineHeight,
        marginBottom: theme$1.spacing.xs * theme$1.headings.sizes[h].lineHeight
      }, theme$1.headings.sizes[h]), {
        "@media (max-width: 755px)": {
          fontSize: typeof theme$1.headings.sizes[h].fontSize === "number" && theme$1.headings.sizes[h].fontSize / 1.3
        }
      });
      return acc;
    }, {});
    return __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      lineHeight: theme$1.lineHeight,
      fontSize: theme$1.fontSizes.md,
      "@media (max-width: 755px)": {
        fontSize: theme$1.fontSizes.sm
      }
    }), headings), {
      "& img": {
        maxWidth: "100%",
        marginBottom: theme$1.spacing.xs
      },
      "& p": {
        marginTop: 0,
        marginBottom: theme$1.spacing.sm
      },
      "& hr": {
        marginTop: theme$1.spacing.md,
        marginBottom: theme$1.spacing.sm,
        borderBottom: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: `1px dashed ${theme$1.colors.gray[theme$1.colorScheme === "dark" ? 4 : 6]}`
      },
      "& a": __spreadProps(__spreadValues({}, theme.getFocusStyles(theme$1)), {
        color: theme$1.colors[theme$1.primaryColor][theme$1.colorScheme === "dark" ? 4 : 6],
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }),
      "& pre": {
        padding: theme$1.spacing.xs,
        lineHeight: theme$1.lineHeight,
        margin: 0,
        marginTop: theme$1.spacing.md,
        marginBottom: theme$1.spacing.md,
        overflowX: "auto",
        fontFamily: theme$1.fontFamilyMonospace,
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[0]
      },
      "& code": {
        lineHeight: theme$1.lineHeight,
        padding: [1, theme$1.spacing.xs / 2],
        borderRadius: theme$1.radius.sm,
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[0],
        fontFamily: theme$1.fontFamilyMonospace,
        fontSize: theme$1.fontSizes.xs,
        border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[3]}`
      },
      "& ul, & ol": {
        marginBottom: theme$1.spacing.md,
        paddingLeft: theme$1.spacing.lg * 2,
        "& li": {
          marginTop: theme$1.spacing.xs
        }
      },
      "& table": {
        width: "100%",
        borderCollapse: "collapse",
        captionSide: "bottom",
        marginBottom: theme$1.spacing.md,
        "& caption": {
          marginTop: theme$1.spacing.xs,
          fontSize: theme$1.fontSizes.sm,
          color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6]
        },
        "& th": {
          textAlign: "left",
          fontWeight: "bold",
          color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.colors.gray[7],
          fontSize: 14,
          padding: [7, 10]
        },
        "& thead th": {
          borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`
        },
        "& tfoot th": {
          borderTop: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`
        },
        "& td": {
          padding: [7, 10],
          borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`,
          fontSize: 14
        },
        "& tr:last-of-type td": {
          borderBottom: "none"
        }
      },
      "& blockquote": {
        fontSize: theme$1.fontSizes.lg,
        lineHeight: theme$1.lineHeight,
        margin: [theme$1.spacing.md, 0],
        borderTopRightRadius: theme$1.radius.sm,
        borderBottomRightRadius: theme$1.radius.sm,
        padding: [theme$1.spacing.md, theme$1.spacing.lg],
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[0],
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
        borderLeft: `3px solid ${theme.getThemeColor({
          theme: theme$1,
          color: theme$1.primaryColor,
          shade: theme$1.colorScheme === "dark" ? 4 : 6
        })}`,
        "& cite": {
          display: "block",
          fontSize: theme$1.fontSizes.sm,
          marginTop: theme$1.spacing.xs,
          color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6],
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }
    });
  }
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=TypographyStylesProvider.styles.js.map
