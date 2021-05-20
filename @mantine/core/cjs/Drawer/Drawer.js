'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var Paper = require('../Paper/Paper.js');
var Overlay = require('../Overlay/Overlay.js');
var Drawer_styles = require('./Drawer.styles.js');
var GroupedTransition = require('../Transition/GroupedTransition.js');

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
const DRAWER_SIZES = Drawer_styles.sizes;
const transitions = {
  top: "slide-down",
  bottom: "slide-up",
  left: "slide-right",
  right: "slide-left"
};
function Drawer(_a) {
  var _b = _a, {
    opened,
    onClose,
    className,
    themeOverride,
    position = "left",
    size = "md",
    noFocusTrap = false,
    noScrollLock = false,
    noCloseOnClickOutside = false,
    noCloseOnEscape = false,
    transition,
    transitionDuration = 250,
    transitionTimingFunction = "ease",
    zIndex = 1e3,
    overlayColor,
    overlayOpacity,
    children,
    noOverlay = false,
    shadow = "md",
    padding = 0
  } = _b, others = __objRest(_b, [
    "opened",
    "onClose",
    "className",
    "themeOverride",
    "position",
    "size",
    "noFocusTrap",
    "noScrollLock",
    "noCloseOnClickOutside",
    "noCloseOnEscape",
    "transition",
    "transitionDuration",
    "transitionTimingFunction",
    "zIndex",
    "overlayColor",
    "overlayOpacity",
    "children",
    "noOverlay",
    "shadow",
    "padding"
  ]);
  const theme$1 = theme.useMantineTheme(themeOverride);
  const duration = hooks.useReducedMotion() ? 1 : transitionDuration;
  const classes = Drawer_styles['default']({theme: theme$1, size, position});
  const focusTrapRef = hooks.useFocusTrap(!noFocusTrap);
  hooks.useScrollLock(opened && !noScrollLock);
  const clickOutsideRef = hooks.useClickOutside(() => opened && !noCloseOnClickOutside && onClose());
  const drawerTransition = transition || transitions[position];
  const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme$1.colorScheme === "dark" ? 0.85 : 0.75;
  const closeOnEscape = (event) => {
    if (noFocusTrap && event.code === "Escape" && !noCloseOnEscape) {
      onClose();
    }
  };
  React.useEffect(() => {
    if (noFocusTrap) {
      window.addEventListener("keydown", closeOnEscape);
      return () => window.removeEventListener("keydown", closeOnEscape);
    }
  }, [noFocusTrap]);
  return /* @__PURE__ */ React__default['default'].createElement(GroupedTransition.GroupedTransition, {
    mounted: opened,
    transitions: {
      overlay: {duration: duration / 2, transition: "fade", timingFunction: "ease"},
      drawer: {
        duration,
        transition: drawerTransition,
        timingFunction: transitionTimingFunction
      }
    }
  }, (styles) => /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues({
    className: cx__default['default'](classes.wrapper, {[classes.noOverlay]: noOverlay}, className),
    role: "dialog",
    "aria-modal": true
  }, others), /* @__PURE__ */ React__default['default'].createElement(Paper.Paper, {
    className: cx__default['default'](classes.drawer, className),
    elementRef: hooks.useMergedRef(focusTrapRef, clickOutsideRef),
    style: __spreadProps(__spreadValues({}, styles.drawer), {zIndex: zIndex + 1}),
    radius: 0,
    tabIndex: -1,
    onKeyDownCapture: (event) => event.nativeEvent.code === "Escape" && !noCloseOnEscape && onClose(),
    shadow,
    padding,
    themeOverride
  }, children), !noOverlay && /* @__PURE__ */ React__default['default'].createElement("div", {
    style: styles.overlay
  }, /* @__PURE__ */ React__default['default'].createElement(Overlay.Overlay, {
    opacity: _overlayOpacity,
    zIndex,
    color: overlayColor || (theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.black)
  }))));
}
Drawer.displayName = "@mantine/core/Drawer";

exports.DRAWER_SIZES = DRAWER_SIZES;
exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.js.map
