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
import React, { Children } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './ElementsGroup.styles';
export function ElementsGroup(_a) {
    var { className, position = 'left', children, noWrap = false, grow = false, spacing = 'md', themeOverride } = _a, others = __rest(_a, ["className", "position", "children", "noWrap", "grow", "spacing", "themeOverride"]);
    const classes = useStyles({
        grow,
        noWrap,
        spacing,
        position,
        theme: useMantineTheme(themeOverride),
    });
    const items = Children.toArray(children).map((child) => React.cloneElement(child, { className: cx(classes.child, child.props.className) }));
    return (React.createElement("div", Object.assign({ className: className }, others),
        React.createElement("div", { className: classes.elementsGroup }, items)));
}
ElementsGroup.displayName = '@mantine/core/ElementsGroup';
