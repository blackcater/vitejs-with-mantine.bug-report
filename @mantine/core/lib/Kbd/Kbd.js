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
import useStyles from './Kbd.styles';
export function Kbd(_a) {
    var { className, children, themeOverride } = _a, others = __rest(_a, ["className", "children", "themeOverride"]);
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });
    return (React.createElement("kbd", Object.assign({ className: cx(classes.kbd, className) }, others), children));
}
Kbd.displayName = '@mantine/core/Kbd';
