'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16
};
var useStyles = reactJss.createUseStyles({
  progress: ({radius, size, theme: theme$1}) => ({
    height: theme.getSizeValue({size, sizes}),
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[2],
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    overflow: "hidden"
  }),
  bar: ({theme: theme$1, color, radius, reduceMotion, striped}) => ({
    height: "100%",
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
    transition: reduceMotion ? "none" : `width 200ms ${theme$1.transitionTimingFunction}`,
    backgroundSize: [theme$1.spacing.md, theme$1.spacing.md],
    backgroundImage: striped ? "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)" : "none"
  })
}, {link: true});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Progress.styles.js.map
