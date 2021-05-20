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
import React, { useRef, useState, useEffect } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { Button } from '../Button/Button';
import useStyles from './Spoiler.styles';
export function Spoiler(_a) {
    var { className, children, maxHeight = 100, hideLabel, showLabel, themeOverride, transitionDuration = 200, controlRef } = _a, others = __rest(_a, ["className", "children", "maxHeight", "hideLabel", "showLabel", "themeOverride", "transitionDuration", "controlRef"]);
    const classes = useStyles({
        transitionDuration: !useReducedMotion() && transitionDuration,
        theme: useMantineTheme(themeOverride),
    });
    const [show, setShowState] = useState(false);
    const [spoiler, setSpoilerState] = useState(false);
    const contentRef = useRef(null);
    const spoilerMoreContent = show ? hideLabel : showLabel;
    useEffect(() => {
        setSpoilerState(maxHeight < contentRef.current.clientHeight);
    }, [maxHeight, children]);
    return (React.createElement("div", Object.assign({ className: cx(classes.spoiler, className) }, others),
        React.createElement("div", { className: classes.content, style: {
                maxHeight: !show ? maxHeight : contentRef.current && contentRef.current.clientHeight,
            } },
            React.createElement("div", { ref: contentRef }, children)),
        spoiler && (React.createElement(Button, { variant: "link", elementRef: controlRef, onClick: () => setShowState((opened) => !opened), themeOverride: themeOverride }, spoilerMoreContent))));
}
Spoiler.displayName = '@mantine/core/Spoiler';
