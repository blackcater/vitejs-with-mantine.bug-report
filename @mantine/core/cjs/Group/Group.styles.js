'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = require('@mantine/theme');

const POSITIONS = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between"
};
var useStyles = theme.createMemoStyles({
  group: ({spacing, position, noWrap, direction, theme: theme$1, grow}) => ({
    display: "flex",
    flexDirection: direction,
    alignItems: direction === "row" ? "center" : grow ? "stretch" : POSITIONS[position],
    flexWrap: noWrap ? "nowrap" : "wrap",
    justifyContent: direction === "row" && POSITIONS[position],
    margin: -1 * theme.getSizeValue({size: spacing, sizes: theme$1.spacing}) / 2
  }),
  child: ({grow, spacing, theme: theme$1}) => ({
    flexGrow: grow ? 1 : 0,
    margin: theme.getSizeValue({size: spacing, sizes: theme$1.spacing}) / 2
  })
});

exports.default = useStyles;
//# sourceMappingURL=Group.styles.js.map
