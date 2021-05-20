'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};
var useStyles = reactJss.createUseStyles({
  hr: ({theme: theme$1, size, variant, color}) => ({
    border: 0,
    borderTopWidth: theme.getSizeValue({size, sizes}),
    borderTopColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
    borderTopStyle: variant,
    margin: 0
  })
}, {link: true});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Hr.styles.js.map
