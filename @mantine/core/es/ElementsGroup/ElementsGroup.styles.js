import { createUseStyles } from 'react-jss';
import { getSizeValue } from '../mantine-theme/src/utils/get-size-value/get-size-value.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

const JUSTIFY_CONTENT = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between"
};
var useStyles = createUseStyles({
  elementsGroup: ({spacing, position, noWrap, theme}) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: noWrap ? "nowrap" : "wrap",
    justifyContent: JUSTIFY_CONTENT[position],
    margin: -1 * getSizeValue({size: spacing, sizes: theme.spacing}) / 2
  }),
  child: ({grow, spacing, theme}) => ({
    flexGrow: grow ? 1 : 0,
    margin: getSizeValue({size: spacing, sizes: theme.spacing}) / 2
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=ElementsGroup.styles.js.map
