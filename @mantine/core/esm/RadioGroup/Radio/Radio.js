import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './Radio.styles.js';

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
function Radio(_a) {
  var _b = _a, {
    className,
    themeOverride,
    id,
    children,
    style,
    size,
    elementRef,
    title,
    disabled,
    color
  } = _b, others = __objRest(_b, [
    "className",
    "themeOverride",
    "id",
    "children",
    "style",
    "size",
    "elementRef",
    "title",
    "disabled",
    "color"
  ]);
  const classes = useStyles({color, size, theme: useMantineTheme(themeOverride)});
  const uuid = useId(id);
  return /* @__PURE__ */ React.createElement("div", {
    "data-mantine-radio": true,
    className: cx(classes.wrapper, className),
    style,
    title
  }, /* @__PURE__ */ React.createElement("label", {
    className: cx(classes.label, {[classes.labelDisabled]: disabled}),
    htmlFor: uuid
  }, /* @__PURE__ */ React.createElement("input", __spreadValues({
    ref: elementRef,
    className: classes.radio,
    type: "radio",
    id: uuid,
    disabled
  }, others)), /* @__PURE__ */ React.createElement("span", null, children)));
}
Radio.displayName = "@mantine/core/Radio";

export { Radio };
//# sourceMappingURL=Radio.js.map
