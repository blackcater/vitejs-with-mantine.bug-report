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
import useStyles, { sizes } from './ThemeIcon.styles';
export const THEME_ICON_SIZES = sizes;
export function ThemeIcon(_a) {
    var { className, size = 'md', radius = 'sm', variant = 'filled', color, children, themeOverride } = _a, others = __rest(_a, ["className", "size", "radius", "variant", "color", "children", "themeOverride"]);
    const classes = useStyles({
        variant,
        radius,
        color,
        size,
        theme: useMantineTheme(themeOverride),
    });
    return (React.createElement("div", Object.assign({ "data-mantine-composable": true, className: cx(classes.themeIcon, className) }, others), children));
}
ThemeIcon.displayName = '@mantine/core/ThemeIcon';
