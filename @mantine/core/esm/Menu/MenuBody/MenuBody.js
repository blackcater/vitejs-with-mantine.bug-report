import React, { useRef, useState, useEffect } from 'react';
import cx from 'clsx';
import { useReducedMotion, useFocusTrap, useClickOutside } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { Transition } from '../../Transition/Transition.js';
import { Paper } from '../../Paper/Paper.js';
import { Hr } from '../../Hr/Hr.js';
import { MenuItem } from '../MenuItem/MenuItem.js';
import { MenuButton } from '../MenuButton/MenuButton.js';
import useStyles from './MenuBody.styles.js';

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
function getPreviousItem(active, items) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }
  return active;
}
function getNextItem(active, items) {
  for (let i = active + 1; i < items.length; i += 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }
  return active;
}
function findInitialItem(items) {
  for (let i = 0; i < items.length; i += 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }
  return -1;
}
function MenuBody(_a) {
  var _b = _a, {
    className,
    themeOverride,
    opened,
    onClose,
    transition = "skew-up",
    transitionDuration = 250,
    transitionTimingFunction,
    style,
    children,
    size = "md",
    shadow = "md",
    closeOnClickOutside = true,
    closeOnItemClick = true,
    zIndex = 1e3
  } = _b, others = __objRest(_b, [
    "className",
    "themeOverride",
    "opened",
    "onClose",
    "transition",
    "transitionDuration",
    "transitionTimingFunction",
    "style",
    "children",
    "size",
    "shadow",
    "closeOnClickOutside",
    "closeOnItemClick",
    "zIndex"
  ]);
  const items = React.Children.toArray(children).filter((item) => item.type === MenuItem || item.type === Hr);
  const hoveredTimeout = useRef();
  const buttonsRefs = useRef({});
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({size, theme});
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const [hovered, setHovered] = useState(findInitialItem(items));
  const focusTrapRef = useFocusTrap();
  useEffect(() => {
    if (!opened) {
      hoveredTimeout.current = window.setTimeout(() => {
        setHovered(findInitialItem(items));
      }, duration);
    } else {
      window.clearTimeout(hoveredTimeout.current);
    }
  }, [opened]);
  const menuRef = useClickOutside(() => closeOnClickOutside && onClose());
  const handleKeyDown = (event) => {
    const {code} = event.nativeEvent;
    if (code === "Escape") {
      onClose();
    }
    if (code === "Tab") {
      event.preventDefault();
    }
    if (code === "ArrowUp") {
      event.preventDefault();
      const prevIndex = getPreviousItem(hovered, items);
      setHovered(prevIndex);
      buttonsRefs.current[prevIndex].focus();
    }
    if (code === "ArrowDown") {
      event.preventDefault();
      const nextIndex = getNextItem(hovered, items);
      setHovered(nextIndex);
      buttonsRefs.current[nextIndex].focus();
    }
  };
  if (items.length === 0) {
    return null;
  }
  const buttons = items.map((item, index) => {
    if (item.type === MenuItem) {
      return /* @__PURE__ */ React.createElement(MenuButton, __spreadProps(__spreadValues({}, item.props), {
        key: index,
        hovered: hovered === index,
        onHover: () => setHovered(-1),
        onClick: (event) => {
          if (closeOnItemClick) {
            onClose();
          }
          if (typeof item.props.onClick === "function") {
            item.props.onClick(event);
          }
        },
        elementRef: (node) => {
          buttonsRefs.current[index] = node;
        }
      }));
    }
    if (item.type === Hr) {
      return /* @__PURE__ */ React.createElement(Hr, {
        key: index,
        variant: "solid",
        className: classes.hr
      });
    }
    return null;
  });
  return /* @__PURE__ */ React.createElement(Transition, {
    mounted: opened,
    duration,
    transition,
    timingFunction: transitionTimingFunction,
    themeOverride
  }, (transitionStyles) => /* @__PURE__ */ React.createElement(Paper, __spreadValues({
    shadow,
    className: cx(classes.menu, className),
    style: __spreadProps(__spreadValues(__spreadValues({}, style), transitionStyles), {zIndex}),
    onKeyDownCapture: handleKeyDown,
    elementRef: menuRef,
    role: "menu",
    "aria-orientation": "vertical"
  }, others), /* @__PURE__ */ React.createElement("div", {
    ref: focusTrapRef
  }, buttons)));
}
MenuBody.displayName = "@mantine/core/MenuBody";

export { MenuBody };
//# sourceMappingURL=MenuBody.js.map
