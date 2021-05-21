'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var TabControl_styles = require('./TabControl.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

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
function TabControl(_a) {
  var _b = _a, {
    themeOverride,
    active,
    elementRef,
    tabProps,
    color,
    className
  } = _b, others = __objRest(_b, [
    "themeOverride",
    "active",
    "elementRef",
    "tabProps",
    "color",
    "className"
  ]);
  const _a2 = tabProps, {label, icon, color: overrideColor, elementRef: _} = _a2, props = __objRest(_a2, ["label", "icon", "color", "elementRef"]);
  const classes = TabControl_styles['default']({
    reduceMotion: hooks.useReducedMotion(),
    color: overrideColor || color,
    theme: theme.useMantineTheme(themeOverride)
  });
  return /* @__PURE__ */ React__default.createElement("button", __spreadProps(__spreadValues(__spreadValues({}, others), props), {
    "data-mantine-tab": true,
    tabIndex: active ? 0 : -1,
    className: cx__default(classes.tab, {[classes.tabActive]: active}, className),
    type: "button",
    role: "tab",
    "aria-selected": active,
    ref: hooks.useMergedRef(elementRef, tabProps.elementRef)
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.tabInner
  }, icon && /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-icon": true,
    className: classes.tabIcon
  }, icon), label && /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-label": true
  }, label)));
}
TabControl.displayName = "@mantine/core/TabControl";

exports.TabControl = TabControl;
//# sourceMappingURL=TabControl.js.map
