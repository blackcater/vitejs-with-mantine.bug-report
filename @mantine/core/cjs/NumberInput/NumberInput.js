'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var TextInput = require('../TextInput/TextInput.js');
var NumberInput_styles = require('./NumberInput.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
  const theme$1 = theme.useMantineTheme(themeOverride);
  const classes = NumberInput_styles['default']({theme: theme$1, radius});
  const [focused, setFocused] = React.useState(false);
  const [_value, setValue] = React.useState(typeof value === "number" ? value : typeof defaultValue === "number" ? defaultValue : 0);
  const finalValue = typeof value === "number" ? value : _value;
  const [tempValue, setTempValue] = React.useState(typeof finalValue === "number" ? finalValue.toFixed(precision) : "");
  const inputRef = React.useRef();
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
  React.useEffect(() => {
    if (typeof value === "number" && !focused) {
      setValue(value);
      setTempValue(value.toFixed(precision));
    }
  }, [value]);
  const rightSection = /* @__PURE__ */ React__default['default'].createElement("div", {
    className: classes.rightSection
  }, /* @__PURE__ */ React__default['default'].createElement("button", {
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
    className: cx__default['default'](classes.control, classes.controlUp)
  }), /* @__PURE__ */ React__default['default'].createElement("button", {
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
    className: cx__default['default'](classes.control, classes.controlDown)
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
  return /* @__PURE__ */ React__default['default'].createElement(TextInput.TextInput, __spreadProps(__spreadValues({}, others), {
    variant,
    value: tempValue,
    disabled,
    themeOverride,
    elementRef: hooks.useMergedRef(inputRef, elementRef),
    type: "number",
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    rightSection: disabled || hideControls || variant === "unstyled" ? null : rightSection,
    rightSectionWidth: NumberInput_styles.CONTROL_WIDTH + 1,
    radius,
    max,
    min,
    step
  }));
}
NumberInput.displayName = "@mantine/core/NumberInput";

exports.NumberInput = NumberInput;
//# sourceMappingURL=NumberInput.js.map
