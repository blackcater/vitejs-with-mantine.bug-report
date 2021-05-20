'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

var useStyles = reactJss.createUseStyles({
  paper: ({theme: theme$1, radius, shadow, padding}) => ({
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[7] : theme$1.white,
    boxSizing: "border-box",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    boxShadow: theme$1.shadows[shadow] || shadow || "none",
    padding: theme.getSizeValue({size: padding, sizes: theme$1.spacing})
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Paper.styles.js.map
