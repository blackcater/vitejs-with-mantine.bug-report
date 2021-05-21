import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { Overlay } from '../Overlay/Overlay.js';
import { Transition } from '../Transition/Transition.js';
import { Loader } from '../Loader/Loader.js';
import useStyles from './LoadingOverlay.styles.js';

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
function LoadingOverlay(_a) {
  var _b = _a, {
    className,
    visible,
    loaderProps = {},
    overlayOpacity = 0.75,
    overlayColor,
    themeOverride,
    transitionDuration = 200,
    zIndex = 1e3,
    style,
    loader
  } = _b, others = __objRest(_b, [
    "className",
    "visible",
    "loaderProps",
    "overlayOpacity",
    "overlayColor",
    "themeOverride",
    "transitionDuration",
    "zIndex",
    "style",
    "loader"
  ]);
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles();
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  return /* @__PURE__ */ React.createElement(Transition, {
    duration,
    mounted: visible,
    transition: "fade",
    themeOverride
  }, (transitionStyles) => /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.loadingOverlay, className),
    style: __spreadProps(__spreadValues(__spreadValues({}, transitionStyles), style), {zIndex})
  }, others), loader ? /* @__PURE__ */ React.createElement("div", {
    style: {zIndex: zIndex + 1}
  }, loader) : /* @__PURE__ */ React.createElement(Loader, __spreadValues({
    themeOverride,
    style: {zIndex: zIndex + 1}
  }, loaderProps)), /* @__PURE__ */ React.createElement(Overlay, {
    opacity: overlayOpacity,
    zIndex,
    color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white)
  })));
}
LoadingOverlay.displayName = "@mantine/core/LoadingOverlay";

export { LoadingOverlay };
//# sourceMappingURL=LoadingOverlay.js.map
