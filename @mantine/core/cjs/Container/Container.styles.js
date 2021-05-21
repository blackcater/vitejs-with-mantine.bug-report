'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = require('@mantine/theme');

const sizes = {
  xs: 570,
  sm: 770,
  md: 970,
  lg: 1170,
  xl: 1370
};
var useStyles = theme.createMemoStyles({
  container: ({fluid, size, padding, theme: theme$1}) => ({
    maxWidth: fluid ? "100%" : theme.getSizeValue({size, sizes}),
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: theme.getSizeValue({size: padding, sizes: theme$1.spacing}),
    paddingRight: theme.getSizeValue({size: padding, sizes: theme$1.spacing})
  })
});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Container.styles.js.map
