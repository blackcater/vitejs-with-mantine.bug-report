import React from 'react';
import cx from 'clsx';
import { useFocusTrap } from '@mantine/hooks';
import { TextInput, Text, Badge, useMantineTheme, } from '@mantine/core';
import { TagItem } from '../TagItem/TagItem';
import useStyles from './TagsList.styles';
export function TagsList({ searchQuery, searchPlaceholder, description, hovered, data, value, canCreate, createLabel, deleteLabel, saveLabel, editTagLabel, tagNameEditLabel, colors, createColor, onSearchChange, onCreate, onTagDelete, onTagUpdate, onChange, onHoveredChange, onEventsCaptureChange, onArrowsCaptureChange, themeOverride, enableCreate, enableUpdate, enableDelete, enableColorChange, transitionDuration, transition, transitionTimingFunction, }) {
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });
    const focusTrapRef = useFocusTrap();
    const tags = data.map((tag, index) => (React.createElement(TagItem, { key: tag.id, index: index, hovered: hovered, data: tag, selected: value, saveLabel: saveLabel, tagNameEditLabel: tagNameEditLabel, editTagLabel: editTagLabel, onSelect: onChange, onTagUpdate: onTagUpdate, onHover: onHoveredChange, colors: colors, deleteLabel: deleteLabel, onTagDelete: onTagDelete, onEventsCaptureChange: onEventsCaptureChange, enableUpdate: enableUpdate, enableDelete: enableDelete, enableColorChange: enableColorChange, transition: transition, transitionTimingFunction: transitionTimingFunction, transitionDuration: transitionDuration, themeOverride: themeOverride })));
    return (React.createElement("div", { className: classes.tagsList, ref: focusTrapRef, role: "listbox" },
        React.createElement(TextInput, { themeOverride: themeOverride, className: classes.searchInput, placeholder: searchPlaceholder, value: searchQuery, onChange: (event) => onSearchChange(event.currentTarget.value), onFocus: () => onArrowsCaptureChange(true), onBlur: () => {
                onHoveredChange(-1);
                onArrowsCaptureChange(false);
            } }),
        description && (React.createElement(Text, { color: "gray", size: "sm", className: classes.description, themeOverride: themeOverride }, description)),
        React.createElement("div", null,
            tags,
            enableCreate && canCreate && (React.createElement("button", { className: cx(classes.createControl, {
                    [classes.createControlHovered]: hovered === data.length,
                }), type: "button", onClick: onCreate, onMouseEnter: () => onHoveredChange(data.length) },
                React.createElement("span", { className: classes.createControlLabel }, createLabel || '+'),
                React.createElement(Badge, { variant: "light", className: classes.createControlBadge, color: createColor, style: { cursor: 'pointer' }, themeOverride: themeOverride }, searchQuery))))));
}
TagsList.displayName = '@mantine/tag-picker/TagsList';
