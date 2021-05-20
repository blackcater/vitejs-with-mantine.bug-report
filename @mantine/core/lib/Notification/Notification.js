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
import { Paper } from '../Paper/Paper';
import { Text } from '../Text/Text';
import { Loader } from '../Loader/Loader';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { CloseIcon } from '../Modal/CloseIcon';
import useStyles from './Notification.styles';
export function Notification(_a) {
    var { className, color = 'blue', loading = false, disallowClose = false, title, icon, children, onClose, closeButtonProps, themeOverride } = _a, others = __rest(_a, ["className", "color", "loading", "disallowClose", "title", "icon", "children", "onClose", "closeButtonProps", "themeOverride"]);
    const classes = useStyles({ color, disallowClose, theme: useMantineTheme(themeOverride) });
    return (React.createElement(Paper, Object.assign({ shadow: "lg", padding: "sm", className: cx(classes.notification, { [classes.withIcon]: icon || loading }, className), role: "alert", themeOverride: themeOverride }, others),
        icon && !loading && (React.createElement("div", { "data-mantine-icon": true, className: classes.icon }, icon)),
        loading && React.createElement(Loader, { size: 28, color: color, className: classes.loader }),
        React.createElement("div", { className: classes.body },
            title && (React.createElement(Text, { "data-mantine-title": true, className: classes.title, size: "sm", weight: 500, themeOverride: themeOverride }, title)),
            React.createElement(Text, { "data-mantine-body": true, className: classes.description, size: "sm", themeOverride: themeOverride }, children)),
        !disallowClose && (React.createElement(ActionIcon, Object.assign({}, closeButtonProps, { color: "gray", onClick: onClose, themeOverride: themeOverride }),
            React.createElement(CloseIcon, null)))));
}
Notification.displayName = '@mantine/core/Notification';
