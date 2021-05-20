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
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import useStyles from './Alert.styles';
export function Alert(_a) {
    var { className, title, children, themeOverride, color, shadow = 'sm' } = _a, others = __rest(_a, ["className", "title", "children", "themeOverride", "color", "shadow"]);
    const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });
    return (React.createElement(Paper, Object.assign({ shadow: shadow, className: cx(classes.alert, className), themeOverride: themeOverride }, others),
        title && (React.createElement(Text, { themeOverride: themeOverride, "data-mantine-alert-title": true, weight: 700, className: classes.title }, title)),
        React.createElement("div", { "data-mantine-alert-body": true, className: classes.body }, children)));
}
Alert.displayName = '@mantine/core/Alert';
