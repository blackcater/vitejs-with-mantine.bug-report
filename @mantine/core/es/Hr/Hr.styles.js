import { createUseStyles } from 'react-jss';
import { getThemeColor } from '../mantine-theme/src/utils/get-theme-color/get-theme-color.js';
import { getSizeValue } from '../mantine-theme/src/utils/get-size-value/get-size-value.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};
var useStyles = createUseStyles({
  hr: ({theme, size, variant, color}) => ({
    border: 0,
    borderTopWidth: getSizeValue({size, sizes}),
    borderTopColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    borderTopStyle: variant,
    margin: 0
  })
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=Hr.styles.js.map
