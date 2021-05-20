'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var InputWrapper = require('../InputWrapper/InputWrapper.js');
var Input = require('../Input/Input.js');
var ChevronIcon = require('./ChevronIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const theme$1 = theme.useMantineTheme(themeOverride);
  const uuid = hooks.useId(id);
  const options = data.map((item) => /* @__PURE__ */ React__default['default'].createElement("option", {
    key: item.value,
    value: item.value,
    disabled: item.disabled
  }, item.label));
  if (placeholder) {
    options.unshift(/* @__PURE__ */ React__default['default'].createElement("option", {
      key: "placeholder",
      value: "",
      selected: true,
      disabled: true,
      hidden: true
    }, placeholder));
  }
  const chevron = /* @__PURE__ */ React__default['default'].createElement(ChevronIcon.ChevronIcon, {
    style: {color: error ? theme$1.colors.red[6] : theme$1.colors.gray[6]}
  });
  return /* @__PURE__ */ React__default['default'].createElement(InputWrapper.InputWrapper, __spreadProps(__spreadValues({}, wrapperProps), {
    required,
    id: uuid,
    label,
    error,
    className,
    style,
    themeOverride,
    description
  }), /* @__PURE__ */ React__default['default'].createElement(Input.Input, __spreadProps(__spreadValues({}, others), {
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

exports.Select = Select;
//# sourceMappingURL=Select.js.map
