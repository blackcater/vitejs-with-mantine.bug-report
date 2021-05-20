'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var Transition = require('../../Transition/Transition.js');
var Paper = require('../../Paper/Paper.js');
var Hr = require('../../Hr/Hr.js');
var MenuItem = require('../MenuItem/MenuItem.js');
var MenuButton = require('../MenuButton/MenuButton.js');
var MenuBody_styles = require('./MenuBody.styles.js');

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
function getPreviousItem(active, items) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem.MenuItem) {
      return i;
    }
  }
  return active;
}
function getNextItem(active, items) {
  for (let i = active + 1; i < items.length; i += 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem.MenuItem) {
      return i;
    }
  }
  return active;
}
function findInitialItem(items) {
  for (let i = 0; i < items.length; i += 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem.MenuItem) {
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
  const items = React__default['default'].Children.toArray(children).filter((item) => item.type === MenuItem.MenuItem || item.type === Hr.Hr);
  const hoveredTimeout = React.useRef();
  const buttonsRefs = React.useRef({});
  const theme$1 = theme.useMantineTheme(themeOverride);
  const classes = MenuBody_styles['default']({size, theme: theme$1});
  const reduceMotion = hooks.useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const [hovered, setHovered] = React.useState(findInitialItem(items));
  const focusTrapRef = hooks.useFocusTrap();
  React.useEffect(() => {
    if (!opened) {
      hoveredTimeout.current = window.setTimeout(() => {
        setHovered(findInitialItem(items));
      }, duration);
    } else {
      window.clearTimeout(hoveredTimeout.current);
    }
  }, [opened]);
  const menuRef = hooks.useClickOutside(() => closeOnClickOutside && onClose());
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
    if (item.type === MenuItem.MenuItem) {
      return /* @__PURE__ */ React__default['default'].createElement(MenuButton.MenuButton, __spreadProps(__spreadValues({}, item.props), {
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
    if (item.type === Hr.Hr) {
      return /* @__PURE__ */ React__default['default'].createElement(Hr.Hr, {
        key: index,
        variant: "solid",
        className: classes.hr
      });
    }
    return null;
  });
  return /* @__PURE__ */ React__default['default'].createElement(Transition.Transition, {
    mounted: opened,
    duration,
    transition,
    timingFunction: transitionTimingFunction,
    themeOverride
  }, (transitionStyles) => /* @__PURE__ */ React__default['default'].createElement(Paper.Paper, __spreadValues({
    shadow,
    className: cx__default['default'](classes.menu, className),
    style: __spreadProps(__spreadValues(__spreadValues({}, style), transitionStyles), {zIndex}),
    onKeyDownCapture: handleKeyDown,
    elementRef: menuRef,
    role: "menu",
    "aria-orientation": "vertical"
  }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
    ref: focusTrapRef
  }, buttons)));
}
MenuBody.displayName = "@mantine/core/MenuBody";

exports.MenuBody = MenuBody;
//# sourceMappingURL=MenuBody.js.map
