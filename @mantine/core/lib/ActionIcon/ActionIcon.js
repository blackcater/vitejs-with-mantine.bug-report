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
import useStyles, { sizes } from './ActionIcon.styles';
export const ACTION_ICON_SIZES = sizes;
export function ActionIcon(_a) {
    var { className, color = 'gray', children, radius = 'sm', size = 'md', variant = 'hover', themeOverride, elementRef } = _a, others = __rest(_a, ["className", "color", "children", "radius", "size", "variant", "themeOverride", "elementRef"]);
    const classes = useStyles({
        size,
        radius,
        color,
        theme: useMantineTheme(themeOverride),
    });
    return (React.createElement("button", Object.assign({}, others, { "data-mantine-composable": true, className: cx(classes.actionIcon, classes[variant], className), type: "button", ref: elementRef }), children));
}
ActionIcon.displayName = '@mantine/core/ActionIcon';
