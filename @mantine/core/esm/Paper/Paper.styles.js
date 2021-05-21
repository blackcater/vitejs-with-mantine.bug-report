import { createMemoStyles, getSizeValue } from '@mantine/theme';

var useStyles = createMemoStyles({
  paper: ({theme, radius, shadow, padding}) => ({
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxSizing: "border-box",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    boxShadow: theme.shadows[shadow] || shadow || "none",
    padding: getSizeValue({size: padding, sizes: theme.spacing})
  })
});

export default useStyles;
//# sourceMappingURL=Paper.styles.js.map
