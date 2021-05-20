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
import { useMantineTheme, getThemeColor } from '@mantine/theme';
import { Text } from '../Text/Text';
export function highlighter(value, highlightPart) {
    const normalizedValue = value.trim().toLowerCase();
    const normalizedHighlight = highlightPart.trim().toLowerCase();
    const diff = highlightPart.length - normalizedHighlight.length;
    const highlightLength = highlightPart.length - diff;
    const highlightIndex = normalizedValue.indexOf(normalizedHighlight);
    if (highlightIndex === -1) {
        return { start: value, highlighted: '', end: '' };
    }
    const start = value.slice(0, highlightIndex);
    const highlighted = value.slice(highlightIndex, highlightIndex + highlightLength);
    const end = value.slice(highlightIndex + highlightLength);
    return { start, highlighted, end };
}
export function Highlight(_a) {
    var { children, highlight, component, themeOverride, highlightColor = 'yellow' } = _a, others = __rest(_a, ["children", "highlight", "component", "themeOverride", "highlightColor"]);
    const theme = useMantineTheme(themeOverride);
    const color = getThemeColor({
        theme,
        color: highlightColor,
        shade: 2,
    });
    const { start, end, highlighted } = highlighter(children, highlight);
    return (React.createElement(Text, Object.assign({ component: component, themeOverride: themeOverride }, others),
        !!start && start,
        !!highlighted && (React.createElement("mark", { style: {
                backgroundColor: color,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
            } }, highlighted)),
        !!end && end));
}
Highlight.displayName = '@mantine/core/Highlight';
