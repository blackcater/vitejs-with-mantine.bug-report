import { createMemoStyles, getSizeValue } from '@mantine/theme';

const sizes = {
  xs: 570,
  sm: 770,
  md: 970,
  lg: 1170,
  xl: 1370
};
var useStyles = createMemoStyles({
  container: ({fluid, size, padding, theme}) => ({
    maxWidth: fluid ? "100%" : getSizeValue({size, sizes}),
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: getSizeValue({size: padding, sizes: theme.spacing}),
    paddingRight: getSizeValue({size: padding, sizes: theme.spacing})
  })
});

export default useStyles;
export { sizes };
//# sourceMappingURL=Container.styles.js.map
