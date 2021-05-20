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
import { useId } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles, { sizes } from './Checkbox.styles';
export const CHECKBOX_SIZES = sizes;
export function Checkbox(_a) {
    var { className, checked, onChange, color, themeOverride, label, disabled, intermediate, id, size, wrapperProps, style, inputStyle, inputClassName, elementRef } = _a, others = __rest(_a, ["className", "checked", "onChange", "color", "themeOverride", "label", "disabled", "intermediate", "id", "size", "wrapperProps", "style", "inputStyle", "inputClassName", "elementRef"]);
    const uuid = useId(id);
    const classes = useStyles({ size, color, theme: useMantineTheme(themeOverride) });
    return (React.createElement("div", Object.assign({ className: cx(classes.wrapper, className), style: style }, wrapperProps),
        React.createElement("div", { className: classes.checkboxWrapper },
            React.createElement("input", Object.assign({}, others, { id: uuid, ref: elementRef, type: "checkbox", className: cx(classes.checkbox, inputClassName), checked: intermediate || checked, onChange: onChange, disabled: disabled, style: inputStyle })),
            React.createElement(CheckboxIcon, { intermediate: intermediate, className: classes.icon })),
        label && (React.createElement("label", { className: classes.label, htmlFor: uuid }, label))));
}
Checkbox.displayName = '@mantine/core/Checkbox';
