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
import useStyles from './Breadcrumbs.styles';
export function Breadcrumbs(_a) {
    var { className, themeOverride, children, separator = '/' } = _a, others = __rest(_a, ["className", "themeOverride", "children", "separator"]);
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });
    const items = React.Children.toArray(children).reduce((acc, child, index, array) => {
        acc.push(React.cloneElement(child, {
            className: classes.breadcrumb,
            key: index,
            'data-mantine-breadcrumb': true,
        }));
        if (index !== array.length - 1) {
            acc.push(React.createElement(Text, { size: "sm", "data-mantine-separator": true, className: classes.separator, key: `separator-${index}`, themeOverride: themeOverride }, separator));
        }
        return acc;
    }, []);
    return (React.createElement("div", Object.assign({ className: cx(classes.breadcrumbs, className) }, others), items));
}
Breadcrumbs.displayName = '@mantine/core/Breadcrumbs';
