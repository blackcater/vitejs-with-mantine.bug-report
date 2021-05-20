import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { CheckboxIcon } from './CheckboxIcon.js';
import useStyles, { sizes } from './Checkbox.styles.js';

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
const CHECKBOX_SIZES = sizes;
function Checkbox(_a) {
  var _b = _a, {
    className,
    checked,
    onChange,
    color,
    themeOverride,
    label,
    disabled,
    intermediate,
    id,
    size,
    wrapperProps,
    style,
    inputStyle,
    inputClassName,
    elementRef
  } = _b, others = __objRest(_b, [
    "className",
    "checked",
    "onChange",
    "color",
    "themeOverride",
    "label",
    "disabled",
    "intermediate",
    "id",
    "size",
    "wrapperProps",
    "style",
    "inputStyle",
    "inputClassName",
    "elementRef"
  ]);
  const uuid = useId(id);
  const classes = useStyles({size, color, theme: useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.wrapper, className),
    style
  }, wrapperProps), /* @__PURE__ */ React.createElement("div", {
    className: classes.checkboxWrapper
  }, /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues({}, others), {
    id: uuid,
    ref: elementRef,
    type: "checkbox",
    className: cx(classes.checkbox, inputClassName),
    checked: intermediate || checked,
    onChange,
    disabled,
    style: inputStyle
  })), /* @__PURE__ */ React.createElement(CheckboxIcon, {
    intermediate,
    className: classes.icon
  })), label && /* @__PURE__ */ React.createElement("label", {
    className: classes.label,
    htmlFor: uuid
  }, label));
}
Checkbox.displayName = "@mantine/core/Checkbox";

export { CHECKBOX_SIZES, Checkbox };
//# sourceMappingURL=Checkbox.js.map
