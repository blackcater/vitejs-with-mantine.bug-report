import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { useClickOutside, useFocusTrap, useReducedMotion, useId } from '@mantine/hooks';
import { Transition } from '../Transition/Transition.js';
import { Text } from '../Text/Text.js';
import { ActionIcon } from '../ActionIcon/ActionIcon.js';
import { CloseIcon } from '../Modal/CloseIcon.js';
import useStyles from './Popover.styles.js';

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
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({theme, gutter, arrowSize, radius, spacing, shadow});
  const handleClose = () => typeof onClose === "function" && onClose();
  const useClickOutsideRef = useClickOutside(() => !noClickOutside && handleClose());
  const focusTrapRef = useFocusTrap(!noFocusTrap);
  const reduceMotion = useReducedMotion();
  const handleKeydown = (event) => {
    if (!noEscape && event.nativeEvent.code === "Escape") {
      handleClose();
    }
  };
  const uuid = useId(id);
  const titleId = `${uuid}-title`;
  const bodyId = `${uuid}-body`;
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.wrapper, className),
    ref: useClickOutsideRef,
    id
  }, others), /* @__PURE__ */ React.createElement(Transition, {
    mounted: opened && !disabled,
    transition,
    duration: reduceMotion ? 0 : transitionDuration,
    timingFunction: transitionTimingFunction || theme.transitionTimingFunction
  }, (transitionStyles) => /* @__PURE__ */ React.createElement("div", {
    style: transitionStyles,
    role: "dialog",
    tabIndex: -1,
    "data-mantine-popover": true,
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    className: classes.popoverWrapper,
    ref: focusTrapRef,
    onKeyDownCapture: handleKeydown
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.popover, classes[position], classes[placement], bodyClassName),
    style: __spreadValues({zIndex}, bodyStyle)
  }, withArrow && /* @__PURE__ */ React.createElement("div", {
    "data-mantine-popover-arrow": true,
    className: classes.arrow
  }), /* @__PURE__ */ React.createElement("div", {
    className: classes.body
  }, !!title && /* @__PURE__ */ React.createElement("div", {
    className: classes.header,
    "data-mantine-popover-header": true
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    id: titleId,
    "data-mantine-popover-title": true
  }, title)), withCloseButton && /* @__PURE__ */ React.createElement(ActionIcon, {
    size: "sm",
    "data-mantine-popover-close": true,
    onClick: handleClose,
    "aria-label": closeButtonLabel,
    className: cx(classes.closeButton)
  }, /* @__PURE__ */ React.createElement(CloseIcon, {
    style: {width: 14, height: 14}
  })), /* @__PURE__ */ React.createElement("div", {
    className: classes.inner,
    id: bodyId,
    "data-mantine-popover-body": true
  }, children))))), /* @__PURE__ */ React.createElement("div", {
    "data-mantine-popover-target": true,
    className: classes.target
  }, target));
}
Popover.displayName = "@mantine/core/Popover";

export { Popover };
//# sourceMappingURL=Popover.js.map
