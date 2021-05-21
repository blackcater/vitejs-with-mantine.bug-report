'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var hooks = require('@mantine/hooks');
var Transition = require('../Transition/Transition.js');
var Text = require('../Text/Text.js');
var ActionIcon = require('../ActionIcon/ActionIcon.js');
var CloseIcon = require('../Modal/CloseIcon.js');
var Popover_styles = require('./Popover.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

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
function Popover(_a) {
  var _b = _a, {
    className,
    themeOverride,
    children,
    target,
    title,
    onClose,
    opened,
    zIndex = 1e3,
    arrowSize = 4,
    withArrow = false,
    transition = "fade",
    transitionDuration = 200,
    transitionTimingFunction,
    gutter = 10,
    position = "left",
    placement = "center",
    disabled = false,
    noClickOutside = false,
    noFocusTrap = false,
    noEscape = false,
    withCloseButton = false,
    radius = "sm",
    spacing = "md",
    shadow = "sm",
    bodyStyle,
    bodyClassName,
    closeButtonLabel,
    id
  } = _b, others = __objRest(_b, [
    "className",
    "themeOverride",
    "children",
    "target",
    "title",
    "onClose",
    "opened",
    "zIndex",
    "arrowSize",
    "withArrow",
    "transition",
    "transitionDuration",
    "transitionTimingFunction",
    "gutter",
    "position",
    "placement",
    "disabled",
    "noClickOutside",
    "noFocusTrap",
    "noEscape",
    "withCloseButton",
    "radius",
    "spacing",
    "shadow",
    "bodyStyle",
    "bodyClassName",
    "closeButtonLabel",
    "id"
  ]);
  const theme$1 = theme.useMantineTheme(themeOverride);
  const classes = Popover_styles['default']({theme: theme$1, gutter, arrowSize, radius, spacing, shadow});
  const handleClose = () => typeof onClose === "function" && onClose();
  const useClickOutsideRef = hooks.useClickOutside(() => !noClickOutside && handleClose());
  const focusTrapRef = hooks.useFocusTrap(!noFocusTrap);
  const reduceMotion = hooks.useReducedMotion();
  const handleKeydown = (event) => {
    if (!noEscape && event.nativeEvent.code === "Escape") {
      handleClose();
    }
  };
  const uuid = hooks.useId(id);
  const titleId = `${uuid}-title`;
  const bodyId = `${uuid}-body`;
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: cx__default(classes.wrapper, className),
    ref: useClickOutsideRef,
    id
  }, others), /* @__PURE__ */ React__default.createElement(Transition.Transition, {
    mounted: opened && !disabled,
    transition,
    duration: reduceMotion ? 0 : transitionDuration,
    timingFunction: transitionTimingFunction || theme$1.transitionTimingFunction
  }, (transitionStyles) => /* @__PURE__ */ React__default.createElement("div", {
    style: transitionStyles,
    role: "dialog",
    tabIndex: -1,
    "data-mantine-popover": true,
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    className: classes.popoverWrapper,
    ref: focusTrapRef,
    onKeyDownCapture: handleKeydown
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx__default(classes.popover, classes[position], classes[placement], bodyClassName),
    style: __spreadValues({zIndex}, bodyStyle)
  }, withArrow && /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-popover-arrow": true,
    className: classes.arrow
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.body
  }, !!title && /* @__PURE__ */ React__default.createElement("div", {
    className: classes.header,
    "data-mantine-popover-header": true
  }, /* @__PURE__ */ React__default.createElement(Text.Text, {
    size: "sm",
    id: titleId,
    "data-mantine-popover-title": true
  }, title)), withCloseButton && /* @__PURE__ */ React__default.createElement(ActionIcon.ActionIcon, {
    size: "sm",
    "data-mantine-popover-close": true,
    onClick: handleClose,
    "aria-label": closeButtonLabel,
    className: cx__default(classes.closeButton)
  }, /* @__PURE__ */ React__default.createElement(CloseIcon.CloseIcon, {
    style: {width: 14, height: 14}
  })), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.inner,
    id: bodyId,
    "data-mantine-popover-body": true
  }, children))))), /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-popover-target": true,
    className: classes.target
  }, target));
}
Popover.displayName = "@mantine/core/Popover";

exports.Popover = Popover;
//# sourceMappingURL=Popover.js.map
