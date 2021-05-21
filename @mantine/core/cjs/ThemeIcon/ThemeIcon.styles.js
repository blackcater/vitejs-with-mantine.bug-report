'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = require('@mantine/theme');

const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40
};
var useStyles = theme.createMemoStyles({
  light: ({theme: theme$1, color}) => ({
    color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 3 : 9}),
    backgroundColor: theme.hexToRgba(theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 9 : 1}), theme$1.colorScheme === "dark" ? 0.3 : 1)
  }),
  filled: ({theme: theme$1, color}) => ({
    color: theme$1.colorScheme === "dark" ? theme.getThemeColor({theme: theme$1, color, shade: 0}) : theme$1.white,
    backgroundColor: theme.hexToRgba(theme.getThemeColor({theme: theme$1, color, shade: 7}), theme$1.colorScheme === "dark" ? 0.65 : 1)
  }),
  themeIcon: ({theme: theme$1, size, radius}) => {
    const iconSize = theme.getSizeValue({size, sizes});
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      width: iconSize,
      height: iconSize,
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius})
    };
  }
});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=ThemeIcon.styles.js.map
