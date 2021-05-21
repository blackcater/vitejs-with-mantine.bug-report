'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var getAutoClose = require('./get-auto-close/get-auto-close.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function NotificationContainer({
  className,
  style,
  themeOverride,
  notification,
  autoClose,
  onHide
}) {
  const autoCloseTimeout = getAutoClose['default'](autoClose, notification);
  const hideTimeout = React.useRef();
  const handleHide = () => {
    onHide(notification.id);
    window.clearTimeout(hideTimeout.current);
  };
  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };
  const handleDelayedHide = () => {
    if (typeof autoCloseTimeout === "number") {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
    }
  };
  React.useEffect(() => {
    if (typeof notification.onOpen === "function") {
      notification.onOpen(notification);
    }
  }, []);
  React.useEffect(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, [autoClose, notification.autoClose]);
  return /* @__PURE__ */ React__default.createElement(core.Notification, {
    style,
    className,
    title: notification.title,
    themeOverride,
    onClose: handleHide,
    color: notification.color,
    icon: notification.icon,
    loading: notification.loading,
    disallowClose: notification.disallowClose,
    onMouseEnter: cancelDelayedHide,
    onMouseLeave: handleDelayedHide
  }, notification.message);
}
NotificationContainer.displayName = "@mantine/notifications/NotificationContainer";

exports.default = NotificationContainer;
//# sourceMappingURL=NotificationContainer.js.map
