import { createMemoStyles, getSizeValue } from '@mantine/theme';

const POSITIONS = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between"
};
var useStyles = createMemoStyles({
  group: ({spacing, position, noWrap, direction, theme, grow}) => ({
    display: "flex",
    flexDirection: direction,
    alignItems: direction === "row" ? "center" : grow ? "stretch" : POSITIONS[position],
    flexWrap: noWrap ? "nowrap" : "wrap",
    justifyContent: direction === "row" && POSITIONS[position],
    margin: -1 * getSizeValue({size: spacing, sizes: theme.spacing}) / 2
  }),
  child: ({grow, spacing, theme}) => ({
    flexGrow: grow ? 1 : 0,
    margin: getSizeValue({size: spacing, sizes: theme.spacing}) / 2
  })
});

export default useStyles;
//# sourceMappingURL=Group.styles.js.map
