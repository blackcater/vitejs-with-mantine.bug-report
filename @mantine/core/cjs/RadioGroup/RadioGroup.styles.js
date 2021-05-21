'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = require('@mantine/theme');

var useStyles = theme.createMemoStyles({
  wrapper: ({theme: theme$1, spacing, variant}) => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: variant === "vertical" ? "column" : "row",
    margin: theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 2 * -1,
    marginTop: theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 4 * (variant === "vertical" ? 1 : -1),
    "& [data-mantine-radio]": {
      margin: theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 2,
      marginTop: variant === "vertical" && theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 4,
      marginBottom: variant === "vertical" && theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 4
    }
  })
});

exports.default = useStyles;
//# sourceMappingURL=RadioGroup.styles.js.map
