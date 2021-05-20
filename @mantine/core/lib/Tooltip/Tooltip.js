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
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { Transition } from '../Transition/Transition';
import useStyles from './Tooltip.styles';
export function Tooltip(_a) {
    var { className, themeOverride, label, children, opened, delay = 0, gutter = 5, color = 'gray', disabled = false, withArrow = false, arrowSize = 3, position = 'top', placement = 'center', transition = 'slide-up', transitionDuration = 100, zIndex = 1000, transitionTimingFunction, width = 'auto', wrapLines = false, allowPointerEvents = false, elementRef, tooltipRef, tooltipId } = _a, others = __rest(_a, ["className", "themeOverride", "label", "children", "opened", "delay", "gutter", "color", "disabled", "withArrow", "arrowSize", "position", "placement", "transition", "transitionDuration", "zIndex", "transitionTimingFunction", "width", "wrapLines", "allowPointerEvents", "elementRef", "tooltipRef", "tooltipId"]);
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ theme, color, gutter, arrowSize });
    const timeoutRef = useRef();
    const [_opened, setOpened] = useState(false);
    const visible = (typeof opened === 'boolean' ? opened : _opened) && !disabled;
    const duration = useReducedMotion() ? 0 : transitionDuration;
    const handleOpen = () => {
        window.clearTimeout(timeoutRef.current);
        setOpened(true);
    };
    const handleClose = () => {
        if (delay !== 0) {
            timeoutRef.current = window.setTimeout(() => {
                setOpened(false);
            }, delay);
        }
        else {
            setOpened(false);
        }
    };
    return (React.createElement("div", Object.assign({ className: cx(classes.wrapper, className), ref: tooltipRef }, others),
        React.createElement(Transition, { mounted: visible, transition: transition, duration: duration, timingFunction: transitionTimingFunction }, (transitionStyles) => (React.createElement("div", { id: tooltipId, role: "tooltip", style: { zIndex, width, pointerEvents: allowPointerEvents ? 'all' : 'none' }, "data-mantine-tooltip": true, className: cx(classes.tooltip, classes[placement], classes[position]), ref: tooltipRef },
            React.createElement("div", { "data-mantine-tooltip-inner": true, className: cx(classes.tooltipInner, {
                    [classes.withArrow]: withArrow,
                }), style: Object.assign(Object.assign({}, transitionStyles), { whiteSpace: wrapLines ? 'normal' : 'nowrap' }) }, label)))),
        React.createElement("div", { onMouseEnter: handleOpen, onMouseLeave: handleClose }, children)));
}
Tooltip.displayName = '@mantine/core/Tooltip';
