'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var theme = require('@mantine/theme');
var hooks = require('@mantine/hooks');
var Button = require('../Button/Button.js');
var Spoiler_styles = require('./Spoiler.styles.js');

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
function Spoiler(_a) {
  var _b = _a, {
    className,
    children,
    maxHeight = 100,
    hideLabel,
    showLabel,
    themeOverride,
    transitionDuration = 200,
    controlRef
  } = _b, others = __objRest(_b, [
    "className",
    "children",
    "maxHeight",
    "hideLabel",
    "showLabel",
    "themeOverride",
    "transitionDuration",
    "controlRef"
  ]);
  const classes = Spoiler_styles['default']({
    transitionDuration: !hooks.useReducedMotion() && transitionDuration,
    theme: theme.useMantineTheme(themeOverride)
  });
  const [show, setShowState] = React.useState(false);
  const [spoiler, setSpoilerState] = React.useState(false);
  const contentRef = React.useRef(null);
  const spoilerMoreContent = show ? hideLabel : showLabel;
  React.useEffect(() => {
    setSpoilerState(maxHeight < contentRef.current.clientHeight);
  }, [maxHeight, children]);
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: cx__default(classes.spoiler, className)
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.content,
    style: {
      maxHeight: !show ? maxHeight : contentRef.current && contentRef.current.clientHeight
    }
  }, /* @__PURE__ */ React__default.createElement("div", {
    ref: contentRef
  }, children)), spoiler && /* @__PURE__ */ React__default.createElement(Button.Button, {
    variant: "link",
    elementRef: controlRef,
    onClick: () => setShowState((opened) => !opened),
    themeOverride
  }, spoilerMoreContent));
}
Spoiler.displayName = "@mantine/core/Spoiler";

exports.Spoiler = Spoiler;
//# sourceMappingURL=Spoiler.js.map
