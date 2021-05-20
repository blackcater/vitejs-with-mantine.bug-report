import React, { useEffect, useState } from 'react';
import { useClickOutside, useFocusTrap } from '@mantine/hooks';
import { Paper, TextInput, ActionIcon, ColorSwatch, useMantineTheme, } from '@mantine/core';
import { CheckIcon } from './CheckIcon';
import useStyles from './TagEdit.styles';
export function TagEdit({ style, onClose, initialValues, deleteLabel, colors, onTagUpdate, onTagDelete, id, saveLabel, tagNameEditLabel, themeOverride, enableDelete, enableColorChange, }) {
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ theme });
    const dropdownRef = useClickOutside(onClose);
    const focusTrapRef = useFocusTrap();
    const [values, setValues] = useState({ name: '', color: '' });
    const handleNameChange = (value) => setValues((current) => (Object.assign(Object.assign({}, current), { name: value })));
    const handleColorChange = (value) => setValues((current) => (Object.assign(Object.assign({}, current), { color: value })));
    const handleSubmit = () => {
        onTagUpdate(id, { name: values.name, color: values.color });
        onClose();
    };
    const handleDelete = () => {
        onTagDelete(id);
        onClose();
    };
    const handleKeyDownCapture = (event) => {
        if (event.nativeEvent.code === 'Escape') {
            onClose();
        }
    };
    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);
    const colorsList = colors.map((color) => (React.createElement("button", { "data-mantine-tag-color": true, className: classes.colorControl, type: "button", key: color.color, onClick: () => handleColorChange(color.color) },
        React.createElement("div", { className: classes.colorControlBody },
            React.createElement(ColorSwatch, { color: theme.colors[color.color][5], size: 18, themeOverride: themeOverride }),
            React.createElement("span", { "data-mantine-tag-color-label": true, className: classes.colorLabel }, color.name)),
        color.color === values.color && React.createElement(CheckIcon, { style: { width: 14, height: 14 } }))));
    return (React.createElement(Paper, { shadow: "sm", className: classes.tagEdit, elementRef: dropdownRef, onKeyDownCapture: handleKeyDownCapture, style: style, themeOverride: themeOverride },
        React.createElement("div", { ref: focusTrapRef },
            React.createElement("div", { className: classes.header },
                React.createElement(TextInput, { "data-mantine-tag-input": true, className: classes.input, value: values.name, onChange: (event) => handleNameChange(event.currentTarget.value), onKeyDown: (event) => event.nativeEvent.code === 'Enter' && handleSubmit(), autoFocus: true, "aria-label": tagNameEditLabel, themeOverride: themeOverride }),
                React.createElement(ActionIcon, { "data-mantine-tag-save": true, size: 36, variant: theme.colorScheme === 'dark' ? 'transparent' : 'light', onClick: handleSubmit, themeOverride: themeOverride, "aria-label": saveLabel },
                    React.createElement(CheckIcon, { style: { width: 16, height: 16 } }))),
            enableDelete && (React.createElement("button", { "data-mantine-tag-delete": true, className: classes.deleteControl, type: "button", onClick: handleDelete }, deleteLabel)),
            enableColorChange && (React.createElement("div", { "data-mantine-tag-colors": true, className: classes.colorsList }, colorsList)))));
}
TagEdit.displayName = '@mantine/tag-picker/TagEdit';
