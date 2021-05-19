import { createUseStyles } from 'react-jss';
import { getSizeValue } from '../mantine-theme/src/utils/get-size-value/get-size-value.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

var useStyles = createUseStyles({
  paper: ({theme, radius, shadow, padding}) => ({
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxSizing: "border-box",
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    boxShadow: theme.shadows[shadow] || shadow || "none",
    padding: getSizeValue({size: padding, sizes: theme.spacing})
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=Paper.styles.js.map
