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
import React, { createElement } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text';
import useStyles from './InputWrapper.styles';
export function InputWrapper(_a) {
    var { className, label, children, required, id, error, description, themeOverride, labelElement = 'label' } = _a, others = __rest(_a, ["className", "label", "children", "required", "id", "error", "description", "themeOverride", "labelElement"]);
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });
    const labelProps = labelElement === 'label' ? { htmlFor: id } : {};
    const inputLabel = createElement(labelElement, Object.assign(Object.assign({}, labelProps), { className: classes.label }), React.createElement(React.Fragment, null,
        label,
        required && (React.createElement("span", { "data-mantine-required": true, className: classes.required },
            ' ',
            "*"))));
    return (React.createElement("div", Object.assign({ className: cx(classes.inputWrapper, className) }, others),
        label && inputLabel,
        description && (React.createElement(Text, { themeOverride: themeOverride, "data-mantine-description": true, color: "gray", size: "xs", className: classes.description }, description)),
        children,
        typeof error !== 'boolean' && error && (React.createElement(Text, { themeOverride: themeOverride, "data-mantine-error": true, color: "red", size: "sm", className: classes.error }, error))));
}
InputWrapper.displayName = '@mantine/core/InputWrapper';
