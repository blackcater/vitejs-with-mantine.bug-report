'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var theme = require('@mantine/theme');
var ElementsGroup = require('../ElementsGroup/ElementsGroup.js');
var Tab = require('./Tab/Tab.js');
var TabControl = require('./TabControl/TabControl.js');
var Tabs_styles = require('./Tabs.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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
  const classes = Tabs_styles['default']({theme: theme.useMantineTheme(themeOverride)});
  const controlRefs = React.useRef({});
  const tabs = React__default['default'].Children.toArray(children).filter((item) => item.type === Tab.Tab);
  const [_activeTab, _setActiveTab] = React.useState(typeof initialTab === "number" ? initialTab : findInitialTab(tabs));
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
  const panes = tabs.map((tab, index) => /* @__PURE__ */ React__default['default'].createElement(TabControl.TabControl, {
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
  return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues({}, others), /* @__PURE__ */ React__default['default'].createElement("div", {
    className: classes.tabs
  }, /* @__PURE__ */ React__default['default'].createElement(ElementsGroup.ElementsGroup, {
    className: classes.tabsInner,
    role: "tablist",
    "aria-orientation": "horizontal",
    spacing: 0,
    position,
    grow
  }, panes)), content && /* @__PURE__ */ React__default['default'].createElement("div", {
    "data-mantine-tab-content": true,
    className: classes.body,
    role: "tabpanel"
  }, content));
}
Tabs.displayName = "@mantine/core/Tabs";

exports.Tab = Tab.Tab;
exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map
