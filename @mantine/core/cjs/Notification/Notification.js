'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var Paper = require('../Paper/Paper.js');
var Text = require('../Text/Text.js');
var Loader = require('../Loader/Loader.js');
var ActionIcon = require('../ActionIcon/ActionIcon.js');
var CloseIcon = require('../Modal/CloseIcon.js');
var Notification_styles = require('./Notification.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

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
function Notification(_a) {
  var _b = _a, {
    className,
    color = "blue",
    loading = false,
    disallowClose = false,
    title,
    icon,
    children,
    onClose,
    closeButtonProps,
    themeOverride
  } = _b, others = __objRest(_b, [
    "className",
    "color",
    "loading",
    "disallowClose",
    "title",
    "icon",
    "children",
    "onClose",
    "closeButtonProps",
    "themeOverride"
  ]);
  const classes = Notification_styles['default']({color, disallowClose, theme: theme.useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React__default.createElement(Paper.Paper, __spreadValues({
    shadow: "lg",
    padding: "sm",
    className: cx__default(classes.notification, {[classes.withIcon]: icon || loading}, className),
    role: "alert",
    themeOverride
  }, others), icon && !loading && /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-icon": true,
    className: classes.icon
  }, icon), loading && /* @__PURE__ */ React__default.createElement(Loader.Loader, {
    size: 28,
    color,
    className: classes.loader
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.body
  }, title && /* @__PURE__ */ React__default.createElement(Text.Text, {
    "data-mantine-title": true,
    className: classes.title,
    size: "sm",
    weight: 500,
    themeOverride
  }, title), /* @__PURE__ */ React__default.createElement(Text.Text, {
    "data-mantine-body": true,
    className: classes.description,
    size: "sm",
    themeOverride
  }, children)), !disallowClose && /* @__PURE__ */ React__default.createElement(ActionIcon.ActionIcon, __spreadProps(__spreadValues({}, closeButtonProps), {
    color: "gray",
    onClick: onClose,
    themeOverride
  }), /* @__PURE__ */ React__default.createElement(CloseIcon.CloseIcon, null)));
}
Notification.displayName = "@mantine/core/Notification";

exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map
