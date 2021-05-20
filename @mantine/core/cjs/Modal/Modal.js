'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var hooks = require('@mantine/hooks');
var ActionIcon = require('../ActionIcon/ActionIcon.js');
var Text = require('../Text/Text.js');
var Paper = require('../Paper/Paper.js');
var Overlay = require('../Overlay/Overlay.js');
var CloseIcon = require('./CloseIcon.js');
var Modal_styles = require('./Modal.styles.js');
var GroupedTransition = require('../Transition/GroupedTransition.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
const MODAL_SIZES = Modal_styles.sizes;
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
  const baseId = hooks.useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const reduceMotion = hooks.useReducedMotion();
  const theme$1 = theme.useMantineTheme(themeOverride);
  const classes = Modal_styles['default']({size, overflow, theme: theme$1});
  const clickOutsideRef = hooks.useClickOutside(onClose);
  const focusTrapRef = hooks.useFocusTrap();
  const duration = reduceMotion ? 1 : transitionDuration;
  const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme$1.colorScheme === "dark" ? 0.85 : 0.75;
  hooks.useScrollLock(opened);
  return /* @__PURE__ */ React__default['default'].createElement(GroupedTransition.GroupedTransition, {
    mounted: opened,
    transitions: {
      modal: {duration, transition},
      overlay: {duration: duration / 2, transition: "fade", timingFunction: "ease"}
    }
  }, (styles) => /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues({
    className: cx__default['default'](classes.wrapper, className)
  }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
    "data-mantine-modal-inner": true,
    className: classes.inner,
    onKeyDownCapture: (event) => event.nativeEvent.code === "Escape" && onClose(),
    style: {zIndex: zIndex + 1},
    ref: focusTrapRef
  }, /* @__PURE__ */ React__default['default'].createElement(Paper.Paper, {
    className: classes.modal,
    shadow: "lg",
    role: "dialog",
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    "aria-modal": true,
    style: styles.modal,
    elementRef: clickOutsideRef,
    tabIndex: -1
  }, (title || !hideCloseButton) && /* @__PURE__ */ React__default['default'].createElement("div", {
    "data-mantine-modal-header": true,
    className: classes.header
  }, /* @__PURE__ */ React__default['default'].createElement(Text.Text, {
    id: titleId,
    "data-mantine-modal-title": true,
    className: classes.title
  }, title), !hideCloseButton && /* @__PURE__ */ React__default['default'].createElement(ActionIcon.ActionIcon, {
    onClick: onClose,
    "aria-label": closeButtonLabel
  }, /* @__PURE__ */ React__default['default'].createElement(CloseIcon.CloseIcon, null))), /* @__PURE__ */ React__default['default'].createElement("div", {
    id: bodyId,
    className: classes.body
  }, children))), /* @__PURE__ */ React__default['default'].createElement("div", {
    style: styles.overlay
  }, /* @__PURE__ */ React__default['default'].createElement(Overlay.Overlay, {
    color: overlayColor || (theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.black),
    opacity: _overlayOpacity,
    zIndex
  }))));
}
Modal.displayName = "@mantine/core/Modal";

exports.MODAL_SIZES = MODAL_SIZES;
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map
