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
import useStyles, { sizes } from './Hr.styles';
export const HR_SIZES = sizes;
export function Hr(_a) {
    var { size = 'xs', className, variant = 'dashed', themeOverride, color = 'gray' } = _a, others = __rest(_a, ["size", "className", "variant", "themeOverride", "color"]);
    const classes = useStyles({ color, variant, size, theme: useMantineTheme(themeOverride) });
    return React.createElement("hr", Object.assign({ "data-mantine-hr": true, className: cx(classes.hr, className) }, others));
}
Hr.displayName = '@mantine/core/Hr';
