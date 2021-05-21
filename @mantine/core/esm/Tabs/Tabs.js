import React, { useRef, useState } from 'react';
import { useMantineTheme } from '@mantine/theme';
import { Group } from '../Group/Group.js';
import { Tab } from './Tab/Tab.js';
export { Tab } from './Tab/Tab.js';
import { TabControl } from './TabControl/TabControl.js';
import useStyles from './Tabs.styles.js';

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
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function getPreviousTab(active, tabs) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }
  return active;
}
function getNextTab(active, tabs) {
  for (let i = active + 1; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }
  return active;
}
function findInitialTab(tabs) {
  for (let i = 0; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }
  return -1;
}
function Tabs(_a) {
  var _b = _a, {
    children,
    initialTab,
    themeOverride,
    active,
    position = "left",
    grow = false,
    onTabChange,
    color
  } = _b, others = __objRest(_b, [
    "children",
    "initialTab",
    "themeOverride",
    "active",
    "position",
    "grow",
    "onTabChange",
    "color"
  ]);
  const classes = useStyles({theme: useMantineTheme(themeOverride)});
  const controlRefs = useRef({});
  const tabs = React.Children.toArray(children).filter((item) => item.type === Tab);
  const [_activeTab, _setActiveTab] = useState(typeof initialTab === "number" ? initialTab : findInitialTab(tabs));
  const activeTab = clamp(typeof active === "number" ? active : _activeTab, 0, tabs.length - 1);
  const setActiveTab = (tabIndex) => {
    _setActiveTab(tabIndex);
    if (typeof onTabChange === "function") {
      onTabChange(tabIndex);
    }
  };
  const handleKeyDown = (event) => {
    if (event.nativeEvent.code === "ArrowRight") {
      const nextTab = getNextTab(activeTab, tabs);
      setActiveTab(nextTab);
      controlRefs.current[nextTab].focus();
    }
    if (event.nativeEvent.code === "ArrowLeft") {
      const previousTab = getPreviousTab(activeTab, tabs);
      setActiveTab(previousTab);
      controlRefs.current[previousTab].focus();
    }
  };
  const panes = tabs.map((tab, index) => /* @__PURE__ */ React.createElement(TabControl, {
    key: index,
    active: activeTab === index,
    tabProps: tab.props,
    onKeyDown: handleKeyDown,
    color,
    elementRef: (node) => {
      controlRefs.current[index] = node;
    },
    onClick: () => activeTab !== index && setActiveTab(index)
  }));
  const content = tabs[activeTab].props.children;
  return /* @__PURE__ */ React.createElement("div", __spreadValues({}, others), /* @__PURE__ */ React.createElement("div", {
    className: classes.tabs
  }, /* @__PURE__ */ React.createElement(Group, {
    className: classes.tabsInner,
    role: "tablist",
    "aria-orientation": "horizontal",
    spacing: 0,
    position,
    grow
  }, panes)), content && /* @__PURE__ */ React.createElement("div", {
    "data-mantine-tab-content": true,
    className: classes.body,
    role: "tabpanel"
  }, content));
}
Tabs.displayName = "@mantine/core/Tabs";

export { Tabs };
//# sourceMappingURL=Tabs.js.map
