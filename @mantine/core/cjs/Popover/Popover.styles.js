'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = require('@mantine/theme');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const horizontalPlacement = (arrowSize) => ({
  "&$center": {
    top: "50%",
    transform: "translateY(-50%)",
    "& $arrow": {
      top: `calc(50% - ${arrowSize}px)`
    }
  },
  "&$end": {
    bottom: 0,
    "& $arrow": {
      bottom: arrowSize * 2
    }
  },
  "&$start": {
    top: 0,
    "& $arrow": {
      top: arrowSize * 2
    }
  }
});
const verticalPlacement = (arrowSize) => ({
  "&$center": {
    left: "50%",
    transform: "translateX(-50%)",
    "& $arrow": {
      left: `calc(50% - ${arrowSize}px)`
    }
  },
  "&$end": {
    right: 0,
    "& $arrow": {
      right: arrowSize * 2
    }
  },
  "&$start": {
    left: 0,
    "& $arrow": {
      left: arrowSize * 2
    }
  }
});
var useStyles = theme.createMemoStyles({
  center: {},
  start: {},
  end: {},
  wrapper: {
    position: "relative",
    display: "inline-block"
  },
  popoverWrapper: {
    background: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none"
  },
  popover: ({theme: theme$1, radius}) => ({
    position: "absolute",
    background: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.white,
    pointerEvents: "all",
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius})
  }),
  arrow: ({theme, arrowSize}) => ({
    width: arrowSize * 2,
    height: arrowSize * 2,
    position: "absolute",
    transform: "rotate(45deg)",
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]}`,
    background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    zIndex: 1
  }),
  body: ({theme: theme$1, radius, shadow}) => ({
    border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[2]}`,
    boxShadow: shadow in theme$1.shadows ? theme$1.shadows[shadow] : shadow,
    borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius})
  }),
  inner: ({theme: theme$1, spacing}) => ({
    padding: theme.getSizeValue({size: spacing, sizes: theme$1.spacing})
  }),
  header: ({theme: theme$1, spacing}) => ({
    borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[7] : theme$1.colors.gray[2]}`,
    padding: [theme$1.spacing.xs / 1.5, theme.getSizeValue({size: spacing, sizes: theme$1.spacing})],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }),
  target: {
    zIndex: 1
  },
  closeButton: {
    position: "absolute",
    top: 7,
    zIndex: 2,
    right: 10
  },
  left: ({gutter, arrowSize}) => __spreadProps(__spreadValues({}, horizontalPlacement(arrowSize)), {
    right: `calc(100% + ${gutter}px)`,
    "& $arrow": {
      right: -arrowSize,
      borderLeft: 0,
      borderBottom: 0
    }
  }),
  right: ({gutter, arrowSize}) => __spreadProps(__spreadValues({}, horizontalPlacement(arrowSize)), {
    left: `calc(100% + ${gutter}px)`,
    "& $arrow": {
      left: -arrowSize,
      borderRight: 0,
      borderTop: 0
    }
  }),
  top: ({gutter, arrowSize}) => __spreadProps(__spreadValues({}, verticalPlacement(arrowSize)), {
    bottom: `calc(100% + ${gutter}px)`,
    "& $arrow": {
      bottom: -arrowSize,
      borderLeft: 0,
      borderTop: 0
    }
  }),
  bottom: ({gutter, arrowSize}) => __spreadProps(__spreadValues({}, verticalPlacement(arrowSize)), {
    top: `calc(100% + ${gutter}px)`,
    "& $arrow": {
      top: -arrowSize,
      borderRight: 0,
      borderBottom: 0
    }
  })
});

exports.default = useStyles;
//# sourceMappingURL=Popover.styles.js.map
