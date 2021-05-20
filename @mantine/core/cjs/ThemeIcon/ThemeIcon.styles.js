'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40
};
var useStyles = reactJss.createUseStyles({
  themeIcon: ({theme: theme$1, color, size, radius, variant}) => {
    const iconSize = theme.getSizeValue({size, sizes});
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      backgroundColor: theme.getThemeColor({
        theme: theme$1,
        color,
        shade: variant === "filled" ? theme$1.colorScheme === "dark" ? 4 : 6 : 1
      }),
      color: variant === "filled" ? theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white : theme.getThemeColor({theme: theme$1, color, shade: 9}),
      width: iconSize,
      height: iconSize,
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius})
    };
  }
}, {link: true});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=ThemeIcon.styles.js.map
