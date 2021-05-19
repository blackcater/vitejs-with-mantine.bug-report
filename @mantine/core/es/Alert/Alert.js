import React from 'react';
import cx from 'clsx';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { Text } from '../Text/Text.js';
import { Paper } from '../Paper/Paper.js';
import useStyles from './Alert.styles.js';

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
function Alert(_a) {
  var _b = _a, {
    className,
    title,
    children,
    themeOverride,
    color,
    shadow = "sm"
  } = _b, others = __objRest(_b, [
    "className",
    "title",
    "children",
    "themeOverride",
    "color",
    "shadow"
  ]);
  const classes = useStyles({color, theme: useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React.createElement(Paper, __spreadValues({
    shadow,
    className: cx(classes.alert, className),
    themeOverride
  }, others), title && /* @__PURE__ */ React.createElement(Text, {
    themeOverride,
    "data-mantine-alert-title": true,
    weight: 700,
    className: classes.title
  }, title), /* @__PURE__ */ React.createElement("div", {
    "data-mantine-alert-body": true,
    className: classes.body
  }, children));
}
Alert.displayName = "@mantine/core/Alert";

export { Alert };
//# sourceMappingURL=Alert.js.map
