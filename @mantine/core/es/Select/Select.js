import React from 'react';
import { useId } from '@mantine/hooks';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { InputWrapper } from '../InputWrapper/InputWrapper.js';
import { Input } from '../Input/Input.js';
import { ChevronIcon } from './ChevronIcon.js';

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
function Select(_a) {
  var _b = _a, {
    id,
    className,
    required,
    label,
    error,
    style,
    data,
    placeholder,
    themeOverride,
    wrapperProps,
    inputStyle,
    description,
    elementRef
  } = _b, others = __objRest(_b, [
    "id",
    "className",
    "required",
    "label",
    "error",
    "style",
    "data",
    "placeholder",
    "themeOverride",
    "wrapperProps",
    "inputStyle",
    "description",
    "elementRef"
  ]);
  const theme = useMantineTheme(themeOverride);
  const uuid = useId(id);
  const options = data.map((item) => /* @__PURE__ */ React.createElement("option", {
    key: item.value,
    value: item.value,
    disabled: item.disabled
  }, item.label));
  if (placeholder) {
    options.unshift(/* @__PURE__ */ React.createElement("option", {
      key: "placeholder",
      value: "",
      selected: true,
      disabled: true,
      hidden: true
    }, placeholder));
  }
  const chevron = /* @__PURE__ */ React.createElement(ChevronIcon, {
    style: {color: error ? theme.colors.red[6] : theme.colors.gray[6]}
  });
  return /* @__PURE__ */ React.createElement(InputWrapper, __spreadProps(__spreadValues({}, wrapperProps), {
    required,
    id: uuid,
    label,
    error,
    className,
    style,
    themeOverride,
    description
  }), /* @__PURE__ */ React.createElement(Input, __spreadProps(__spreadValues({}, others), {
    component: "select",
    invalid: !!error,
    style: inputStyle,
    "aria-required": required,
    elementRef,
    id: uuid,
    inputStyle,
    rightSection: chevron,
    rightSectionProps: {style: {pointerEvents: "none"}},
    required,
    themeOverride
  }), options));
}
Select.displayName = "@mantine/core/Select";

export { Select };
//# sourceMappingURL=Select.js.map
