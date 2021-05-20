'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');

var useStyles = reactJss.createUseStyles({
  breadcrumbs: {
    display: "flex"
  },
  breadcrumb: {
    lineHeight: 1,
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent"
  },
  separator: ({theme}) => ({
    marginLeft: theme.spacing.xs,
    marginRight: theme.spacing.xs,
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Breadcrumbs.styles.js.map
