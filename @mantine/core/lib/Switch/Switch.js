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
import { useId, useReducedMotion } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import useStyles, { sizes } from './Switch.styles';
export const SWITCH_SIZES = sizes;
export function Switch(_a) {
    var { className, color, label, id, style, size = 'md', radius = 'xl', themeOverride, wrapperProps, inputStyle, inputClassName, elementRef } = _a, others = __rest(_a, ["className", "color", "label", "id", "style", "size", "radius", "themeOverride", "wrapperProps", "inputStyle", "inputClassName", "elementRef"]);
    const classes = useStyles({
        size,
        color,
        radius,
        reduceMotion: useReducedMotion(),
        theme: useMantineTheme(themeOverride),
    });
    const uuid = useId(id);
    return (React.createElement("div", Object.assign({ className: cx(classes.wrapper, className), style: style }, wrapperProps),
        React.createElement("input", Object.assign({ id: uuid, ref: elementRef, type: "checkbox", className: cx(classes.switch, inputClassName), style: inputStyle }, others)),
        label && (React.createElement("label", { className: classes.label, htmlFor: uuid }, label))));
}
Switch.displayName = '@mantine/core/Switch';
