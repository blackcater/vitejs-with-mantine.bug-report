'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

const sizes = {
  xs: 120,
  sm: 160,
  md: 200,
  lg: 240,
  xl: 300
};
var useStyles = reactJss.createUseStyles({
  menu: ({theme: theme$1, size}) => ({
    position: "absolute",
    width: theme.getSizeValue({size, sizes}),
    overflow: "hidden",
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
    border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[2]}`,
    paddingTop: theme$1.spacing.xs / 2,
    paddingBottom: theme$1.spacing.xs / 2
  }),
  hr: ({theme}) => ({
    borderTopColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
    marginTop: theme.spacing.xs / 2,
    marginBottom: theme.spacing.xs / 2
  })
}, {link: true});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=MenuBody.styles.js.map
