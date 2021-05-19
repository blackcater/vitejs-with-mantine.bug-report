import React from 'react';
import { getThemeColor } from '../mantine-theme/src/utils/get-theme-color/get-theme-color.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { Text } from '../Text/Text.js';

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
function highlighter(value, highlightPart) {
  const normalizedValue = value.trim().toLowerCase();
  const normalizedHighlight = highlightPart.trim().toLowerCase();
  const diff = highlightPart.length - normalizedHighlight.length;
  const highlightLength = highlightPart.length - diff;
  const highlightIndex = normalizedValue.indexOf(normalizedHighlight);
  if (highlightIndex === -1) {
    return {start: value, highlighted: "", end: ""};
  }
  const start = value.slice(0, highlightIndex);
  const highlighted = value.slice(highlightIndex, highlightIndex + highlightLength);
  const end = value.slice(highlightIndex + highlightLength);
  return {start, highlighted, end};
}
function Highlight(_a) {
  var _b = _a, {
    children,
    highlight,
    component,
    themeOverride,
    highlightColor = "yellow"
  } = _b, others = __objRest(_b, [
    "children",
    "highlight",
    "component",
    "themeOverride",
    "highlightColor"
  ]);
  const theme = useMantineTheme(themeOverride);
  const color = getThemeColor({
    theme,
    color: highlightColor,
    shade: 2
  });
  const {start, end, highlighted} = highlighter(children, highlight);
  return /* @__PURE__ */ React.createElement(Text, __spreadValues({
    component,
    themeOverride
  }, others), !!start && start, !!highlighted && /* @__PURE__ */ React.createElement("mark", {
    style: {
      backgroundColor: color,
      color: theme.colorScheme === "dark" ? theme.colors.dark[9] : "inherit"
    }
  }, highlighted), !!end && end);
}
Highlight.displayName = "@mantine/core/Highlight";

export { Highlight, highlighter };
//# sourceMappingURL=Highlight.js.map
