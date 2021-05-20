'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

const CONTROL_WIDTH = 24;
var useStyles = reactJss.createUseStyles({
  rightSection: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 2px)",
    margin: 1,
    marginRight: 1
  },
  control: ({theme}) => ({
    position: "relative",
    flex: "0 0 50%",
    boxSizing: "border-box",
    width: CONTROL_WIDTH,
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
    borderTop: 0,
    borderRight: 0,
    backgroundColor: "transparent",
    marginRight: 1,
    "&:not(:disabled):hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
    },
    "&::after": {
      position: "absolute",
      top: "calc(50% - 2.5px)",
      left: "calc(50% - 4.5px)",
      content: '""',
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  }),
  controlUp: ({theme: theme$1, radius}) => ({
    borderTopRightRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}) - 1,
    "&::after": {
      borderWidth: [0, 5, 5, 5],
      borderColor: [
        "transparent",
        "transparent",
        theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
        "transparent"
      ]
    },
    "&:disabled::after": {
      borderBottomColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[5]
    }
  }),
  controlDown: ({theme: theme$1, radius}) => ({
    borderBottomRightRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}) - 1,
    borderBottom: 0,
    "&::after": {
      borderWidth: [5, 5, 0, 5],
      borderColor: [
        theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
        "transparent",
        "transparent",
        "transparent"
      ]
    },
    "&:disabled::after": {
      borderTopColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[5]
    }
  })
}, {link: true});

exports.CONTROL_WIDTH = CONTROL_WIDTH;
exports.default = useStyles;
//# sourceMappingURL=NumberInput.styles.js.map
