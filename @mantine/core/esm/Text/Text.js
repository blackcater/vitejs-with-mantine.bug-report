import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './Text.styles.js';

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
function Text(_a) {
  var _b = _a, {
    className,
    component = "div",
    children,
    size = "md",
    weight,
    transform,
    style,
    color,
    align,
    variant = "text",
    themeOverride,
    elementRef
  } = _b, others = __objRest(_b, [
    "className",
    "component",
    "children",
    "size",
    "weight",
    "transform",
    "style",
    "color",
    "align",
    "variant",
    "themeOverride",
    "elementRef"
  ]);
  const classes = useStyles({variant, color, size, theme: useMantineTheme(themeOverride)});
  return React.createElement(component, __spreadValues({
    className: cx(classes.text, className),
    style: __spreadValues({fontWeight: weight, textTransform: transform, textAlign: align}, style),
    ref: elementRef
  }, others), children);
}
Text.displayName = "@mantine/core/Text";
function Anchor(_c) {
  var _d = _c, {
    component = "a"
  } = _d, others = __objRest(_d, [
    "component"
  ]);
  return /* @__PURE__ */ React.createElement(Text, __spreadValues({
    component,
    variant: "link"
  }, others));
}
Anchor.displayName = "@mantine/core/Anchor";

export { Anchor, Text };
//# sourceMappingURL=Text.js.map
