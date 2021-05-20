var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useRef } from 'react';
import { useMantineTheme } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Tab } from './Tab/Tab';
import { TabControl } from './TabControl/TabControl';
import useStyles from './Tabs.styles';
export { Tab };
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
export function Tabs(_a) {
    var { children, initialTab, themeOverride, active, position = 'left', grow = false, onTabChange, color } = _a, others = __rest(_a, ["children", "initialTab", "themeOverride", "active", "position", "grow", "onTabChange", "color"]);
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });
    const controlRefs = useRef({});
    const tabs = React.Children.toArray(children).filter((item) => item.type === Tab);
    const [_activeTab, _setActiveTab] = useState(typeof initialTab === 'number' ? initialTab : findInitialTab(tabs));
    const activeTab = clamp(typeof active === 'number' ? active : _activeTab, 0, tabs.length - 1);
    const setActiveTab = (tabIndex) => {
        _setActiveTab(tabIndex);
        if (typeof onTabChange === 'function') {
            onTabChange(tabIndex);
        }
    };
    const handleKeyDown = (event) => {
        if (event.nativeEvent.code === 'ArrowRight') {
            const nextTab = getNextTab(activeTab, tabs);
            setActiveTab(nextTab);
            controlRefs.current[nextTab].focus();
        }
        if (event.nativeEvent.code === 'ArrowLeft') {
            const previousTab = getPreviousTab(activeTab, tabs);
            setActiveTab(previousTab);
            controlRefs.current[previousTab].focus();
        }
    };
    const panes = tabs.map((tab, index) => (React.createElement(TabControl, { key: index, active: activeTab === index, tabProps: tab.props, onKeyDown: handleKeyDown, color: color, elementRef: (node) => {
            controlRefs.current[index] = node;
        }, onClick: () => activeTab !== index && setActiveTab(index) })));
    const content = tabs[activeTab].props.children;
    return (React.createElement("div", Object.assign({}, others),
        React.createElement("div", { className: classes.tabs },
            React.createElement(ElementsGroup, { className: classes.tabsInner, role: "tablist", "aria-orientation": "horizontal", spacing: 0, position: position, grow: grow }, panes)),
        content && (React.createElement("div", { "data-mantine-tab-content": true, className: classes.body, role: "tabpanel" }, content))));
}
Tabs.displayName = '@mantine/core/Tabs';
