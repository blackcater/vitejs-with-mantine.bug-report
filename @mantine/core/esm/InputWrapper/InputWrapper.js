import React, { createElement } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text.js';
import useStyles from './InputWrapper.styles.js';

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
function InputWrapper(_a) {
  var _b = _a, {
    className,
    label,
    children,
    required,
    id,
    error,
    description,
    themeOverride,
    labelElement = "label"
  } = _b, others = __objRest(_b, [
    "className",
    "label",
    "children",
    "required",
    "id",
    "error",
    "description",
    "themeOverride",
    "labelElement"
  ]);
  const classes = useStyles({theme: useMantineTheme(themeOverride)});
  const labelProps = labelElement === "label" ? {htmlFor: id} : {};
  const inputLabel = createElement(labelElement, __spreadProps(__spreadValues({}, labelProps), {className: classes.label}), /* @__PURE__ */ React.createElement(React.Fragment, null, label, required && /* @__PURE__ */ React.createElement("span", {
    "data-mantine-required": true,
    className: classes.required
  }, " ", "*")));
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.inputWrapper, className)
  }, others), label && inputLabel, description && /* @__PURE__ */ React.createElement(Text, {
    themeOverride,
    "data-mantine-description": true,
    color: "gray",
    size: "xs",
    className: classes.description
  }, description), children, typeof error !== "boolean" && error && /* @__PURE__ */ React.createElement(Text, {
    themeOverride,
    "data-mantine-error": true,
    color: "red",
    size: "sm",
    className: classes.error
  }, error));
}
InputWrapper.displayName = "@mantine/core/InputWrapper";

export { InputWrapper };
//# sourceMappingURL=InputWrapper.js.map
