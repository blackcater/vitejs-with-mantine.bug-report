'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var ActionIcon = require('../ActionIcon/ActionIcon.js');
var TextInput = require('../TextInput/TextInput.js');
var PasswordToggleIcon = require('./PasswordToggleIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

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
  const inputRef = React.useRef();
  const [reveal, setReveal] = React.useState(false);
  const toggleReveal = () => {
    setReveal((current) => !current);
    if (focusInputOnToggle) {
      inputRef.current.focus();
    }
  };
  const rightSection = /* @__PURE__ */ React__default.createElement(ActionIcon.ActionIcon, {
    onClick: toggleReveal,
    themeOverride,
    title: reveal ? hidePasswordLabel : showPasswordLabel,
    "aria-label": reveal ? hidePasswordLabel : showPasswordLabel,
    radius
  }, /* @__PURE__ */ React__default.createElement(PasswordToggleIcon.PasswordToggleIcon, {
    reveal
  }));
  return /* @__PURE__ */ React__default.createElement(TextInput.TextInput, __spreadProps(__spreadValues({}, others), {
    disabled,
    themeOverride,
    elementRef: hooks.useMergedRef(inputRef, elementRef),
    type: reveal ? "text" : "password",
    rightSection: disabled ? null : rightSection,
    radius
  }));
}
PasswordInput.displayName = "@mantine/core/PasswordInput";

exports.PasswordInput = PasswordInput;
//# sourceMappingURL=PasswordInput.js.map
