'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

var useStyles = reactJss.createUseStyles({
  card: ({theme: theme$1, radius, padding}) => {
    const spacing = theme.getSizeValue({size: padding, sizes: theme$1.spacing});
    const borderRadius = theme.getSizeValue({size: radius, sizes: theme$1.radius});
    return {
      position: "relative",
      "& [data-mantine-image]": {
        width: `calc(100% + ${spacing * 2}px) !important`,
        marginLeft: -spacing,
        marginRight: -spacing,
        "&:first-child": {
          borderTopRightRadius: borderRadius,
          borderTopLeftRadius: borderRadius,
          marginBottom: spacing,
          marginTop: -spacing
        },
        "&:last-child": {
          borderBottomRightRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
          marginTop: spacing,
          marginBottom: -spacing
        },
        "&:first-child:last-child": {
          marginTop: -spacing,
          marginBottom: -spacing
        }
      },
      "& [data-mantine-hr]": {
        borderTopColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[2],
        marginLeft: -spacing,
        marginRight: -spacing,
        marginBottom: spacing / 2,
        marginTop: spacing / 2
      }
    };
  }
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Card.styles.js.map
