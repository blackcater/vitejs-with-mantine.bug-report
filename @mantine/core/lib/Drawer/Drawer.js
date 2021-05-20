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
import React, { useEffect } from 'react';
import cx from 'clsx';
import { useClickOutside, useScrollLock, useMergedRef, useReducedMotion, useFocusTrap, } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { GroupedTransition } from '../Transition/Transition';
import useStyles, { sizes } from './Drawer.styles';
export const DRAWER_SIZES = sizes;
const transitions = {
    top: 'slide-down',
    bottom: 'slide-up',
    left: 'slide-right',
    right: 'slide-left',
};
export function Drawer(_a) {
    var { opened, onClose, className, themeOverride, position = 'left', size = 'md', noFocusTrap = false, noScrollLock = false, noCloseOnClickOutside = false, noCloseOnEscape = false, transition, transitionDuration = 250, transitionTimingFunction = 'ease', zIndex = 1000, overlayColor, overlayOpacity, children, noOverlay = false, shadow = 'md', padding = 0 } = _a, others = __rest(_a, ["opened", "onClose", "className", "themeOverride", "position", "size", "noFocusTrap", "noScrollLock", "noCloseOnClickOutside", "noCloseOnEscape", "transition", "transitionDuration", "transitionTimingFunction", "zIndex", "overlayColor", "overlayOpacity", "children", "noOverlay", "shadow", "padding"]);
    const theme = useMantineTheme(themeOverride);
    const duration = useReducedMotion() ? 1 : transitionDuration;
    const classes = useStyles({ theme, size, position });
    const focusTrapRef = useFocusTrap(!noFocusTrap);
    useScrollLock(opened && !noScrollLock);
    const clickOutsideRef = useClickOutside(() => opened && !noCloseOnClickOutside && onClose());
    const drawerTransition = transition || transitions[position];
    const _overlayOpacity = typeof overlayOpacity === 'number'
        ? overlayOpacity
        : theme.colorScheme === 'dark'
            ? 0.85
            : 0.75;
    const closeOnEscape = (event) => {
        if (noFocusTrap && event.code === 'Escape' && !noCloseOnEscape) {
            onClose();
        }
    };
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        // onKeyDownCapture event will not fire when focus trap is not active
        if (noFocusTrap) {
            window.addEventListener('keydown', closeOnEscape);
            return () => window.removeEventListener('keydown', closeOnEscape);
        }
    }, [noFocusTrap]);
    return (React.createElement(GroupedTransition, { mounted: opened, transitions: {
            overlay: { duration: duration / 2, transition: 'fade', timingFunction: 'ease' },
            drawer: {
                duration,
                transition: drawerTransition,
                timingFunction: transitionTimingFunction,
            },
        } }, (styles) => (React.createElement("div", Object.assign({ className: cx(classes.wrapper, { [classes.noOverlay]: noOverlay }, className), role: "dialog", "aria-modal": true }, others),
        React.createElement(Paper, { className: cx(classes.drawer, className), elementRef: useMergedRef(focusTrapRef, clickOutsideRef), style: Object.assign(Object.assign({}, styles.drawer), { zIndex: zIndex + 1 }), radius: 0, tabIndex: -1, onKeyDownCapture: (event) => event.nativeEvent.code === 'Escape' && !noCloseOnEscape && onClose(), shadow: shadow, padding: padding, themeOverride: themeOverride }, children),
        !noOverlay && (React.createElement("div", { style: styles.overlay },
            React.createElement(Overlay, { opacity: _overlayOpacity, zIndex: zIndex, color: overlayColor ||
                    (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black) })))))));
}
Drawer.displayName = '@mantine/core/Drawer';
