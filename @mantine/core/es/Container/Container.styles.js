import { createUseStyles } from 'react-jss';
import { getSizeValue } from '../mantine-theme/src/utils/get-size-value/get-size-value.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

const sizes = {
  xs: 570,
  sm: 770,
  md: 970,
  lg: 1170,
  xl: 1370
};
var useStyles = createUseStyles({
  container: ({fluid, size, padding, theme}) => ({
    maxWidth: fluid ? "100%" : getSizeValue({size, sizes}),
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: getSizeValue({size: padding, sizes: theme.spacing}),
    paddingRight: getSizeValue({size: padding, sizes: theme.spacing})
  })
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=Container.styles.js.map
