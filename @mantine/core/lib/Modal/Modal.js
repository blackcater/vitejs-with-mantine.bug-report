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
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { useClickOutside, useReducedMotion, useId, useScrollLock, useFocusTrap, } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import { Overlay } from '../Overlay/Overlay';
import { GroupedTransition } from '../Transition/Transition';
import { CloseIcon } from './CloseIcon';
import useStyles, { sizes } from './Modal.styles';
export const MODAL_SIZES = sizes;
export function Modal(_a) {
    var { className, opened, themeOverride, title, onClose, children, hideCloseButton = false, overlayOpacity, size = 'md', transitionDuration = 300, closeButtonLabel, overlayColor, zIndex = 1000, overflow = 'outside', transition = 'slide-down', id } = _a, others = __rest(_a, ["className", "opened", "themeOverride", "title", "onClose", "children", "hideCloseButton", "overlayOpacity", "size", "transitionDuration", "closeButtonLabel", "overlayColor", "zIndex", "overflow", "transition", "id"]);
    const baseId = useId(id);
    const titleId = `${baseId}-title`;
    const bodyId = `${baseId}-body`;
    const reduceMotion = useReducedMotion();
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ size, overflow, theme });
    const clickOutsideRef = useClickOutside(onClose);
    const focusTrapRef = useFocusTrap();
    const duration = reduceMotion ? 1 : transitionDuration;
    const _overlayOpacity = typeof overlayOpacity === 'number'
        ? overlayOpacity
        : theme.colorScheme === 'dark'
            ? 0.85
            : 0.75;
    useScrollLock(opened);
    return (React.createElement(GroupedTransition, { mounted: opened, transitions: {
            modal: { duration, transition },
            overlay: { duration: duration / 2, transition: 'fade', timingFunction: 'ease' },
        } }, (styles) => (React.createElement("div", Object.assign({ className: cx(classes.wrapper, className) }, others),
        React.createElement("div", { "data-mantine-modal-inner": true, className: classes.inner, onKeyDownCapture: (event) => event.nativeEvent.code === 'Escape' && onClose(), style: { zIndex: zIndex + 1 }, ref: focusTrapRef },
            React.createElement(Paper, { className: classes.modal, shadow: "lg", role: "dialog", "aria-labelledby": titleId, "aria-describedby": bodyId, "aria-modal": true, style: styles.modal, elementRef: clickOutsideRef, tabIndex: -1 },
                (title || !hideCloseButton) && (React.createElement("div", { "data-mantine-modal-header": true, className: classes.header },
                    React.createElement(Text, { id: titleId, "data-mantine-modal-title": true, className: classes.title }, title),
                    !hideCloseButton && (React.createElement(ActionIcon, { onClick: onClose, "aria-label": closeButtonLabel },
                        React.createElement(CloseIcon, null))))),
                React.createElement("div", { id: bodyId, className: classes.body }, children))),
        React.createElement("div", { style: styles.overlay },
            React.createElement(Overlay, { color: overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black), opacity: _overlayOpacity, zIndex: zIndex }))))));
}
Modal.displayName = '@mantine/core/Modal';
