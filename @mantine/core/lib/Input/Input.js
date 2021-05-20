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
import useStyles from './Input.styles';
export function Input(_a) {
    var { component: Element = 'input', className, invalid = false, required = false, variant = 'default', icon, style, rightSectionWidth = 36, rightSection, rightSectionProps = {}, radius = 'sm', inputClassName, inputStyle, themeOverride, wrapperProps, elementRef } = _a, others = __rest(_a, ["component", "className", "invalid", "required", "variant", "icon", "style", "rightSectionWidth", "rightSection", "rightSectionProps", "radius", "inputClassName", "inputStyle", "themeOverride", "wrapperProps", "elementRef"]);
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ radius, theme });
    return (React.createElement("div", Object.assign({ className: cx(classes.inputWrapper, { [classes.invalid]: invalid }, classes[`${variant}Variant`], className), style: style }, wrapperProps),
        icon && (React.createElement("div", { "data-mantine-icon": true, className: classes.icon }, icon)),
        React.createElement(Element, Object.assign({}, others, { "data-mantine-input": true, ref: elementRef, "aria-required": required, "aria-invalid": invalid, className: cx({ [classes.withIcon]: icon }, classes.input, inputClassName), style: Object.assign({ paddingRight: rightSection ? rightSectionWidth : theme.spacing.md }, inputStyle) })),
        rightSection && (React.createElement("div", Object.assign({}, rightSectionProps, { "data-mantine-input-section": true, style: Object.assign(Object.assign({}, rightSectionProps.style), { width: rightSectionWidth }), className: cx(classes.rightSection, rightSectionProps.className) }), rightSection))));
}
Input.displayName = '@mantine/core/Input';
