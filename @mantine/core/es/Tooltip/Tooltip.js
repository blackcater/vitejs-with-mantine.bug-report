import React, { useRef, useState } from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { Transition } from '../Transition/Transition.js';
import useStyles from './Tooltip.styles.js';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Tooltip(_a) {
  var _b = _a, {
    className,
    themeOverride,
    label,
    children,
    opened,
    delay = 0,
    gutter = 5,
    color = "gray",
    disabled = false,
    withArrow = false,
    arrowSize = 3,
    position = "top",
    placement = "center",
    transition = "slide-up",
    transitionDuration = 100,
    zIndex = 1e3,
    transitionTimingFunction,
    width = "auto",
    wrapLines = false,
    allowPointerEvents = false,
    elementRef,
    tooltipRef,
    tooltipId
  } = _b, others = __objRest(_b, [
    "className",
    "themeOverride",
    "label",
    "children",
    "opened",
    "delay",
    "gutter",
    "color",
    "disabled",
    "withArrow",
    "arrowSize",
    "position",
    "placement",
    "transition",
    "transitionDuration",
    "zIndex",
    "transitionTimingFunction",
    "width",
    "wrapLines",
    "allowPointerEvents",
    "elementRef",
    "tooltipRef",
    "tooltipId"
  ]);
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({theme, color, gutter, arrowSize});
  const timeoutRef = useRef();
  const [_opened, setOpened] = useState(false);
  const visible = (typeof opened === "boolean" ? opened : _opened) && !disabled;
  const duration = useReducedMotion() ? 0 : transitionDuration;
  const handleOpen = () => {
    window.clearTimeout(timeoutRef.current);
    setOpened(true);
  };
  const handleClose = () => {
    if (delay !== 0) {
      timeoutRef.current = window.setTimeout(() => {
        setOpened(false);
      }, delay);
    } else {
      setOpened(false);
    }
  };
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.wrapper, className),
    ref: tooltipRef
  }, others), /* @__PURE__ */ React.createElement(Transition, {
    mounted: visible,
    transition,
    duration,
    timingFunction: transitionTimingFunction
  }, (transitionStyles) => /* @__PURE__ */ React.createElement("div", {
    id: tooltipId,
    role: "tooltip",
    style: {zIndex, width, pointerEvents: allowPointerEvents ? "all" : "none"},
    "data-mantine-tooltip": true,
    className: cx(classes.tooltip, classes[placement], classes[position]),
    ref: tooltipRef
  }, /* @__PURE__ */ React.createElement("div", {
    "data-mantine-tooltip-inner": true,
    className: cx(classes.tooltipInner, {
      [classes.withArrow]: withArrow
    }),
    style: __spreadProps(__spreadValues({}, transitionStyles), {whiteSpace: wrapLines ? "normal" : "nowrap"})
  }, label))), /* @__PURE__ */ React.createElement("div", {
    onMouseEnter: handleOpen,
    onMouseLeave: handleClose
  }, children));
}
Tooltip.displayName = "@mantine/core/Tooltip";

export { Tooltip };
//# sourceMappingURL=Tooltip.js.map
