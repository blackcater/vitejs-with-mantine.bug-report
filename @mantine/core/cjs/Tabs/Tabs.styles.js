'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');

var useStyles = reactJss.createUseStyles({
  tabs: ({theme}) => ({
    borderBottom: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`
  }),
  tabsInner: {
    marginBottom: -2
  },
  body: ({theme}) => ({
    paddingTop: theme.spacing.sm
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Tabs.styles.js.map
