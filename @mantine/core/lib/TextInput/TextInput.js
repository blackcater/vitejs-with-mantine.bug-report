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
import { Input } from '../Input/Input';
import { InputWrapper } from '../InputWrapper/InputWrapper';
export function TextInput(_a) {
    var { className, id, label, error, required, type = 'text', style, icon, description, themeOverride, wrapperProps, elementRef } = _a, others = __rest(_a, ["className", "id", "label", "error", "required", "type", "style", "icon", "description", "themeOverride", "wrapperProps", "elementRef"]);
    const uuid = useId(id);
    return (React.createElement(InputWrapper, Object.assign({ required: required, id: uuid, label: label, error: error, description: description, className: className, style: style, themeOverride: themeOverride }, wrapperProps),
        React.createElement(Input, Object.assign({}, others, { required: required, elementRef: elementRef, id: uuid, type: type, invalid: !!error, icon: icon, themeOverride: themeOverride }))));
}
TextInput.displayName = '@mantine/core/TextInput';
