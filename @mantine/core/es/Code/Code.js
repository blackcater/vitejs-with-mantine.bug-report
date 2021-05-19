import React from 'react';
import cx from 'clsx';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import useStyles from './Code.styles.js';

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
function Code(_a) {
  var _b = _a, {
    children,
    themeOverride,
    block = false,
    className,
    color
  } = _b, others = __objRest(_b, [
    "children",
    "themeOverride",
    "block",
    "className",
    "color"
  ]);
  const theme = useMantineTheme(themeOverride);
  const themeColor = color || (theme.colorScheme === "dark" ? "dark" : "gray");
  const classes = useStyles({color: themeColor, theme: useMantineTheme(themeOverride)});
  if (block) {
    return /* @__PURE__ */ React.createElement("pre", __spreadValues({
      className: cx(classes.code, classes.pre, className)
    }, others), children);
  }
  return /* @__PURE__ */ React.createElement("code", __spreadValues({
    className: cx(classes.code, className)
  }, others), children);
}
Code.displayName = "@mantine/core/Code";

export { Code };
//# sourceMappingURL=Code.js.map
