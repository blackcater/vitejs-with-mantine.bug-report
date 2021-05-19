import React from 'react';
import cx from 'clsx';
import { useReducedMotion, useId } from '@mantine/hooks';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import useStyles, { sizes } from './Switch.styles.js';

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
const SWITCH_SIZES = sizes;
function Switch(_a) {
  var _b = _a, {
    className,
    color,
    label,
    id,
    style,
    size = "md",
    radius = "xl",
    themeOverride,
    wrapperProps,
    inputStyle,
    inputClassName,
    elementRef
  } = _b, others = __objRest(_b, [
    "className",
    "color",
    "label",
    "id",
    "style",
    "size",
    "radius",
    "themeOverride",
    "wrapperProps",
    "inputStyle",
    "inputClassName",
    "elementRef"
  ]);
  const classes = useStyles({
    size,
    color,
    radius,
    reduceMotion: useReducedMotion(),
    theme: useMantineTheme(themeOverride)
  });
  const uuid = useId(id);
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.wrapper, className),
    style
  }, wrapperProps), /* @__PURE__ */ React.createElement("input", __spreadValues({
    id: uuid,
    ref: elementRef,
    type: "checkbox",
    className: cx(classes.switch, inputClassName),
    style: inputStyle
  }, others)), label && /* @__PURE__ */ React.createElement("label", {
    className: classes.label,
    htmlFor: uuid
  }, label));
}
Switch.displayName = "@mantine/core/Switch";

export { SWITCH_SIZES, Switch };
//# sourceMappingURL=Switch.js.map
