import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import useStyles, { sizes } from './Burger.styles.js';

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
const BURGER_SIZES = sizes;
function Burger(_a) {
  var _b = _a, {
    className,
    opened,
    color = "gray",
    size = "md",
    themeOverride,
    elementRef
  } = _b, others = __objRest(_b, [
    "className",
    "opened",
    "color",
    "size",
    "themeOverride",
    "elementRef"
  ]);
  const classes = useStyles({
    color,
    size,
    theme: useMantineTheme(themeOverride),
    reduceMotion: useReducedMotion()
  });
  return /* @__PURE__ */ React.createElement("button", __spreadValues({
    type: "button",
    className: cx(classes.wrapper, className),
    ref: elementRef
  }, others), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.burger, {[classes.opened]: opened})
  }));
}
Burger.displayName = "@mantine/core/Burger";

export { BURGER_SIZES, Burger };
//# sourceMappingURL=Burger.js.map
