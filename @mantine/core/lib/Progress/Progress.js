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
import { useReducedMotion } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import useStyles, { sizes } from './Progress.styles';
export const PROGRESS_SIZES = sizes;
export function Progress(_a) {
    var { className, value, color, size = 'md', radius = 'sm', striped = false, themeOverride, 'aria-label': ariaLabel } = _a, others = __rest(_a, ["className", "value", "color", "size", "radius", "striped", "themeOverride", 'aria-label']);
    const classes = useStyles({
        color,
        size,
        radius,
        striped,
        reduceMotion: useReducedMotion(),
        theme: useMantineTheme(themeOverride),
    });
    return (React.createElement("div", Object.assign({ className: cx(classes.progress, className) }, others),
        React.createElement("div", { role: "progressbar", "aria-valuemax": 100, "aria-valuemin": 0, "aria-valuenow": value, "aria-label": ariaLabel, className: classes.bar, style: { width: `${value}%` } })));
}
Progress.displayName = '@mantine/core/Progress';
