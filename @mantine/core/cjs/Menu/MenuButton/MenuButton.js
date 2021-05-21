'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var MenuButton_styles = require('./MenuButton.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

var __defProp = Object.defineProperty;
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
function MenuButton(_a) {
  var _b = _a, {
    children,
    onHover,
    hovered,
    themeOverride,
    elementRef,
    icon,
    color,
    disabled,
    rightSection,
    className,
    component: Element = "button"
  } = _b, others = __objRest(_b, [
    "children",
    "onHover",
    "hovered",
    "themeOverride",
    "elementRef",
    "icon",
    "color",
    "disabled",
    "rightSection",
    "className",
    "component"
  ]);
  const classes = MenuButton_styles['default']({color, theme: theme.useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React__default.createElement(Element, __spreadValues({
    type: "button",
    role: "menuitem",
    className: cx__default(classes.item, {[classes.hovered]: hovered}, className),
    onMouseEnter: () => !disabled && onHover(),
    ref: elementRef,
    disabled
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.inner
  }, icon && /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-icon": true,
    className: classes.icon
  }, icon), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.body
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.label
  }, children), rightSection)));
}
MenuButton.displayName = "@mantine/core/MenuButton";

exports.MenuButton = MenuButton;
//# sourceMappingURL=MenuButton.js.map
