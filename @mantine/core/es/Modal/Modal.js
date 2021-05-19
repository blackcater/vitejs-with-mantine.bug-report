import React from 'react';
import cx from 'clsx';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { useId, useReducedMotion, useClickOutside, useFocusTrap, useScrollLock } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon.js';
import { Text } from '../Text/Text.js';
import { Paper } from '../Paper/Paper.js';
import { Overlay } from '../Overlay/Overlay.js';
import { CloseIcon } from './CloseIcon.js';
import useStyles, { sizes } from './Modal.styles.js';
import { GroupedTransition } from '../Transition/GroupedTransition.js';

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
const MODAL_SIZES = sizes;
function Modal(_a) {
  var _b = _a, {
    className,
    opened,
    themeOverride,
    title,
    onClose,
    children,
    hideCloseButton = false,
    overlayOpacity,
    size = "md",
    transitionDuration = 300,
    closeButtonLabel,
    overlayColor,
    zIndex = 1e3,
    overflow = "outside",
    transition = "slide-down",
    id
  } = _b, others = __objRest(_b, [
    "className",
    "opened",
    "themeOverride",
    "title",
    "onClose",
    "children",
    "hideCloseButton",
    "overlayOpacity",
    "size",
    "transitionDuration",
    "closeButtonLabel",
    "overlayColor",
    "zIndex",
    "overflow",
    "transition",
    "id"
  ]);
  const baseId = useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const reduceMotion = useReducedMotion();
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({size, overflow, theme});
  const clickOutsideRef = useClickOutside(onClose);
  const focusTrapRef = useFocusTrap();
  const duration = reduceMotion ? 1 : transitionDuration;
  const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme.colorScheme === "dark" ? 0.85 : 0.75;
  useScrollLock(opened);
  return /* @__PURE__ */ React.createElement(GroupedTransition, {
    mounted: opened,
    transitions: {
      modal: {duration, transition},
      overlay: {duration: duration / 2, transition: "fade", timingFunction: "ease"}
    }
  }, (styles) => /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.wrapper, className)
  }, others), /* @__PURE__ */ React.createElement("div", {
    "data-mantine-modal-inner": true,
    className: classes.inner,
    onKeyDownCapture: (event) => event.nativeEvent.code === "Escape" && onClose(),
    style: {zIndex: zIndex + 1},
    ref: focusTrapRef
  }, /* @__PURE__ */ React.createElement(Paper, {
    className: classes.modal,
    shadow: "lg",
    role: "dialog",
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    "aria-modal": true,
    style: styles.modal,
    elementRef: clickOutsideRef,
    tabIndex: -1
  }, (title || !hideCloseButton) && /* @__PURE__ */ React.createElement("div", {
    "data-mantine-modal-header": true,
    className: classes.header
  }, /* @__PURE__ */ React.createElement(Text, {
    id: titleId,
    "data-mantine-modal-title": true,
    className: classes.title
  }, title), !hideCloseButton && /* @__PURE__ */ React.createElement(ActionIcon, {
    onClick: onClose,
    "aria-label": closeButtonLabel
  }, /* @__PURE__ */ React.createElement(CloseIcon, null))), /* @__PURE__ */ React.createElement("div", {
    id: bodyId,
    className: classes.body
  }, children))), /* @__PURE__ */ React.createElement("div", {
    style: styles.overlay
  }, /* @__PURE__ */ React.createElement(Overlay, {
    color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.black),
    opacity: _overlayOpacity,
    zIndex
  }))));
}
Modal.displayName = "@mantine/core/Modal";

export { MODAL_SIZES, Modal };
//# sourceMappingURL=Modal.js.map
