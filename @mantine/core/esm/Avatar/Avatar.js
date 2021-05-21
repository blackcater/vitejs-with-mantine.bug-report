import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { PlaceholderIcon } from './PlaceholderIcon.js';
import useStyles, { sizes } from './Avatar.styles.js';

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
const AVATAR_SIZES = sizes;
function Avatar(_a) {
  var _b = _a, {
    className,
    size = "md",
    src,
    alt,
    radius = "sm",
    children,
    color = "gray",
    themeOverride
  } = _b, others = __objRest(_b, [
    "className",
    "size",
    "src",
    "alt",
    "radius",
    "children",
    "color",
    "themeOverride"
  ]);
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({color, radius, size, theme});
  const [error, setError] = useState(!src);
  useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);
  return /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, others), {
    className: cx(classes.avatar, className)
  }), error ? /* @__PURE__ */ React.createElement("div", {
    "data-mantine-placeholder": true,
    className: classes.placeholder,
    title: alt
  }, children || /* @__PURE__ */ React.createElement(PlaceholderIcon, {
    className: classes.placeholderIcon
  })) : /* @__PURE__ */ React.createElement("img", {
    className: classes.image,
    src,
    alt,
    onError: () => setError(true)
  }));
}
Avatar.displayName = "@mantine/core/Avatar";

export { AVATAR_SIZES, Avatar };
//# sourceMappingURL=Avatar.js.map
