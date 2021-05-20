import { createUseStyles } from 'react-jss';
import { getSizeValue, getThemeColor } from '@mantine/theme';

const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16
};
var useStyles = createUseStyles({
  progress: ({radius, size, theme}) => ({
    height: getSizeValue({size, sizes}),
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2],
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    overflow: "hidden"
  }),
  bar: ({theme, color, radius, reduceMotion, striped}) => ({
    height: "100%",
    backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
    borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
    transition: reduceMotion ? "none" : `width 200ms ${theme.transitionTimingFunction}`,
    backgroundSize: [theme.spacing.md, theme.spacing.md],
    backgroundImage: striped ? "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)" : "none"
  })
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=Progress.styles.js.map
