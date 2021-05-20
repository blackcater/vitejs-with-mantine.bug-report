'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var CheckboxIcon = require('./CheckboxIcon.js');
var Checkbox_styles = require('./Checkbox.styles.js');

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
const CHECKBOX_SIZES = Checkbox_styles.sizes;
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
  const uuid = hooks.useId(id);
  const classes = Checkbox_styles['default']({size, color, theme: theme.useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues({
    className: cx__default['default'](classes.wrapper, className),
    style
  }, wrapperProps), /* @__PURE__ */ React__default['default'].createElement("div", {
    className: classes.checkboxWrapper
  }, /* @__PURE__ */ React__default['default'].createElement("input", __spreadProps(__spreadValues({}, others), {
    id: uuid,
    ref: elementRef,
    type: "checkbox",
    className: cx__default['default'](classes.checkbox, inputClassName),
    checked: intermediate || checked,
    onChange,
    disabled,
    style: inputStyle
  })), /* @__PURE__ */ React__default['default'].createElement(CheckboxIcon.CheckboxIcon, {
    intermediate,
    className: classes.icon
  })), label && /* @__PURE__ */ React__default['default'].createElement("label", {
    className: classes.label,
    htmlFor: uuid
  }, label));
}
Checkbox.displayName = "@mantine/core/Checkbox";

exports.CHECKBOX_SIZES = CHECKBOX_SIZES;
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map
