'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = require('@mantine/theme');

const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};
var useStyles = theme.createMemoStyles({
  withLabel: {
    borderTop: "0 !important"
  },
  left: {
    "&::before": {
      display: "none"
    }
  },
  right: {
    "&::after": {
      display: "none"
    }
  },
  label: ({theme: theme$1, color, variant}) => ({
    display: "flex",
    alignItems: "center",
    color: color === "dark" ? theme$1.colors.dark[1] : theme.getThemeColor({theme: theme$1, color, shade: 6}),
    "&::before": {
      content: '""',
      flex: 1,
      height: 1,
      borderTop: `1px ${variant} ${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 4
      })}`,
      marginRight: theme$1.spacing.xs
    },
    "&::after": {
      content: '""',
      flex: 1,
      borderTop: `1px ${variant} ${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 4
      })}`,
      marginLeft: theme$1.spacing.xs
    }
  }),
  horizontal: ({theme: theme$1, size, variant, color, margins}) => ({
    border: 0,
    borderTopWidth: theme.getSizeValue({size, sizes}),
    borderTopColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 3 : 4}),
    borderTopStyle: variant,
    margin: 0,
    marginTop: theme.getSizeValue({size: margins, sizes: theme$1.spacing}),
    marginBottom: theme.getSizeValue({size: margins, sizes: theme$1.spacing})
  }),
  vertical: ({theme: theme$1, size, variant, color, margins}) => ({
    border: 0,
    borderLeftWidth: theme.getSizeValue({size, sizes}),
    borderLeftColor: theme.getThemeColor({theme: theme$1, color, shade: 4}),
    borderLeftStyle: variant,
    marginLeft: theme.getSizeValue({size: margins, sizes: theme$1.spacing}),
    marginRight: theme.getSizeValue({size: margins, sizes: theme$1.spacing})
  })
});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Divider.styles.js.map
