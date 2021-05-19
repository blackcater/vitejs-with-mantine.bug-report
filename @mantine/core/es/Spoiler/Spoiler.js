import React, { useState, useRef, useEffect } from 'react';
import cx from 'clsx';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import { useMantineTheme } from '../mantine-theme/src/use-mantine-theme/use-mantine-theme.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';
import { useReducedMotion } from '@mantine/hooks';
import { Button } from '../Button/Button.js';
import useStyles from './Spoiler.styles.js';

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
  const classes = useStyles({
    transitionDuration: !useReducedMotion() && transitionDuration,
    theme: useMantineTheme(themeOverride)
  });
  const [show, setShowState] = useState(false);
  const [spoiler, setSpoilerState] = useState(false);
  const contentRef = useRef(null);
  const spoilerMoreContent = show ? hideLabel : showLabel;
  useEffect(() => {
    setSpoilerState(maxHeight < contentRef.current.clientHeight);
  }, [maxHeight, children]);
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: cx(classes.spoiler, className)
  }, others), /* @__PURE__ */ React.createElement("div", {
    className: classes.content,
    style: {
      maxHeight: !show ? maxHeight : contentRef.current && contentRef.current.clientHeight
    }
  }, /* @__PURE__ */ React.createElement("div", {
    ref: contentRef
  }, children)), spoiler && /* @__PURE__ */ React.createElement(Button, {
    variant: "link",
    elementRef: controlRef,
    onClick: () => setShowState((opened) => !opened),
    themeOverride
  }, spoilerMoreContent));
}
Spoiler.displayName = "@mantine/core/Spoiler";

export { Spoiler };
//# sourceMappingURL=Spoiler.js.map
