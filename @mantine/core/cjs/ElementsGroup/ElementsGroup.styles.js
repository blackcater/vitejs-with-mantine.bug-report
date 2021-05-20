'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

const JUSTIFY_CONTENT = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between"
};
var useStyles = reactJss.createUseStyles({
  elementsGroup: ({spacing, position, noWrap, theme: theme$1}) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: noWrap ? "nowrap" : "wrap",
    justifyContent: JUSTIFY_CONTENT[position],
    margin: -1 * theme.getSizeValue({size: spacing, sizes: theme$1.spacing}) / 2
  }),
  child: ({grow, spacing, theme: theme$1}) => ({
    flexGrow: grow ? 1 : 0,
    margin: theme.getSizeValue({size: spacing, sizes: theme$1.spacing}) / 2
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=ElementsGroup.styles.js.map
