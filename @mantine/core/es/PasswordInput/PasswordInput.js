import React, { useRef, useState } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon.js';
import { TextInput } from '../TextInput/TextInput.js';
import { PasswordToggleIcon } from './PasswordToggleIcon.js';

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
function PasswordInput(_a) {
  var _b = _a, {
    radius,
    disabled,
    hidePasswordLabel,
    showPasswordLabel,
    themeOverride,
    focusInputOnToggle = false,
    elementRef
  } = _b, others = __objRest(_b, [
    "radius",
    "disabled",
    "hidePasswordLabel",
    "showPasswordLabel",
    "themeOverride",
    "focusInputOnToggle",
    "elementRef"
  ]);
  const inputRef = useRef();
  const [reveal, setReveal] = useState(false);
  const toggleReveal = () => {
    setReveal((current) => !current);
    if (focusInputOnToggle) {
      inputRef.current.focus();
    }
  };
  const rightSection = /* @__PURE__ */ React.createElement(ActionIcon, {
    onClick: toggleReveal,
    themeOverride,
    title: reveal ? hidePasswordLabel : showPasswordLabel,
    "aria-label": reveal ? hidePasswordLabel : showPasswordLabel,
    radius
  }, /* @__PURE__ */ React.createElement(PasswordToggleIcon, {
    reveal
  }));
  return /* @__PURE__ */ React.createElement(TextInput, __spreadProps(__spreadValues({}, others), {
    disabled,
    themeOverride,
    elementRef: useMergedRef(inputRef, elementRef),
    type: reveal ? "text" : "password",
    rightSection: disabled ? null : rightSection,
    radius
  }));
}
PasswordInput.displayName = "@mantine/core/PasswordInput";

export { PasswordInput };
//# sourceMappingURL=PasswordInput.js.map
