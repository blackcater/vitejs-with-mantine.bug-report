import { createUseStyles } from 'react-jss';
import { getSizeValue } from '../mantine-theme/src/utils/get-size-value/get-size-value.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

var useStyles = createUseStyles({
  wrapper: ({theme, spacing, variant}) => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: variant === "vertical" ? "column" : "row",
    margin: getSizeValue({sizes: theme.spacing, size: spacing}) / 2 * -1,
    marginTop: getSizeValue({sizes: theme.spacing, size: spacing}) / 4 * (variant === "vertical" ? 1 : -1),
    "& [data-mantine-radio]": {
      margin: getSizeValue({sizes: theme.spacing, size: spacing}) / 2,
      marginTop: variant === "vertical" && getSizeValue({sizes: theme.spacing, size: spacing}) / 4,
      marginBottom: variant === "vertical" && getSizeValue({sizes: theme.spacing, size: spacing}) / 4
    }
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=RadioGroup.styles.js.map
