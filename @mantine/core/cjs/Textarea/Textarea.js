'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var TextareaAutosize = require('react-textarea-autosize');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var InputWrapper = require('../InputWrapper/InputWrapper.js');
var Input = require('../Input/Input.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var TextareaAutosize__default = /*#__PURE__*/_interopDefaultLegacy(TextareaAutosize);

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
function Textarea(_a) {
  var _b = _a, {
    autosize = false,
    maxRows,
    minRows,
    label,
    error,
    description,
    id,
    className,
    required,
    themeOverride,
    style,
    wrapperProps,
    inputStyle,
    elementRef
  } = _b, others = __objRest(_b, [
    "autosize",
    "maxRows",
    "minRows",
    "label",
    "error",
    "description",
    "id",
    "className",
    "required",
    "themeOverride",
    "style",
    "wrapperProps",
    "inputStyle",
    "elementRef"
  ]);
  const uuid = hooks.useId(id);
  const theme$1 = theme.useMantineTheme(themeOverride);
  return /* @__PURE__ */ React__default['default'].createElement(InputWrapper.InputWrapper, __spreadValues({
    label,
    error,
    id: uuid,
    description,
    required,
    style,
    className
  }, wrapperProps), autosize ? /* @__PURE__ */ React__default['default'].createElement(Input.Input, __spreadValues({
    required,
    component: TextareaAutosize__default['default'],
    invalid: !!error,
    maxRows,
    minRows,
    id: uuid,
    elementRef,
    inputStyle: __spreadProps(__spreadValues({
      paddingTop: theme$1.spacing.xs,
      paddingBottom: theme$1.spacing.xs
    }, inputStyle), {
      height: void 0
    })
  }, others)) : /* @__PURE__ */ React__default['default'].createElement(Input.Input, __spreadValues({
    component: "textarea",
    required,
    id: uuid,
    invalid: !!error,
    rows: minRows,
    elementRef,
    inputStyle: __spreadValues({
      paddingTop: theme$1.spacing.xs,
      paddingBottom: theme$1.spacing.xs
    }, inputStyle)
  }, others)));
}
Textarea.displayName = "@mantine/core/Textarea";

exports.Textarea = Textarea;
//# sourceMappingURL=Textarea.js.map
