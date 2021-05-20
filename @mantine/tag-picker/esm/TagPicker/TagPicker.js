import React from 'react';
import { useClickOutside, useReducedMotion } from '@mantine/hooks';
import { useMantineTheme, Badge, Transition, Paper } from '@mantine/core';
import { TagsList } from '../TagsList/TagsList.js';
import useStyles from './TagPicker.styles.js';

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
function TagPicker(_a) {
  var _b = _a, {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    controlRef,
    value,
    noValueLabel,
    themeOverride,
    transitionDuration,
    controlId,
    labelledBy,
    transition = "skew-up",
    transitionTimingFunction
  } = _b, others = __objRest(_b, [
    "dropdownOpened",
    "openDropdown",
    "closeDropdown",
    "controlRef",
    "value",
    "noValueLabel",
    "themeOverride",
    "transitionDuration",
    "controlId",
    "labelledBy",
    "transition",
    "transitionTimingFunction"
  ]);
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({theme});
  const dropdownRef = useClickOutside(closeDropdown);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.tagPicker
  }, /* @__PURE__ */ React.createElement("button", {
    className: classes.control,
    type: "button",
    ref: controlRef,
    onClick: openDropdown,
    id: controlId,
    "aria-labelledby": labelledBy,
    "aria-haspopup": "listbox",
    "aria-expanded": dropdownOpened
  }, /* @__PURE__ */ React.createElement(Badge, {
    color: value && value.color || "gray",
    style: {cursor: "pointer", display: "block"},
    themeOverride
  }, value && value.name || noValueLabel)), /* @__PURE__ */ React.createElement(Transition, {
    duration,
    mounted: dropdownOpened,
    transition,
    timingFunction: transitionTimingFunction,
    themeOverride
  }, (transitionStyles) => /* @__PURE__ */ React.createElement(Paper, {
    shadow: "sm",
    className: classes.dropdown,
    elementRef: dropdownRef,
    style: transitionStyles,
    themeOverride,
    tabIndex: -1
  }, /* @__PURE__ */ React.createElement(TagsList, __spreadValues({
    value,
    transition,
    transitionDuration,
    transitionTimingFunction,
    themeOverride
  }, others)))));
}

export { TagPicker };
//# sourceMappingURL=TagPicker.js.map
