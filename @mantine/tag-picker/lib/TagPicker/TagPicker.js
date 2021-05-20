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
import { useClickOutside, useReducedMotion } from '@mantine/hooks';
import { Paper, Transition, Badge, useMantineTheme } from '@mantine/core';
import { TagsList } from '../TagsList/TagsList';
import useStyles from './TagPicker.styles';
export function TagPicker(_a) {
    var { dropdownOpened, openDropdown, closeDropdown, controlRef, value, noValueLabel, themeOverride, transitionDuration, controlId, labelledBy, transition = 'skew-up', transitionTimingFunction } = _a, others = __rest(_a, ["dropdownOpened", "openDropdown", "closeDropdown", "controlRef", "value", "noValueLabel", "themeOverride", "transitionDuration", "controlId", "labelledBy", "transition", "transitionTimingFunction"]);
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ theme });
    const dropdownRef = useClickOutside(closeDropdown);
    const reduceMotion = useReducedMotion();
    const duration = reduceMotion ? 1 : transitionDuration;
    return (React.createElement("div", { className: classes.tagPicker },
        React.createElement("button", { className: classes.control, type: "button", ref: controlRef, onClick: openDropdown, id: controlId, "aria-labelledby": labelledBy, "aria-haspopup": "listbox", "aria-expanded": dropdownOpened },
            React.createElement(Badge, { color: (value && value.color) || 'gray', style: { cursor: 'pointer', display: 'block' }, themeOverride: themeOverride }, (value && value.name) || noValueLabel)),
        React.createElement(Transition, { duration: duration, mounted: dropdownOpened, transition: transition, timingFunction: transitionTimingFunction, themeOverride: themeOverride }, (transitionStyles) => (React.createElement(Paper, { shadow: "sm", className: classes.dropdown, elementRef: dropdownRef, style: transitionStyles, themeOverride: themeOverride, tabIndex: -1 },
            React.createElement(TagsList, Object.assign({ value: value, transition: transition, transitionDuration: transitionDuration, transitionTimingFunction: transitionTimingFunction, themeOverride: themeOverride }, others)))))));
}
