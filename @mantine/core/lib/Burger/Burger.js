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
import useStyles, { sizes } from './Burger.styles';
export const BURGER_SIZES = sizes;
export function Burger(_a) {
    var { className, opened, color = 'gray', size = 'md', themeOverride, elementRef } = _a, others = __rest(_a, ["className", "opened", "color", "size", "themeOverride", "elementRef"]);
    const classes = useStyles({
        color,
        size,
        theme: useMantineTheme(themeOverride),
        reduceMotion: useReducedMotion(),
    });
    return (React.createElement("button", Object.assign({ type: "button", className: cx(classes.wrapper, className), ref: elementRef }, others),
        React.createElement("div", { className: cx(classes.burger, { [classes.opened]: opened }) })));
}
Burger.displayName = '@mantine/core/Burger';
