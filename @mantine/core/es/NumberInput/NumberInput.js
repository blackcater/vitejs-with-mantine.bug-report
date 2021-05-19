import React, { useState, useRef, useEffect } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { TextInput } from '../TextInput/TextInput.js';
import useStyles, { CONTROL_WIDTH } from './NumberInput.styles.js';

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
function NumberInput(_a) {
  var _b = _a, {
    disabled,
    themeOverride,
    elementRef,
    value,
    onChange,
    min,
    max,
    step = 1,
    onBlur,
    onFocus,
    hideControls = false,
    radius = "sm",
    variant,
    precision = 0,
    defaultValue,
    noClampOnBlur = false
  } = _b, others = __objRest(_b, [
    "disabled",
    "themeOverride",
    "elementRef",
    "value",
    "onChange",
    "min",
    "max",
    "step",
    "onBlur",
    "onFocus",
    "hideControls",
    "radius",
    "variant",
    "precision",
    "defaultValue",
    "noClampOnBlur"
  ]);
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({theme, radius});
  const [focused, setFocused] = useState(false);
  const [_value, setValue] = useState(typeof value === "number" ? value : typeof defaultValue === "number" ? defaultValue : 0);
  const finalValue = typeof value === "number" ? value : _value;
  const [tempValue, setTempValue] = useState(typeof finalValue === "number" ? finalValue.toFixed(precision) : "");
  const inputRef = useRef();
  const handleValueChange = (val) => {
    typeof onChange === "function" && onChange(val);
    setValue(val);
  };
  const _min = typeof min === "number" ? min : -Infinity;
  const _max = typeof max === "number" ? max : Infinity;
  const clamp = (v) => {
    const val = typeof v === "number" ? v : parseFloat(v);
    return Math.min(Math.max(val, _min), _max);
  };
  useEffect(() => {
    if (typeof value === "number" && !focused) {
      setValue(value);
      setTempValue(value.toFixed(precision));
    }
  }, [value]);
  const rightSection = /* @__PURE__ */ React.createElement("div", {
    className: classes.rightSection
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    tabIndex: -1,
    "aria-hidden": true,
    "data-mantine-increment": true,
    onMouseDown: (event) => {
      event.preventDefault();
      const result = clamp(finalValue + step).toFixed(precision);
      handleValueChange(parseFloat(result));
      setTempValue(result);
      inputRef.current.focus();
    },
    disabled: finalValue >= max,
    className: cx(classes.control, classes.controlUp)
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    tabIndex: -1,
    "aria-hidden": true,
    "data-mantine-decrement": true,
    onMouseDown: (event) => {
      event.preventDefault();
      const result = clamp(finalValue - step).toFixed(precision);
      handleValueChange(parseFloat(result));
      setTempValue(result);
      inputRef.current.focus();
    },
    disabled: finalValue <= min,
    className: cx(classes.control, classes.controlDown)
  }));
  const handleChange = (event) => {
    const val = event.currentTarget.value;
    setTempValue(val);
    const parsed = Number(val);
    val.trim() !== "" && !Number.isNaN(parsed) && handleValueChange(parsed);
  };
  const handleBlur = (event) => {
    const val = clamp(event.currentTarget.value);
    if (!Number.isNaN(val)) {
      if (!noClampOnBlur) {
        setTempValue(val.toFixed(precision));
        handleValueChange(val);
      }
    } else {
      setTempValue(finalValue.toFixed(precision));
    }
    setFocused(false);
    typeof onBlur === "function" && onBlur(event);
  };
  const handleFocus = (event) => {
    setFocused(true);
    typeof onFocus === "function" && onBlur(event);
  };
  return /* @__PURE__ */ React.createElement(TextInput, __spreadProps(__spreadValues({}, others), {
    variant,
    value: tempValue,
    disabled,
    themeOverride,
    elementRef: useMergedRef(inputRef, elementRef),
    type: "number",
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    rightSection: disabled || hideControls || variant === "unstyled" ? null : rightSection,
    rightSectionWidth: CONTROL_WIDTH + 1,
    radius,
    max,
    min,
    step
  }));
}
NumberInput.displayName = "@mantine/core/NumberInput";

export { NumberInput };
//# sourceMappingURL=NumberInput.js.map
