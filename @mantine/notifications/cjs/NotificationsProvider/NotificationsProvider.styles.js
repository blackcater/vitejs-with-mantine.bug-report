'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');

var useStyles = reactJss.createUseStyles({
  notifications: ({theme}) => ({
    width: `calc(100% - ${theme.spacing.md * 2}px)`,
    boxSizing: "border-box",
    position: "fixed",
    zIndex: 1e3
  }),
  notification: ({theme}) => ({
    "& + &": {
      marginTop: theme.spacing.sm
    }
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=NotificationsProvider.styles.js.map
