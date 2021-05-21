'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var theme = require('@mantine/theme');
var InputWrapper = require('../InputWrapper/InputWrapper.js');
var Radio = require('./Radio/Radio.js');
var Radio_styles = require('./Radio/Radio.styles.js');
var RadioGroup_styles = require('./RadioGroup.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const RADIO_SIZES = Radio_styles.sizes;
function RadioGroup(_a) {
  var _b = _a, {
    className,
    themeOverride,
    name,
    children,
    value,
    defaultValue,
    onChange,
    variant = "horizontal",
    spacing = "md",
    color,
    size
  } = _b, others = __objRest(_b, [
    "className",
    "themeOverride",
    "name",
    "children",
    "value",
    "defaultValue",
    "onChange",
    "variant",
    "spacing",
    "color",
    "size"
  ]);
  const [_value, setValue] = React.useState(value || defaultValue || "");
  const finalValue = typeof value === "string" ? value : _value;
  const classes = RadioGroup_styles['default']({spacing, variant, theme: theme.useMantineTheme(themeOverride)});
  const uuid = hooks.useId(name);
  const handleChange = (v) => {
    setValue(v);
    typeof onChange === "function" && onChange(v);
  };
  const radios = React.Children.toArray(children).filter((item) => item.type === Radio.Radio).map((radio, index) => React.cloneElement(radio, {
    key: index,
    checked: finalValue === radio.props.value,
    name: uuid,
    color,
    size,
    onChange: (event) => handleChange(event.currentTarget.value)
  }));
  return /* @__PURE__ */ React__default.createElement(InputWrapper.InputWrapper, __spreadValues({
    labelElement: "div"
  }, others), /* @__PURE__ */ React__default.createElement("div", {
    role: "radiogroup",
    className: classes.wrapper
  }, radios));
}
RadioGroup.displayName = "@mantine/core/RadioGroup";

exports.Radio = Radio.Radio;
exports.RADIO_SIZES = RADIO_SIZES;
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map
