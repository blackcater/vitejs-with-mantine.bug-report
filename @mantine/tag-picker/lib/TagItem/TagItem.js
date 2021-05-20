import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { ActionIcon, Transition, Badge, useMantineTheme, } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import { MenuIcon } from './MenuIcon';
import { TagEdit } from '../TagEdit/TagEdit';
import useStyles from './TagItem.styles';
export function TagItem({ index, hovered, data, onSelect, onTagUpdate, onHover, deleteLabel, saveLabel, editTagLabel, tagNameEditLabel, colors, selected, onTagDelete, onEventsCaptureChange, themeOverride, enableUpdate, enableDelete, enableColorChange, transitionDuration, transition = 'skew-up', transitionTimingFunction, }) {
    const classes = useStyles({ theme: useMantineTheme(themeOverride) });
    const controlRef = useRef();
    const [editDropdownOpened, setEditDropdownOpened] = useState(false);
    const reduceMotion = useReducedMotion();
    const duration = reduceMotion ? 1 : transitionDuration;
    const openEditDropdown = () => {
        setEditDropdownOpened(true);
        onEventsCaptureChange(false);
    };
    const closeEditDropdown = () => {
        setEditDropdownOpened(false);
        onEventsCaptureChange(true);
        // Focus should be wrapped in setTimeout to prevent multiple keyboard events capturing
        // since edit dropdown has focus trap, control cannot be focused until transition ended + 10ms for buffer
        setTimeout(() => {
            controlRef.current.focus();
        }, transitionDuration + 35);
    };
    return (React.createElement("div", { className: cx(classes.item, { [classes.hovered]: hovered === index }), onMouseEnter: () => onHover(index) },
        React.createElement(Transition, { duration: duration, mounted: editDropdownOpened, transition: transition, timingFunction: transitionTimingFunction, themeOverride: themeOverride }, (transitionStyles) => (React.createElement(TagEdit, { style: transitionStyles, saveLabel: saveLabel, tagNameEditLabel: tagNameEditLabel, onClose: closeEditDropdown, initialValues: data, deleteLabel: deleteLabel, colors: colors, onTagUpdate: onTagUpdate, onTagDelete: onTagDelete, id: data.id, enableDelete: enableDelete, enableColorChange: enableColorChange, themeOverride: themeOverride }))),
        React.createElement("div", { className: classes.body },
            React.createElement("button", { role: "option", type: "button", "aria-selected": !!selected && data.id === selected.id, className: classes.control, onClick: () => onSelect(data) },
                React.createElement("div", { className: classes.controlInner },
                    React.createElement(Badge, { variant: "light", className: classes.badge, color: data.color, fullWidth: true, style: { cursor: 'pointer' }, themeOverride: themeOverride }, data.name))),
            enableUpdate && (React.createElement(ActionIcon, { onClick: openEditDropdown, elementRef: controlRef, themeOverride: themeOverride, "aria-label": editTagLabel },
                React.createElement(MenuIcon, null))))));
}
TagItem.displayName = '@mantine/tag-picker/TagItem';
