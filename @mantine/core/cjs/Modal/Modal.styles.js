'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
  full: "100%"
};
var useStyles = reactJss.createUseStyles({
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  inner: ({theme}) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    padding: [theme.spacing.xl * 2, theme.spacing.md],
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  }),
  title: ({theme}) => ({
    marginRight: theme.spacing.md,
    textOverflow: "ellipsis",
    display: "block",
    wordBreak: "break-word"
  }),
  modal: ({theme: theme$1, size}) => ({
    width: theme.getSizeValue({sizes, size}),
    padding: theme$1.spacing.lg,
    outline: 0
  }),
  header: ({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing.md
  }),
  body: ({overflow}) => ({
    maxHeight: overflow === "inside" && "calc(100vh - 185px)",
    overflowY: overflow === "inside" && "auto",
    wordBreak: "break-word"
  })
}, {link: true});

exports.default = useStyles;
exports.sizes = sizes;
//# sourceMappingURL=Modal.styles.js.map
