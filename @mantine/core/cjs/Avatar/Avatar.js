'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var PlaceholderIcon = require('./PlaceholderIcon.js');
var Avatar_styles = require('./Avatar.styles.js');

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
const AVATAR_SIZES = Avatar_styles.sizes;
function Avatar(_a) {
  var _b = _a, {
    className,
    size = "md",
    src,
    alt,
    radius = "sm",
    children,
    color = "gray",
    themeOverride
  } = _b, others = __objRest(_b, [
    "className",
    "size",
    "src",
    "alt",
    "radius",
    "children",
    "color",
    "themeOverride"
  ]);
  const theme$1 = theme.useMantineTheme(themeOverride);
  const classes = Avatar_styles['default']({color, radius, size, theme: theme$1});
  const [error, setError] = React.useState(!src);
  React.useEffect(() => {
    !src ? setError(true) : setError(false);
  }, [src]);
  return /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, others), {
    className: cx__default(classes.avatar, className)
  }), error ? /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-placeholder": true,
    className: classes.placeholder,
    title: alt
  }, children || /* @__PURE__ */ React__default.createElement(PlaceholderIcon.PlaceholderIcon, {
    className: classes.placeholderIcon
  })) : /* @__PURE__ */ React__default.createElement("img", {
    className: classes.image,
    src,
    alt,
    onError: () => setError(true)
  }));
}
Avatar.displayName = "@mantine/core/Avatar";

exports.AVATAR_SIZES = AVATAR_SIZES;
exports.Avatar = Avatar;
//# sourceMappingURL=Avatar.js.map
