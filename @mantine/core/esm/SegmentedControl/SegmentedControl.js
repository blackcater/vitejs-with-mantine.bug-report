import React, { useState, useRef, useEffect } from 'react';
import cx from 'clsx';
import { useReducedMotion, useId } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import useStyles, { WRAPPER_PADDING } from './SegmentedControl.styles.js';

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
  const reduceMotion = useReducedMotion();
  const theme = useMantineTheme(themeOverride);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const classes = useStyles({
    theme,
    size,
    fullWidth,
    color,
    radius,
    reduceMotion: reduceMotion || !shouldAnimate,
    transitionDuration,
    transitionTimingFunction
  });
  const [activePosition, setActivePosition] = useState({width: 0, translate: 0});
  const uuid = useId(name);
  const refs = useRef({});
  const wrapperRef = useRef(null);
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (value in refs.current && wrapperRef.current) {
        const element = refs.current[value];
        const rect = element.getBoundingClientRect();
        setActivePosition({
          width: rect.width,
          translate: rect.x - wrapperRef.current.getBoundingClientRect().x - WRAPPER_PADDING
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
  const controls = data.map((item) => /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.control, {[classes.controlActive]: value === item.value}),
    key: item.value
  }, /* @__PURE__ */ React.createElement("input", {
    "data-mantine-radio": true,
    className: classes.input,
    type: "radio",
    name: uuid,
    value: item.value,
    id: `${uuid}-${item.value}`,
    checked: value === item.value,
    onChange: () => onChange(item.value)
  }), /* @__PURE__ */ React.createElement("label", {
    "data-mantine-label": true,
    className: cx(classes.label, {[classes.labelActive]: value === item.value}),
    htmlFor: `${uuid}-${item.value}`,
    ref: (node) => {
      refs.current[item.value] = node;
    }
  }, item.label)));
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.wrapper, className),
    ref: wrapperRef
  }, others), !!value && /* @__PURE__ */ React.createElement("span", {
    "data-mantine-active": true,
    className: classes.active,
    style: {
      width: activePosition.width,
      transform: `translateX(${activePosition.translate}px)`
    }
  }), controls);
}
SegmentedControl.displayName = "@mantine/core/SegmentedControl";

export { SegmentedControl };
//# sourceMappingURL=SegmentedControl.js.map
