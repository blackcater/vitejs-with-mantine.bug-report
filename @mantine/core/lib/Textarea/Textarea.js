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
import TextareaAutosize from 'react-textarea-autosize';
import { useId } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Input } from '../Input/Input';
export function Textarea(_a) {
    var { autosize = false, maxRows, minRows, label, error, description, id, className, required, themeOverride, style, wrapperProps, inputStyle, elementRef } = _a, others = __rest(_a, ["autosize", "maxRows", "minRows", "label", "error", "description", "id", "className", "required", "themeOverride", "style", "wrapperProps", "inputStyle", "elementRef"]);
    const uuid = useId(id);
    const theme = useMantineTheme(themeOverride);
    return (React.createElement(InputWrapper, Object.assign({ label: label, error: error, id: uuid, description: description, required: required, style: style, className: className }, wrapperProps), autosize ? (React.createElement(Input, Object.assign({ required: required, component: TextareaAutosize, invalid: !!error, maxRows: maxRows, minRows: minRows, id: uuid, elementRef: elementRef, inputStyle: Object.assign(Object.assign({ paddingTop: theme.spacing.xs, paddingBottom: theme.spacing.xs }, inputStyle), { height: undefined }) }, others))) : (React.createElement(Input, Object.assign({ component: "textarea", required: required, id: uuid, invalid: !!error, rows: minRows, elementRef: elementRef, inputStyle: Object.assign({ paddingTop: theme.spacing.xs, paddingBottom: theme.spacing.xs }, inputStyle) }, others)))));
}
Textarea.displayName = '@mantine/core/Textarea';
