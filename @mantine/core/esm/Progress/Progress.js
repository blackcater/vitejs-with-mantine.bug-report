import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import useStyles, { sizes } from './Progress.styles.js';

var __defProp = Object.defineProperty;
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
const PROGRESS_SIZES = sizes;
function Progress(_a) {
  var _b = _a, {
    className,
    value,
    color,
    size = "md",
    radius = "sm",
    striped = false,
    themeOverride,
    "aria-label": ariaLabel
  } = _b, others = __objRest(_b, [
    "className",
    "value",
    "color",
    "size",
    "radius",
    "striped",
    "themeOverride",
    "aria-label"
  ]);
  const classes = useStyles({
    color,
    size,
    radius,
    striped,
    reduceMotion: useReducedMotion(),
    theme: useMantineTheme(themeOverride)
  });
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.progress, className)
  }, others), /* @__PURE__ */ React.createElement("div", {
    role: "progressbar",
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": value,
    "aria-label": ariaLabel,
    className: classes.bar,
    style: {width: `${value}%`}
  }));
}
Progress.displayName = "@mantine/core/Progress";

export { PROGRESS_SIZES, Progress };
//# sourceMappingURL=Progress.js.map
