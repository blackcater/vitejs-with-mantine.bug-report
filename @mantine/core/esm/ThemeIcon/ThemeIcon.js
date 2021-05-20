import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import useStyles, { sizes } from './ThemeIcon.styles.js';

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
const THEME_ICON_SIZES = sizes;
function ThemeIcon(_a) {
  var _b = _a, {
    className,
    size = "md",
    radius = "sm",
    variant = "filled",
    color,
    children,
    themeOverride
  } = _b, others = __objRest(_b, [
    "className",
    "size",
    "radius",
    "variant",
    "color",
    "children",
    "themeOverride"
  ]);
  const classes = useStyles({
    variant,
    radius,
    color,
    size,
    theme: useMantineTheme(themeOverride)
  });
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    "data-mantine-composable": true,
    className: cx(classes.themeIcon, className)
  }, others), children);
}
ThemeIcon.displayName = "@mantine/core/ThemeIcon";

export { THEME_ICON_SIZES, ThemeIcon };
//# sourceMappingURL=ThemeIcon.js.map
