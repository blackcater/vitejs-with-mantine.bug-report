'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createMemoStyles({
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
});

exports.default = useStyles;
//# sourceMappingURL=NotificationsProvider.styles.js.map
