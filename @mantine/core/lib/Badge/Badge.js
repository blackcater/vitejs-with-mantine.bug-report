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
import useStyles, { heights } from './Badge.styles';
export const BADGE_SIZES = heights;
export function Badge(_a) {
    var { component: Component = 'div', className, color, variant = 'light', fullWidth, children, themeOverride, size = 'md', leftSection, rightSection, radius = 'xl' } = _a, others = __rest(_a, ["component", "className", "color", "variant", "fullWidth", "children", "themeOverride", "size", "leftSection", "rightSection", "radius"]);
    const classes = useStyles({
        size,
        fullWidth,
        color,
        radius,
        theme: useMantineTheme(themeOverride),
    });
    return (React.createElement(Component, Object.assign({}, others, { "data-mantine-composable": true, className: cx(classes.badge, classes[variant], className) }),
        leftSection && (React.createElement("span", { "data-mantine-badge-left": true, className: classes.leftSection }, leftSection)),
        React.createElement("span", { className: classes.inner }, children),
        rightSection && (React.createElement("span", { "data-mantine-badge-right": true, className: classes.rightSection }, rightSection))));
}
Badge.displayName = '@mantine/core/Badge';
