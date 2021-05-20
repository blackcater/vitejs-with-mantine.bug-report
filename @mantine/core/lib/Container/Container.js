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
import useStyles, { sizes } from './Container.styles';
export const CONTAINER_SIZES = sizes;
export function Container(_a) {
    var { className, padding = 'md', fluid, size, themeOverride } = _a, others = __rest(_a, ["className", "padding", "fluid", "size", "themeOverride"]);
    const classes = useStyles({ padding, fluid, size, theme: useMantineTheme(themeOverride) });
    return React.createElement("div", Object.assign({ className: cx(classes.container, className) }, others));
}
Container.displayName = '@mantine/core/Container';
