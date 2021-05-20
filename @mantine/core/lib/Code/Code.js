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
import useStyles from './Code.styles';
export function Code(_a) {
    var { children, themeOverride, block = false, className, color } = _a, others = __rest(_a, ["children", "themeOverride", "block", "className", "color"]);
    const theme = useMantineTheme(themeOverride);
    const themeColor = color || (theme.colorScheme === 'dark' ? 'dark' : 'gray');
    const classes = useStyles({ color: themeColor, theme: useMantineTheme(themeOverride) });
    if (block) {
        return (React.createElement("pre", Object.assign({ className: cx(classes.code, classes.pre, className) }, others), children));
    }
    return (React.createElement("code", Object.assign({ className: cx(classes.code, className) }, others), children));
}
Code.displayName = '@mantine/core/Code';
