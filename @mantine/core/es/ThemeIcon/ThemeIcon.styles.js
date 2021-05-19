import { createUseStyles } from 'react-jss';
import { getThemeColor } from '../mantine-theme/src/utils/get-theme-color/get-theme-color.js';
import { getSizeValue } from '../mantine-theme/src/utils/get-size-value/get-size-value.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40
};
var useStyles = createUseStyles({
  themeIcon: ({theme, color, size, radius, variant}) => {
    const iconSize = getSizeValue({size, sizes});
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      backgroundColor: getThemeColor({
        theme,
        color,
        shade: variant === "filled" ? theme.colorScheme === "dark" ? 4 : 6 : 1
      }),
      color: variant === "filled" ? theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white : getThemeColor({theme, color, shade: 9}),
      width: iconSize,
      height: iconSize,
      borderRadius: getSizeValue({size: radius, sizes: theme.radius})
    };
  }
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=ThemeIcon.styles.js.map
