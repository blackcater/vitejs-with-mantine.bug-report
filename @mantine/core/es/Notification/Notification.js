import React from 'react';
import cx from 'clsx';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { Paper } from '../Paper/Paper.js';
import { Text } from '../Text/Text.js';
import { Loader } from '../Loader/Loader.js';
import { ActionIcon } from '../ActionIcon/ActionIcon.js';
import { CloseIcon } from '../Modal/CloseIcon.js';
import useStyles from './Notification.styles.js';

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
  const classes = useStyles({color, disallowClose, theme: useMantineTheme(themeOverride)});
  return /* @__PURE__ */ React.createElement(Paper, __spreadValues({
    shadow: "lg",
    padding: "sm",
    className: cx(classes.notification, {[classes.withIcon]: icon || loading}, className),
    role: "alert",
    themeOverride
  }, others), icon && !loading && /* @__PURE__ */ React.createElement("div", {
    "data-mantine-icon": true,
    className: classes.icon
  }, icon), loading && /* @__PURE__ */ React.createElement(Loader, {
    size: 28,
    color,
    className: classes.loader
  }), /* @__PURE__ */ React.createElement("div", {
    className: classes.body
  }, title && /* @__PURE__ */ React.createElement(Text, {
    "data-mantine-title": true,
    className: classes.title,
    size: "sm",
    weight: 500,
    themeOverride
  }, title), /* @__PURE__ */ React.createElement(Text, {
    "data-mantine-body": true,
    className: classes.description,
    size: "sm",
    themeOverride
  }, children)), !disallowClose && /* @__PURE__ */ React.createElement(ActionIcon, __spreadProps(__spreadValues({}, closeButtonProps), {
    color: "gray",
    onClick: onClose,
    themeOverride
  }), /* @__PURE__ */ React.createElement(CloseIcon, null)));
}
Notification.displayName = "@mantine/core/Notification";

export { Notification };
//# sourceMappingURL=Notification.js.map
