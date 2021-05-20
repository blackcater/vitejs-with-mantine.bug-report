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
import { useMantineTheme } from '@mantine/theme';
import useStyles from './MenuButton.styles';
export function MenuButton(_a) {
    var { children, onHover, hovered, themeOverride, elementRef, icon, color, disabled, rightSection, className } = _a, others = __rest(_a, ["children", "onHover", "hovered", "themeOverride", "elementRef", "icon", "color", "disabled", "rightSection", "className"]);
    const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });
    return (React.createElement("button", Object.assign({ type: "button", role: "menuitem", className: cx(classes.item, { [classes.hovered]: hovered }, className), onMouseEnter: () => !disabled && onHover(), ref: elementRef, disabled: disabled }, others),
        React.createElement("div", { className: classes.inner },
            icon && (React.createElement("div", { "data-mantine-icon": true, className: classes.icon }, icon)),
            React.createElement("div", { className: classes.body },
                React.createElement("div", { className: classes.label }, children),
                rightSection))));
}
MenuButton.displayName = '@mantine/core/MenuButton';
