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
import { Paper } from '../Paper/Paper';
import useStyles from './Card.styles';
export { CardsGrid } from './CardsGrid/CardsGrid';
export function Card(_a) {
    var { className, themeOverride, padding = 'md', radius = 'sm' } = _a, others = __rest(_a, ["className", "themeOverride", "padding", "radius"]);
    const classes = useStyles({ radius, padding, theme: useMantineTheme(themeOverride) });
    return (React.createElement(Paper, Object.assign({ "data-mantine-card": true, className: cx(classes.card, className), radius: radius, padding: padding }, others)));
}
Card.displayName = '@mantine/core/Card';
