import React, { useEffect, useRef } from 'react';
import { Notification } from '@mantine/core';
import getAutoClose from './get-auto-close/get-auto-close';
export default function NotificationContainer({ className, style, themeOverride, notification, autoClose, onHide, }) {
    const autoCloseTimeout = getAutoClose(autoClose, notification);
    const hideTimeout = useRef();
    const handleHide = () => {
        onHide(notification.id);
        window.clearTimeout(hideTimeout.current);
    };
    const cancelDelayedHide = () => {
        clearTimeout(hideTimeout.current);
    };
    const handleDelayedHide = () => {
        if (typeof autoCloseTimeout === 'number') {
            hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
        }
    };
    useEffect(() => {
        if (typeof notification.onOpen === 'function') {
            notification.onOpen(notification);
        }
    }, []);
    useEffect(() => {
        handleDelayedHide();
        return cancelDelayedHide;
    }, [autoClose, notification.autoClose]);
    return (React.createElement(Notification, { style: style, className: className, title: notification.title, themeOverride: themeOverride, onClose: handleHide, color: notification.color, icon: notification.icon, loading: notification.loading, disallowClose: notification.disallowClose, onMouseEnter: cancelDelayedHide, onMouseLeave: handleDelayedHide }, notification.message));
}
NotificationContainer.displayName = '@mantine/notifications/NotificationContainer';
