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
import { TagPicker } from './TagPicker/TagPicker';
function getRandomColor(colors) {
    if (Array.isArray(colors)) {
        return colors[Math.floor(Math.random() * colors.length)].color;
    }
    return null;
}
export function TagPickerContainer(_a) {
    var { transitionDuration = 250 } = _a, props = __rest(_a, ["transitionDuration"]);
    const controlRef = useRef();
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [hovered, setHovered] = useState(-1);
    const [query, setQuery] = useState('');
    const [createColor, setCreateColor] = useState(getRandomColor(props.colors));
    const [shouldCaptureEvents, setShouldCaptureEvents] = useState(true);
    const [shouldCaptureArrowEvents, setShouldCaptureArrowEvents] = useState(true);
    const closeDropdown = () => {
        if (shouldCaptureEvents) {
            setDropdownOpened(false);
            setHovered(-1);
            setQuery('');
            setTimeout(() => controlRef.current.focus(), transitionDuration + 35);
            typeof props.onDropdownClose === 'function' && props.onDropdownClose();
        }
    };
    const openDropdown = () => {
        setDropdownOpened(true);
        typeof props.onDropdownOpen === 'function' && props.onDropdownOpen();
    };
    const handleSearchChange = (value) => {
        setQuery(value);
        setHovered(0);
        typeof props.onSearchChange === 'function' && props.onSearchChange(value);
    };
    const handleCreate = () => {
        props.onChange(props.onTagCreate({ color: createColor, name: query }));
        setCreateColor(getRandomColor(props.colors));
        closeDropdown();
    };
    const handleUpdate = (id, values) => {
        if (props.value && props.value.id === id) {
            props.onChange(Object.assign(Object.assign({}, values), { id }));
        }
        props.onTagUpdate(id, values);
    };
    const handleChange = (value) => {
        props.onChange(value);
        closeDropdown();
    };
    const filteredData = props.data.filter((tag) => tag.name.toLowerCase().trim().includes(query.toLowerCase().trim()));
    const canCreate = query.trim().length > 0 &&
        props.data.every((tag) => tag.name.toLowerCase().trim() !== query.trim().toLowerCase());
    const handleKeyboardEvents = (event) => {
        if (dropdownOpened && shouldCaptureEvents) {
            const { code } = event.nativeEvent;
            if (code === 'Escape') {
                event.preventDefault();
                closeDropdown();
            }
            if (code === 'ArrowUp' && shouldCaptureArrowEvents) {
                event.preventDefault();
                const targetIndex = canCreate ? filteredData.length : filteredData.length - 1;
                setHovered(hovered <= 0 ? targetIndex : hovered - 1);
            }
            if (code === 'ArrowDown' && shouldCaptureArrowEvents) {
                event.preventDefault();
                const targetIndex = canCreate ? hovered : hovered + 1;
                setHovered(targetIndex === filteredData.length ? 0 : hovered + 1);
            }
            if (code === 'Enter' && hovered > -1) {
                event.preventDefault();
                if (filteredData[hovered]) {
                    handleChange(filteredData[hovered]);
                    closeDropdown();
                }
                if (canCreate && hovered === filteredData.length) {
                    handleCreate();
                }
            }
        }
    };
    return (React.createElement("div", { onKeyDownCapture: handleKeyboardEvents, className: props.className, style: props.style },
        React.createElement(TagPicker, { createColor: createColor, searchQuery: query, hovered: hovered, dropdownOpened: dropdownOpened, controlRef: (node) => {
                controlRef.current = node;
                typeof props.controlRef === 'function' && props.controlRef(node);
            }, openDropdown: openDropdown, closeDropdown: closeDropdown, description: props.description, searchPlaceholder: props.searchPlaceholder, onSearchChange: handleSearchChange, data: filteredData, canCreate: canCreate, value: props.value, createLabel: props.createLabel, saveLabel: props.saveLabel, editTagLabel: props.editTagLabel, deleteLabel: props.deleteLabel, noValueLabel: props.noValueLabel, tagNameEditLabel: props.tagNameEditLabel, onCreate: handleCreate, colors: props.colors, onTagUpdate: handleUpdate, onTagDelete: props.onTagDelete, onChange: handleChange, onHoveredChange: setHovered, onEventsCaptureChange: setShouldCaptureEvents, onArrowsCaptureChange: setShouldCaptureArrowEvents, enableCreate: props.enableCreate, enableUpdate: props.enableUpdate, enableDelete: props.enableDelete, enableColorChange: props.enableColorChange, transitionDuration: transitionDuration, transition: props.transition, transitionTimingFunction: props.transitionTimingFunction, themeOverride: props.themeOverride })));
}
