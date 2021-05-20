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
import React, { useState, useRef, cloneElement } from 'react';
import { useId, useClickOutside, useMergedRef } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { MenuIcon } from './MenuIcon';
import { MenuBody } from './MenuBody/MenuBody';
import { sizes } from './MenuBody/MenuBody.styles';
import { MenuItem } from './MenuItem/MenuItem';
export { MenuBody, MenuItem };
export const MENU_SIZES = sizes;
const defaultControl = (React.createElement(ActionIcon, null,
    React.createElement(MenuIcon, null)));
export function Menu(_a) {
    var { control = defaultControl, children, onClose, onOpen, opened, themeOverride, menuPosition = { top: 0, left: 0 }, style, menuId, menuBodyProps = {}, closeOnItemClick = true, transitionDuration = 250, size = 'md', shadow = 'md', transition = 'skew-up', transitionTimingFunction, menuButtonLabel, controlRefProp = 'elementRef', zIndex = 1000, elementRef } = _a, others = __rest(_a, ["control", "children", "onClose", "onOpen", "opened", "themeOverride", "menuPosition", "style", "menuId", "menuBodyProps", "closeOnItemClick", "transitionDuration", "size", "shadow", "transition", "transitionTimingFunction", "menuButtonLabel", "controlRefProp", "zIndex", "elementRef"]);
    const controlRefFocusTimeout = useRef();
    const controlRef = useRef(null);
    const uuid = useId(menuId);
    const controlled = typeof opened === 'boolean';
    const [_opened, setOpened] = useState(false);
    const menuOpened = controlled ? opened : _opened;
    const handleClose = () => {
        setOpened(false);
        typeof onClose === 'function' && onClose();
        controlRefFocusTimeout.current = window.setTimeout(() => {
            var _a;
            typeof ((_a = controlRef.current) === null || _a === void 0 ? void 0 : _a.focus) === 'function' && controlRef.current.focus();
        }, transitionDuration + 10);
    };
    const handleOpen = () => {
        setOpened(true);
        window.clearTimeout(controlRefFocusTimeout.current);
        typeof onOpen === 'function' && onOpen();
    };
    const wrapperRef = useClickOutside(() => menuOpened && handleClose());
    const toggleMenu = () => (opened || _opened ? handleClose() : handleOpen());
    const menuControl = cloneElement(control, {
        onClick: toggleMenu,
        role: 'button',
        'aria-haspopup': 'menu',
        'aria-expanded': menuOpened,
        'aria-controls': uuid,
        'aria-label': menuButtonLabel,
        'data-mantine-menu': true,
        title: menuButtonLabel,
        [controlRefProp]: useMergedRef(controlRef, elementRef),
    });
    return (React.createElement("div", Object.assign({ "data-mantine-composable": true, ref: wrapperRef, style: Object.assign({ display: 'inline-block', position: 'relative' }, style) }, others),
        menuControl,
        React.createElement(MenuBody, Object.assign({}, menuBodyProps, { opened: menuOpened, onClose: handleClose, id: uuid, themeOverride: themeOverride, closeOnClickOutside: false, closeOnItemClick: closeOnItemClick, style: Object.assign(Object.assign({}, menuBodyProps.style), menuPosition), transitionDuration: transitionDuration, transition: transition, transitionTimingFunction: transitionTimingFunction, size: size, shadow: shadow, zIndex: zIndex }), children)));
}
Menu.displayName = '@mantine/core/Menu';
