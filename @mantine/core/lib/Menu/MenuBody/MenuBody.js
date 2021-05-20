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
import React, { useState, useRef, useEffect } from 'react';
import cx from 'clsx';
import { useReducedMotion, useClickOutside, useFocusTrap } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { Transition } from '../../Transition/Transition';
import { Paper } from '../../Paper/Paper';
import { Hr } from '../../Hr/Hr';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuButton } from '../MenuButton/MenuButton';
import useStyles from './MenuBody.styles';
function getPreviousItem(active, items) {
    for (let i = active - 1; i >= 0; i -= 1) {
        if (!items[i].props.disabled && items[i].type === MenuItem) {
            return i;
        }
    }
    return active;
}
function getNextItem(active, items) {
    for (let i = active + 1; i < items.length; i += 1) {
        if (!items[i].props.disabled && items[i].type === MenuItem) {
            return i;
        }
    }
    return active;
}
function findInitialItem(items) {
    for (let i = 0; i < items.length; i += 1) {
        if (!items[i].props.disabled && items[i].type === MenuItem) {
            return i;
        }
    }
    return -1;
}
function MenuBody(_a) {
    var { className, themeOverride, opened, onClose, transition = 'skew-up', transitionDuration = 250, transitionTimingFunction, style, children, size = 'md', shadow = 'md', closeOnClickOutside = true, closeOnItemClick = true, zIndex = 1000 } = _a, others = __rest(_a, ["className", "themeOverride", "opened", "onClose", "transition", "transitionDuration", "transitionTimingFunction", "style", "children", "size", "shadow", "closeOnClickOutside", "closeOnItemClick", "zIndex"]);
    const items = React.Children.toArray(children).filter((item) => item.type === MenuItem || item.type === Hr);
    const hoveredTimeout = useRef();
    const buttonsRefs = useRef({});
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ size, theme });
    const reduceMotion = useReducedMotion();
    const duration = reduceMotion ? 0 : transitionDuration;
    const [hovered, setHovered] = useState(findInitialItem(items));
    const focusTrapRef = useFocusTrap();
    useEffect(() => {
        if (!opened) {
            hoveredTimeout.current = window.setTimeout(() => {
                setHovered(findInitialItem(items));
            }, duration);
        }
        else {
            window.clearTimeout(hoveredTimeout.current);
        }
    }, [opened]);
    const menuRef = useClickOutside(() => closeOnClickOutside && onClose());
    const handleKeyDown = (event) => {
        const { code } = event.nativeEvent;
        if (code === 'Escape') {
            onClose();
        }
        if (code === 'Tab') {
            event.preventDefault();
        }
        if (code === 'ArrowUp') {
            event.preventDefault();
            const prevIndex = getPreviousItem(hovered, items);
            setHovered(prevIndex);
            buttonsRefs.current[prevIndex].focus();
        }
        if (code === 'ArrowDown') {
            event.preventDefault();
            const nextIndex = getNextItem(hovered, items);
            setHovered(nextIndex);
            buttonsRefs.current[nextIndex].focus();
        }
    };
    if (items.length === 0) {
        return null;
    }
    const buttons = items.map((item, index) => {
        if (item.type === MenuItem) {
            return (React.createElement(MenuButton, Object.assign({}, item.props, { key: index, hovered: hovered === index, onHover: () => setHovered(-1), onClick: (event) => {
                    if (closeOnItemClick) {
                        onClose();
                    }
                    if (typeof item.props.onClick === 'function') {
                        item.props.onClick(event);
                    }
                }, elementRef: (node) => {
                    buttonsRefs.current[index] = node;
                } })));
        }
        if (item.type === Hr) {
            return React.createElement(Hr, { key: index, variant: "solid", className: classes.hr });
        }
        return null;
    });
    return (React.createElement(Transition, { mounted: opened, duration: duration, transition: transition, timingFunction: transitionTimingFunction, themeOverride: themeOverride }, (transitionStyles) => (React.createElement(Paper, Object.assign({ shadow: shadow, className: cx(classes.menu, className), style: Object.assign(Object.assign(Object.assign({}, style), transitionStyles), { zIndex }), onKeyDownCapture: handleKeyDown, elementRef: menuRef, role: "menu", "aria-orientation": "vertical" }, others),
        React.createElement("div", { ref: focusTrapRef }, buttons)))));
}
MenuBody.displayName = '@mantine/core/MenuBody';
export { MenuBody };
