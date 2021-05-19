import React from 'react';
import { useId } from '@mantine/hooks';
import { Input } from '../Input/Input.js';
import { InputWrapper } from '../InputWrapper/InputWrapper.js';

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
function TextInput(_a) {
  var _b = _a, {
    className,
    id,
    label,
    error,
    required,
    type = "text",
    style,
    icon,
    description,
    themeOverride,
    wrapperProps,
    elementRef
  } = _b, others = __objRest(_b, [
    "className",
    "id",
    "label",
    "error",
    "required",
    "type",
    "style",
    "icon",
    "description",
    "themeOverride",
    "wrapperProps",
    "elementRef"
  ]);
  const uuid = useId(id);
  return /* @__PURE__ */ React.createElement(InputWrapper, __spreadValues({
    required,
    id: uuid,
    label,
    error,
    description,
    className,
    style,
    themeOverride
  }, wrapperProps), /* @__PURE__ */ React.createElement(Input, __spreadProps(__spreadValues({}, others), {
    required,
    elementRef,
    id: uuid,
    type,
    invalid: !!error,
    icon,
    themeOverride
  })));
}
TextInput.displayName = "@mantine/core/TextInput";

export { TextInput };
//# sourceMappingURL=TextInput.js.map
