'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var hooks = require('@mantine/hooks');
var Overlay = require('../Overlay/Overlay.js');
var Transition = require('../Transition/Transition.js');
var Loader = require('../Loader/Loader.js');
var LoadingOverlay_styles = require('./LoadingOverlay.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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
    style
  } = _b, others = __objRest(_b, [
    "className",
    "visible",
    "loaderProps",
    "overlayOpacity",
    "overlayColor",
    "themeOverride",
    "transitionDuration",
    "zIndex",
    "style"
  ]);
  const theme$1 = theme.useMantineTheme(themeOverride);
  const classes = LoadingOverlay_styles['default']();
  const reduceMotion = hooks.useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  return /* @__PURE__ */ React__default['default'].createElement(Transition.Transition, {
    duration,
    mounted: visible,
    transition: "fade",
    themeOverride
  }, (transitionStyles) => /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues({
    className: cx__default['default'](classes.loadingOverlay, className),
    style: __spreadProps(__spreadValues(__spreadValues({}, transitionStyles), style), {zIndex})
  }, others), /* @__PURE__ */ React__default['default'].createElement(Loader.Loader, __spreadValues({
    themeOverride,
    style: {zIndex: zIndex + 1}
  }, loaderProps)), /* @__PURE__ */ React__default['default'].createElement(Overlay.Overlay, {
    opacity: overlayOpacity,
    color: overlayColor || (theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.white),
    zIndex
  })));
}
LoadingOverlay.displayName = "@mantine/core/LoadingOverlay";

exports.LoadingOverlay = LoadingOverlay;
//# sourceMappingURL=LoadingOverlay.js.map
