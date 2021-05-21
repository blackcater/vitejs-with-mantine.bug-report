'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var SegmentedControl_styles = require('./SegmentedControl.styles.js');

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
function SegmentedControl(_a) {
  var _b = _a, {
    className,
    themeOverride,
    data,
    name,
    value,
    onChange,
    color,
    fullWidth,
    radius = "sm",
    size = "sm",
    transitionDuration = 200,
    transitionTimingFunction
  } = _b, others = __objRest(_b, [
    "className",
    "themeOverride",
    "data",
    "name",
    "value",
    "onChange",
    "color",
    "fullWidth",
    "radius",
    "size",
    "transitionDuration",
    "transitionTimingFunction"
  ]);
  const reduceMotion = hooks.useReducedMotion();
  const theme$1 = theme.useMantineTheme(themeOverride);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  const classes = SegmentedControl_styles['default']({
    theme: theme$1,
    size,
    fullWidth,
    color,
    radius,
    reduceMotion: reduceMotion || !shouldAnimate,
    transitionDuration,
    transitionTimingFunction
  });
  const [activePosition, setActivePosition] = React.useState({width: 0, translate: 0});
  const uuid = hooks.useId(name);
  const refs = React.useRef({});
  const wrapperRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (value in refs.current && wrapperRef.current) {
        const element = refs.current[value];
        const rect = element.getBoundingClientRect();
        setActivePosition({
          width: rect.width,
          translate: rect.x - wrapperRef.current.getBoundingClientRect().x - SegmentedControl_styles.WRAPPER_PADDING
        });
        if (!shouldAnimate) {
          setTimeout(() => {
            setShouldAnimate(true);
          }, 4);
        }
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [value]);
  const controls = data.map((item) => /* @__PURE__ */ React__default.createElement("div", {
    className: cx__default(classes.control, {[classes.controlActive]: value === item.value}),
    key: item.value
  }, /* @__PURE__ */ React__default.createElement("input", {
    "data-mantine-radio": true,
    className: classes.input,
    type: "radio",
    name: uuid,
    value: item.value,
    id: `${uuid}-${item.value}`,
    checked: value === item.value,
    onChange: () => onChange(item.value)
  }), /* @__PURE__ */ React__default.createElement("label", {
    "data-mantine-label": true,
    className: cx__default(classes.label, {[classes.labelActive]: value === item.value}),
    htmlFor: `${uuid}-${item.value}`,
    ref: (node) => {
      refs.current[item.value] = node;
    }
  }, item.label)));
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    className: cx__default(classes.wrapper, className),
    ref: wrapperRef
  }, others), !!value && /* @__PURE__ */ React__default.createElement("span", {
    "data-mantine-active": true,
    className: classes.active,
    style: {
      width: activePosition.width,
      transform: `translateX(${activePosition.translate}px)`
    }
  }), controls);
}
SegmentedControl.displayName = "@mantine/core/SegmentedControl";

exports.SegmentedControl = SegmentedControl;
//# sourceMappingURL=SegmentedControl.js.map
