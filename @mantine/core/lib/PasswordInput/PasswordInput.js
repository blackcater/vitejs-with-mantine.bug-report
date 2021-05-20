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
import React, { useState, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { TextInput } from '../TextInput/TextInput';
import { PasswordToggleIcon } from './PasswordToggleIcon';
export function PasswordInput(_a) {
    var { radius, disabled, hidePasswordLabel, showPasswordLabel, themeOverride, focusInputOnToggle = false, elementRef } = _a, others = __rest(_a, ["radius", "disabled", "hidePasswordLabel", "showPasswordLabel", "themeOverride", "focusInputOnToggle", "elementRef"]);
    const inputRef = useRef();
    const [reveal, setReveal] = useState(false);
    const toggleReveal = () => {
        setReveal((current) => !current);
        if (focusInputOnToggle) {
            inputRef.current.focus();
        }
    };
    const rightSection = (React.createElement(ActionIcon, { onClick: toggleReveal, themeOverride: themeOverride, title: reveal ? hidePasswordLabel : showPasswordLabel, "aria-label": reveal ? hidePasswordLabel : showPasswordLabel, radius: radius },
        React.createElement(PasswordToggleIcon, { reveal: reveal })));
    return (React.createElement(TextInput, Object.assign({}, others, { disabled: disabled, themeOverride: themeOverride, elementRef: useMergedRef(inputRef, elementRef), type: reveal ? 'text' : 'password', rightSection: disabled ? null : rightSection, radius: radius })));
}
PasswordInput.displayName = '@mantine/core/PasswordInput';
