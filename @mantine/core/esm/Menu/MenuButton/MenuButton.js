import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './MenuButton.styles.js';

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
    className
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
    "className"
  ]);
  const classes = useStyles({color, theme: useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React.createElement("button", __spreadValues({
    type: "button",
    role: "menuitem",
    className: cx(classes.item, {[classes.hovered]: hovered}, className),
    onMouseEnter: () => !disabled && onHover(),
    ref: elementRef,
    disabled
  }, others), /* @__PURE__ */ React.createElement("div", {
    className: classes.inner
  }, icon && /* @__PURE__ */ React.createElement("div", {
    "data-mantine-icon": true,
    className: classes.icon
  }, icon), /* @__PURE__ */ React.createElement("div", {
    className: classes.body
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.label
  }, children), rightSection)));
}
MenuButton.displayName = "@mantine/core/MenuButton";

export { MenuButton };
//# sourceMappingURL=MenuButton.js.map
