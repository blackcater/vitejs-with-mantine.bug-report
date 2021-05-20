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
import React from 'react';
import cx from 'clsx';
import { useMergedRef, useReducedMotion } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './TabControl.styles';
export function TabControl(_a) {
    var { themeOverride, active, elementRef, tabProps, color, className } = _a, others = __rest(_a, ["themeOverride", "active", "elementRef", "tabProps", "color", "className"]);
    const { label, icon, color: overrideColor, elementRef: _ } = tabProps, props = __rest(tabProps, ["label", "icon", "color", "elementRef"]);
    const classes = useStyles({
        reduceMotion: useReducedMotion(),
        color: overrideColor || color,
        theme: useMantineTheme(themeOverride),
    });
    return (React.createElement("button", Object.assign({}, others, props, { "data-mantine-tab": true, "data-mantine-composable": true, tabIndex: active ? 0 : -1, className: cx(classes.tab, { [classes.tabActive]: active }, className), type: "button", role: "tab", "aria-selected": active, ref: useMergedRef(elementRef, tabProps.elementRef) }),
        React.createElement("div", { className: classes.tabInner },
            icon && (React.createElement("div", { "data-mantine-icon": true, className: classes.tabIcon }, icon)),
            label && React.createElement("div", { "data-mantine-label": true }, label))));
}
TabControl.displayName = '@mantine/core/TabControl';
