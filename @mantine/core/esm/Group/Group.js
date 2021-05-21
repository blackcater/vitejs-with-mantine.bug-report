import React, { Children } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './Group.styles.js';

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
function Group(_a) {
  var _b = _a, {
    className,
    position = "left",
    children,
    noWrap = false,
    grow = false,
    spacing = "md",
    direction = "row",
    themeOverride
  } = _b, others = __objRest(_b, [
    "className",
    "position",
    "children",
    "noWrap",
    "grow",
    "spacing",
    "direction",
    "themeOverride"
  ]);
  const classes = useStyles({
    theme: useMantineTheme(themeOverride),
    grow,
    noWrap,
    spacing,
    position,
    direction
  });
  const items = Children.toArray(children).map((child) => React.cloneElement(child, {className: cx(classes.child, child.props.className)}));
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className
  }, others), /* @__PURE__ */ React.createElement("div", {
    className: classes.group
  }, items));
}
Group.displayName = "@mantine/core/Group";

export { Group };
//# sourceMappingURL=Group.js.map
