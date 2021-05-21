import { createMemoStyles } from '@mantine/core';

var useStyles = createMemoStyles({
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

export default useStyles;
//# sourceMappingURL=NotificationsProvider.styles.js.map
