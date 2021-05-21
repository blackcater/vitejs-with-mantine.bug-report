'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var ImageIcon = require('./ImageIcon.js');
var Image_styles = require('./Image.styles.js');

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
function Image(_a) {
  var _b = _a, {
    className,
    themeOverride,
    alt,
    src,
    fit = "cover",
    width = "100%",
    height = "auto",
    radius = 0,
    style,
    imageProps,
    withPlaceholder = false,
    placeholder,
    imageRef,
    elementRef
  } = _b, others = __objRest(_b, [
    "className",
    "themeOverride",
    "alt",
    "src",
    "fit",
    "width",
    "height",
    "radius",
    "style",
    "imageProps",
    "withPlaceholder",
    "placeholder",
    "imageRef",
    "elementRef"
  ]);
  const classes = Image_styles['default']({radius, theme: theme.useMantineTheme(themeOverride)});
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(!src);
  const isPlaceholder = withPlaceholder && (!loaded || error);
  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      setLoaded(false);
      setError(false);
    }
  }, [src]);
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    "data-mantine-image": true,
    className: cx__default(classes.wrapper, className),
    style: __spreadValues({width, height}, style),
    ref: elementRef
  }, others), isPlaceholder && /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-image-placeholder": true,
    className: classes.placeholderIcon,
    title: alt
  }, placeholder || /* @__PURE__ */ React__default.createElement(ImageIcon.ImageIcon, {
    style: {width: 40, height: 40}
  })), /* @__PURE__ */ React__default.createElement("img", __spreadValues({
    className: cx__default(classes.image, imageProps == null ? void 0 : imageProps.className),
    src,
    alt,
    style: __spreadProps(__spreadValues({}, imageProps == null ? void 0 : imageProps.style), {objectFit: fit}),
    ref: imageRef,
    onLoad: (event) => {
      setLoaded(true);
      typeof (imageProps == null ? void 0 : imageProps.onLoad) === "function" && imageProps.onLoad(event);
    },
    onError: (event) => {
      setError(true);
      typeof (imageProps == null ? void 0 : imageProps.onError) === "function" && imageProps.onError(event);
    }
  }, imageProps)));
}
Image.displayName = "@mantine/core/Image";

exports.Image = Image;
//# sourceMappingURL=Image.js.map
