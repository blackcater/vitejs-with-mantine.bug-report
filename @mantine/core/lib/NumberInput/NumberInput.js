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
import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { TextInput } from '../TextInput/TextInput';
import useStyles, { CONTROL_WIDTH } from './NumberInput.styles';
export function NumberInput(_a) {
    var { disabled, themeOverride, elementRef, value, onChange, min, max, step = 1, onBlur, onFocus, hideControls = false, radius = 'sm', variant, precision = 0, defaultValue, noClampOnBlur = false } = _a, others = __rest(_a, ["disabled", "themeOverride", "elementRef", "value", "onChange", "min", "max", "step", "onBlur", "onFocus", "hideControls", "radius", "variant", "precision", "defaultValue", "noClampOnBlur"]);
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ theme, radius });
    const [focused, setFocused] = useState(false);
    const [_value, setValue] = useState(typeof value === 'number' ? value : typeof defaultValue === 'number' ? defaultValue : 0);
    const finalValue = typeof value === 'number' ? value : _value;
    const [tempValue, setTempValue] = useState(typeof finalValue === 'number' ? finalValue.toFixed(precision) : '');
    const inputRef = useRef();
    const handleValueChange = (val) => {
        // console.log(val);
        typeof onChange === 'function' && onChange(val);
        setValue(val);
    };
    const _min = typeof min === 'number' ? min : -Infinity;
    const _max = typeof max === 'number' ? max : Infinity;
    const clamp = (v) => {
        const val = typeof v === 'number' ? v : parseFloat(v);
        return Math.min(Math.max(val, _min), _max);
    };
    useEffect(() => {
        if (typeof value === 'number' && !focused) {
            setValue(value);
            setTempValue(value.toFixed(precision));
        }
    }, [value]);
    const rightSection = (React.createElement("div", { className: classes.rightSection },
        React.createElement("button", { type: "button", tabIndex: -1, "aria-hidden": true, "data-mantine-increment": true, onMouseDown: (event) => {
                event.preventDefault();
                const result = clamp(finalValue + step).toFixed(precision);
                handleValueChange(parseFloat(result));
                setTempValue(result);
                inputRef.current.focus();
            }, disabled: finalValue >= max, className: cx(classes.control, classes.controlUp) }),
        React.createElement("button", { type: "button", tabIndex: -1, "aria-hidden": true, "data-mantine-decrement": true, onMouseDown: (event) => {
                event.preventDefault();
                const result = clamp(finalValue - step).toFixed(precision);
                handleValueChange(parseFloat(result));
                setTempValue(result);
                inputRef.current.focus();
            }, disabled: finalValue <= min, className: cx(classes.control, classes.controlDown) })));
    const handleChange = (event) => {
        const val = event.currentTarget.value;
        setTempValue(val);
        const parsed = Number(val);
        val.trim() !== '' && !Number.isNaN(parsed) && handleValueChange(parsed);
    };
    const handleBlur = (event) => {
        const val = clamp(event.currentTarget.value);
        if (!Number.isNaN(val)) {
            if (!noClampOnBlur) {
                setTempValue(val.toFixed(precision));
                handleValueChange(val);
            }
        }
        else {
            setTempValue(finalValue.toFixed(precision));
        }
        setFocused(false);
        typeof onBlur === 'function' && onBlur(event);
    };
    const handleFocus = (event) => {
        setFocused(true);
        typeof onFocus === 'function' && onBlur(event);
    };
    return (React.createElement(TextInput, Object.assign({}, others, { variant: variant, value: tempValue, disabled: disabled, themeOverride: themeOverride, elementRef: useMergedRef(inputRef, elementRef), type: "number", onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, rightSection: disabled || hideControls || variant === 'unstyled' ? null : rightSection, rightSectionWidth: CONTROL_WIDTH + 1, radius: radius, max: max, min: min, step: step })));
}
NumberInput.displayName = '@mantine/core/NumberInput';
