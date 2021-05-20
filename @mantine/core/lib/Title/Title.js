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
import useStyles from './Title.styles';
export function Title(_a) {
    var { className, themeOverride, order = 1, children } = _a, others = __rest(_a, ["className", "themeOverride", "order", "children"]);
    if (![1, 2, 3, 4, 5, 6].includes(order)) {
        return null;
    }
    const element = `h${order}`;
    const classes = useStyles({ theme: useMantineTheme(themeOverride), element });
    return React.createElement(element, Object.assign({ className: cx(classes.title, className) }, others), children);
}
Title.displayName = '@mantine/core/Title';
