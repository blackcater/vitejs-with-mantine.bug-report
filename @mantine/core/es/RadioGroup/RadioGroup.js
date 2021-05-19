import React, { useState, Children, cloneElement } from 'react';
import { useId } from '@mantine/hooks';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { InputWrapper } from '../InputWrapper/InputWrapper.js';
import { Radio } from './Radio/Radio.js';
export { Radio } from './Radio/Radio.js';
import { sizes } from './Radio/Radio.styles.js';
import useStyles from './RadioGroup.styles.js';

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
const RADIO_SIZES = sizes;
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
  const [_value, setValue] = useState(value || defaultValue || "");
  const finalValue = typeof value === "string" ? value : _value;
  const classes = useStyles({spacing, variant, theme: useMantineTheme(themeOverride)});
  const uuid = useId(name);
  const handleChange = (v) => {
    setValue(v);
    typeof onChange === "function" && onChange(v);
  };
  const radios = Children.toArray(children).filter((item) => item.type === Radio).map((radio, index) => cloneElement(radio, {
    key: index,
    checked: finalValue === radio.props.value,
    name: uuid,
    color,
    size,
    onChange: (event) => handleChange(event.currentTarget.value)
  }));
  return /* @__PURE__ */ React.createElement(InputWrapper, __spreadValues({
    labelElement: "div"
  }, others), /* @__PURE__ */ React.createElement("div", {
    role: "radiogroup",
    className: classes.wrapper
  }, radios));
}
RadioGroup.displayName = "@mantine/core/RadioGroup";

export { RADIO_SIZES, RadioGroup };
//# sourceMappingURL=RadioGroup.js.map
