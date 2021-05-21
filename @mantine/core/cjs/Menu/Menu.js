'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var ActionIcon = require('../ActionIcon/ActionIcon.js');
var MenuIcon = require('./MenuIcon.js');
var MenuBody = require('./MenuBody/MenuBody.js');
var MenuBody_styles = require('./MenuBody/MenuBody.styles.js');
var MenuItem = require('./MenuItem/MenuItem.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const MENU_SIZES = MenuBody_styles.sizes;
const defaultControl = /* @__PURE__ */ React__default.createElement(ActionIcon.ActionIcon, null, /* @__PURE__ */ React__default.createElement(MenuIcon.MenuIcon, null));
function Menu(_a) {
  var _b = _a, {
    control = defaultControl,
    children,
    onClose,
    onOpen,
    opened,
    themeOverride,
    menuPosition = {top: 0, left: 0},
    style,
    menuId,
    menuBodyProps = {},
    closeOnItemClick = true,
    transitionDuration = 250,
    size = "md",
    shadow = "md",
    transition = "skew-up",
    transitionTimingFunction,
    menuButtonLabel,
    controlRefProp = "elementRef",
    zIndex = 1e3,
    elementRef
  } = _b, others = __objRest(_b, [
    "control",
    "children",
    "onClose",
    "onOpen",
    "opened",
    "themeOverride",
    "menuPosition",
    "style",
    "menuId",
    "menuBodyProps",
    "closeOnItemClick",
    "transitionDuration",
    "size",
    "shadow",
    "transition",
    "transitionTimingFunction",
    "menuButtonLabel",
    "controlRefProp",
    "zIndex",
    "elementRef"
  ]);
  const controlRefFocusTimeout = React.useRef();
  const controlRef = React.useRef(null);
  const uuid = hooks.useId(menuId);
  const controlled = typeof opened === "boolean";
  const [_opened, setOpened] = React.useState(false);
  const menuOpened = controlled ? opened : _opened;
  const handleClose = () => {
    setOpened(false);
    typeof onClose === "function" && onClose();
    controlRefFocusTimeout.current = window.setTimeout(() => {
      var _a2;
      typeof ((_a2 = controlRef.current) == null ? void 0 : _a2.focus) === "function" && controlRef.current.focus();
    }, transitionDuration + 10);
  };
  const handleOpen = () => {
    setOpened(true);
    window.clearTimeout(controlRefFocusTimeout.current);
    typeof onOpen === "function" && onOpen();
  };
  const wrapperRef = hooks.useClickOutside(() => menuOpened && handleClose());
  const toggleMenu = () => opened || _opened ? handleClose() : handleOpen();
  const menuControl = React.cloneElement(control, {
    onClick: toggleMenu,
    role: "button",
    "aria-haspopup": "menu",
    "aria-expanded": menuOpened,
    "aria-controls": uuid,
    "aria-label": menuButtonLabel,
    "data-mantine-menu": true,
    title: menuButtonLabel,
    [controlRefProp]: hooks.useMergedRef(controlRef, elementRef)
  });
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    ref: wrapperRef,
    style: __spreadValues({display: "inline-block", position: "relative"}, style)
  }, others), menuControl, /* @__PURE__ */ React__default.createElement(MenuBody.MenuBody, __spreadProps(__spreadValues({}, menuBodyProps), {
    opened: menuOpened,
    onClose: handleClose,
    id: uuid,
    themeOverride,
    closeOnClickOutside: false,
    closeOnItemClick,
    style: __spreadValues(__spreadValues({}, menuBodyProps.style), menuPosition),
    transitionDuration,
    transition,
    transitionTimingFunction,
    size,
    shadow,
    zIndex
  }), children));
}
Menu.displayName = "@mantine/core/Menu";

exports.MenuBody = MenuBody.MenuBody;
exports.MenuItem = MenuItem.MenuItem;
exports.MENU_SIZES = MENU_SIZES;
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map
