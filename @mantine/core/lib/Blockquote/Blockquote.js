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
import { QuoteIcon } from './QuoteIcon';
import useStyles from './Blockquote.styles';
const defaultIcon = React.createElement(QuoteIcon, null);
export function Blockquote(_a) {
    var { className, color, icon = defaultIcon, cite, children, themeOverride } = _a, others = __rest(_a, ["className", "color", "icon", "cite", "children", "themeOverride"]);
    const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });
    return (React.createElement("blockquote", Object.assign({ className: cx(classes.blockquote, className) }, others),
        React.createElement("div", { className: classes.inner },
            icon && (React.createElement("div", { "data-mantine-icon": true, className: classes.icon }, icon)),
            React.createElement("div", { className: classes.body },
                children,
                cite && React.createElement("cite", { className: classes.cite }, cite)))));
}
Blockquote.displayName = '@mantine/core/Blockquote';
