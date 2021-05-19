import React, { useEffect } from 'react';
import cx from 'clsx';
import { useReducedMotion, useFocusTrap, useScrollLock, useClickOutside, useMergedRef } from '@mantine/hooks';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { Paper } from '../Paper/Paper.js';
import { Overlay } from '../Overlay/Overlay.js';
import useStyles, { sizes } from './Drawer.styles.js';
import { GroupedTransition } from '../Transition/GroupedTransition.js';

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
const DRAWER_SIZES = sizes;
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
  const theme = useMantineTheme(themeOverride);
  const duration = useReducedMotion() ? 1 : transitionDuration;
  const classes = useStyles({theme, size, position});
  const focusTrapRef = useFocusTrap(!noFocusTrap);
  useScrollLock(opened && !noScrollLock);
  const clickOutsideRef = useClickOutside(() => opened && !noCloseOnClickOutside && onClose());
  const drawerTransition = transition || transitions[position];
  const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme.colorScheme === "dark" ? 0.85 : 0.75;
  const closeOnEscape = (event) => {
    if (noFocusTrap && event.code === "Escape" && !noCloseOnEscape) {
      onClose();
    }
  };
  useEffect(() => {
    if (noFocusTrap) {
      window.addEventListener("keydown", closeOnEscape);
      return () => window.removeEventListener("keydown", closeOnEscape);
    }
  }, [noFocusTrap]);
  return /* @__PURE__ */ React.createElement(GroupedTransition, {
    mounted: opened,
    transitions: {
      overlay: {duration: duration / 2, transition: "fade", timingFunction: "ease"},
      drawer: {
        duration,
        transition: drawerTransition,
        timingFunction: transitionTimingFunction
      }
    }
  }, (styles) => /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.wrapper, {[classes.noOverlay]: noOverlay}, className),
    role: "dialog",
    "aria-modal": true
  }, others), /* @__PURE__ */ React.createElement(Paper, {
    className: cx(classes.drawer, className),
    elementRef: useMergedRef(focusTrapRef, clickOutsideRef),
    style: __spreadProps(__spreadValues({}, styles.drawer), {zIndex: zIndex + 1}),
    radius: 0,
    tabIndex: -1,
    onKeyDownCapture: (event) => event.nativeEvent.code === "Escape" && !noCloseOnEscape && onClose(),
    shadow,
    padding,
    themeOverride
  }, children), !noOverlay && /* @__PURE__ */ React.createElement("div", {
    style: styles.overlay
  }, /* @__PURE__ */ React.createElement(Overlay, {
    opacity: _overlayOpacity,
    zIndex,
    color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.black)
  }))));
}
Drawer.displayName = "@mantine/core/Drawer";

export { DRAWER_SIZES, Drawer };
//# sourceMappingURL=Drawer.js.map
