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
import { Transition, TransitionGroup } from 'react-transition-group';
import { useMantineTheme, Portal } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import { NotificationsContext } from '../Notifications.context';
import getPositionStyles from './get-position-styles/get-position-styles';
import getNotificationStateStyles from './get-notification-state-styles/get-notification-state-styles';
import NotificationContainer from '../NotificationContainer/NotificationContainer';
import useStyles from './NotificationsProvider.styles';
import useNotificationsState from './use-notifications-state/use-notifications-state';
const POSITIONS = [
    'top-left',
    'top-right',
    'top-center',
    'bottom-left',
    'bottom-right',
    'bottom-center',
];
export function NotificationsProvider(_a) {
    var { className, position = 'bottom-right', themeOverride, autoClose = 4000, transitionDuration = 250, containerWidth = 440, notificationMaxHeight = 200, limit = 5, zIndex = 5000, style, children } = _a, others = __rest(_a, ["className", "position", "themeOverride", "autoClose", "transitionDuration", "containerWidth", "notificationMaxHeight", "limit", "zIndex", "style", "children"]);
    const { notifications, showNotification, updateNotification, hideNotification, clean, cleanQueue, } = useNotificationsState({ limit });
    const reduceMotion = useReducedMotion();
    const duration = reduceMotion ? 1 : transitionDuration;
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ theme });
    const positioning = (POSITIONS.includes(position) ? position : 'bottom-right').split('-');
    const items = notifications.map((notification) => (React.createElement(Transition, { key: notification.id, timeout: duration, unmountOnExit: true, mountOnEnter: true, onEnter: (node) => node.offsetHeight }, (state) => (React.createElement(NotificationContainer, { notification: notification, onHide: hideNotification, className: classes.notification, autoClose: autoClose, style: Object.assign({}, getNotificationStateStyles({
            state,
            positioning,
            transitionDuration: duration,
            maxHeight: notificationMaxHeight,
        })) })))));
    return (React.createElement(NotificationsContext.Provider, { value: {
            notifications,
            showNotification,
            hideNotification,
            updateNotification,
            clean,
            cleanQueue,
        } },
        React.createElement(Portal, { zIndex: zIndex },
            React.createElement("div", Object.assign({ className: cx(classes.notifications, className), style: Object.assign(Object.assign({ maxWidth: containerWidth }, getPositionStyles(positioning, containerWidth, theme.spacing.md)), style) }, others),
                React.createElement(TransitionGroup, null, items))),
        children));
}
NotificationsProvider.displayName = '@mantine/notifications/NotificationsProvider';
