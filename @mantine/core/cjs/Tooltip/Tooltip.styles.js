'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
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
const verticalPlacement = {
  "&$center": {
    left: "50%",
    transform: "translateX(-50%)"
  },
  "&$end": {
    right: 0
  },
  "&$start": {
    left: 0
  }
};
const horizontalPlacement = {
  "&$center": {
    top: "50%",
    transform: "translateY(-50%)"
  },
  "&$end": {
    bottom: 0
  },
  "&$start": {
    top: 0
  }
};
var useStyles = reactJss.createUseStyles({
  withArrow: {},
  center: {},
  start: {},
  end: {},
  wrapper: {
    position: "relative",
    display: "inline-block"
  },
  tooltipInner: ({theme: theme$1, color}) => __spreadProps(__spreadValues({}, theme.getFontStyles(theme$1)), {
    backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 3 : 9}),
    lineHeight: theme$1.lineHeight,
    fontSize: theme$1.fontSizes.sm,
    borderRadius: theme$1.radius.sm,
    padding: [theme$1.spacing.xs / 2, theme$1.spacing.xs],
    color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
    position: "relative",
    "&$withArrow::before": {
      display: "block",
      position: "absolute",
      content: '""',
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  }),
  tooltip: {
    display: "inline-block",
    position: "absolute"
  },
  top: ({gutter, theme: theme$1, color, arrowSize}) => __spreadProps(__spreadValues({}, verticalPlacement), {
    bottom: `calc(100% + ${gutter}px)`,
    "& $tooltipInner$withArrow::before": {
      top: "100%",
      borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`,
      borderColor: `${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 9
      })} transparent transparent transparent`
    },
    "&$center $tooltipInner$withArrow::before": {
      left: `calc(50% - ${arrowSize}px)`
    },
    "&$start $tooltipInner$withArrow::before": {
      left: arrowSize
    },
    "&$end $tooltipInner$withArrow::before": {
      right: arrowSize
    }
  }),
  bottom: ({gutter, theme: theme$1, color, arrowSize}) => __spreadProps(__spreadValues({}, verticalPlacement), {
    top: `calc(100% + ${gutter}px)`,
    "& $tooltipInner$withArrow::before": {
      bottom: "100%",
      borderWidth: `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`,
      borderColor: `transparent transparent ${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 9
      })} transparent`
    },
    "&$center $tooltipInner$withArrow::before": {
      left: `calc(50% - ${arrowSize}px)`
    },
    "&$start $tooltipInner$withArrow::before": {
      left: arrowSize
    },
    "&$end $tooltipInner$withArrow::before": {
      right: arrowSize
    }
  }),
  right: ({gutter, theme: theme$1, color, arrowSize}) => __spreadProps(__spreadValues({}, horizontalPlacement), {
    left: `calc(100% + ${gutter}px)`,
    "& $tooltipInner$withArrow::before": {
      right: "100%",
      borderWidth: `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`,
      borderColor: `transparent ${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 9
      })} transparent transparent`
    },
    "&$center $tooltipInner$withArrow::before": {
      top: `calc(50% - ${arrowSize}px)`
    },
    "&$start $tooltipInner$withArrow::before": {
      top: arrowSize
    },
    "&$end $tooltipInner$withArrow::before": {
      bottom: arrowSize
    }
  }),
  left: ({gutter, theme: theme$1, color, arrowSize}) => __spreadProps(__spreadValues({}, horizontalPlacement), {
    right: `calc(100% + ${gutter}px)`,
    "& $tooltipInner$withArrow::before": {
      left: "100%",
      borderWidth: `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
      borderColor: `transparent transparent transparent ${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 9
      })}`
    },
    "&$center $tooltipInner$withArrow::before": {
      top: `calc(50% - ${arrowSize}px)`
    },
    "&$start $tooltipInner$withArrow::before": {
      top: arrowSize
    },
    "&$end $tooltipInner$withArrow::before": {
      bottom: arrowSize
    }
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Tooltip.styles.js.map
