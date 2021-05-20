import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './Input.styles.js';

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
function Input(_a) {
  var _b = _a, {
    component: Element = "input",
    className,
    invalid = false,
    required = false,
    variant = "default",
    icon,
    style,
    rightSectionWidth = 36,
    rightSection,
    rightSectionProps = {},
    radius = "sm",
    inputClassName,
    inputStyle,
    themeOverride,
    wrapperProps,
    elementRef
  } = _b, others = __objRest(_b, [
    "component",
    "className",
    "invalid",
    "required",
    "variant",
    "icon",
    "style",
    "rightSectionWidth",
    "rightSection",
    "rightSectionProps",
    "radius",
    "inputClassName",
    "inputStyle",
    "themeOverride",
    "wrapperProps",
    "elementRef"
  ]);
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({radius, theme});
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.inputWrapper, {[classes.invalid]: invalid}, classes[`${variant}Variant`], className),
    style
  }, wrapperProps), icon && /* @__PURE__ */ React.createElement("div", {
    "data-mantine-icon": true,
    className: classes.icon
  }, icon), /* @__PURE__ */ React.createElement(Element, __spreadProps(__spreadValues({}, others), {
    "data-mantine-input": true,
    ref: elementRef,
    "aria-required": required,
    "aria-invalid": invalid,
    className: cx({[classes.withIcon]: icon}, classes.input, inputClassName),
    style: __spreadValues({
      paddingRight: rightSection ? rightSectionWidth : theme.spacing.md
    }, inputStyle)
  })), rightSection && /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, rightSectionProps), {
    "data-mantine-input-section": true,
    style: __spreadProps(__spreadValues({}, rightSectionProps.style), {width: rightSectionWidth}),
    className: cx(classes.rightSection, rightSectionProps.className)
  }), rightSection));
}
Input.displayName = "@mantine/core/Input";

export { Input };
//# sourceMappingURL=Input.js.map
