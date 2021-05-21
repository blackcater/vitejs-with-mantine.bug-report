import React from 'react';
import { useMantineTheme, getSizeValue } from '@mantine/theme';

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
function isValidSpan(span) {
  return typeof span === "number" && span > 0 && span % 1 === 0;
}
function Col(_a) {
  var _b = _a, {
    themeOverride,
    children,
    span,
    gutter,
    offset = 0,
    grow,
    style,
    columns
  } = _b, others = __objRest(_b, [
    "themeOverride",
    "children",
    "span",
    "gutter",
    "offset",
    "grow",
    "style",
    "columns"
  ]);
  const theme = useMantineTheme(themeOverride);
  const spacing = getSizeValue({size: gutter, sizes: theme.spacing});
  if (!isValidSpan(span) || span > columns) {
    return null;
  }
  const styles = __spreadProps(__spreadValues({}, style), {
    boxSizing: "border-box",
    flex: `${grow ? "1" : "0"} 0 calc(${100 / (columns / span)}% - ${spacing}px)`,
    margin: spacing / 2
  });
  if (isValidSpan(offset)) {
    styles.marginLeft = `calc(${100 / (columns / offset)}% + ${spacing / 2}px)`;
  }
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    style: styles
  }, others), children);
}
Col.displayName = "@mantine/core/Col";

export { Col, isValidSpan };
//# sourceMappingURL=Col.js.map
