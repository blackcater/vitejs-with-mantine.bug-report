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
import useStyles from './Text.styles';
export function Text(_a) {
    var { className, component = 'div', children, size = 'md', weight, transform, style, color, align, variant = 'text', themeOverride, elementRef } = _a, others = __rest(_a, ["className", "component", "children", "size", "weight", "transform", "style", "color", "align", "variant", "themeOverride", "elementRef"]);
    const classes = useStyles({ variant, color, size, theme: useMantineTheme(themeOverride) });
    return React.createElement(component, Object.assign({ className: cx(classes.text, className), style: Object.assign({ fontWeight: weight, textTransform: transform, textAlign: align }, style), ref: elementRef }, others), children);
}
Text.displayName = '@mantine/core/Text';
export function Anchor(_a) {
    var { component = 'a' } = _a, others = __rest(_a, ["component"]);
    return React.createElement(Text, Object.assign({ component: component, variant: "link" }, others));
}
Anchor.displayName = '@mantine/core/Anchor';
