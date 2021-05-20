(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('clsx'), require('react-transition-group'), require('@mantine/core'), require('@mantine/hooks'), require('react-jss')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'clsx', 'react-transition-group', '@mantine/core', '@mantine/hooks', 'react-jss'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@mantine/notifications'] = {}, global.React, global.cx, global.reactTransitionGroup, global['@mantine/core'], global['@mantine/hooks'], global.reactJss));
}(this, (function (exports, React, cx, reactTransitionGroup, core, hooks, reactJss) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

  const NotificationsContext = React.createContext(null);
  NotificationsContext.displayName = "@mantine/notifications/NotificationsContext";

  function useNotifications() {
    const context = React.useContext(NotificationsContext);
    if (!context) {
      throw new Error("@mantine/notifications: NotificationsProvider was not found in tree");
    }
    return context;
  }

  function getPositionStyles([vertical, horizontal], containerWidth, spacing) {
    const styles = {};
    vertical === "top" && (styles.top = spacing);
    vertical === "bottom" && (styles.bottom = spacing);
    horizontal === "left" && (styles.left = spacing);
    horizontal === "right" && (styles.right = spacing);
    horizontal === "center" && (styles.left = `calc(50% - ${containerWidth / 2}px)`);
    return styles;
  }

  var __defProp$2 = Object.defineProperty;
  var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
  var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
  var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$2 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    if (__getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(b)) {
        if (__propIsEnum$2.call(b, prop))
          __defNormalProp$2(a, prop, b[prop]);
      }
    return a;
  };
  const transforms = {
    left: "translateX(-100%)",
    right: "translateX(100%)",
    "top-center": "translateY(-100%)",
    "bottom-center": "translateY(100%)"
  };
  const noTransform = {
    left: "translateX(0)",
    right: "translateX(0)",
    "top-center": "translateY(0)",
    "bottom-center": "translateY(0)"
  };
  function getNotificationStateStyles({
    state,
    maxHeight,
    positioning,
    transitionDuration
  }) {
    const [vertical, horizontal] = positioning;
    const property = horizontal === "center" ? `${vertical}-center` : horizontal;
    const commonStyles = {
      opacity: 0,
      maxHeight,
      transform: transforms[property],
      transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
      transitionTimingFunction: "cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",
      transitionProperty: "opacity, transform, max-height"
    };
    const inState = {
      opacity: 1,
      transform: noTransform[property]
    };
    const outState = {
      opacity: 0,
      maxHeight: 0,
      transform: transforms[property]
    };
    const transitionStyles = {
      entering: inState,
      entered: inState,
      exiting: outState,
      exited: outState
    };
    return __spreadValues$2(__spreadValues$2({}, commonStyles), transitionStyles[state]);
  }

  function getAutoClose(autoClose, notification) {
    if (typeof notification.autoClose === "number") {
      return notification.autoClose;
    }
    if (notification.autoClose === false || autoClose === false) {
      return false;
    }
    return autoClose;
  }

  function NotificationContainer({
    className,
    style,
    themeOverride,
    notification,
    autoClose,
    onHide
  }) {
    const autoCloseTimeout = getAutoClose(autoClose, notification);
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

  var useStyles = reactJss.createUseStyles({
    notifications: ({theme}) => ({
      width: `calc(100% - ${theme.spacing.md * 2}px)`,
      boxSizing: "border-box",
      position: "fixed",
      zIndex: 1e3
    }),
    notification: ({theme}) => ({
      "& + &": {
        marginTop: theme.spacing.sm
      }
    })
  }, {link: true});

  var __defProp$1 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
  var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
  var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    if (__getOwnPropSymbols$1)
      for (var prop of __getOwnPropSymbols$1(b)) {
        if (__propIsEnum$1.call(b, prop))
          __defNormalProp$1(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  function useNotificationsState({limit}) {
    const {state, queue, update, cleanQueue} = hooks.useQueue({
      initialValues: [],
      limit
    });
    const showNotification = (notification) => {
      const id = notification.id || hooks.randomId();
      update((notifications) => {
        if (notification.id && notifications.some((n) => n.id === notification.id)) {
          return notifications;
        }
        return [...notifications, __spreadProps(__spreadValues$1({}, notification), {id})];
      });
      return id;
    };
    const updateNotification = (id, notification) => update((notifications) => {
      const index = notifications.findIndex((n) => n.id === id);
      if (index === -1) {
        return notifications;
      }
      const newNotifications = [...notifications];
      newNotifications[index] = notification;
      return newNotifications;
    });
    const hideNotification = (id) => update((notifications) => notifications.filter((notification) => {
      if (notification.id === id) {
        typeof notification.onClose === "function" && notification.onClose(notification);
        return false;
      }
      return true;
    }));
    const clean = () => update(() => []);
    return {
      notifications: state,
      queue,
      showNotification,
      updateNotification,
      hideNotification,
      cleanQueue,
      clean
    };
  }

  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const POSITIONS = [
    "top-left",
    "top-right",
    "top-center",
    "bottom-left",
    "bottom-right",
    "bottom-center"
  ];
  function NotificationsProvider(_a) {
    var _b = _a, {
      className,
      position = "bottom-right",
      themeOverride,
      autoClose = 4e3,
      transitionDuration = 250,
      containerWidth = 440,
      notificationMaxHeight = 200,
      limit = 5,
      zIndex = 5e3,
      style,
      children
    } = _b, others = __objRest(_b, [
      "className",
      "position",
      "themeOverride",
      "autoClose",
      "transitionDuration",
      "containerWidth",
      "notificationMaxHeight",
      "limit",
      "zIndex",
      "style",
      "children"
    ]);
    const {
      notifications,
      showNotification,
      updateNotification,
      hideNotification,
      clean,
      cleanQueue
    } = useNotificationsState({limit});
    const reduceMotion = hooks.useReducedMotion();
    const duration = reduceMotion ? 1 : transitionDuration;
    const theme = core.useMantineTheme(themeOverride);
    const classes = useStyles({theme});
    const positioning = (POSITIONS.includes(position) ? position : "bottom-right").split("-");
    const items = notifications.map((notification) => /* @__PURE__ */ React__default.createElement(reactTransitionGroup.Transition, {
      key: notification.id,
      timeout: duration,
      unmountOnExit: true,
      mountOnEnter: true,
      onEnter: (node) => node.offsetHeight
    }, (state) => /* @__PURE__ */ React__default.createElement(NotificationContainer, {
      notification,
      onHide: hideNotification,
      className: classes.notification,
      autoClose,
      style: __spreadValues({}, getNotificationStateStyles({
        state,
        positioning,
        transitionDuration: duration,
        maxHeight: notificationMaxHeight
      }))
    })));
    return /* @__PURE__ */ React__default.createElement(NotificationsContext.Provider, {
      value: {
        notifications,
        showNotification,
        hideNotification,
        updateNotification,
        clean,
        cleanQueue
      }
    }, /* @__PURE__ */ React__default.createElement(core.Portal, {
      zIndex
    }, /* @__PURE__ */ React__default.createElement("div", __spreadValues({
      className: cx__default(classes.notifications, className),
      style: __spreadValues(__spreadValues({
        maxWidth: containerWidth
      }, getPositionStyles(positioning, containerWidth, theme.spacing.md)), style)
    }, others), /* @__PURE__ */ React__default.createElement(reactTransitionGroup.TransitionGroup, null, items))), children);
  }
  NotificationsProvider.displayName = "@mantine/notifications/NotificationsProvider";

  exports.NotificationsProvider = NotificationsProvider;
  exports.useNotifications = useNotifications;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
