/* eslint-disable react/button-has-type */
// ^ this is fun – https://github.com/yannickcr/eslint-plugin-react/issues/1555
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
import useStyles, { heights } from './Button.styles';
export const BUTTON_SIZES = heights;
export function Button(_a) {
    var { className, size = 'md', color, type = 'button', disabled = false, children, leftIcon, rightIcon, fullWidth = false, variant = 'filled', radius = 'sm', component: Element = 'button', elementRef, themeOverride } = _a, others = __rest(_a, ["className", "size", "color", "type", "disabled", "children", "leftIcon", "rightIcon", "fullWidth", "variant", "radius", "component", "elementRef", "themeOverride"]);
    const classes = useStyles({
        radius,
        color,
        size,
        fullWidth,
        theme: useMantineTheme(themeOverride),
    });
    return (React.createElement(Element, Object.assign({}, others, { className: cx(classes.shared, classes[variant], className), type: type, disabled: disabled, "data-mantine-composable": true, ref: elementRef, onTouchStart: () => { } }),
        React.createElement("div", { className: classes.inner },
            leftIcon && (React.createElement("span", { "data-mantine-left-icon": true, className: cx(classes.icon, classes.leftIcon) }, leftIcon)),
            React.createElement("span", { className: classes.label, "data-mantine-label": true }, children),
            rightIcon && (React.createElement("span", { "data-mantine-right-icon": true, className: cx(classes.icon, classes.rightIcon) }, rightIcon)))));
}
Button.displayName = '@mantine/core/Button';
