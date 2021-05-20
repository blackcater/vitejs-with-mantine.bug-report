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
import useStyles from './ColorSwatch.styles';
export function ColorSwatch(_a) {
    var { component: Element = 'div', color, size = 25, style, radius = 25, className, themeOverride } = _a, others = __rest(_a, ["component", "color", "size", "style", "radius", "className", "themeOverride"]);
    const classes = useStyles({ radius, theme: useMantineTheme(themeOverride) });
    return (React.createElement(Element, Object.assign({ className: cx(classes.colorSwatch, className), style: Object.assign({ width: size, height: size, backgroundColor: color }, style), "data-mantine-composable": true }, others)));
}
ColorSwatch.displayName = '@mantine/core/ColorSwatch';
