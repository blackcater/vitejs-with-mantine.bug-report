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
import { useId } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Input } from '../Input/Input';
import { ChevronIcon } from './ChevronIcon';
export function Select(_a) {
    var { id, className, required, label, error, style, data, placeholder, themeOverride, wrapperProps, inputStyle, description, elementRef } = _a, others = __rest(_a, ["id", "className", "required", "label", "error", "style", "data", "placeholder", "themeOverride", "wrapperProps", "inputStyle", "description", "elementRef"]);
    const theme = useMantineTheme(themeOverride);
    const uuid = useId(id);
    const options = data.map((item) => (React.createElement("option", { key: item.value, value: item.value, disabled: item.disabled }, item.label)));
    if (placeholder) {
        options.unshift(React.createElement("option", { key: "placeholder", value: "", selected: true, disabled: true, hidden: true }, placeholder));
    }
    const chevron = (React.createElement(ChevronIcon, { style: { color: error ? theme.colors.red[6] : theme.colors.gray[6] } }));
    return (React.createElement(InputWrapper, Object.assign({}, wrapperProps, { required: required, id: uuid, label: label, error: error, className: className, style: style, themeOverride: themeOverride, description: description }),
        React.createElement(Input, Object.assign({}, others, { component: "select", invalid: !!error, style: inputStyle, "aria-required": required, elementRef: elementRef, id: uuid, inputStyle: inputStyle, rightSection: chevron, rightSectionProps: { style: { pointerEvents: 'none' } }, required: required, themeOverride: themeOverride }), options)));
}
Select.displayName = '@mantine/core/Select';
