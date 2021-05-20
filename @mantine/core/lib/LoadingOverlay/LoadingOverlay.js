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
import { useReducedMotion } from '@mantine/hooks';
import { Overlay } from '../Overlay/Overlay';
import { Transition } from '../Transition/Transition';
import { Loader } from '../Loader/Loader';
import useStyles from './LoadingOverlay.styles';
export function LoadingOverlay(_a) {
    var { className, visible, loaderProps = {}, overlayOpacity = 0.75, overlayColor, themeOverride, transitionDuration = 200, zIndex = 1000, style } = _a, others = __rest(_a, ["className", "visible", "loaderProps", "overlayOpacity", "overlayColor", "themeOverride", "transitionDuration", "zIndex", "style"]);
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles();
    const reduceMotion = useReducedMotion();
    const duration = reduceMotion ? 1 : transitionDuration;
    return (React.createElement(Transition, { duration: duration, mounted: visible, transition: "fade", themeOverride: themeOverride }, (transitionStyles) => (React.createElement("div", Object.assign({ className: cx(classes.loadingOverlay, className), style: Object.assign(Object.assign(Object.assign({}, transitionStyles), style), { zIndex }) }, others),
        React.createElement(Loader, Object.assign({ themeOverride: themeOverride, style: { zIndex: zIndex + 1 } }, loaderProps)),
        React.createElement(Overlay, { opacity: overlayOpacity, color: overlayColor || (theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white), zIndex: zIndex })))));
}
LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';
