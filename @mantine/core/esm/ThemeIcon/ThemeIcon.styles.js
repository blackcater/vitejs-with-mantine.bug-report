import { createMemoStyles, getThemeColor, hexToRgba, getSizeValue } from '@mantine/theme';

const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40
};
var useStyles = createMemoStyles({
  light: ({theme, color}) => ({
    color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 3 : 9}),
    backgroundColor: hexToRgba(getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 9 : 1}), theme.colorScheme === "dark" ? 0.3 : 1)
  }),
  filled: ({theme, color}) => ({
    color: theme.colorScheme === "dark" ? getThemeColor({theme, color, shade: 0}) : theme.white,
    backgroundColor: hexToRgba(getThemeColor({theme, color, shade: 7}), theme.colorScheme === "dark" ? 0.65 : 1)
  }),
  themeIcon: ({theme, size, radius}) => {
    const iconSize = getSizeValue({size, sizes});
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      width: iconSize,
      height: iconSize,
      borderRadius: getSizeValue({size: radius, sizes: theme.radius})
    };
  }
});

export default useStyles;
export { sizes };
//# sourceMappingURL=ThemeIcon.styles.js.map
