'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

var useStyles = reactJss.createUseStyles({
  withIcon: {
    paddingLeft: "10px !important",
    "&::before": {
      display: "none !important"
    }
  },
  notification: ({color, theme: theme$1}) => ({
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingLeft: 22,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
    border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[2]}`,
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      width: 6,
      top: 4,
      bottom: 4,
      left: 4,
      borderRadius: 4,
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6})
    },
    "& $icon": {
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
      color: theme$1.white
    }
  }),
  body: ({disallowClose}) => ({
    flex: 1,
    maxWidth: !disallowClose ? "calc(100% - 40px)" : "100%",
    marginRight: 10
  }),
  loader: ({theme}) => ({
    marginRight: theme.spacing.md
  }),
  icon: ({theme}) => ({
    boxSizing: "border-box",
    marginRight: theme.spacing.md,
    width: 28,
    height: 28,
    borderRadius: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white
  }),
  title: ({theme}) => ({
    lineHeight: 1.4,
    marginBottom: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[9]
  }),
  description: ({theme}) => ({
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
    lineHeight: 1.4,
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:only-child": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
    }
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Notification.styles.js.map
