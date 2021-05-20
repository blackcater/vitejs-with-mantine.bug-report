(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@mantine/theme'), require('react'), require('clsx'), require('react-jss'), require('@mantine/hooks'), require('react-transition-group'), require('react-dom'), require('react-textarea-autosize')) :
  typeof define === 'function' && define.amd ? define(['exports', '@mantine/theme', 'react', 'clsx', 'react-jss', '@mantine/hooks', 'react-transition-group', 'react-dom', 'react-textarea-autosize'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@mantine/core'] = {}, global['@mantine/theme'], global.React, global.cx, global.reactJss, global['@mantine/hooks'], global.reactTransitionGroup, global.ReactDOM, global.TextareaAutosize));
}(this, (function (exports, theme, React, cx, reactJss, hooks, reactTransitionGroup, reactDom, TextareaAutosize) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);
  var TextareaAutosize__default = /*#__PURE__*/_interopDefaultLegacy(TextareaAutosize);

  var __defProp$1g = Object.defineProperty;
  var __defProps$I = Object.defineProperties;
  var __getOwnPropDescs$I = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1g = Object.getOwnPropertySymbols;
  var __hasOwnProp$1g = Object.prototype.hasOwnProperty;
  var __propIsEnum$1g = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1g = (obj, key, value) => key in obj ? __defProp$1g(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1g = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1g.call(b, prop))
        __defNormalProp$1g(a, prop, b[prop]);
    if (__getOwnPropSymbols$1g)
      for (var prop of __getOwnPropSymbols$1g(b)) {
        if (__propIsEnum$1g.call(b, prop))
          __defNormalProp$1g(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$I = (a, b) => __defProps$I(a, __getOwnPropDescs$I(b));
  const sizes$e = {
    xs: 18,
    sm: 22,
    md: 28,
    lg: 34,
    xl: 44
  };
  var useStyles$E = reactJss.createUseStyles({
    filled: ({theme: theme$1, color}) => ({
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
      color: theme$1.white,
      "&:not(:disabled):hover": {
        backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 7})
      },
      "&:disabled": {
        backgroundColor: theme.getThemeColor({
          theme: theme$1,
          color: "gray",
          shade: theme$1.colorScheme === "dark" ? 8 : 1
        })
      }
    }),
    light: ({theme: theme$1, color}) => ({
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 0}),
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme.getThemeColor({theme: theme$1, color, shade: 9}),
      "&:not(:disabled):hover": {
        backgroundColor: theme.getThemeColor({
          theme: theme$1,
          color,
          shade: theme$1.colorScheme === "dark" ? 5 : 1
        })
      },
      "&:disabled": {
        backgroundColor: theme.getThemeColor({
          theme: theme$1,
          color: "gray",
          shade: theme$1.colorScheme === "dark" ? 8 : 1
        })
      }
    }),
    hover: ({theme: theme$1, color}) => ({
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      backgroundColor: "transparent",
      "&:not(:disabled):hover": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[8] : theme.getThemeColor({theme: theme$1, color, shade: 0})
      }
    }),
    transparent: ({theme: theme$1, color}) => ({
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      backgroundColor: "transparent"
    }),
    actionIcon: ({radius, theme: theme$1, size}) => __spreadProps$I(__spreadValues$1g(__spreadValues$1g({}, theme.getFocusStyles(theme$1)), theme.getFontStyles(theme$1)), {
      appearance: "none",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      border: "1px solid transparent",
      boxSizing: "border-box",
      height: theme.getSizeValue({size, sizes: sizes$e}),
      minHeight: theme.getSizeValue({size, sizes: sizes$e}),
      width: theme.getSizeValue({size, sizes: sizes$e}),
      minWidth: theme.getSizeValue({size, sizes: sizes$e}),
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      padding: 0,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "color 100ms ease, background-color 100ms ease",
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        color: theme$1.colors.gray[theme$1.colorScheme === "dark" ? 6 : 4],
        cursor: "not-allowed"
      }
    }),
    outline: ({theme: theme$1, color}) => ({
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      backgroundColor: "transparent",
      borderColor: theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 4 : 6
      }),
      "&:not(:disabled):hover": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[8] : theme.getThemeColor({theme: theme$1, color, shade: 0})
      },
      "&:disabled": {
        borderColor: theme$1.colors.gray[theme$1.colorScheme === "dark" ? 7 : 3]
      }
    })
  }, {link: true});

  var __defProp$1f = Object.defineProperty;
  var __defProps$H = Object.defineProperties;
  var __getOwnPropDescs$H = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1f = Object.getOwnPropertySymbols;
  var __hasOwnProp$1f = Object.prototype.hasOwnProperty;
  var __propIsEnum$1f = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1f = (obj, key, value) => key in obj ? __defProp$1f(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1f = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1f.call(b, prop))
        __defNormalProp$1f(a, prop, b[prop]);
    if (__getOwnPropSymbols$1f)
      for (var prop of __getOwnPropSymbols$1f(b)) {
        if (__propIsEnum$1f.call(b, prop))
          __defNormalProp$1f(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$H = (a, b) => __defProps$H(a, __getOwnPropDescs$H(b));
  var __objRest$O = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$1f.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$1f)
      for (var prop of __getOwnPropSymbols$1f(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$1f.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const ACTION_ICON_SIZES = sizes$e;
  function ActionIcon(_a) {
    var _b = _a, {
      className,
      color = "gray",
      children,
      radius = "sm",
      size = "md",
      variant = "hover",
      themeOverride,
      elementRef
    } = _b, others = __objRest$O(_b, [
      "className",
      "color",
      "children",
      "radius",
      "size",
      "variant",
      "themeOverride",
      "elementRef"
    ]);
    const classes = useStyles$E({
      size,
      radius,
      color,
      theme: theme.useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default.createElement("button", __spreadProps$H(__spreadValues$1f({}, others), {
      "data-mantine-composable": true,
      className: cx__default(classes.actionIcon, classes[variant], className),
      type: "button",
      ref: elementRef
    }), children);
  }
  ActionIcon.displayName = "@mantine/core/ActionIcon";

  var __defProp$1e = Object.defineProperty;
  var __defProps$G = Object.defineProperties;
  var __getOwnPropDescs$G = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1e = Object.getOwnPropertySymbols;
  var __hasOwnProp$1e = Object.prototype.hasOwnProperty;
  var __propIsEnum$1e = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1e = (obj, key, value) => key in obj ? __defProp$1e(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1e = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1e.call(b, prop))
        __defNormalProp$1e(a, prop, b[prop]);
    if (__getOwnPropSymbols$1e)
      for (var prop of __getOwnPropSymbols$1e(b)) {
        if (__propIsEnum$1e.call(b, prop))
          __defNormalProp$1e(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$G = (a, b) => __defProps$G(a, __getOwnPropDescs$G(b));
  var useStyles$D = reactJss.createUseStyles({
    text: ({theme: theme$1, color, variant, size}) => __spreadProps$G(__spreadValues$1e(__spreadValues$1e({}, theme.getFontStyles(theme$1)), theme.getFocusStyles(theme$1)), {
      color: color in theme$1.colors ? theme$1.colors[color][theme$1.colorScheme === "dark" ? 4 : 6] : variant === "link" ? theme$1.colors[theme$1.primaryColor][theme$1.colorScheme === "dark" ? 4 : 6] : theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      fontSize: theme$1.fontSizes[size],
      lineHeight: theme$1.lineHeight,
      textDecoration: "none",
      WebkitTapHighlightColor: "transparent",
      "&:hover": {
        textDecoration: variant === "link" ? "underline" : "none"
      }
    })
  }, {link: true});

  var __defProp$1d = Object.defineProperty;
  var __getOwnPropSymbols$1d = Object.getOwnPropertySymbols;
  var __hasOwnProp$1d = Object.prototype.hasOwnProperty;
  var __propIsEnum$1d = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1d = (obj, key, value) => key in obj ? __defProp$1d(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1d = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1d.call(b, prop))
        __defNormalProp$1d(a, prop, b[prop]);
    if (__getOwnPropSymbols$1d)
      for (var prop of __getOwnPropSymbols$1d(b)) {
        if (__propIsEnum$1d.call(b, prop))
          __defNormalProp$1d(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$N = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$1d.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$1d)
      for (var prop of __getOwnPropSymbols$1d(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$1d.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Text(_a) {
    var _b = _a, {
      className,
      component = "div",
      children,
      size = "md",
      weight,
      transform,
      style,
      color,
      align,
      variant = "text",
      themeOverride,
      elementRef
    } = _b, others = __objRest$N(_b, [
      "className",
      "component",
      "children",
      "size",
      "weight",
      "transform",
      "style",
      "color",
      "align",
      "variant",
      "themeOverride",
      "elementRef"
    ]);
    const classes = useStyles$D({variant, color, size, theme: theme.useMantineTheme(themeOverride)});
    return React__default.createElement(component, __spreadValues$1d({
      className: cx__default(classes.text, className),
      style: __spreadValues$1d({fontWeight: weight, textTransform: transform, textAlign: align}, style),
      ref: elementRef
    }, others), children);
  }
  Text.displayName = "@mantine/core/Text";
  function Anchor(_c) {
    var _d = _c, {
      component = "a"
    } = _d, others = __objRest$N(_d, [
      "component"
    ]);
    return /* @__PURE__ */ React__default.createElement(Text, __spreadValues$1d({
      component,
      variant: "link"
    }, others));
  }
  Anchor.displayName = "@mantine/core/Anchor";

  var useStyles$C = reactJss.createUseStyles({
    paper: ({theme: theme$1, radius, shadow, padding}) => ({
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[7] : theme$1.white,
      boxSizing: "border-box",
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      boxShadow: theme$1.shadows[shadow] || shadow || "none",
      padding: theme.getSizeValue({size: padding, sizes: theme$1.spacing})
    })
  }, {link: true});

  var __defProp$1c = Object.defineProperty;
  var __getOwnPropSymbols$1c = Object.getOwnPropertySymbols;
  var __hasOwnProp$1c = Object.prototype.hasOwnProperty;
  var __propIsEnum$1c = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1c = (obj, key, value) => key in obj ? __defProp$1c(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1c = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1c.call(b, prop))
        __defNormalProp$1c(a, prop, b[prop]);
    if (__getOwnPropSymbols$1c)
      for (var prop of __getOwnPropSymbols$1c(b)) {
        if (__propIsEnum$1c.call(b, prop))
          __defNormalProp$1c(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$M = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$1c.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$1c)
      for (var prop of __getOwnPropSymbols$1c(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$1c.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Paper(_a) {
    var _b = _a, {
      className,
      children,
      padding = 0,
      radius = "sm",
      shadow,
      themeOverride,
      elementRef
    } = _b, others = __objRest$M(_b, [
      "className",
      "children",
      "padding",
      "radius",
      "shadow",
      "themeOverride",
      "elementRef"
    ]);
    const classes = useStyles$C({radius, shadow, padding, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$1c({
      className: cx__default(classes.paper, className),
      ref: elementRef
    }, others), children);
  }
  Paper.displayName = "@mantine/core/Paper";

  var __defProp$1b = Object.defineProperty;
  var __defProps$F = Object.defineProperties;
  var __getOwnPropDescs$F = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1b = Object.getOwnPropertySymbols;
  var __hasOwnProp$1b = Object.prototype.hasOwnProperty;
  var __propIsEnum$1b = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1b = (obj, key, value) => key in obj ? __defProp$1b(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1b = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1b.call(b, prop))
        __defNormalProp$1b(a, prop, b[prop]);
    if (__getOwnPropSymbols$1b)
      for (var prop of __getOwnPropSymbols$1b(b)) {
        if (__propIsEnum$1b.call(b, prop))
          __defNormalProp$1b(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$F = (a, b) => __defProps$F(a, __getOwnPropDescs$F(b));
  const LINE_WIDTH = 4;
  var useStyles$B = reactJss.createUseStyles({
    alert: ({color, theme: theme$1}) => ({
      position: "relative",
      padding: [theme$1.spacing.xs, theme$1.spacing.md],
      paddingLeft: theme$1.spacing.md + theme$1.spacing.xs / 2 + LINE_WIDTH,
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
      border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[2]}`,
      "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: theme$1.spacing.xs,
        bottom: theme$1.spacing.xs,
        left: theme$1.spacing.xs,
        width: LINE_WIDTH,
        borderRadius: LINE_WIDTH,
        backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6})
      }
    }),
    title: ({color, theme: theme$1}) => ({
      boxSizing: "border-box",
      color: theme.getThemeColor({theme: theme$1, color, shade: 6}),
      margin: 0,
      marginBottom: theme$1.spacing.xs / 2,
      textOverflow: "ellipsis",
      overflow: "hidden"
    }),
    body: ({theme: theme$1}) => __spreadProps$F(__spreadValues$1b({}, theme.getFontStyles(theme$1)), {
      lineHeight: theme$1.lineHeight,
      borderBottomLeftRadius: theme$1.radius.sm,
      borderBottomRightRadius: theme$1.radius.sm,
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontSize: theme$1.fontSizes.sm,
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      "&:only-child": {
        borderTopRightRadius: theme$1.radius.sm,
        borderTopLeftRadius: theme$1.radius.sm
      }
    })
  }, {link: true});

  var __defProp$1a = Object.defineProperty;
  var __getOwnPropSymbols$1a = Object.getOwnPropertySymbols;
  var __hasOwnProp$1a = Object.prototype.hasOwnProperty;
  var __propIsEnum$1a = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1a = (obj, key, value) => key in obj ? __defProp$1a(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1a = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1a.call(b, prop))
        __defNormalProp$1a(a, prop, b[prop]);
    if (__getOwnPropSymbols$1a)
      for (var prop of __getOwnPropSymbols$1a(b)) {
        if (__propIsEnum$1a.call(b, prop))
          __defNormalProp$1a(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$L = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$1a.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$1a)
      for (var prop of __getOwnPropSymbols$1a(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$1a.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Alert(_a) {
    var _b = _a, {
      className,
      title,
      children,
      themeOverride,
      color,
      shadow = "sm"
    } = _b, others = __objRest$L(_b, [
      "className",
      "title",
      "children",
      "themeOverride",
      "color",
      "shadow"
    ]);
    const classes = useStyles$B({color, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement(Paper, __spreadValues$1a({
      shadow,
      className: cx__default(classes.alert, className),
      themeOverride
    }, others), title && /* @__PURE__ */ React__default.createElement(Text, {
      themeOverride,
      "data-mantine-alert-title": true,
      weight: 700,
      className: classes.title
    }, title), /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-alert-body": true,
      className: classes.body
    }, children));
  }
  Alert.displayName = "@mantine/core/Alert";

  var __defProp$19 = Object.defineProperty;
  var __defProps$E = Object.defineProperties;
  var __getOwnPropDescs$E = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$19 = Object.getOwnPropertySymbols;
  var __hasOwnProp$19 = Object.prototype.hasOwnProperty;
  var __propIsEnum$19 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$19 = (obj, key, value) => key in obj ? __defProp$19(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$19 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$19.call(b, prop))
        __defNormalProp$19(a, prop, b[prop]);
    if (__getOwnPropSymbols$19)
      for (var prop of __getOwnPropSymbols$19(b)) {
        if (__propIsEnum$19.call(b, prop))
          __defNormalProp$19(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$E = (a, b) => __defProps$E(a, __getOwnPropDescs$E(b));
  function PlaceholderIcon(props) {
    return /* @__PURE__ */ React__default.createElement("svg", __spreadProps$E(__spreadValues$19({}, props), {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ React__default.createElement("path", {
      d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }

  var __defProp$18 = Object.defineProperty;
  var __defProps$D = Object.defineProperties;
  var __getOwnPropDescs$D = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$18 = Object.getOwnPropertySymbols;
  var __hasOwnProp$18 = Object.prototype.hasOwnProperty;
  var __propIsEnum$18 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$18 = (obj, key, value) => key in obj ? __defProp$18(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$18 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$18.call(b, prop))
        __defNormalProp$18(a, prop, b[prop]);
    if (__getOwnPropSymbols$18)
      for (var prop of __getOwnPropSymbols$18(b)) {
        if (__propIsEnum$18.call(b, prop))
          __defNormalProp$18(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$D = (a, b) => __defProps$D(a, __getOwnPropDescs$D(b));
  const sizes$d = {
    xs: 16,
    sm: 26,
    md: 38,
    lg: 56,
    xl: 84
  };
  var useStyles$A = reactJss.createUseStyles({
    avatar: ({size, radius, theme: theme$1}) => ({
      boxSizing: "border-box",
      position: "relative",
      userSelect: "none",
      overflow: "hidden",
      width: theme.getSizeValue({size, sizes: sizes$d}),
      height: theme.getSizeValue({size, sizes: sizes$d}),
      borderRadius: radius ? theme.getSizeValue({size: radius, sizes: theme$1.radius}) : size
    }),
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%"
    },
    placeholder: ({theme: theme$1, size, color}) => __spreadProps$D(__spreadValues$18({}, theme.getFontStyles(theme$1)), {
      fontSize: theme.getSizeValue({size, sizes: sizes$d}) / 2.5,
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 0 : 6}),
      fontWeight: 700,
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 9 : 1}),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      userSelect: "none"
    }),
    placeholderIcon: ({theme: theme$1, color}) => ({
      width: "70%",
      height: "70%",
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 0 : 6})
    })
  }, {link: true});

  var __defProp$17 = Object.defineProperty;
  var __defProps$C = Object.defineProperties;
  var __getOwnPropDescs$C = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$17 = Object.getOwnPropertySymbols;
  var __hasOwnProp$17 = Object.prototype.hasOwnProperty;
  var __propIsEnum$17 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$17 = (obj, key, value) => key in obj ? __defProp$17(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$17 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$17.call(b, prop))
        __defNormalProp$17(a, prop, b[prop]);
    if (__getOwnPropSymbols$17)
      for (var prop of __getOwnPropSymbols$17(b)) {
        if (__propIsEnum$17.call(b, prop))
          __defNormalProp$17(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$C = (a, b) => __defProps$C(a, __getOwnPropDescs$C(b));
  var __objRest$K = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$17.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$17)
      for (var prop of __getOwnPropSymbols$17(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$17.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const AVATAR_SIZES = sizes$d;
  function Avatar(_a) {
    var _b = _a, {
      className,
      size = "md",
      src,
      alt,
      radius = "sm",
      children,
      color = "gray",
      themeOverride
    } = _b, others = __objRest$K(_b, [
      "className",
      "size",
      "src",
      "alt",
      "radius",
      "children",
      "color",
      "themeOverride"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const classes = useStyles$A({color, radius, size, theme: theme$1});
    const [error, setError] = React.useState(!src);
    React.useEffect(() => {
      !src ? setError(true) : setError(false);
    }, [src]);
    return /* @__PURE__ */ React__default.createElement("div", __spreadProps$C(__spreadValues$17({}, others), {
      "data-mantine-composable": true,
      className: cx__default(classes.avatar, className)
    }), error ? /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-placeholder": true,
      className: classes.placeholder,
      title: alt
    }, children || /* @__PURE__ */ React__default.createElement(PlaceholderIcon, {
      className: classes.placeholderIcon
    })) : /* @__PURE__ */ React__default.createElement("img", {
      className: classes.image,
      src,
      alt,
      onError: () => setError(true)
    }));
  }
  Avatar.displayName = "@mantine/core/Avatar";

  var __defProp$16 = Object.defineProperty;
  var __defProps$B = Object.defineProperties;
  var __getOwnPropDescs$B = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$16 = Object.getOwnPropertySymbols;
  var __hasOwnProp$16 = Object.prototype.hasOwnProperty;
  var __propIsEnum$16 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$16 = (obj, key, value) => key in obj ? __defProp$16(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$16 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$16.call(b, prop))
        __defNormalProp$16(a, prop, b[prop]);
    if (__getOwnPropSymbols$16)
      for (var prop of __getOwnPropSymbols$16(b)) {
        if (__propIsEnum$16.call(b, prop))
          __defNormalProp$16(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$B = (a, b) => __defProps$B(a, __getOwnPropDescs$B(b));
  const sizes$c = {
    xs: {
      fontSize: 9,
      height: 16
    },
    sm: {
      fontSize: 10,
      height: 18
    },
    md: {
      fontSize: 11,
      height: 20
    },
    lg: {
      fontSize: 13,
      height: 26
    },
    xl: {
      fontSize: 16,
      height: 32
    }
  };
  const heights$1 = Object.keys(sizes$c).reduce((acc, key) => {
    acc[key] = sizes$c[key].height;
    return acc;
  }, {});
  var useStyles$z = reactJss.createUseStyles({
    leftSection: ({theme}) => ({
      marginRight: theme.spacing.xs / 2
    }),
    rightSection: ({theme}) => ({
      marginLeft: theme.spacing.xs / 2
    }),
    inner: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    badge: ({theme: theme$1, size, fullWidth, radius}) => {
      const {fontSize, height} = size in sizes$c ? sizes$c[size] : sizes$c.md;
      return __spreadProps$B(__spreadValues$16(__spreadValues$16({}, theme.getFocusStyles(theme$1)), theme.getFontStyles(theme$1)), {
        fontSize,
        height,
        WebkitTapHighlightColor: "transparent",
        lineHeight: `${height - 2}px`,
        border: "1px solid transparent",
        textDecoration: "none",
        padding: [0, theme.getSizeValue({size, sizes: theme$1.spacing}) / 1.5],
        boxSizing: "border-box",
        display: fullWidth ? "flex" : "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: fullWidth ? "100%" : "auto",
        textTransform: "uppercase",
        borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
        fontWeight: 700,
        letterSpacing: 0.25,
        cursor: "default",
        textOverflow: "ellipsis",
        overflow: "hidden"
      });
    },
    light: ({theme: theme$1, color}) => ({
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 3 : 0}),
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme.getThemeColor({theme: theme$1, color, shade: 9})
    }),
    filled: ({theme: theme$1, color}) => ({
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 7}),
      color: theme$1.white,
      textShadow: `1px 1px 0 ${theme.getThemeColor({theme: theme$1, color, shade: 9})}`
    }),
    outline: ({theme: theme$1, color}) => ({
      backgroundColor: "transparent",
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      borderColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6})
    })
  }, {link: true});

  var __defProp$15 = Object.defineProperty;
  var __defProps$A = Object.defineProperties;
  var __getOwnPropDescs$A = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$15 = Object.getOwnPropertySymbols;
  var __hasOwnProp$15 = Object.prototype.hasOwnProperty;
  var __propIsEnum$15 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$15 = (obj, key, value) => key in obj ? __defProp$15(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$15 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$15.call(b, prop))
        __defNormalProp$15(a, prop, b[prop]);
    if (__getOwnPropSymbols$15)
      for (var prop of __getOwnPropSymbols$15(b)) {
        if (__propIsEnum$15.call(b, prop))
          __defNormalProp$15(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$A = (a, b) => __defProps$A(a, __getOwnPropDescs$A(b));
  var __objRest$J = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$15.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$15)
      for (var prop of __getOwnPropSymbols$15(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$15.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const BADGE_SIZES = heights$1;
  function Badge(_a) {
    var _b = _a, {
      component: Component = "div",
      className,
      color,
      variant = "light",
      fullWidth,
      children,
      themeOverride,
      size = "md",
      leftSection,
      rightSection,
      radius = "xl"
    } = _b, others = __objRest$J(_b, [
      "component",
      "className",
      "color",
      "variant",
      "fullWidth",
      "children",
      "themeOverride",
      "size",
      "leftSection",
      "rightSection",
      "radius"
    ]);
    const classes = useStyles$z({
      size,
      fullWidth,
      color,
      radius,
      theme: theme.useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default.createElement(Component, __spreadProps$A(__spreadValues$15({}, others), {
      "data-mantine-composable": true,
      className: cx__default(classes.badge, classes[variant], className)
    }), leftSection && /* @__PURE__ */ React__default.createElement("span", {
      "data-mantine-badge-left": true,
      className: classes.leftSection
    }, leftSection), /* @__PURE__ */ React__default.createElement("span", {
      className: classes.inner
    }, children), rightSection && /* @__PURE__ */ React__default.createElement("span", {
      "data-mantine-badge-right": true,
      className: classes.rightSection
    }, rightSection));
  }
  Badge.displayName = "@mantine/core/Badge";

  var __defProp$14 = Object.defineProperty;
  var __getOwnPropSymbols$14 = Object.getOwnPropertySymbols;
  var __hasOwnProp$14 = Object.prototype.hasOwnProperty;
  var __propIsEnum$14 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$14 = (obj, key, value) => key in obj ? __defProp$14(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$14 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$14.call(b, prop))
        __defNormalProp$14(a, prop, b[prop]);
    if (__getOwnPropSymbols$14)
      for (var prop of __getOwnPropSymbols$14(b)) {
        if (__propIsEnum$14.call(b, prop))
          __defNormalProp$14(a, prop, b[prop]);
      }
    return a;
  };
  function QuoteIcon(props) {
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues$14({
      width: "20",
      height: "20",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default.createElement("path", {
      d: "M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }

  var __defProp$13 = Object.defineProperty;
  var __defProps$z = Object.defineProperties;
  var __getOwnPropDescs$z = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$13 = Object.getOwnPropertySymbols;
  var __hasOwnProp$13 = Object.prototype.hasOwnProperty;
  var __propIsEnum$13 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$13 = (obj, key, value) => key in obj ? __defProp$13(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$13 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$13.call(b, prop))
        __defNormalProp$13(a, prop, b[prop]);
    if (__getOwnPropSymbols$13)
      for (var prop of __getOwnPropSymbols$13(b)) {
        if (__propIsEnum$13.call(b, prop))
          __defNormalProp$13(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$z = (a, b) => __defProps$z(a, __getOwnPropDescs$z(b));
  var useStyles$y = reactJss.createUseStyles({
    blockquote: ({theme: theme$1, color}) => __spreadProps$z(__spreadValues$13({}, theme.getFontStyles(theme$1)), {
      fontSize: theme$1.fontSizes.lg,
      lineHeight: theme$1.lineHeight,
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[0],
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      margin: 0,
      borderTopRightRadius: theme$1.radius.sm,
      borderBottomRightRadius: theme$1.radius.sm,
      borderLeft: `3px solid ${theme.getThemeColor({
      theme: theme$1,
      color,
      shade: theme$1.colorScheme === "dark" ? 4 : 6
    })}`,
      padding: [theme$1.spacing.md, theme$1.spacing.lg]
    }),
    inner: {
      display: "flex"
    },
    body: {
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    icon: ({theme: theme$1, color}) => ({
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      marginRight: theme$1.spacing.md,
      marginTop: 2,
      width: 22
    }),
    cite: ({theme}) => ({
      display: "block",
      fontSize: theme.fontSizes.sm,
      marginTop: theme.spacing.xs,
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
      overflow: "hidden",
      textOverflow: "ellipsis"
    })
  }, {link: true});

  var __defProp$12 = Object.defineProperty;
  var __getOwnPropSymbols$12 = Object.getOwnPropertySymbols;
  var __hasOwnProp$12 = Object.prototype.hasOwnProperty;
  var __propIsEnum$12 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$12 = (obj, key, value) => key in obj ? __defProp$12(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$12 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$12.call(b, prop))
        __defNormalProp$12(a, prop, b[prop]);
    if (__getOwnPropSymbols$12)
      for (var prop of __getOwnPropSymbols$12(b)) {
        if (__propIsEnum$12.call(b, prop))
          __defNormalProp$12(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$I = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$12.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$12)
      for (var prop of __getOwnPropSymbols$12(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$12.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const defaultIcon = /* @__PURE__ */ React__default.createElement(QuoteIcon, null);
  function Blockquote(_a) {
    var _b = _a, {
      className,
      color,
      icon = defaultIcon,
      cite,
      children,
      themeOverride
    } = _b, others = __objRest$I(_b, [
      "className",
      "color",
      "icon",
      "cite",
      "children",
      "themeOverride"
    ]);
    const classes = useStyles$y({color, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("blockquote", __spreadValues$12({
      className: cx__default(classes.blockquote, className)
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.inner
    }, icon && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-icon": true,
      className: classes.icon
    }, icon), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.body
    }, children, cite && /* @__PURE__ */ React__default.createElement("cite", {
      className: classes.cite
    }, cite))));
  }
  Blockquote.displayName = "@mantine/core/Blockquote";

  var useStyles$x = reactJss.createUseStyles({
    breadcrumbs: {
      display: "flex"
    },
    breadcrumb: {
      lineHeight: 1,
      whiteSpace: "nowrap",
      WebkitTapHighlightColor: "transparent"
    },
    separator: ({theme}) => ({
      marginLeft: theme.spacing.xs,
      marginRight: theme.spacing.xs,
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    })
  }, {link: true});

  var __defProp$11 = Object.defineProperty;
  var __getOwnPropSymbols$11 = Object.getOwnPropertySymbols;
  var __hasOwnProp$11 = Object.prototype.hasOwnProperty;
  var __propIsEnum$11 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$11 = (obj, key, value) => key in obj ? __defProp$11(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$11 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$11.call(b, prop))
        __defNormalProp$11(a, prop, b[prop]);
    if (__getOwnPropSymbols$11)
      for (var prop of __getOwnPropSymbols$11(b)) {
        if (__propIsEnum$11.call(b, prop))
          __defNormalProp$11(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$H = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$11.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$11)
      for (var prop of __getOwnPropSymbols$11(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$11.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Breadcrumbs(_a) {
    var _b = _a, {
      className,
      themeOverride,
      children,
      separator = "/"
    } = _b, others = __objRest$H(_b, [
      "className",
      "themeOverride",
      "children",
      "separator"
    ]);
    const classes = useStyles$x({theme: theme.useMantineTheme(themeOverride)});
    const items = React__default.Children.toArray(children).reduce((acc, child, index, array) => {
      acc.push(React__default.cloneElement(child, {
        className: classes.breadcrumb,
        key: index,
        "data-mantine-breadcrumb": true
      }));
      if (index !== array.length - 1) {
        acc.push(/* @__PURE__ */ React__default.createElement(Text, {
          size: "sm",
          "data-mantine-separator": true,
          className: classes.separator,
          key: `separator-${index}`,
          themeOverride
        }, separator));
      }
      return acc;
    }, []);
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$11({
      className: cx__default(classes.breadcrumbs, className)
    }, others), items);
  }
  Breadcrumbs.displayName = "@mantine/core/Breadcrumbs";

  var __defProp$10 = Object.defineProperty;
  var __defProps$y = Object.defineProperties;
  var __getOwnPropDescs$y = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$10 = Object.getOwnPropertySymbols;
  var __hasOwnProp$10 = Object.prototype.hasOwnProperty;
  var __propIsEnum$10 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$10 = (obj, key, value) => key in obj ? __defProp$10(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$10 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$10.call(b, prop))
        __defNormalProp$10(a, prop, b[prop]);
    if (__getOwnPropSymbols$10)
      for (var prop of __getOwnPropSymbols$10(b)) {
        if (__propIsEnum$10.call(b, prop))
          __defNormalProp$10(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$y = (a, b) => __defProps$y(a, __getOwnPropDescs$y(b));
  const sizes$b = {
    xs: 12,
    sm: 18,
    md: 24,
    lg: 34,
    xl: 42
  };
  var useStyles$w = reactJss.createUseStyles({
    opened: {},
    wrapper: ({size, theme: theme$1}) => __spreadProps$y(__spreadValues$10({}, theme.getFocusStyles(theme$1)), {
      WebkitTapHighlightColor: "transparent",
      borderRadius: theme$1.radius.sm,
      width: theme.getSizeValue({size, sizes: sizes$b}) + theme$1.spacing.xs,
      height: theme.getSizeValue({size, sizes: sizes$b}) + theme$1.spacing.xs,
      padding: theme$1.spacing.xs / 2,
      backgroundColor: "transparent",
      border: 0,
      cursor: "pointer"
    }),
    burger: ({size, theme: theme$1, color, reduceMotion}) => {
      const sizeValue = theme.getSizeValue({size, sizes: sizes$b});
      return {
        position: "relative",
        userSelect: "none",
        boxSizing: "border-box",
        "&, &:before, &:after": {
          display: "block",
          width: sizeValue,
          height: Math.ceil(sizeValue / 12),
          backgroundColor: theme.getThemeColor({
            theme: theme$1,
            color,
            shade: theme$1.colorScheme === "dark" ? 4 : 7
          }),
          outline: "1px solid transparent",
          transitionProperty: "background-color, transform",
          transitionDuration: reduceMotion ? "0ms" : "300ms"
        },
        "&:before, &:after": {
          position: "absolute",
          content: '""',
          left: 0
        },
        "&:before": {
          top: sizeValue / 3 * -1
        },
        "&:after": {
          top: sizeValue / 3
        },
        "&$opened": {
          backgroundColor: "transparent !important",
          "&:before": {
            transform: `translateY(${sizeValue / 3}px) rotate(45deg)`
          },
          "&:after": {
            transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`
          }
        }
      };
    }
  }, {link: true});

  var __defProp$$ = Object.defineProperty;
  var __getOwnPropSymbols$$ = Object.getOwnPropertySymbols;
  var __hasOwnProp$$ = Object.prototype.hasOwnProperty;
  var __propIsEnum$$ = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$$ = (obj, key, value) => key in obj ? __defProp$$(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$$ = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$$.call(b, prop))
        __defNormalProp$$(a, prop, b[prop]);
    if (__getOwnPropSymbols$$)
      for (var prop of __getOwnPropSymbols$$(b)) {
        if (__propIsEnum$$.call(b, prop))
          __defNormalProp$$(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$G = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$$.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$$)
      for (var prop of __getOwnPropSymbols$$(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$$.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const BURGER_SIZES = sizes$b;
  function Burger(_a) {
    var _b = _a, {
      className,
      opened,
      color = "gray",
      size = "md",
      themeOverride,
      elementRef
    } = _b, others = __objRest$G(_b, [
      "className",
      "opened",
      "color",
      "size",
      "themeOverride",
      "elementRef"
    ]);
    const classes = useStyles$w({
      color,
      size,
      theme: theme.useMantineTheme(themeOverride),
      reduceMotion: hooks.useReducedMotion()
    });
    return /* @__PURE__ */ React__default.createElement("button", __spreadValues$$({
      type: "button",
      className: cx__default(classes.wrapper, className),
      ref: elementRef
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      className: cx__default(classes.burger, {[classes.opened]: opened})
    }));
  }
  Burger.displayName = "@mantine/core/Burger";

  var __defProp$_ = Object.defineProperty;
  var __defProps$x = Object.defineProperties;
  var __getOwnPropDescs$x = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$_ = Object.getOwnPropertySymbols;
  var __hasOwnProp$_ = Object.prototype.hasOwnProperty;
  var __propIsEnum$_ = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$_ = (obj, key, value) => key in obj ? __defProp$_(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$_ = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$_.call(b, prop))
        __defNormalProp$_(a, prop, b[prop]);
    if (__getOwnPropSymbols$_)
      for (var prop of __getOwnPropSymbols$_(b)) {
        if (__propIsEnum$_.call(b, prop))
          __defNormalProp$_(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$x = (a, b) => __defProps$x(a, __getOwnPropDescs$x(b));
  const sizes$a = {
    xs: {
      fontSize: 10,
      height: 22,
      padding: [0, 11]
    },
    sm: {
      fontSize: 11,
      height: 26,
      padding: [0, 13]
    },
    md: {
      fontSize: 13,
      height: 30,
      padding: [0, 15]
    },
    lg: {
      fontSize: 14,
      height: 36,
      padding: [0, 18]
    },
    xl: {
      fontSize: 16,
      height: 44,
      padding: [0, 22]
    }
  };
  const heights = Object.keys(sizes$a).reduce((acc, size) => {
    acc[size] = sizes$a[size].height;
    return acc;
  }, {});
  const getWidthStyles = (fullWidth) => ({
    display: fullWidth ? "block" : "inline-block",
    width: fullWidth ? "100%" : "auto"
  });
  var useStyles$v = reactJss.createUseStyles({
    icon: {
      display: "flex",
      alignItems: "center"
    },
    leftIcon: {
      marginRight: 10
    },
    rightIcon: {
      marginLeft: 10
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    },
    label: {
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    shared: (props) => __spreadProps$x(__spreadValues$_(__spreadValues$_(__spreadValues$_(__spreadValues$_({}, sizes$a[props.size]), theme.getFontStyles(props.theme)), theme.getFocusStyles(props.theme)), getWidthStyles(props.fullWidth)), {
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",
      boxSizing: "border-box",
      textDecoration: "none",
      cursor: "pointer",
      appearance: "none",
      WebkitAppearance: "none"
    }),
    outline: ({color, radius, theme: theme$1}) => ({
      backgroundColor: "transparent",
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      textTransform: "uppercase",
      fontWeight: "bold",
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 8}),
      border: `1px solid ${theme.getThemeColor({
      theme: theme$1,
      color,
      shade: theme$1.colorScheme === "dark" ? 4 : 8
    })}`,
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        borderColor: "transparent",
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[5],
        cursor: "not-allowed"
      }
    }),
    light: ({color, size, radius, theme: theme$1}) => ({
      border: "1px solid transparent",
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      textTransform: "uppercase",
      fontWeight: "bold",
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 0}),
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme.getThemeColor({theme: theme$1, color, shade: 9}),
      "& $inner": {
        height: sizes$a[size].height - 2
      },
      "&:hover": {
        backgroundColor: theme.getThemeColor({
          theme: theme$1,
          color,
          shade: theme$1.colorScheme === "dark" ? 5 : 1
        })
      },
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        borderColor: "transparent",
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[5],
        textShadow: "none",
        cursor: "not-allowed"
      }
    }),
    filled: ({color, size, radius, theme: theme$1}) => ({
      border: "1px solid transparent",
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      textTransform: "uppercase",
      fontWeight: "bold",
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
      textShadow: `1px 1px 0 ${theme.getThemeColor({theme: theme$1, color, shade: 8})}`,
      color: theme$1.white,
      "& $inner": {
        height: sizes$a[size].height - 2
      },
      "&:hover": {
        backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 7})
      },
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        borderColor: "transparent",
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[5],
        textShadow: "none",
        cursor: "not-allowed"
      }
    }),
    link: ({color, radius, theme: theme$1}) => ({
      padding: 0,
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      backgroundColor: "transparent",
      border: 0,
      display: "inline-block",
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline"
      },
      "&:disabled": {
        color: theme$1.colors.gray[5],
        cursor: "not-allowed",
        "&:hover": {
          textDecoration: "none"
        }
      }
    })
  }, {link: true});

  var __defProp$Z = Object.defineProperty;
  var __defProps$w = Object.defineProperties;
  var __getOwnPropDescs$w = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$Z = Object.getOwnPropertySymbols;
  var __hasOwnProp$Z = Object.prototype.hasOwnProperty;
  var __propIsEnum$Z = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$Z = (obj, key, value) => key in obj ? __defProp$Z(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$Z = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$Z.call(b, prop))
        __defNormalProp$Z(a, prop, b[prop]);
    if (__getOwnPropSymbols$Z)
      for (var prop of __getOwnPropSymbols$Z(b)) {
        if (__propIsEnum$Z.call(b, prop))
          __defNormalProp$Z(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$w = (a, b) => __defProps$w(a, __getOwnPropDescs$w(b));
  var __objRest$F = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$Z.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$Z)
      for (var prop of __getOwnPropSymbols$Z(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$Z.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const BUTTON_SIZES = heights;
  function Button(_a) {
    var _b = _a, {
      className,
      size = "md",
      color,
      type = "button",
      disabled = false,
      children,
      leftIcon,
      rightIcon,
      fullWidth = false,
      variant = "filled",
      radius = "sm",
      component: Element = "button",
      elementRef,
      themeOverride
    } = _b, others = __objRest$F(_b, [
      "className",
      "size",
      "color",
      "type",
      "disabled",
      "children",
      "leftIcon",
      "rightIcon",
      "fullWidth",
      "variant",
      "radius",
      "component",
      "elementRef",
      "themeOverride"
    ]);
    const classes = useStyles$v({
      radius,
      color,
      size,
      fullWidth,
      theme: theme.useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default.createElement(Element, __spreadProps$w(__spreadValues$Z({}, others), {
      className: cx__default(classes.shared, classes[variant], className),
      type,
      disabled,
      "data-mantine-composable": true,
      ref: elementRef,
      onTouchStart: () => {
      }
    }), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.inner
    }, leftIcon && /* @__PURE__ */ React__default.createElement("span", {
      "data-mantine-left-icon": true,
      className: cx__default(classes.icon, classes.leftIcon)
    }, leftIcon), /* @__PURE__ */ React__default.createElement("span", {
      className: classes.label,
      "data-mantine-label": true
    }, children), rightIcon && /* @__PURE__ */ React__default.createElement("span", {
      "data-mantine-right-icon": true,
      className: cx__default(classes.icon, classes.rightIcon)
    }, rightIcon)));
  }
  Button.displayName = "@mantine/core/Button";

  var useStyles$u = reactJss.createUseStyles({
    card: ({theme: theme$1, radius, padding}) => {
      const spacing = theme.getSizeValue({size: padding, sizes: theme$1.spacing});
      const borderRadius = theme.getSizeValue({size: radius, sizes: theme$1.radius});
      return {
        position: "relative",
        "& [data-mantine-image]": {
          width: `calc(100% + ${spacing * 2}px) !important`,
          marginLeft: -spacing,
          marginRight: -spacing,
          "&:first-child": {
            borderTopRightRadius: borderRadius,
            borderTopLeftRadius: borderRadius,
            marginBottom: spacing,
            marginTop: -spacing
          },
          "&:last-child": {
            borderBottomRightRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            marginTop: spacing,
            marginBottom: -spacing
          },
          "&:first-child:last-child": {
            marginTop: -spacing,
            marginBottom: -spacing
          }
        },
        "& [data-mantine-hr]": {
          borderTopColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[2],
          marginLeft: -spacing,
          marginRight: -spacing,
          marginBottom: spacing / 2,
          marginTop: spacing / 2
        }
      };
    }
  }, {link: true});

  var useStyles$t = reactJss.createUseStyles({
    grid: ({theme: theme$1, gutter, cardsPerRow, grow}) => {
      const gutterSize = theme.getSizeValue({size: gutter, sizes: theme$1.spacing});
      const getCardFlex = (perRow) => `${grow ? 1 : 0} 0 calc(${100 / perRow}% - ${gutterSize}px)`;
      return {
        display: "flex",
        flexWrap: "wrap",
        margin: -gutterSize / 2,
        "& [data-mantine-card]": {
          margin: gutterSize / 2,
          flex: getCardFlex(cardsPerRow)
        }
      };
    }
  }, {link: true});

  var __defProp$Y = Object.defineProperty;
  var __getOwnPropSymbols$Y = Object.getOwnPropertySymbols;
  var __hasOwnProp$Y = Object.prototype.hasOwnProperty;
  var __propIsEnum$Y = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$Y = (obj, key, value) => key in obj ? __defProp$Y(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$Y = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$Y.call(b, prop))
        __defNormalProp$Y(a, prop, b[prop]);
    if (__getOwnPropSymbols$Y)
      for (var prop of __getOwnPropSymbols$Y(b)) {
        if (__propIsEnum$Y.call(b, prop))
          __defNormalProp$Y(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$E = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$Y.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$Y)
      for (var prop of __getOwnPropSymbols$Y(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$Y.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function CardsGrid(_a) {
    var _b = _a, {
      gutter = "md",
      cardsPerRow = 1,
      grow = false,
      children,
      className,
      themeOverride
    } = _b, others = __objRest$E(_b, [
      "gutter",
      "cardsPerRow",
      "grow",
      "children",
      "className",
      "themeOverride"
    ]);
    const classes = useStyles$t({
      cardsPerRow,
      gutter,
      grow,
      theme: theme.useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$Y({
      className: cx__default(classes.grid, className)
    }, others), children);
  }
  CardsGrid.displayName = "@mantine/core/CardsGrid";

  var __defProp$X = Object.defineProperty;
  var __getOwnPropSymbols$X = Object.getOwnPropertySymbols;
  var __hasOwnProp$X = Object.prototype.hasOwnProperty;
  var __propIsEnum$X = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$X = (obj, key, value) => key in obj ? __defProp$X(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$X = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$X.call(b, prop))
        __defNormalProp$X(a, prop, b[prop]);
    if (__getOwnPropSymbols$X)
      for (var prop of __getOwnPropSymbols$X(b)) {
        if (__propIsEnum$X.call(b, prop))
          __defNormalProp$X(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$D = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$X.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$X)
      for (var prop of __getOwnPropSymbols$X(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$X.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Card(_a) {
    var _b = _a, {
      className,
      themeOverride,
      padding = "md",
      radius = "sm"
    } = _b, others = __objRest$D(_b, [
      "className",
      "themeOverride",
      "padding",
      "radius"
    ]);
    const classes = useStyles$u({radius, padding, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement(Paper, __spreadValues$X({
      "data-mantine-card": true,
      className: cx__default(classes.card, className),
      radius,
      padding
    }, others));
  }
  Card.displayName = "@mantine/core/Card";

  var __defProp$W = Object.defineProperty;
  var __getOwnPropSymbols$W = Object.getOwnPropertySymbols;
  var __hasOwnProp$W = Object.prototype.hasOwnProperty;
  var __propIsEnum$W = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$W = (obj, key, value) => key in obj ? __defProp$W(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$W = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$W.call(b, prop))
        __defNormalProp$W(a, prop, b[prop]);
    if (__getOwnPropSymbols$W)
      for (var prop of __getOwnPropSymbols$W(b)) {
        if (__propIsEnum$W.call(b, prop))
          __defNormalProp$W(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$C = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$W.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$W)
      for (var prop of __getOwnPropSymbols$W(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$W.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function CheckboxIcon(_a) {
    var _b = _a, {intermediate} = _b, others = __objRest$C(_b, ["intermediate"]);
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues$W({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, others), /* @__PURE__ */ React__default.createElement("path", {
      d: intermediate ? "M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z" : "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }

  var __defProp$V = Object.defineProperty;
  var __defProps$v = Object.defineProperties;
  var __getOwnPropDescs$v = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$V = Object.getOwnPropertySymbols;
  var __hasOwnProp$V = Object.prototype.hasOwnProperty;
  var __propIsEnum$V = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$V = (obj, key, value) => key in obj ? __defProp$V(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$V = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$V.call(b, prop))
        __defNormalProp$V(a, prop, b[prop]);
    if (__getOwnPropSymbols$V)
      for (var prop of __getOwnPropSymbols$V(b)) {
        if (__propIsEnum$V.call(b, prop))
          __defNormalProp$V(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$v = (a, b) => __defProps$v(a, __getOwnPropDescs$v(b));
  const sizes$9 = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 26,
    xl: 36
  };
  var useStyles$s = reactJss.createUseStyles({
    wrapper: {
      display: "flex",
      alignItems: "center"
    },
    checkboxWrapper: ({size}) => ({
      position: "relative",
      width: theme.getSizeValue({size, sizes: sizes$9}),
      height: theme.getSizeValue({size, sizes: sizes$9})
    }),
    label: ({theme: theme$1, size}) => __spreadProps$v(__spreadValues$V({}, theme.getFontStyles(theme$1)), {
      WebkitTapHighlightColor: "transparent",
      paddingLeft: theme$1.spacing.sm,
      fontSize: theme.getSizeValue({size, sizes: theme$1.fontSizes}),
      lineHeight: `${theme.getSizeValue({size, sizes: sizes$9})}px`,
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black
    }),
    checkbox: ({size, theme: theme$1, color}) => __spreadProps$v(__spreadValues$V({}, theme.getFocusStyles(theme$1)), {
      appearance: "none",
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[0],
      border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[4]}`,
      width: theme.getSizeValue({size, sizes: sizes$9}),
      height: theme.getSizeValue({size, sizes: sizes$9}),
      borderRadius: theme$1.radius.sm,
      padding: 0,
      outline: 0,
      display: "block",
      margin: 0,
      "&:checked": {
        backgroundColor: theme.getThemeColor({
          theme: theme$1,
          color,
          shade: theme$1.colorScheme === "dark" ? 4 : 6
        }),
        borderColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
        color: theme$1.white,
        "& + $icon": {
          color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
          display: "block"
        }
      },
      "&:disabled": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
        borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[3],
        cursor: "not-allowed",
        "& + $icon": {
          color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[5]
        }
      }
    }),
    icon: {
      display: "none",
      pointerEvents: "none",
      width: "80%",
      height: "80%",
      position: "absolute",
      zIndex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto"
    }
  }, {link: true});

  var __defProp$U = Object.defineProperty;
  var __defProps$u = Object.defineProperties;
  var __getOwnPropDescs$u = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$U = Object.getOwnPropertySymbols;
  var __hasOwnProp$U = Object.prototype.hasOwnProperty;
  var __propIsEnum$U = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$U = (obj, key, value) => key in obj ? __defProp$U(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$U = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$U.call(b, prop))
        __defNormalProp$U(a, prop, b[prop]);
    if (__getOwnPropSymbols$U)
      for (var prop of __getOwnPropSymbols$U(b)) {
        if (__propIsEnum$U.call(b, prop))
          __defNormalProp$U(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$u = (a, b) => __defProps$u(a, __getOwnPropDescs$u(b));
  var __objRest$B = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$U.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$U)
      for (var prop of __getOwnPropSymbols$U(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$U.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const CHECKBOX_SIZES = sizes$9;
  function Checkbox(_a) {
    var _b = _a, {
      className,
      checked,
      onChange,
      color,
      themeOverride,
      label,
      disabled,
      intermediate,
      id,
      size,
      wrapperProps,
      style,
      inputStyle,
      inputClassName,
      elementRef
    } = _b, others = __objRest$B(_b, [
      "className",
      "checked",
      "onChange",
      "color",
      "themeOverride",
      "label",
      "disabled",
      "intermediate",
      "id",
      "size",
      "wrapperProps",
      "style",
      "inputStyle",
      "inputClassName",
      "elementRef"
    ]);
    const uuid = hooks.useId(id);
    const classes = useStyles$s({size, color, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$U({
      className: cx__default(classes.wrapper, className),
      style
    }, wrapperProps), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.checkboxWrapper
    }, /* @__PURE__ */ React__default.createElement("input", __spreadProps$u(__spreadValues$U({}, others), {
      id: uuid,
      ref: elementRef,
      type: "checkbox",
      className: cx__default(classes.checkbox, inputClassName),
      checked: intermediate || checked,
      onChange,
      disabled,
      style: inputStyle
    })), /* @__PURE__ */ React__default.createElement(CheckboxIcon, {
      intermediate,
      className: classes.icon
    })), label && /* @__PURE__ */ React__default.createElement("label", {
      className: classes.label,
      htmlFor: uuid
    }, label));
  }
  Checkbox.displayName = "@mantine/core/Checkbox";

  var __defProp$T = Object.defineProperty;
  var __defProps$t = Object.defineProperties;
  var __getOwnPropDescs$t = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$T = Object.getOwnPropertySymbols;
  var __hasOwnProp$T = Object.prototype.hasOwnProperty;
  var __propIsEnum$T = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$T = (obj, key, value) => key in obj ? __defProp$T(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$T = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$T.call(b, prop))
        __defNormalProp$T(a, prop, b[prop]);
    if (__getOwnPropSymbols$T)
      for (var prop of __getOwnPropSymbols$T(b)) {
        if (__propIsEnum$T.call(b, prop))
          __defNormalProp$T(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$t = (a, b) => __defProps$t(a, __getOwnPropDescs$t(b));
  var useStyles$r = reactJss.createUseStyles({
    code: ({theme: theme$1, color}) => __spreadProps$t(__spreadValues$T({}, theme.getFontStyles(theme$1)), {
      lineHeight: theme$1.lineHeight,
      padding: [1, theme$1.spacing.xs / 2],
      borderRadius: theme$1.radius.sm,
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 1 : 9}),
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 9 : 0}),
      fontFamily: theme$1.fontFamilyMonospace,
      fontSize: theme$1.fontSizes.xs,
      border: `1px solid ${theme.getThemeColor({
      theme: theme$1,
      color,
      shade: theme$1.colorScheme === "dark" ? 9 : 3
    })}`
    }),
    pre: ({theme}) => ({
      padding: theme.spacing.xs,
      margin: 0,
      overflowX: "auto"
    })
  }, {link: true});

  var __defProp$S = Object.defineProperty;
  var __getOwnPropSymbols$S = Object.getOwnPropertySymbols;
  var __hasOwnProp$S = Object.prototype.hasOwnProperty;
  var __propIsEnum$S = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$S = (obj, key, value) => key in obj ? __defProp$S(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$S = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$S.call(b, prop))
        __defNormalProp$S(a, prop, b[prop]);
    if (__getOwnPropSymbols$S)
      for (var prop of __getOwnPropSymbols$S(b)) {
        if (__propIsEnum$S.call(b, prop))
          __defNormalProp$S(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$A = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$S.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$S)
      for (var prop of __getOwnPropSymbols$S(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$S.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Code(_a) {
    var _b = _a, {
      children,
      themeOverride,
      block = false,
      className,
      color
    } = _b, others = __objRest$A(_b, [
      "children",
      "themeOverride",
      "block",
      "className",
      "color"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const themeColor = color || (theme$1.colorScheme === "dark" ? "dark" : "gray");
    const classes = useStyles$r({color: themeColor, theme: theme.useMantineTheme(themeOverride)});
    if (block) {
      return /* @__PURE__ */ React__default.createElement("pre", __spreadValues$S({
        className: cx__default(classes.code, classes.pre, className)
      }, others), children);
    }
    return /* @__PURE__ */ React__default.createElement("code", __spreadValues$S({
      className: cx__default(classes.code, className)
    }, others), children);
  }
  Code.displayName = "@mantine/core/Code";

  var __defProp$R = Object.defineProperty;
  var __defProps$s = Object.defineProperties;
  var __getOwnPropDescs$s = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$R = Object.getOwnPropertySymbols;
  var __hasOwnProp$R = Object.prototype.hasOwnProperty;
  var __propIsEnum$R = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$R = (obj, key, value) => key in obj ? __defProp$R(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$R = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$R.call(b, prop))
        __defNormalProp$R(a, prop, b[prop]);
    if (__getOwnPropSymbols$R)
      for (var prop of __getOwnPropSymbols$R(b)) {
        if (__propIsEnum$R.call(b, prop))
          __defNormalProp$R(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$s = (a, b) => __defProps$s(a, __getOwnPropDescs$s(b));
  var useStyles$q = reactJss.createUseStyles({
    colorSwatch: ({theme: theme$1, radius}) => __spreadProps$s(__spreadValues$R({}, theme.getFocusStyles(theme$1)), {
      border: 0,
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      appearance: "none",
      WebkitAppearance: "none",
      padding: 0
    })
  }, {link: true});

  var __defProp$Q = Object.defineProperty;
  var __getOwnPropSymbols$Q = Object.getOwnPropertySymbols;
  var __hasOwnProp$Q = Object.prototype.hasOwnProperty;
  var __propIsEnum$Q = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$Q = (obj, key, value) => key in obj ? __defProp$Q(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$Q = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$Q.call(b, prop))
        __defNormalProp$Q(a, prop, b[prop]);
    if (__getOwnPropSymbols$Q)
      for (var prop of __getOwnPropSymbols$Q(b)) {
        if (__propIsEnum$Q.call(b, prop))
          __defNormalProp$Q(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$z = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$Q.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$Q)
      for (var prop of __getOwnPropSymbols$Q(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$Q.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function ColorSwatch(_a) {
    var _b = _a, {
      component: Element = "div",
      color,
      size = 25,
      style,
      radius = 25,
      className,
      themeOverride
    } = _b, others = __objRest$z(_b, [
      "component",
      "color",
      "size",
      "style",
      "radius",
      "className",
      "themeOverride"
    ]);
    const classes = useStyles$q({radius, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement(Element, __spreadValues$Q({
      className: cx__default(classes.colorSwatch, className),
      style: __spreadValues$Q({width: size, height: size, backgroundColor: color}, style),
      "data-mantine-composable": true
    }, others));
  }
  ColorSwatch.displayName = "@mantine/core/ColorSwatch";

  const sizes$8 = {
    xs: 570,
    sm: 770,
    md: 970,
    lg: 1170,
    xl: 1370
  };
  var useStyles$p = reactJss.createUseStyles({
    container: ({fluid, size, padding, theme: theme$1}) => ({
      maxWidth: fluid ? "100%" : theme.getSizeValue({size, sizes: sizes$8}),
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: theme.getSizeValue({size: padding, sizes: theme$1.spacing}),
      paddingRight: theme.getSizeValue({size: padding, sizes: theme$1.spacing})
    })
  }, {link: true});

  var __defProp$P = Object.defineProperty;
  var __getOwnPropSymbols$P = Object.getOwnPropertySymbols;
  var __hasOwnProp$P = Object.prototype.hasOwnProperty;
  var __propIsEnum$P = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$P = (obj, key, value) => key in obj ? __defProp$P(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$P = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$P.call(b, prop))
        __defNormalProp$P(a, prop, b[prop]);
    if (__getOwnPropSymbols$P)
      for (var prop of __getOwnPropSymbols$P(b)) {
        if (__propIsEnum$P.call(b, prop))
          __defNormalProp$P(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$y = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$P.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$P)
      for (var prop of __getOwnPropSymbols$P(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$P.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const CONTAINER_SIZES = sizes$8;
  function Container(_a) {
    var _b = _a, {
      className,
      padding = "md",
      fluid,
      size,
      themeOverride
    } = _b, others = __objRest$y(_b, [
      "className",
      "padding",
      "fluid",
      "size",
      "themeOverride"
    ]);
    const classes = useStyles$p({padding, fluid, size, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$P({
      className: cx__default(classes.container, className)
    }, others));
  }
  Container.displayName = "@mantine/core/Container";

  var __defProp$O = Object.defineProperty;
  var __getOwnPropSymbols$O = Object.getOwnPropertySymbols;
  var __hasOwnProp$O = Object.prototype.hasOwnProperty;
  var __propIsEnum$O = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$O = (obj, key, value) => key in obj ? __defProp$O(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$O = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$O.call(b, prop))
        __defNormalProp$O(a, prop, b[prop]);
    if (__getOwnPropSymbols$O)
      for (var prop of __getOwnPropSymbols$O(b)) {
        if (__propIsEnum$O.call(b, prop))
          __defNormalProp$O(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$x = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$O.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$O)
      for (var prop of __getOwnPropSymbols$O(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$O.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Overlay(_a) {
    var _b = _a, {
      opacity = 0.6,
      color = "#fff",
      zIndex = 1e3,
      style,
      component: Element = "div"
    } = _b, others = __objRest$x(_b, [
      "opacity",
      "color",
      "zIndex",
      "style",
      "component"
    ]);
    return /* @__PURE__ */ React__default.createElement(Element, __spreadValues$O({
      style: __spreadValues$O({
        opacity,
        backgroundColor: color,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex
      }, style)
    }, others));
  }
  Overlay.displayName = "@mantine/core/Overlay";

  const transitions$1 = {
    fade: {
      in: {opacity: 1},
      out: {opacity: 0},
      transitionProperty: "opacity"
    },
    "skew-up": {
      in: {opacity: 1, transform: "translateY(0) skew(0deg, 0deg)"},
      out: {opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)"},
      common: {transformOrigin: "top"},
      transitionProperty: "transform, opacity"
    },
    "skew-down": {
      in: {opacity: 1, transform: "translateY(0) skew(0deg, 0deg)"},
      out: {opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)"},
      common: {transformOrigin: "bottom"},
      transitionProperty: "transform, opacity"
    },
    "rotate-left": {
      in: {opacity: 1, transform: "translateY(0) rotate(0deg)"},
      out: {opacity: 0, transform: "translateY(20px) rotate(-5deg)"},
      common: {transformOrigin: "bottom"},
      transitionProperty: "transform, opacity"
    },
    "rotate-right": {
      in: {opacity: 1, transform: "translateY(0) rotate(0deg)"},
      out: {opacity: 0, transform: "translateY(20px) rotate(5deg)"},
      common: {transformOrigin: "top"},
      transitionProperty: "transform, opacity"
    },
    "slide-down": {
      in: {opacity: 1, transform: "translateY(0)"},
      out: {opacity: 0, transform: "translateY(-100%)"},
      common: {transformOrigin: "top"},
      transitionProperty: "transform, opacity"
    },
    "slide-up": {
      in: {opacity: 1, transform: "translateY(0)"},
      out: {opacity: 0, transform: "translateY(100%)"},
      common: {transformOrigin: "bottom"},
      transitionProperty: "transform, opacity"
    },
    "slide-left": {
      in: {opacity: 1, transform: "translateX(0)"},
      out: {opacity: 0, transform: "translateX(100%)"},
      common: {transformOrigin: "left"},
      transitionProperty: "transform, opacity"
    },
    "slide-right": {
      in: {opacity: 1, transform: "translateX(0)"},
      out: {opacity: 0, transform: "translateX(-100%)"},
      common: {transformOrigin: "right"},
      transitionProperty: "transform, opacity"
    }
  };

  var __defProp$N = Object.defineProperty;
  var __getOwnPropSymbols$N = Object.getOwnPropertySymbols;
  var __hasOwnProp$N = Object.prototype.hasOwnProperty;
  var __propIsEnum$N = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$N = (obj, key, value) => key in obj ? __defProp$N(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$N = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$N.call(b, prop))
        __defNormalProp$N(a, prop, b[prop]);
    if (__getOwnPropSymbols$N)
      for (var prop of __getOwnPropSymbols$N(b)) {
        if (__propIsEnum$N.call(b, prop))
          __defNormalProp$N(a, prop, b[prop]);
      }
    return a;
  };
  const transitionStatuses = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out"
  };
  function getTransitionStyles({
    transition,
    state,
    duration,
    timingFunction
  }) {
    const shared = {
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: timingFunction
    };
    if (typeof transition === "string") {
      if (!(transition in transitions$1)) {
        return null;
      }
      return __spreadValues$N(__spreadValues$N(__spreadValues$N({
        transitionProperty: transitions$1[transition].transitionProperty
      }, shared), transitions$1[transition].common), transitions$1[transition][transitionStatuses[state]]);
    }
    return __spreadValues$N(__spreadValues$N(__spreadValues$N({
      transitionProperty: transition.transitionProperty
    }, shared), transition.common), transition[transitionStatuses[state]]);
  }

  function GroupedTransition({
    transitions,
    mounted,
    children,
    themeOverride
  }) {
    const theme$1 = theme.useMantineTheme(themeOverride);
    const duration = Math.max(...Object.keys(transitions).map((transition) => transitions[transition].duration));
    return /* @__PURE__ */ React__default.createElement(reactTransitionGroup.Transition, {
      in: mounted,
      timeout: duration,
      unmountOnExit: true,
      mountOnEnter: true,
      onEnter: (node) => node.offsetHeight
    }, (transitionState) => {
      const transitionsStyles = Object.keys(transitions).reduce((acc, transition) => {
        acc[transition] = getTransitionStyles({
          duration: transitions[transition].duration,
          transition: transitions[transition].transition,
          timingFunction: transitions[transition].timingFunction || theme$1.transitionTimingFunction,
          state: transitionState
        });
        return acc;
      }, {});
      return children(transitionsStyles);
    });
  }
  GroupedTransition.displayName = "@mantine/core/GroupedTransition";

  const AVAILABLE_TRANSITIONS = Object.keys(transitions$1);
  function Transition({
    transition,
    duration = 250,
    mounted,
    children,
    themeOverride,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited
  }) {
    const theme$1 = theme.useMantineTheme(themeOverride);
    const reduceMotion = hooks.useReducedMotion();
    return /* @__PURE__ */ React__default.createElement(reactTransitionGroup.Transition, {
      in: mounted,
      timeout: duration,
      unmountOnExit: true,
      mountOnEnter: true,
      onEnter: (node) => {
        node.offsetHeight;
        typeof onEnter === "function" && onEnter();
      },
      onExited,
      onEntered,
      onExit
    }, (transitionState) => children(getTransitionStyles({
      transition,
      duration: reduceMotion ? 0 : duration,
      state: transitionState,
      timingFunction: timingFunction || theme$1.transitionTimingFunction
    })));
  }
  Transition.displayName = "@mantine/core/Transition";

  var __defProp$M = Object.defineProperty;
  var __defProps$r = Object.defineProperties;
  var __getOwnPropDescs$r = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$M = Object.getOwnPropertySymbols;
  var __hasOwnProp$M = Object.prototype.hasOwnProperty;
  var __propIsEnum$M = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$M = (obj, key, value) => key in obj ? __defProp$M(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$M = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$M.call(b, prop))
        __defNormalProp$M(a, prop, b[prop]);
    if (__getOwnPropSymbols$M)
      for (var prop of __getOwnPropSymbols$M(b)) {
        if (__propIsEnum$M.call(b, prop))
          __defNormalProp$M(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$r = (a, b) => __defProps$r(a, __getOwnPropDescs$r(b));
  const sizes$7 = {
    xs: 180,
    sm: 240,
    md: 320,
    lg: 360,
    xl: 500,
    full: "100%"
  };
  function getPositionStyles({
    position,
    size
  }) {
    switch (position) {
      case "top":
        return {top: 0, left: 0, right: 0, height: theme.getSizeValue({size, sizes: sizes$7})};
      case "bottom":
        return {bottom: 0, left: 0, right: 0, height: theme.getSizeValue({size, sizes: sizes$7})};
      case "right":
        return {bottom: 0, top: 0, right: 0, width: theme.getSizeValue({size, sizes: sizes$7})};
      case "left":
        return {bottom: 0, top: 0, left: 0, width: theme.getSizeValue({size, sizes: sizes$7})};
      default:
        return null;
    }
  }
  var useStyles$o = reactJss.createUseStyles({
    noOverlay: {},
    wrapper: {
      "&:not($noOverlay)": {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    },
    drawer: ({size, position}) => __spreadProps$r(__spreadValues$M({}, getPositionStyles({position, size})), {
      maxWidth: "100%",
      maxHeight: "100vh",
      position: "fixed",
      outline: 0
    })
  }, {link: true});

  var __defProp$L = Object.defineProperty;
  var __defProps$q = Object.defineProperties;
  var __getOwnPropDescs$q = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$L = Object.getOwnPropertySymbols;
  var __hasOwnProp$L = Object.prototype.hasOwnProperty;
  var __propIsEnum$L = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$L = (obj, key, value) => key in obj ? __defProp$L(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$L = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$L.call(b, prop))
        __defNormalProp$L(a, prop, b[prop]);
    if (__getOwnPropSymbols$L)
      for (var prop of __getOwnPropSymbols$L(b)) {
        if (__propIsEnum$L.call(b, prop))
          __defNormalProp$L(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$q = (a, b) => __defProps$q(a, __getOwnPropDescs$q(b));
  var __objRest$w = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$L.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$L)
      for (var prop of __getOwnPropSymbols$L(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$L.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const DRAWER_SIZES = sizes$7;
  const transitions = {
    top: "slide-down",
    bottom: "slide-up",
    left: "slide-right",
    right: "slide-left"
  };
  function Drawer(_a) {
    var _b = _a, {
      opened,
      onClose,
      className,
      themeOverride,
      position = "left",
      size = "md",
      noFocusTrap = false,
      noScrollLock = false,
      noCloseOnClickOutside = false,
      noCloseOnEscape = false,
      transition,
      transitionDuration = 250,
      transitionTimingFunction = "ease",
      zIndex = 1e3,
      overlayColor,
      overlayOpacity,
      children,
      noOverlay = false,
      shadow = "md",
      padding = 0
    } = _b, others = __objRest$w(_b, [
      "opened",
      "onClose",
      "className",
      "themeOverride",
      "position",
      "size",
      "noFocusTrap",
      "noScrollLock",
      "noCloseOnClickOutside",
      "noCloseOnEscape",
      "transition",
      "transitionDuration",
      "transitionTimingFunction",
      "zIndex",
      "overlayColor",
      "overlayOpacity",
      "children",
      "noOverlay",
      "shadow",
      "padding"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const duration = hooks.useReducedMotion() ? 1 : transitionDuration;
    const classes = useStyles$o({theme: theme$1, size, position});
    const focusTrapRef = hooks.useFocusTrap(!noFocusTrap);
    hooks.useScrollLock(opened && !noScrollLock);
    const clickOutsideRef = hooks.useClickOutside(() => opened && !noCloseOnClickOutside && onClose());
    const drawerTransition = transition || transitions[position];
    const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme$1.colorScheme === "dark" ? 0.85 : 0.75;
    const closeOnEscape = (event) => {
      if (noFocusTrap && event.code === "Escape" && !noCloseOnEscape) {
        onClose();
      }
    };
    React.useEffect(() => {
      if (noFocusTrap) {
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
      }
    }, [noFocusTrap]);
    return /* @__PURE__ */ React__default.createElement(GroupedTransition, {
      mounted: opened,
      transitions: {
        overlay: {duration: duration / 2, transition: "fade", timingFunction: "ease"},
        drawer: {
          duration,
          transition: drawerTransition,
          timingFunction: transitionTimingFunction
        }
      }
    }, (styles) => /* @__PURE__ */ React__default.createElement("div", __spreadValues$L({
      className: cx__default(classes.wrapper, {[classes.noOverlay]: noOverlay}, className),
      role: "dialog",
      "aria-modal": true
    }, others), /* @__PURE__ */ React__default.createElement(Paper, {
      className: cx__default(classes.drawer, className),
      elementRef: hooks.useMergedRef(focusTrapRef, clickOutsideRef),
      style: __spreadProps$q(__spreadValues$L({}, styles.drawer), {zIndex: zIndex + 1}),
      radius: 0,
      tabIndex: -1,
      onKeyDownCapture: (event) => event.nativeEvent.code === "Escape" && !noCloseOnEscape && onClose(),
      shadow,
      padding,
      themeOverride
    }, children), !noOverlay && /* @__PURE__ */ React__default.createElement("div", {
      style: styles.overlay
    }, /* @__PURE__ */ React__default.createElement(Overlay, {
      opacity: _overlayOpacity,
      zIndex,
      color: overlayColor || (theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.black)
    }))));
  }
  Drawer.displayName = "@mantine/core/Drawer";

  const JUSTIFY_CONTENT = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
    apart: "space-between"
  };
  var useStyles$n = reactJss.createUseStyles({
    elementsGroup: ({spacing, position, noWrap, theme: theme$1}) => ({
      display: "flex",
      alignItems: "center",
      flexWrap: noWrap ? "nowrap" : "wrap",
      justifyContent: JUSTIFY_CONTENT[position],
      margin: -1 * theme.getSizeValue({size: spacing, sizes: theme$1.spacing}) / 2
    }),
    child: ({grow, spacing, theme: theme$1}) => ({
      flexGrow: grow ? 1 : 0,
      margin: theme.getSizeValue({size: spacing, sizes: theme$1.spacing}) / 2
    })
  }, {link: true});

  var __defProp$K = Object.defineProperty;
  var __getOwnPropSymbols$K = Object.getOwnPropertySymbols;
  var __hasOwnProp$K = Object.prototype.hasOwnProperty;
  var __propIsEnum$K = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$K = (obj, key, value) => key in obj ? __defProp$K(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$K = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$K.call(b, prop))
        __defNormalProp$K(a, prop, b[prop]);
    if (__getOwnPropSymbols$K)
      for (var prop of __getOwnPropSymbols$K(b)) {
        if (__propIsEnum$K.call(b, prop))
          __defNormalProp$K(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$v = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$K.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$K)
      for (var prop of __getOwnPropSymbols$K(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$K.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function ElementsGroup(_a) {
    var _b = _a, {
      className,
      position = "left",
      children,
      noWrap = false,
      grow = false,
      spacing = "md",
      themeOverride
    } = _b, others = __objRest$v(_b, [
      "className",
      "position",
      "children",
      "noWrap",
      "grow",
      "spacing",
      "themeOverride"
    ]);
    const classes = useStyles$n({
      grow,
      noWrap,
      spacing,
      position,
      theme: theme.useMantineTheme(themeOverride)
    });
    const items = React.Children.toArray(children).map((child) => React__default.cloneElement(child, {className: cx__default(classes.child, child.props.className)}));
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$K({
      className
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.elementsGroup
    }, items));
  }
  ElementsGroup.displayName = "@mantine/core/ElementsGroup";

  var __defProp$J = Object.defineProperty;
  var __getOwnPropSymbols$J = Object.getOwnPropertySymbols;
  var __hasOwnProp$J = Object.prototype.hasOwnProperty;
  var __propIsEnum$J = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$J = (obj, key, value) => key in obj ? __defProp$J(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$J = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$J.call(b, prop))
        __defNormalProp$J(a, prop, b[prop]);
    if (__getOwnPropSymbols$J)
      for (var prop of __getOwnPropSymbols$J(b)) {
        if (__propIsEnum$J.call(b, prop))
          __defNormalProp$J(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$u = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$J.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$J)
      for (var prop of __getOwnPropSymbols$J(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$J.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function highlighter(value, highlightPart) {
    const normalizedValue = value.trim().toLowerCase();
    const normalizedHighlight = highlightPart.trim().toLowerCase();
    const diff = highlightPart.length - normalizedHighlight.length;
    const highlightLength = highlightPart.length - diff;
    const highlightIndex = normalizedValue.indexOf(normalizedHighlight);
    if (highlightIndex === -1) {
      return {start: value, highlighted: "", end: ""};
    }
    const start = value.slice(0, highlightIndex);
    const highlighted = value.slice(highlightIndex, highlightIndex + highlightLength);
    const end = value.slice(highlightIndex + highlightLength);
    return {start, highlighted, end};
  }
  function Highlight(_a) {
    var _b = _a, {
      children,
      highlight,
      component,
      themeOverride,
      highlightColor = "yellow"
    } = _b, others = __objRest$u(_b, [
      "children",
      "highlight",
      "component",
      "themeOverride",
      "highlightColor"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const color = theme.getThemeColor({
      theme: theme$1,
      color: highlightColor,
      shade: 2
    });
    const {start, end, highlighted} = highlighter(children, highlight);
    return /* @__PURE__ */ React__default.createElement(Text, __spreadValues$J({
      component,
      themeOverride
    }, others), !!start && start, !!highlighted && /* @__PURE__ */ React__default.createElement("mark", {
      style: {
        backgroundColor: color,
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : "inherit"
      }
    }, highlighted), !!end && end);
  }
  Highlight.displayName = "@mantine/core/Highlight";

  const sizes$6 = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  };
  var useStyles$m = reactJss.createUseStyles({
    hr: ({theme: theme$1, size, variant, color}) => ({
      border: 0,
      borderTopWidth: theme.getSizeValue({size, sizes: sizes$6}),
      borderTopColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      borderTopStyle: variant,
      margin: 0
    })
  }, {link: true});

  var __defProp$I = Object.defineProperty;
  var __getOwnPropSymbols$I = Object.getOwnPropertySymbols;
  var __hasOwnProp$I = Object.prototype.hasOwnProperty;
  var __propIsEnum$I = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$I = (obj, key, value) => key in obj ? __defProp$I(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$I = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$I.call(b, prop))
        __defNormalProp$I(a, prop, b[prop]);
    if (__getOwnPropSymbols$I)
      for (var prop of __getOwnPropSymbols$I(b)) {
        if (__propIsEnum$I.call(b, prop))
          __defNormalProp$I(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$t = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$I.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$I)
      for (var prop of __getOwnPropSymbols$I(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$I.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const HR_SIZES = sizes$6;
  function Hr(_a) {
    var _b = _a, {
      size = "xs",
      className,
      variant = "dashed",
      themeOverride,
      color = "gray"
    } = _b, others = __objRest$t(_b, [
      "size",
      "className",
      "variant",
      "themeOverride",
      "color"
    ]);
    const classes = useStyles$m({color, variant, size, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("hr", __spreadValues$I({
      "data-mantine-hr": true,
      className: cx__default(classes.hr, className)
    }, others));
  }
  Hr.displayName = "@mantine/core/Hr";

  var __defProp$H = Object.defineProperty;
  var __getOwnPropSymbols$H = Object.getOwnPropertySymbols;
  var __hasOwnProp$H = Object.prototype.hasOwnProperty;
  var __propIsEnum$H = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$H = (obj, key, value) => key in obj ? __defProp$H(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$H = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$H.call(b, prop))
        __defNormalProp$H(a, prop, b[prop]);
    if (__getOwnPropSymbols$H)
      for (var prop of __getOwnPropSymbols$H(b)) {
        if (__propIsEnum$H.call(b, prop))
          __defNormalProp$H(a, prop, b[prop]);
      }
    return a;
  };
  function ImageIcon(props) {
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues$H({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default.createElement("path", {
      d: "M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }

  var __defProp$G = Object.defineProperty;
  var __defProps$p = Object.defineProperties;
  var __getOwnPropDescs$p = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$G = Object.getOwnPropertySymbols;
  var __hasOwnProp$G = Object.prototype.hasOwnProperty;
  var __propIsEnum$G = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$G = (obj, key, value) => key in obj ? __defProp$G(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$G = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$G.call(b, prop))
        __defNormalProp$G(a, prop, b[prop]);
    if (__getOwnPropSymbols$G)
      for (var prop of __getOwnPropSymbols$G(b)) {
        if (__propIsEnum$G.call(b, prop))
          __defNormalProp$G(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$p = (a, b) => __defProps$p(a, __getOwnPropDescs$p(b));
  var useStyles$l = reactJss.createUseStyles({
    wrapper: {
      position: "relative",
      overflow: "hidden"
    },
    image: ({theme: theme$1, radius}) => __spreadProps$p(__spreadValues$G({}, theme.getFontStyles(theme$1)), {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      border: 0
    }),
    placeholderIcon: ({theme: theme$1, radius}) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6],
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[8] : theme$1.colors.gray[0],
      position: "absolute",
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    })
  }, {link: true});

  var __defProp$F = Object.defineProperty;
  var __defProps$o = Object.defineProperties;
  var __getOwnPropDescs$o = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$F = Object.getOwnPropertySymbols;
  var __hasOwnProp$F = Object.prototype.hasOwnProperty;
  var __propIsEnum$F = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$F = (obj, key, value) => key in obj ? __defProp$F(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$F = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$F.call(b, prop))
        __defNormalProp$F(a, prop, b[prop]);
    if (__getOwnPropSymbols$F)
      for (var prop of __getOwnPropSymbols$F(b)) {
        if (__propIsEnum$F.call(b, prop))
          __defNormalProp$F(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$o = (a, b) => __defProps$o(a, __getOwnPropDescs$o(b));
  var __objRest$s = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$F.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$F)
      for (var prop of __getOwnPropSymbols$F(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$F.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Image(_a) {
    var _b = _a, {
      className,
      themeOverride,
      alt,
      src,
      fit = "cover",
      width = "100%",
      height = "auto",
      radius = 0,
      style,
      imageProps,
      withPlaceholder = false,
      placeholder,
      imageRef,
      elementRef
    } = _b, others = __objRest$s(_b, [
      "className",
      "themeOverride",
      "alt",
      "src",
      "fit",
      "width",
      "height",
      "radius",
      "style",
      "imageProps",
      "withPlaceholder",
      "placeholder",
      "imageRef",
      "elementRef"
    ]);
    const classes = useStyles$l({radius, theme: theme.useMantineTheme(themeOverride)});
    const [loaded, setLoaded] = React.useState(false);
    const [error, setError] = React.useState(!src);
    const isPlaceholder = withPlaceholder && (!loaded || error);
    const firstUpdate = React.useRef(true);
    React.useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
      } else {
        setLoaded(false);
        setError(false);
      }
    }, [src]);
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$F({
      "data-mantine-image": true,
      className: cx__default(classes.wrapper, className),
      style: __spreadValues$F({width, height}, style),
      ref: elementRef
    }, others), isPlaceholder && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-image-placeholder": true,
      className: classes.placeholderIcon,
      title: alt
    }, placeholder || /* @__PURE__ */ React__default.createElement(ImageIcon, {
      style: {width: 40, height: 40}
    })), /* @__PURE__ */ React__default.createElement("img", __spreadValues$F({
      className: cx__default(classes.image, imageProps == null ? void 0 : imageProps.className),
      src,
      alt,
      style: __spreadProps$o(__spreadValues$F({}, imageProps == null ? void 0 : imageProps.style), {objectFit: fit}),
      ref: imageRef,
      onLoad: (event) => {
        setLoaded(true);
        typeof (imageProps == null ? void 0 : imageProps.onLoad) === "function" && imageProps.onLoad(event);
      },
      onError: (event) => {
        setError(true);
        typeof (imageProps == null ? void 0 : imageProps.onError) === "function" && imageProps.onError(event);
      }
    }, imageProps)));
  }
  Image.displayName = "@mantine/core/Image";

  var __defProp$E = Object.defineProperty;
  var __defProps$n = Object.defineProperties;
  var __getOwnPropDescs$n = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$E = Object.getOwnPropertySymbols;
  var __hasOwnProp$E = Object.prototype.hasOwnProperty;
  var __propIsEnum$E = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$E = (obj, key, value) => key in obj ? __defProp$E(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$E = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$E.call(b, prop))
        __defNormalProp$E(a, prop, b[prop]);
    if (__getOwnPropSymbols$E)
      for (var prop of __getOwnPropSymbols$E(b)) {
        if (__propIsEnum$E.call(b, prop))
          __defNormalProp$E(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$n = (a, b) => __defProps$n(a, __getOwnPropDescs$n(b));
  var useStyles$k = reactJss.createUseStyles({
    withIcon: {},
    inputWrapper: ({radius, theme: theme$1}) => ({
      position: "relative",
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      "&, & *": {boxSizing: "border-box"}
    }),
    defaultVariant: ({theme: theme$1, radius}) => ({
      "& $input": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.white,
        minHeight: 36,
        padding: [7, theme$1.spacing.sm],
        borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
        border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[4]}`,
        transition: "border-color 100ms ease, box-shadow 100ms ease",
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
        "&:focus": {
          outline: "none",
          borderColor: theme$1.colors[theme$1.primaryColor][6],
          boxShadow: `0 0 4px ${theme$1.colors.gray[3]}`
        }
      },
      "&$invalid $input": {
        borderColor: theme$1.colors.red[theme$1.colorScheme === "dark" ? 4 : 6]
      },
      "& $withIcon": {
        paddingLeft: 35
      },
      "& $icon": {
        width: 36
      }
    }),
    filledVariant: ({theme: theme$1, radius}) => ({
      "& $input": {
        minHeight: 36,
        paddingLeft: theme$1.spacing.md,
        paddingRight: theme$1.spacing.md,
        borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
        border: "1px solid transparent",
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[1],
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
        "&:focus": {
          outline: "none",
          borderColor: `${theme$1.colors[theme$1.primaryColor][theme$1.colorScheme === "dark" ? 4 : 6]} !important`,
          boxShadow: `0 0 4px ${theme$1.colors.gray[3]}`
        },
        "&::placeholder": {
          color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6]
        }
      },
      "& $input:disabled": {
        "&::placeholder": {
          color: theme$1.colors.gray[5]
        }
      },
      "&$invalid $input": {
        borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.red[4] : "transparent",
        backgroundColor: theme$1.colorScheme !== "dark" && theme$1.colors.red[0]
      },
      "& $withIcon": {
        paddingLeft: 35
      },
      "& $icon": {
        width: 36,
        color: theme$1.colors.gray[6]
      }
    }),
    unstyledVariant: ({theme}) => ({
      "& $input": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        backgroundColor: "transparent",
        height: 28,
        border: 0,
        outline: 0,
        "&:disabled": {
          backgroundColor: "transparent"
        }
      },
      "& $icon": {
        width: 28
      },
      "& $withIcon": {
        paddingLeft: 34
      }
    }),
    input: ({theme: theme$1}) => __spreadProps$n(__spreadValues$E({}, theme.getFontStyles(theme$1)), {
      WebkitTapHighlightColor: "transparent",
      lineHeight: theme$1.lineHeight,
      appearance: "none",
      resize: "none",
      boxSizing: "border-box",
      fontSize: 14,
      width: "100%",
      color: theme$1.black,
      display: "block",
      textAlign: "left",
      "&:disabled": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[1],
        opacity: 0.6,
        cursor: "not-allowed"
      },
      "&::placeholder": {
        opacity: 1,
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[5]
      },
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
        appearance: "none"
      },
      "&[type=number]": {
        MozAppearance: "textfield"
      }
    }),
    icon: ({theme}) => ({
      pointerEvents: "none",
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }),
    invalid: ({theme}) => ({
      "& $input": {
        color: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6],
        borderColor: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6],
        "&::placeholder": {
          color: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
        }
      },
      "& $icon": {
        color: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
      }
    }),
    rightSection: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, {link: true});

  var __defProp$D = Object.defineProperty;
  var __defProps$m = Object.defineProperties;
  var __getOwnPropDescs$m = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$D = Object.getOwnPropertySymbols;
  var __hasOwnProp$D = Object.prototype.hasOwnProperty;
  var __propIsEnum$D = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$D = (obj, key, value) => key in obj ? __defProp$D(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$D = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$D.call(b, prop))
        __defNormalProp$D(a, prop, b[prop]);
    if (__getOwnPropSymbols$D)
      for (var prop of __getOwnPropSymbols$D(b)) {
        if (__propIsEnum$D.call(b, prop))
          __defNormalProp$D(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$m = (a, b) => __defProps$m(a, __getOwnPropDescs$m(b));
  var __objRest$r = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$D.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$D)
      for (var prop of __getOwnPropSymbols$D(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$D.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Input(_a) {
    var _b = _a, {
      component: Element = "input",
      className,
      invalid = false,
      required = false,
      variant = "default",
      icon,
      style,
      rightSectionWidth = 36,
      rightSection,
      rightSectionProps = {},
      radius = "sm",
      inputClassName,
      inputStyle,
      themeOverride,
      wrapperProps,
      elementRef
    } = _b, others = __objRest$r(_b, [
      "component",
      "className",
      "invalid",
      "required",
      "variant",
      "icon",
      "style",
      "rightSectionWidth",
      "rightSection",
      "rightSectionProps",
      "radius",
      "inputClassName",
      "inputStyle",
      "themeOverride",
      "wrapperProps",
      "elementRef"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const classes = useStyles$k({radius, theme: theme$1});
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$D({
      className: cx__default(classes.inputWrapper, {[classes.invalid]: invalid}, classes[`${variant}Variant`], className),
      style
    }, wrapperProps), icon && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-icon": true,
      className: classes.icon
    }, icon), /* @__PURE__ */ React__default.createElement(Element, __spreadProps$m(__spreadValues$D({}, others), {
      "data-mantine-input": true,
      ref: elementRef,
      "aria-required": required,
      "aria-invalid": invalid,
      className: cx__default({[classes.withIcon]: icon}, classes.input, inputClassName),
      style: __spreadValues$D({
        paddingRight: rightSection ? rightSectionWidth : theme$1.spacing.md
      }, inputStyle)
    })), rightSection && /* @__PURE__ */ React__default.createElement("div", __spreadProps$m(__spreadValues$D({}, rightSectionProps), {
      "data-mantine-input-section": true,
      style: __spreadProps$m(__spreadValues$D({}, rightSectionProps.style), {width: rightSectionWidth}),
      className: cx__default(classes.rightSection, rightSectionProps.className)
    }), rightSection));
  }
  Input.displayName = "@mantine/core/Input";

  var __defProp$C = Object.defineProperty;
  var __defProps$l = Object.defineProperties;
  var __getOwnPropDescs$l = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$C = Object.getOwnPropertySymbols;
  var __hasOwnProp$C = Object.prototype.hasOwnProperty;
  var __propIsEnum$C = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$C = (obj, key, value) => key in obj ? __defProp$C(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$C = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$C.call(b, prop))
        __defNormalProp$C(a, prop, b[prop]);
    if (__getOwnPropSymbols$C)
      for (var prop of __getOwnPropSymbols$C(b)) {
        if (__propIsEnum$C.call(b, prop))
          __defNormalProp$C(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$l = (a, b) => __defProps$l(a, __getOwnPropDescs$l(b));
  var useStyles$j = reactJss.createUseStyles({
    inputWrapper: ({theme: theme$1}) => __spreadProps$l(__spreadValues$C({}, theme.getFontStyles(theme$1)), {
      lineHeight: theme$1.lineHeight
    }),
    label: ({theme}) => ({
      display: "block",
      marginBottom: 5,
      fontSize: 14,
      fontWeight: 500,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
      wordBreak: "break-word"
    }),
    error: ({theme}) => ({
      marginTop: theme.spacing.xs / 2,
      wordBreak: "break-word"
    }),
    description: ({theme}) => ({
      marginTop: theme.spacing.xs / 2,
      marginBottom: theme.spacing.xs / 2,
      wordBreak: "break-word"
    }),
    required: ({theme}) => ({
      color: theme.colorScheme === "dark" ? theme.colors.red[5] : theme.colors.red[7]
    })
  }, {link: true});

  var __defProp$B = Object.defineProperty;
  var __defProps$k = Object.defineProperties;
  var __getOwnPropDescs$k = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$B = Object.getOwnPropertySymbols;
  var __hasOwnProp$B = Object.prototype.hasOwnProperty;
  var __propIsEnum$B = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$B = (obj, key, value) => key in obj ? __defProp$B(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$B = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$B.call(b, prop))
        __defNormalProp$B(a, prop, b[prop]);
    if (__getOwnPropSymbols$B)
      for (var prop of __getOwnPropSymbols$B(b)) {
        if (__propIsEnum$B.call(b, prop))
          __defNormalProp$B(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$k = (a, b) => __defProps$k(a, __getOwnPropDescs$k(b));
  var __objRest$q = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$B.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$B)
      for (var prop of __getOwnPropSymbols$B(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$B.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function InputWrapper(_a) {
    var _b = _a, {
      className,
      label,
      children,
      required,
      id,
      error,
      description,
      themeOverride,
      labelElement = "label"
    } = _b, others = __objRest$q(_b, [
      "className",
      "label",
      "children",
      "required",
      "id",
      "error",
      "description",
      "themeOverride",
      "labelElement"
    ]);
    const classes = useStyles$j({theme: theme.useMantineTheme(themeOverride)});
    const labelProps = labelElement === "label" ? {htmlFor: id} : {};
    const inputLabel = React.createElement(labelElement, __spreadProps$k(__spreadValues$B({}, labelProps), {className: classes.label}), /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, label, required && /* @__PURE__ */ React__default.createElement("span", {
      "data-mantine-required": true,
      className: classes.required
    }, " ", "*")));
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$B({
      className: cx__default(classes.inputWrapper, className)
    }, others), label && inputLabel, description && /* @__PURE__ */ React__default.createElement(Text, {
      themeOverride,
      "data-mantine-description": true,
      color: "gray",
      size: "xs",
      className: classes.description
    }, description), children, typeof error !== "boolean" && error && /* @__PURE__ */ React__default.createElement(Text, {
      themeOverride,
      "data-mantine-error": true,
      color: "red",
      size: "sm",
      className: classes.error
    }, error));
  }
  InputWrapper.displayName = "@mantine/core/InputWrapper";

  var useStyles$i = reactJss.createUseStyles({
    kbd: ({theme}) => ({
      lineHeight: theme.lineHeight,
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizes.xs,
      fontWeight: 700,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
      padding: [3, theme.spacing.xs / 2],
      borderRadius: theme.radius.sm,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[3]}`,
      borderBottomWidth: 3
    })
  }, {link: true});

  var __defProp$A = Object.defineProperty;
  var __getOwnPropSymbols$A = Object.getOwnPropertySymbols;
  var __hasOwnProp$A = Object.prototype.hasOwnProperty;
  var __propIsEnum$A = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$A = (obj, key, value) => key in obj ? __defProp$A(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$A = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$A.call(b, prop))
        __defNormalProp$A(a, prop, b[prop]);
    if (__getOwnPropSymbols$A)
      for (var prop of __getOwnPropSymbols$A(b)) {
        if (__propIsEnum$A.call(b, prop))
          __defNormalProp$A(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$p = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$A.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$A)
      for (var prop of __getOwnPropSymbols$A(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$A.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Kbd(_a) {
    var _b = _a, {className, children, themeOverride} = _b, others = __objRest$p(_b, ["className", "children", "themeOverride"]);
    const classes = useStyles$i({theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("kbd", __spreadValues$A({
      className: cx__default(classes.kbd, className)
    }, others), children);
  }
  Kbd.displayName = "@mantine/core/Kbd";

  var __defProp$z = Object.defineProperty;
  var __getOwnPropSymbols$z = Object.getOwnPropertySymbols;
  var __hasOwnProp$z = Object.prototype.hasOwnProperty;
  var __propIsEnum$z = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$z = (obj, key, value) => key in obj ? __defProp$z(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$z = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$z.call(b, prop))
        __defNormalProp$z(a, prop, b[prop]);
    if (__getOwnPropSymbols$z)
      for (var prop of __getOwnPropSymbols$z(b)) {
        if (__propIsEnum$z.call(b, prop))
          __defNormalProp$z(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$o = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$z.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$z)
      for (var prop of __getOwnPropSymbols$z(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$z.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const LOADER_SIZES = {
    xs: 18,
    sm: 22,
    md: 36,
    lg: 44,
    xl: 58
  };
  function Loader(_a) {
    var _b = _a, {size = "md", color, themeOverride} = _b, others = __objRest$o(_b, ["size", "color", "themeOverride"]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues$z({
      width: `${theme.getSizeValue({size, sizes: LOADER_SIZES})}px`,
      fill: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      viewBox: "0 0 135 140",
      xmlns: "http://www.w3.org/2000/svg",
      role: "presentation"
    }, others), /* @__PURE__ */ React__default.createElement("rect", {
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "height",
      begin: "0.5s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "y",
      begin: "0.5s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })), /* @__PURE__ */ React__default.createElement("rect", {
      x: "30",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "height",
      begin: "0.25s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "y",
      begin: "0.25s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })), /* @__PURE__ */ React__default.createElement("rect", {
      x: "60",
      width: "15",
      height: "140",
      rx: "6"
    }, /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "height",
      begin: "0s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "y",
      begin: "0s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })), /* @__PURE__ */ React__default.createElement("rect", {
      x: "90",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "height",
      begin: "0.25s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "y",
      begin: "0.25s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })), /* @__PURE__ */ React__default.createElement("rect", {
      x: "120",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "height",
      begin: "0.5s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default.createElement("animate", {
      attributeName: "y",
      begin: "0.5s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })));
  }
  Loader.displayName = "@mantine/core/Loader";

  var useStyles$h = reactJss.createUseStyles({
    loadingOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, {link: true});

  var __defProp$y = Object.defineProperty;
  var __defProps$j = Object.defineProperties;
  var __getOwnPropDescs$j = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$y = Object.getOwnPropertySymbols;
  var __hasOwnProp$y = Object.prototype.hasOwnProperty;
  var __propIsEnum$y = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$y = (obj, key, value) => key in obj ? __defProp$y(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$y = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$y.call(b, prop))
        __defNormalProp$y(a, prop, b[prop]);
    if (__getOwnPropSymbols$y)
      for (var prop of __getOwnPropSymbols$y(b)) {
        if (__propIsEnum$y.call(b, prop))
          __defNormalProp$y(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$j = (a, b) => __defProps$j(a, __getOwnPropDescs$j(b));
  var __objRest$n = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$y.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$y)
      for (var prop of __getOwnPropSymbols$y(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$y.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function LoadingOverlay(_a) {
    var _b = _a, {
      className,
      visible,
      loaderProps = {},
      overlayOpacity = 0.75,
      overlayColor,
      themeOverride,
      transitionDuration = 200,
      zIndex = 1e3,
      style
    } = _b, others = __objRest$n(_b, [
      "className",
      "visible",
      "loaderProps",
      "overlayOpacity",
      "overlayColor",
      "themeOverride",
      "transitionDuration",
      "zIndex",
      "style"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const classes = useStyles$h();
    const reduceMotion = hooks.useReducedMotion();
    const duration = reduceMotion ? 1 : transitionDuration;
    return /* @__PURE__ */ React__default.createElement(Transition, {
      duration,
      mounted: visible,
      transition: "fade",
      themeOverride
    }, (transitionStyles) => /* @__PURE__ */ React__default.createElement("div", __spreadValues$y({
      className: cx__default(classes.loadingOverlay, className),
      style: __spreadProps$j(__spreadValues$y(__spreadValues$y({}, transitionStyles), style), {zIndex})
    }, others), /* @__PURE__ */ React__default.createElement(Loader, __spreadValues$y({
      themeOverride,
      style: {zIndex: zIndex + 1}
    }, loaderProps)), /* @__PURE__ */ React__default.createElement(Overlay, {
      opacity: overlayOpacity,
      color: overlayColor || (theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.white),
      zIndex
    })));
  }
  LoadingOverlay.displayName = "@mantine/core/LoadingOverlay";

  var __defProp$x = Object.defineProperty;
  var __getOwnPropSymbols$x = Object.getOwnPropertySymbols;
  var __hasOwnProp$x = Object.prototype.hasOwnProperty;
  var __propIsEnum$x = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$x = (obj, key, value) => key in obj ? __defProp$x(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$x = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$x.call(b, prop))
        __defNormalProp$x(a, prop, b[prop]);
    if (__getOwnPropSymbols$x)
      for (var prop of __getOwnPropSymbols$x(b)) {
        if (__propIsEnum$x.call(b, prop))
          __defNormalProp$x(a, prop, b[prop]);
      }
    return a;
  };
  function MenuIcon(props) {
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues$x({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default.createElement("path", {
      d: "M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }

  function MenuItem(props) {
    return null;
  }
  MenuItem.displayName = "@mantine/core/MenuItem";

  var __defProp$w = Object.defineProperty;
  var __defProps$i = Object.defineProperties;
  var __getOwnPropDescs$i = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$w = Object.getOwnPropertySymbols;
  var __hasOwnProp$w = Object.prototype.hasOwnProperty;
  var __propIsEnum$w = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$w = (obj, key, value) => key in obj ? __defProp$w(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$w = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$w.call(b, prop))
        __defNormalProp$w(a, prop, b[prop]);
    if (__getOwnPropSymbols$w)
      for (var prop of __getOwnPropSymbols$w(b)) {
        if (__propIsEnum$w.call(b, prop))
          __defNormalProp$w(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$i = (a, b) => __defProps$i(a, __getOwnPropDescs$i(b));
  var useStyles$g = reactJss.createUseStyles({
    hovered: {},
    item: ({theme: theme$1, color}) => __spreadProps$i(__spreadValues$w({}, theme.getFontStyles(theme$1)), {
      WebkitTapHighlightColor: "transparent",
      fontSize: theme$1.fontSizes.sm,
      border: 0,
      backgroundColor: "transparent",
      outline: 0,
      width: "100%",
      textAlign: "left",
      height: 32,
      padding: [0, theme$1.spacing.sm],
      cursor: "pointer",
      color: color ? theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}) : theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.colors.gray[9],
      "&:disabled": {
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[5],
        cursor: "not-allowed"
      },
      "&$hovered:not(:disabled), &:not(:disabled):hover": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[1],
        "&:not(:disabled):active": {
          backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[2]
        }
      }
    }),
    inner: {
      display: "flex",
      alignItems: "center"
    },
    body: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1
    },
    icon: ({theme}) => ({
      marginRight: theme.spacing.xs,
      "& > *": {
        display: "block"
      }
    }),
    label: {
      lineHeight: 1
    }
  }, {link: true});

  var __defProp$v = Object.defineProperty;
  var __getOwnPropSymbols$v = Object.getOwnPropertySymbols;
  var __hasOwnProp$v = Object.prototype.hasOwnProperty;
  var __propIsEnum$v = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$v = (obj, key, value) => key in obj ? __defProp$v(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$v = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$v.call(b, prop))
        __defNormalProp$v(a, prop, b[prop]);
    if (__getOwnPropSymbols$v)
      for (var prop of __getOwnPropSymbols$v(b)) {
        if (__propIsEnum$v.call(b, prop))
          __defNormalProp$v(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$m = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$v.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$v)
      for (var prop of __getOwnPropSymbols$v(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$v.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function MenuButton(_a) {
    var _b = _a, {
      children,
      onHover,
      hovered,
      themeOverride,
      elementRef,
      icon,
      color,
      disabled,
      rightSection,
      className
    } = _b, others = __objRest$m(_b, [
      "children",
      "onHover",
      "hovered",
      "themeOverride",
      "elementRef",
      "icon",
      "color",
      "disabled",
      "rightSection",
      "className"
    ]);
    const classes = useStyles$g({color, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("button", __spreadValues$v({
      type: "button",
      role: "menuitem",
      className: cx__default(classes.item, {[classes.hovered]: hovered}, className),
      onMouseEnter: () => !disabled && onHover(),
      ref: elementRef,
      disabled
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.inner
    }, icon && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-icon": true,
      className: classes.icon
    }, icon), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.body
    }, /* @__PURE__ */ React__default.createElement("div", {
      className: classes.label
    }, children), rightSection)));
  }
  MenuButton.displayName = "@mantine/core/MenuButton";

  const sizes$5 = {
    xs: 120,
    sm: 160,
    md: 200,
    lg: 240,
    xl: 300
  };
  var useStyles$f = reactJss.createUseStyles({
    menu: ({theme: theme$1, size}) => ({
      position: "absolute",
      width: theme.getSizeValue({size, sizes: sizes$5}),
      overflow: "hidden",
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
      border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[2]}`,
      paddingTop: theme$1.spacing.xs / 2,
      paddingBottom: theme$1.spacing.xs / 2
    }),
    hr: ({theme}) => ({
      borderTopColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      marginTop: theme.spacing.xs / 2,
      marginBottom: theme.spacing.xs / 2
    })
  }, {link: true});

  var __defProp$u = Object.defineProperty;
  var __defProps$h = Object.defineProperties;
  var __getOwnPropDescs$h = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$u = Object.getOwnPropertySymbols;
  var __hasOwnProp$u = Object.prototype.hasOwnProperty;
  var __propIsEnum$u = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$u = (obj, key, value) => key in obj ? __defProp$u(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$u = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$u.call(b, prop))
        __defNormalProp$u(a, prop, b[prop]);
    if (__getOwnPropSymbols$u)
      for (var prop of __getOwnPropSymbols$u(b)) {
        if (__propIsEnum$u.call(b, prop))
          __defNormalProp$u(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$h = (a, b) => __defProps$h(a, __getOwnPropDescs$h(b));
  var __objRest$l = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$u.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$u)
      for (var prop of __getOwnPropSymbols$u(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$u.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function getPreviousItem(active, items) {
    for (let i = active - 1; i >= 0; i -= 1) {
      if (!items[i].props.disabled && items[i].type === MenuItem) {
        return i;
      }
    }
    return active;
  }
  function getNextItem(active, items) {
    for (let i = active + 1; i < items.length; i += 1) {
      if (!items[i].props.disabled && items[i].type === MenuItem) {
        return i;
      }
    }
    return active;
  }
  function findInitialItem(items) {
    for (let i = 0; i < items.length; i += 1) {
      if (!items[i].props.disabled && items[i].type === MenuItem) {
        return i;
      }
    }
    return -1;
  }
  function MenuBody(_a) {
    var _b = _a, {
      className,
      themeOverride,
      opened,
      onClose,
      transition = "skew-up",
      transitionDuration = 250,
      transitionTimingFunction,
      style,
      children,
      size = "md",
      shadow = "md",
      closeOnClickOutside = true,
      closeOnItemClick = true,
      zIndex = 1e3
    } = _b, others = __objRest$l(_b, [
      "className",
      "themeOverride",
      "opened",
      "onClose",
      "transition",
      "transitionDuration",
      "transitionTimingFunction",
      "style",
      "children",
      "size",
      "shadow",
      "closeOnClickOutside",
      "closeOnItemClick",
      "zIndex"
    ]);
    const items = React__default.Children.toArray(children).filter((item) => item.type === MenuItem || item.type === Hr);
    const hoveredTimeout = React.useRef();
    const buttonsRefs = React.useRef({});
    const theme$1 = theme.useMantineTheme(themeOverride);
    const classes = useStyles$f({size, theme: theme$1});
    const reduceMotion = hooks.useReducedMotion();
    const duration = reduceMotion ? 0 : transitionDuration;
    const [hovered, setHovered] = React.useState(findInitialItem(items));
    const focusTrapRef = hooks.useFocusTrap();
    React.useEffect(() => {
      if (!opened) {
        hoveredTimeout.current = window.setTimeout(() => {
          setHovered(findInitialItem(items));
        }, duration);
      } else {
        window.clearTimeout(hoveredTimeout.current);
      }
    }, [opened]);
    const menuRef = hooks.useClickOutside(() => closeOnClickOutside && onClose());
    const handleKeyDown = (event) => {
      const {code} = event.nativeEvent;
      if (code === "Escape") {
        onClose();
      }
      if (code === "Tab") {
        event.preventDefault();
      }
      if (code === "ArrowUp") {
        event.preventDefault();
        const prevIndex = getPreviousItem(hovered, items);
        setHovered(prevIndex);
        buttonsRefs.current[prevIndex].focus();
      }
      if (code === "ArrowDown") {
        event.preventDefault();
        const nextIndex = getNextItem(hovered, items);
        setHovered(nextIndex);
        buttonsRefs.current[nextIndex].focus();
      }
    };
    if (items.length === 0) {
      return null;
    }
    const buttons = items.map((item, index) => {
      if (item.type === MenuItem) {
        return /* @__PURE__ */ React__default.createElement(MenuButton, __spreadProps$h(__spreadValues$u({}, item.props), {
          key: index,
          hovered: hovered === index,
          onHover: () => setHovered(-1),
          onClick: (event) => {
            if (closeOnItemClick) {
              onClose();
            }
            if (typeof item.props.onClick === "function") {
              item.props.onClick(event);
            }
          },
          elementRef: (node) => {
            buttonsRefs.current[index] = node;
          }
        }));
      }
      if (item.type === Hr) {
        return /* @__PURE__ */ React__default.createElement(Hr, {
          key: index,
          variant: "solid",
          className: classes.hr
        });
      }
      return null;
    });
    return /* @__PURE__ */ React__default.createElement(Transition, {
      mounted: opened,
      duration,
      transition,
      timingFunction: transitionTimingFunction,
      themeOverride
    }, (transitionStyles) => /* @__PURE__ */ React__default.createElement(Paper, __spreadValues$u({
      shadow,
      className: cx__default(classes.menu, className),
      style: __spreadProps$h(__spreadValues$u(__spreadValues$u({}, style), transitionStyles), {zIndex}),
      onKeyDownCapture: handleKeyDown,
      elementRef: menuRef,
      role: "menu",
      "aria-orientation": "vertical"
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      ref: focusTrapRef
    }, buttons)));
  }
  MenuBody.displayName = "@mantine/core/MenuBody";

  var __defProp$t = Object.defineProperty;
  var __defProps$g = Object.defineProperties;
  var __getOwnPropDescs$g = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$t = Object.getOwnPropertySymbols;
  var __hasOwnProp$t = Object.prototype.hasOwnProperty;
  var __propIsEnum$t = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$t = (obj, key, value) => key in obj ? __defProp$t(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$t = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$t.call(b, prop))
        __defNormalProp$t(a, prop, b[prop]);
    if (__getOwnPropSymbols$t)
      for (var prop of __getOwnPropSymbols$t(b)) {
        if (__propIsEnum$t.call(b, prop))
          __defNormalProp$t(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$g = (a, b) => __defProps$g(a, __getOwnPropDescs$g(b));
  var __objRest$k = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$t.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$t)
      for (var prop of __getOwnPropSymbols$t(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$t.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const MENU_SIZES = sizes$5;
  const defaultControl = /* @__PURE__ */ React__default.createElement(ActionIcon, null, /* @__PURE__ */ React__default.createElement(MenuIcon, null));
  function Menu(_a) {
    var _b = _a, {
      control = defaultControl,
      children,
      onClose,
      onOpen,
      opened,
      themeOverride,
      menuPosition = {top: 0, left: 0},
      style,
      menuId,
      menuBodyProps = {},
      closeOnItemClick = true,
      transitionDuration = 250,
      size = "md",
      shadow = "md",
      transition = "skew-up",
      transitionTimingFunction,
      menuButtonLabel,
      controlRefProp = "elementRef",
      zIndex = 1e3,
      elementRef
    } = _b, others = __objRest$k(_b, [
      "control",
      "children",
      "onClose",
      "onOpen",
      "opened",
      "themeOverride",
      "menuPosition",
      "style",
      "menuId",
      "menuBodyProps",
      "closeOnItemClick",
      "transitionDuration",
      "size",
      "shadow",
      "transition",
      "transitionTimingFunction",
      "menuButtonLabel",
      "controlRefProp",
      "zIndex",
      "elementRef"
    ]);
    const controlRefFocusTimeout = React.useRef();
    const controlRef = React.useRef(null);
    const uuid = hooks.useId(menuId);
    const controlled = typeof opened === "boolean";
    const [_opened, setOpened] = React.useState(false);
    const menuOpened = controlled ? opened : _opened;
    const handleClose = () => {
      setOpened(false);
      typeof onClose === "function" && onClose();
      controlRefFocusTimeout.current = window.setTimeout(() => {
        var _a2;
        typeof ((_a2 = controlRef.current) == null ? void 0 : _a2.focus) === "function" && controlRef.current.focus();
      }, transitionDuration + 10);
    };
    const handleOpen = () => {
      setOpened(true);
      window.clearTimeout(controlRefFocusTimeout.current);
      typeof onOpen === "function" && onOpen();
    };
    const wrapperRef = hooks.useClickOutside(() => menuOpened && handleClose());
    const toggleMenu = () => opened || _opened ? handleClose() : handleOpen();
    const menuControl = React.cloneElement(control, {
      onClick: toggleMenu,
      role: "button",
      "aria-haspopup": "menu",
      "aria-expanded": menuOpened,
      "aria-controls": uuid,
      "aria-label": menuButtonLabel,
      "data-mantine-menu": true,
      title: menuButtonLabel,
      [controlRefProp]: hooks.useMergedRef(controlRef, elementRef)
    });
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$t({
      "data-mantine-composable": true,
      ref: wrapperRef,
      style: __spreadValues$t({display: "inline-block", position: "relative"}, style)
    }, others), menuControl, /* @__PURE__ */ React__default.createElement(MenuBody, __spreadProps$g(__spreadValues$t({}, menuBodyProps), {
      opened: menuOpened,
      onClose: handleClose,
      id: uuid,
      themeOverride,
      closeOnClickOutside: false,
      closeOnItemClick,
      style: __spreadValues$t(__spreadValues$t({}, menuBodyProps.style), menuPosition),
      transitionDuration,
      transition,
      transitionTimingFunction,
      size,
      shadow,
      zIndex
    }), children));
  }
  Menu.displayName = "@mantine/core/Menu";

  var __defProp$s = Object.defineProperty;
  var __getOwnPropSymbols$s = Object.getOwnPropertySymbols;
  var __hasOwnProp$s = Object.prototype.hasOwnProperty;
  var __propIsEnum$s = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$s = (obj, key, value) => key in obj ? __defProp$s(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$s = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$s.call(b, prop))
        __defNormalProp$s(a, prop, b[prop]);
    if (__getOwnPropSymbols$s)
      for (var prop of __getOwnPropSymbols$s(b)) {
        if (__propIsEnum$s.call(b, prop))
          __defNormalProp$s(a, prop, b[prop]);
      }
    return a;
  };
  function CloseIcon(props) {
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues$s({
      width: "20",
      height: "20",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default.createElement("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }

  const sizes$4 = {
    xs: 320,
    sm: 380,
    md: 440,
    lg: 620,
    xl: 780,
    full: "100%"
  };
  var useStyles$e = reactJss.createUseStyles({
    wrapper: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    inner: ({theme}) => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: "auto",
      padding: [theme.spacing.xl * 2, theme.spacing.md],
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start"
    }),
    title: ({theme}) => ({
      marginRight: theme.spacing.md,
      textOverflow: "ellipsis",
      display: "block",
      wordBreak: "break-word"
    }),
    modal: ({theme: theme$1, size}) => ({
      width: theme.getSizeValue({sizes: sizes$4, size}),
      padding: theme$1.spacing.lg,
      outline: 0
    }),
    header: ({theme}) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing.md
    }),
    body: ({overflow}) => ({
      maxHeight: overflow === "inside" && "calc(100vh - 185px)",
      overflowY: overflow === "inside" && "auto",
      wordBreak: "break-word"
    })
  }, {link: true});

  var __defProp$r = Object.defineProperty;
  var __getOwnPropSymbols$r = Object.getOwnPropertySymbols;
  var __hasOwnProp$r = Object.prototype.hasOwnProperty;
  var __propIsEnum$r = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$r = (obj, key, value) => key in obj ? __defProp$r(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$r = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$r.call(b, prop))
        __defNormalProp$r(a, prop, b[prop]);
    if (__getOwnPropSymbols$r)
      for (var prop of __getOwnPropSymbols$r(b)) {
        if (__propIsEnum$r.call(b, prop))
          __defNormalProp$r(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$j = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$r.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$r)
      for (var prop of __getOwnPropSymbols$r(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$r.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const MODAL_SIZES = sizes$4;
  function Modal(_a) {
    var _b = _a, {
      className,
      opened,
      themeOverride,
      title,
      onClose,
      children,
      hideCloseButton = false,
      overlayOpacity,
      size = "md",
      transitionDuration = 300,
      closeButtonLabel,
      overlayColor,
      zIndex = 1e3,
      overflow = "outside",
      transition = "slide-down",
      id
    } = _b, others = __objRest$j(_b, [
      "className",
      "opened",
      "themeOverride",
      "title",
      "onClose",
      "children",
      "hideCloseButton",
      "overlayOpacity",
      "size",
      "transitionDuration",
      "closeButtonLabel",
      "overlayColor",
      "zIndex",
      "overflow",
      "transition",
      "id"
    ]);
    const baseId = hooks.useId(id);
    const titleId = `${baseId}-title`;
    const bodyId = `${baseId}-body`;
    const reduceMotion = hooks.useReducedMotion();
    const theme$1 = theme.useMantineTheme(themeOverride);
    const classes = useStyles$e({size, overflow, theme: theme$1});
    const clickOutsideRef = hooks.useClickOutside(onClose);
    const focusTrapRef = hooks.useFocusTrap();
    const duration = reduceMotion ? 1 : transitionDuration;
    const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme$1.colorScheme === "dark" ? 0.85 : 0.75;
    hooks.useScrollLock(opened);
    return /* @__PURE__ */ React__default.createElement(GroupedTransition, {
      mounted: opened,
      transitions: {
        modal: {duration, transition},
        overlay: {duration: duration / 2, transition: "fade", timingFunction: "ease"}
      }
    }, (styles) => /* @__PURE__ */ React__default.createElement("div", __spreadValues$r({
      className: cx__default(classes.wrapper, className)
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-modal-inner": true,
      className: classes.inner,
      onKeyDownCapture: (event) => event.nativeEvent.code === "Escape" && onClose(),
      style: {zIndex: zIndex + 1},
      ref: focusTrapRef
    }, /* @__PURE__ */ React__default.createElement(Paper, {
      className: classes.modal,
      shadow: "lg",
      role: "dialog",
      "aria-labelledby": titleId,
      "aria-describedby": bodyId,
      "aria-modal": true,
      style: styles.modal,
      elementRef: clickOutsideRef,
      tabIndex: -1
    }, (title || !hideCloseButton) && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-modal-header": true,
      className: classes.header
    }, /* @__PURE__ */ React__default.createElement(Text, {
      id: titleId,
      "data-mantine-modal-title": true,
      className: classes.title
    }, title), !hideCloseButton && /* @__PURE__ */ React__default.createElement(ActionIcon, {
      onClick: onClose,
      "aria-label": closeButtonLabel
    }, /* @__PURE__ */ React__default.createElement(CloseIcon, null))), /* @__PURE__ */ React__default.createElement("div", {
      id: bodyId,
      className: classes.body
    }, children))), /* @__PURE__ */ React__default.createElement("div", {
      style: styles.overlay
    }, /* @__PURE__ */ React__default.createElement(Overlay, {
      color: overlayColor || (theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.black),
      opacity: _overlayOpacity,
      zIndex
    }))));
  }
  Modal.displayName = "@mantine/core/Modal";

  var useStyles$d = reactJss.createUseStyles({
    withIcon: {
      paddingLeft: "10px !important",
      "&::before": {
        display: "none !important"
      }
    },
    notification: ({color, theme: theme$1}) => ({
      boxSizing: "border-box",
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingLeft: 22,
      paddingRight: 5,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 4,
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
      border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[5] : theme$1.colors.gray[2]}`,
      "&::before": {
        content: "''",
        display: "block",
        position: "absolute",
        width: 6,
        top: 4,
        bottom: 4,
        left: 4,
        borderRadius: 4,
        backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6})
      },
      "& $icon": {
        backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
        color: theme$1.white
      }
    }),
    body: ({disallowClose}) => ({
      flex: 1,
      maxWidth: !disallowClose ? "calc(100% - 40px)" : "100%",
      marginRight: 10
    }),
    loader: ({theme}) => ({
      marginRight: theme.spacing.md
    }),
    icon: ({theme}) => ({
      boxSizing: "border-box",
      marginRight: theme.spacing.md,
      width: 28,
      height: 28,
      borderRadius: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.white
    }),
    title: ({theme}) => ({
      lineHeight: 1.4,
      marginBottom: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[9]
    }),
    description: ({theme}) => ({
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
      lineHeight: 1.4,
      overflow: "hidden",
      textOverflow: "ellipsis",
      "&:only-child": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
      }
    })
  }, {link: true});

  var __defProp$q = Object.defineProperty;
  var __defProps$f = Object.defineProperties;
  var __getOwnPropDescs$f = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$q = Object.getOwnPropertySymbols;
  var __hasOwnProp$q = Object.prototype.hasOwnProperty;
  var __propIsEnum$q = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$q = (obj, key, value) => key in obj ? __defProp$q(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$q = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$q.call(b, prop))
        __defNormalProp$q(a, prop, b[prop]);
    if (__getOwnPropSymbols$q)
      for (var prop of __getOwnPropSymbols$q(b)) {
        if (__propIsEnum$q.call(b, prop))
          __defNormalProp$q(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$f = (a, b) => __defProps$f(a, __getOwnPropDescs$f(b));
  var __objRest$i = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$q.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$q)
      for (var prop of __getOwnPropSymbols$q(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$q.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Notification(_a) {
    var _b = _a, {
      className,
      color = "blue",
      loading = false,
      disallowClose = false,
      title,
      icon,
      children,
      onClose,
      closeButtonProps,
      themeOverride
    } = _b, others = __objRest$i(_b, [
      "className",
      "color",
      "loading",
      "disallowClose",
      "title",
      "icon",
      "children",
      "onClose",
      "closeButtonProps",
      "themeOverride"
    ]);
    const classes = useStyles$d({color, disallowClose, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement(Paper, __spreadValues$q({
      shadow: "lg",
      padding: "sm",
      className: cx__default(classes.notification, {[classes.withIcon]: icon || loading}, className),
      role: "alert",
      themeOverride
    }, others), icon && !loading && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-icon": true,
      className: classes.icon
    }, icon), loading && /* @__PURE__ */ React__default.createElement(Loader, {
      size: 28,
      color,
      className: classes.loader
    }), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.body
    }, title && /* @__PURE__ */ React__default.createElement(Text, {
      "data-mantine-title": true,
      className: classes.title,
      size: "sm",
      weight: 500,
      themeOverride
    }, title), /* @__PURE__ */ React__default.createElement(Text, {
      "data-mantine-body": true,
      className: classes.description,
      size: "sm",
      themeOverride
    }, children)), !disallowClose && /* @__PURE__ */ React__default.createElement(ActionIcon, __spreadProps$f(__spreadValues$q({}, closeButtonProps), {
      color: "gray",
      onClick: onClose,
      themeOverride
    }), /* @__PURE__ */ React__default.createElement(CloseIcon, null)));
  }
  Notification.displayName = "@mantine/core/Notification";

  var __defProp$p = Object.defineProperty;
  var __defProps$e = Object.defineProperties;
  var __getOwnPropDescs$e = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$p = Object.getOwnPropertySymbols;
  var __hasOwnProp$p = Object.prototype.hasOwnProperty;
  var __propIsEnum$p = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$p = (obj, key, value) => key in obj ? __defProp$p(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$p = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$p.call(b, prop))
        __defNormalProp$p(a, prop, b[prop]);
    if (__getOwnPropSymbols$p)
      for (var prop of __getOwnPropSymbols$p(b)) {
        if (__propIsEnum$p.call(b, prop))
          __defNormalProp$p(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$e = (a, b) => __defProps$e(a, __getOwnPropDescs$e(b));
  var __objRest$h = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$p.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$p)
      for (var prop of __getOwnPropSymbols$p(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$p.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function TextInput(_a) {
    var _b = _a, {
      className,
      id,
      label,
      error,
      required,
      type = "text",
      style,
      icon,
      description,
      themeOverride,
      wrapperProps,
      elementRef
    } = _b, others = __objRest$h(_b, [
      "className",
      "id",
      "label",
      "error",
      "required",
      "type",
      "style",
      "icon",
      "description",
      "themeOverride",
      "wrapperProps",
      "elementRef"
    ]);
    const uuid = hooks.useId(id);
    return /* @__PURE__ */ React__default.createElement(InputWrapper, __spreadValues$p({
      required,
      id: uuid,
      label,
      error,
      description,
      className,
      style,
      themeOverride
    }, wrapperProps), /* @__PURE__ */ React__default.createElement(Input, __spreadProps$e(__spreadValues$p({}, others), {
      required,
      elementRef,
      id: uuid,
      type,
      invalid: !!error,
      icon,
      themeOverride
    })));
  }
  TextInput.displayName = "@mantine/core/TextInput";

  const CONTROL_WIDTH = 24;
  var useStyles$c = reactJss.createUseStyles({
    rightSection: {
      display: "flex",
      flexDirection: "column",
      height: "calc(100% - 2px)",
      margin: 1,
      marginRight: 1
    },
    control: ({theme}) => ({
      position: "relative",
      flex: "0 0 50%",
      boxSizing: "border-box",
      width: CONTROL_WIDTH,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
      borderTop: 0,
      borderRight: 0,
      backgroundColor: "transparent",
      marginRight: 1,
      "&:not(:disabled):hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
      },
      "&::after": {
        position: "absolute",
        top: "calc(50% - 2.5px)",
        left: "calc(50% - 4.5px)",
        content: '""',
        display: "block",
        width: 0,
        height: 0,
        borderStyle: "solid"
      }
    }),
    controlUp: ({theme: theme$1, radius}) => ({
      borderTopRightRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}) - 1,
      "&::after": {
        borderWidth: [0, 5, 5, 5],
        borderColor: [
          "transparent",
          "transparent",
          theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
          "transparent"
        ]
      },
      "&:disabled::after": {
        borderBottomColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[5]
      }
    }),
    controlDown: ({theme: theme$1, radius}) => ({
      borderBottomRightRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}) - 1,
      borderBottom: 0,
      "&::after": {
        borderWidth: [5, 5, 0, 5],
        borderColor: [
          theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
          "transparent",
          "transparent",
          "transparent"
        ]
      },
      "&:disabled::after": {
        borderTopColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[5]
      }
    })
  }, {link: true});

  var __defProp$o = Object.defineProperty;
  var __defProps$d = Object.defineProperties;
  var __getOwnPropDescs$d = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$o = Object.getOwnPropertySymbols;
  var __hasOwnProp$o = Object.prototype.hasOwnProperty;
  var __propIsEnum$o = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$o = (obj, key, value) => key in obj ? __defProp$o(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$o = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$o.call(b, prop))
        __defNormalProp$o(a, prop, b[prop]);
    if (__getOwnPropSymbols$o)
      for (var prop of __getOwnPropSymbols$o(b)) {
        if (__propIsEnum$o.call(b, prop))
          __defNormalProp$o(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$d = (a, b) => __defProps$d(a, __getOwnPropDescs$d(b));
  var __objRest$g = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$o.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$o)
      for (var prop of __getOwnPropSymbols$o(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$o.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function NumberInput(_a) {
    var _b = _a, {
      disabled,
      themeOverride,
      elementRef,
      value,
      onChange,
      min,
      max,
      step = 1,
      onBlur,
      onFocus,
      hideControls = false,
      radius = "sm",
      variant,
      precision = 0,
      defaultValue,
      noClampOnBlur = false
    } = _b, others = __objRest$g(_b, [
      "disabled",
      "themeOverride",
      "elementRef",
      "value",
      "onChange",
      "min",
      "max",
      "step",
      "onBlur",
      "onFocus",
      "hideControls",
      "radius",
      "variant",
      "precision",
      "defaultValue",
      "noClampOnBlur"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const classes = useStyles$c({theme: theme$1, radius});
    const [focused, setFocused] = React.useState(false);
    const [_value, setValue] = React.useState(typeof value === "number" ? value : typeof defaultValue === "number" ? defaultValue : 0);
    const finalValue = typeof value === "number" ? value : _value;
    const [tempValue, setTempValue] = React.useState(typeof finalValue === "number" ? finalValue.toFixed(precision) : "");
    const inputRef = React.useRef();
    const handleValueChange = (val) => {
      typeof onChange === "function" && onChange(val);
      setValue(val);
    };
    const _min = typeof min === "number" ? min : -Infinity;
    const _max = typeof max === "number" ? max : Infinity;
    const clamp = (v) => {
      const val = typeof v === "number" ? v : parseFloat(v);
      return Math.min(Math.max(val, _min), _max);
    };
    React.useEffect(() => {
      if (typeof value === "number" && !focused) {
        setValue(value);
        setTempValue(value.toFixed(precision));
      }
    }, [value]);
    const rightSection = /* @__PURE__ */ React__default.createElement("div", {
      className: classes.rightSection
    }, /* @__PURE__ */ React__default.createElement("button", {
      type: "button",
      tabIndex: -1,
      "aria-hidden": true,
      "data-mantine-increment": true,
      onMouseDown: (event) => {
        event.preventDefault();
        const result = clamp(finalValue + step).toFixed(precision);
        handleValueChange(parseFloat(result));
        setTempValue(result);
        inputRef.current.focus();
      },
      disabled: finalValue >= max,
      className: cx__default(classes.control, classes.controlUp)
    }), /* @__PURE__ */ React__default.createElement("button", {
      type: "button",
      tabIndex: -1,
      "aria-hidden": true,
      "data-mantine-decrement": true,
      onMouseDown: (event) => {
        event.preventDefault();
        const result = clamp(finalValue - step).toFixed(precision);
        handleValueChange(parseFloat(result));
        setTempValue(result);
        inputRef.current.focus();
      },
      disabled: finalValue <= min,
      className: cx__default(classes.control, classes.controlDown)
    }));
    const handleChange = (event) => {
      const val = event.currentTarget.value;
      setTempValue(val);
      const parsed = Number(val);
      val.trim() !== "" && !Number.isNaN(parsed) && handleValueChange(parsed);
    };
    const handleBlur = (event) => {
      const val = clamp(event.currentTarget.value);
      if (!Number.isNaN(val)) {
        if (!noClampOnBlur) {
          setTempValue(val.toFixed(precision));
          handleValueChange(val);
        }
      } else {
        setTempValue(finalValue.toFixed(precision));
      }
      setFocused(false);
      typeof onBlur === "function" && onBlur(event);
    };
    const handleFocus = (event) => {
      setFocused(true);
      typeof onFocus === "function" && onBlur(event);
    };
    return /* @__PURE__ */ React__default.createElement(TextInput, __spreadProps$d(__spreadValues$o({}, others), {
      variant,
      value: tempValue,
      disabled,
      themeOverride,
      elementRef: hooks.useMergedRef(inputRef, elementRef),
      type: "number",
      onChange: handleChange,
      onBlur: handleBlur,
      onFocus: handleFocus,
      rightSection: disabled || hideControls || variant === "unstyled" ? null : rightSection,
      rightSectionWidth: CONTROL_WIDTH + 1,
      radius,
      max,
      min,
      step
    }));
  }
  NumberInput.displayName = "@mantine/core/NumberInput";

  var __defProp$n = Object.defineProperty;
  var __getOwnPropSymbols$n = Object.getOwnPropertySymbols;
  var __hasOwnProp$n = Object.prototype.hasOwnProperty;
  var __propIsEnum$n = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$n = (obj, key, value) => key in obj ? __defProp$n(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$n = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$n.call(b, prop))
        __defNormalProp$n(a, prop, b[prop]);
    if (__getOwnPropSymbols$n)
      for (var prop of __getOwnPropSymbols$n(b)) {
        if (__propIsEnum$n.call(b, prop))
          __defNormalProp$n(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$f = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$n.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$n)
      for (var prop of __getOwnPropSymbols$n(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$n.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function PasswordToggleIcon(_a) {
    var _b = _a, {reveal} = _b, others = __objRest$f(_b, ["reveal"]);
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues$n({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, others), /* @__PURE__ */ React__default.createElement("path", {
      d: reveal ? "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z" : "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }

  var __defProp$m = Object.defineProperty;
  var __defProps$c = Object.defineProperties;
  var __getOwnPropDescs$c = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
  var __hasOwnProp$m = Object.prototype.hasOwnProperty;
  var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$m = (obj, key, value) => key in obj ? __defProp$m(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$m = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$m.call(b, prop))
        __defNormalProp$m(a, prop, b[prop]);
    if (__getOwnPropSymbols$m)
      for (var prop of __getOwnPropSymbols$m(b)) {
        if (__propIsEnum$m.call(b, prop))
          __defNormalProp$m(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$c = (a, b) => __defProps$c(a, __getOwnPropDescs$c(b));
  var __objRest$e = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$m.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$m)
      for (var prop of __getOwnPropSymbols$m(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$m.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function PasswordInput(_a) {
    var _b = _a, {
      radius,
      disabled,
      hidePasswordLabel,
      showPasswordLabel,
      themeOverride,
      focusInputOnToggle = false,
      elementRef
    } = _b, others = __objRest$e(_b, [
      "radius",
      "disabled",
      "hidePasswordLabel",
      "showPasswordLabel",
      "themeOverride",
      "focusInputOnToggle",
      "elementRef"
    ]);
    const inputRef = React.useRef();
    const [reveal, setReveal] = React.useState(false);
    const toggleReveal = () => {
      setReveal((current) => !current);
      if (focusInputOnToggle) {
        inputRef.current.focus();
      }
    };
    const rightSection = /* @__PURE__ */ React__default.createElement(ActionIcon, {
      onClick: toggleReveal,
      themeOverride,
      title: reveal ? hidePasswordLabel : showPasswordLabel,
      "aria-label": reveal ? hidePasswordLabel : showPasswordLabel,
      radius
    }, /* @__PURE__ */ React__default.createElement(PasswordToggleIcon, {
      reveal
    }));
    return /* @__PURE__ */ React__default.createElement(TextInput, __spreadProps$c(__spreadValues$m({}, others), {
      disabled,
      themeOverride,
      elementRef: hooks.useMergedRef(inputRef, elementRef),
      type: reveal ? "text" : "password",
      rightSection: disabled ? null : rightSection,
      radius
    }));
  }
  PasswordInput.displayName = "@mantine/core/PasswordInput";

  const useIsomorphicEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
  function Portal({children, zIndex = 1, target, className}) {
    const [mounted, setMounted] = React.useState(false);
    const elementRef = React.useRef();
    useIsomorphicEffect(() => {
      setMounted(true);
      elementRef.current = target || document.createElement("div");
      if (!target) {
        document.body.appendChild(elementRef.current);
      }
      return () => {
        !target && document.body.removeChild(elementRef.current);
      };
    }, [target]);
    if (!mounted) {
      return null;
    }
    return reactDom.createPortal(/* @__PURE__ */ React__default.createElement("div", {
      className,
      style: {position: "relative", zIndex},
      "data-mantine-portal": true
    }, children), elementRef.current);
  }
  Portal.displayName = "@mantine/core/Portal";

  const sizes$3 = {
    xs: 3,
    sm: 5,
    md: 8,
    lg: 12,
    xl: 16
  };
  var useStyles$b = reactJss.createUseStyles({
    progress: ({radius, size, theme: theme$1}) => ({
      height: theme.getSizeValue({size, sizes: sizes$3}),
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[2],
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      overflow: "hidden"
    }),
    bar: ({theme: theme$1, color, radius, reduceMotion, striped}) => ({
      height: "100%",
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius}),
      transition: reduceMotion ? "none" : `width 200ms ${theme$1.transitionTimingFunction}`,
      backgroundSize: [theme$1.spacing.md, theme$1.spacing.md],
      backgroundImage: striped ? "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)" : "none"
    })
  }, {link: true});

  var __defProp$l = Object.defineProperty;
  var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
  var __hasOwnProp$l = Object.prototype.hasOwnProperty;
  var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$l = (obj, key, value) => key in obj ? __defProp$l(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$l = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$l.call(b, prop))
        __defNormalProp$l(a, prop, b[prop]);
    if (__getOwnPropSymbols$l)
      for (var prop of __getOwnPropSymbols$l(b)) {
        if (__propIsEnum$l.call(b, prop))
          __defNormalProp$l(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$d = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$l.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$l)
      for (var prop of __getOwnPropSymbols$l(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$l.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const PROGRESS_SIZES = sizes$3;
  function Progress(_a) {
    var _b = _a, {
      className,
      value,
      color,
      size = "md",
      radius = "sm",
      striped = false,
      themeOverride,
      "aria-label": ariaLabel
    } = _b, others = __objRest$d(_b, [
      "className",
      "value",
      "color",
      "size",
      "radius",
      "striped",
      "themeOverride",
      "aria-label"
    ]);
    const classes = useStyles$b({
      color,
      size,
      radius,
      striped,
      reduceMotion: hooks.useReducedMotion(),
      theme: theme.useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$l({
      className: cx__default(classes.progress, className)
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      role: "progressbar",
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": value,
      "aria-label": ariaLabel,
      className: classes.bar,
      style: {width: `${value}%`}
    }));
  }
  Progress.displayName = "@mantine/core/Progress";

  var __defProp$k = Object.defineProperty;
  var __defProps$b = Object.defineProperties;
  var __getOwnPropDescs$b = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
  var __hasOwnProp$k = Object.prototype.hasOwnProperty;
  var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$k = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$k.call(b, prop))
        __defNormalProp$k(a, prop, b[prop]);
    if (__getOwnPropSymbols$k)
      for (var prop of __getOwnPropSymbols$k(b)) {
        if (__propIsEnum$k.call(b, prop))
          __defNormalProp$k(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$b = (a, b) => __defProps$b(a, __getOwnPropDescs$b(b));
  const sizes$2 = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 26,
    xl: 36
  };
  var useStyles$a = reactJss.createUseStyles({
    labelDisabled: {},
    wrapper: {
      display: "flex",
      alignItems: "center",
      WebkitTapHighlightColor: "transparent"
    },
    radio: ({theme: theme$1, size, color}) => __spreadProps$b(__spreadValues$k({}, theme.getFocusStyles(theme$1)), {
      backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[0],
      border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[4]}`,
      position: "relative",
      appearance: "none",
      width: theme.getSizeValue({sizes: sizes$2, size}),
      height: theme.getSizeValue({sizes: sizes$2, size}),
      borderRadius: theme.getSizeValue({sizes: sizes$2, size}),
      margin: 0,
      marginRight: theme$1.spacing.sm,
      background: "red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:checked": {
        background: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
        borderColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
        "&::before": {
          content: '""',
          display: "block",
          backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[7] : theme$1.white,
          width: theme.getSizeValue({sizes: sizes$2, size}) / 2,
          height: theme.getSizeValue({sizes: sizes$2, size}) / 2,
          borderRadius: theme.getSizeValue({sizes: sizes$2, size}) / 2
        }
      },
      "&:disabled": {
        borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[4],
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[1],
        "&::before": {
          backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[6] : theme$1.colors.gray[4]
        }
      }
    }),
    label: ({theme: theme$1, size}) => __spreadProps$b(__spreadValues$k({}, theme.getFontStyles(theme$1)), {
      display: "flex",
      alignItems: "center",
      fontSize: theme$1.fontSizes[size] || theme$1.fontSizes.md,
      lineHeight: `${theme.getSizeValue({sizes: sizes$2, size})}px`,
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      "&$labelDisabled": {
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[5]
      }
    })
  }, {link: true});

  var __defProp$j = Object.defineProperty;
  var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
  var __hasOwnProp$j = Object.prototype.hasOwnProperty;
  var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$j = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$j.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    if (__getOwnPropSymbols$j)
      for (var prop of __getOwnPropSymbols$j(b)) {
        if (__propIsEnum$j.call(b, prop))
          __defNormalProp$j(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$c = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$j.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$j)
      for (var prop of __getOwnPropSymbols$j(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$j.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Radio(_a) {
    var _b = _a, {
      className,
      themeOverride,
      id,
      children,
      style,
      size,
      elementRef,
      title,
      disabled,
      color
    } = _b, others = __objRest$c(_b, [
      "className",
      "themeOverride",
      "id",
      "children",
      "style",
      "size",
      "elementRef",
      "title",
      "disabled",
      "color"
    ]);
    const classes = useStyles$a({color, size, theme: theme.useMantineTheme(themeOverride)});
    const uuid = hooks.useId(id);
    return /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-radio": true,
      className: cx__default(classes.wrapper, className),
      style,
      title
    }, /* @__PURE__ */ React__default.createElement("label", {
      className: cx__default(classes.label, {[classes.labelDisabled]: disabled}),
      htmlFor: uuid
    }, /* @__PURE__ */ React__default.createElement("input", __spreadValues$j({
      ref: elementRef,
      className: classes.radio,
      type: "radio",
      id: uuid,
      disabled
    }, others)), /* @__PURE__ */ React__default.createElement("span", null, children)));
  }
  Radio.displayName = "@mantine/core/Radio";

  var useStyles$9 = reactJss.createUseStyles({
    wrapper: ({theme: theme$1, spacing, variant}) => ({
      display: "flex",
      flexWrap: "wrap",
      flexDirection: variant === "vertical" ? "column" : "row",
      margin: theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 2 * -1,
      marginTop: theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 4 * (variant === "vertical" ? 1 : -1),
      "& [data-mantine-radio]": {
        margin: theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 2,
        marginTop: variant === "vertical" && theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 4,
        marginBottom: variant === "vertical" && theme.getSizeValue({sizes: theme$1.spacing, size: spacing}) / 4
      }
    })
  }, {link: true});

  var __defProp$i = Object.defineProperty;
  var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
  var __hasOwnProp$i = Object.prototype.hasOwnProperty;
  var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$i = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$i.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    if (__getOwnPropSymbols$i)
      for (var prop of __getOwnPropSymbols$i(b)) {
        if (__propIsEnum$i.call(b, prop))
          __defNormalProp$i(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$b = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$i.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$i)
      for (var prop of __getOwnPropSymbols$i(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$i.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const RADIO_SIZES = sizes$2;
  function RadioGroup(_a) {
    var _b = _a, {
      className,
      themeOverride,
      name,
      children,
      value,
      defaultValue,
      onChange,
      variant = "horizontal",
      spacing = "md",
      color,
      size
    } = _b, others = __objRest$b(_b, [
      "className",
      "themeOverride",
      "name",
      "children",
      "value",
      "defaultValue",
      "onChange",
      "variant",
      "spacing",
      "color",
      "size"
    ]);
    const [_value, setValue] = React.useState(value || defaultValue || "");
    const finalValue = typeof value === "string" ? value : _value;
    const classes = useStyles$9({spacing, variant, theme: theme.useMantineTheme(themeOverride)});
    const uuid = hooks.useId(name);
    const handleChange = (v) => {
      setValue(v);
      typeof onChange === "function" && onChange(v);
    };
    const radios = React.Children.toArray(children).filter((item) => item.type === Radio).map((radio, index) => React.cloneElement(radio, {
      key: index,
      checked: finalValue === radio.props.value,
      name: uuid,
      color,
      size,
      onChange: (event) => handleChange(event.currentTarget.value)
    }));
    return /* @__PURE__ */ React__default.createElement(InputWrapper, __spreadValues$i({
      labelElement: "div"
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      role: "radiogroup",
      className: classes.wrapper
    }, radios));
  }
  RadioGroup.displayName = "@mantine/core/RadioGroup";

  var __defProp$h = Object.defineProperty;
  var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
  var __hasOwnProp$h = Object.prototype.hasOwnProperty;
  var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$h = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$h.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    if (__getOwnPropSymbols$h)
      for (var prop of __getOwnPropSymbols$h(b)) {
        if (__propIsEnum$h.call(b, prop))
          __defNormalProp$h(a, prop, b[prop]);
      }
    return a;
  };
  function ChevronIcon(props) {
    return /* @__PURE__ */ React__default.createElement("svg", __spreadValues$h({
      width: "20",
      height: "20",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default.createElement("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }

  var __defProp$g = Object.defineProperty;
  var __defProps$a = Object.defineProperties;
  var __getOwnPropDescs$a = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
  var __hasOwnProp$g = Object.prototype.hasOwnProperty;
  var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$g = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$g.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    if (__getOwnPropSymbols$g)
      for (var prop of __getOwnPropSymbols$g(b)) {
        if (__propIsEnum$g.call(b, prop))
          __defNormalProp$g(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$a = (a, b) => __defProps$a(a, __getOwnPropDescs$a(b));
  var __objRest$a = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$g)
      for (var prop of __getOwnPropSymbols$g(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Select(_a) {
    var _b = _a, {
      id,
      className,
      required,
      label,
      error,
      style,
      data,
      placeholder,
      themeOverride,
      wrapperProps,
      inputStyle,
      description,
      elementRef
    } = _b, others = __objRest$a(_b, [
      "id",
      "className",
      "required",
      "label",
      "error",
      "style",
      "data",
      "placeholder",
      "themeOverride",
      "wrapperProps",
      "inputStyle",
      "description",
      "elementRef"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const uuid = hooks.useId(id);
    const options = data.map((item) => /* @__PURE__ */ React__default.createElement("option", {
      key: item.value,
      value: item.value,
      disabled: item.disabled
    }, item.label));
    if (placeholder) {
      options.unshift(/* @__PURE__ */ React__default.createElement("option", {
        key: "placeholder",
        value: "",
        selected: true,
        disabled: true,
        hidden: true
      }, placeholder));
    }
    const chevron = /* @__PURE__ */ React__default.createElement(ChevronIcon, {
      style: {color: error ? theme$1.colors.red[6] : theme$1.colors.gray[6]}
    });
    return /* @__PURE__ */ React__default.createElement(InputWrapper, __spreadProps$a(__spreadValues$g({}, wrapperProps), {
      required,
      id: uuid,
      label,
      error,
      className,
      style,
      themeOverride,
      description
    }), /* @__PURE__ */ React__default.createElement(Input, __spreadProps$a(__spreadValues$g({}, others), {
      component: "select",
      invalid: !!error,
      style: inputStyle,
      "aria-required": required,
      elementRef,
      id: uuid,
      inputStyle,
      rightSection: chevron,
      rightSectionProps: {style: {pointerEvents: "none"}},
      required,
      themeOverride
    }), options));
  }
  Select.displayName = "@mantine/core/Select";

  var useStyles$8 = reactJss.createUseStyles({
    spoiler: {
      position: "relative"
    },
    content: ({transitionDuration}) => ({
      overflow: "hidden",
      transitionProperty: "max-height",
      transitionTimingFunction: "ease",
      transitionDuration: transitionDuration || 0
    })
  }, {link: true});

  var __defProp$f = Object.defineProperty;
  var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
  var __hasOwnProp$f = Object.prototype.hasOwnProperty;
  var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$f = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$f.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    if (__getOwnPropSymbols$f)
      for (var prop of __getOwnPropSymbols$f(b)) {
        if (__propIsEnum$f.call(b, prop))
          __defNormalProp$f(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$9 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$f.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$f)
      for (var prop of __getOwnPropSymbols$f(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$f.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Spoiler(_a) {
    var _b = _a, {
      className,
      children,
      maxHeight = 100,
      hideLabel,
      showLabel,
      themeOverride,
      transitionDuration = 200,
      controlRef
    } = _b, others = __objRest$9(_b, [
      "className",
      "children",
      "maxHeight",
      "hideLabel",
      "showLabel",
      "themeOverride",
      "transitionDuration",
      "controlRef"
    ]);
    const classes = useStyles$8({
      transitionDuration: !hooks.useReducedMotion() && transitionDuration,
      theme: theme.useMantineTheme(themeOverride)
    });
    const [show, setShowState] = React.useState(false);
    const [spoiler, setSpoilerState] = React.useState(false);
    const contentRef = React.useRef(null);
    const spoilerMoreContent = show ? hideLabel : showLabel;
    React.useEffect(() => {
      setSpoilerState(maxHeight < contentRef.current.clientHeight);
    }, [maxHeight, children]);
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$f({
      className: cx__default(classes.spoiler, className)
    }, others), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.content,
      style: {
        maxHeight: !show ? maxHeight : contentRef.current && contentRef.current.clientHeight
      }
    }, /* @__PURE__ */ React__default.createElement("div", {
      ref: contentRef
    }, children)), spoiler && /* @__PURE__ */ React__default.createElement(Button, {
      variant: "link",
      elementRef: controlRef,
      onClick: () => setShowState((opened) => !opened),
      themeOverride
    }, spoilerMoreContent));
  }
  Spoiler.displayName = "@mantine/core/Spoiler";

  var __defProp$e = Object.defineProperty;
  var __defProps$9 = Object.defineProperties;
  var __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
  var __hasOwnProp$e = Object.prototype.hasOwnProperty;
  var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$e = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$e.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    if (__getOwnPropSymbols$e)
      for (var prop of __getOwnPropSymbols$e(b)) {
        if (__propIsEnum$e.call(b, prop))
          __defNormalProp$e(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$9 = (a, b) => __defProps$9(a, __getOwnPropDescs$9(b));
  const switchHeight = {
    xs: 14,
    sm: 18,
    md: 22,
    lg: 28,
    xl: 34
  };
  const switchWidth = {
    xs: 28,
    sm: 36,
    md: 42,
    lg: 54,
    xl: 66
  };
  const handleSizes = {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 26
  };
  const sizes$1 = Object.keys(switchHeight).reduce((acc, size) => {
    acc[size] = {width: switchWidth[size], height: switchHeight[size]};
    return acc;
  }, {});
  var useStyles$7 = reactJss.createUseStyles({
    wrapper: {
      display: "flex",
      alignItems: "center"
    },
    switch: ({size, radius, theme: theme$1, reduceMotion, color}) => {
      const handleSize = theme.getSizeValue({size, sizes: handleSizes});
      const borderRadius = theme.getSizeValue({size: radius, sizes: theme$1.radius});
      return __spreadProps$9(__spreadValues$e({}, theme.getFocusStyles(theme$1)), {
        WebkitTapHighlightColor: "transparent",
        position: "relative",
        borderRadius,
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[2],
        border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[3]}`,
        height: theme.getSizeValue({size, sizes: switchHeight}),
        width: theme.getSizeValue({size, sizes: switchWidth}),
        minWidth: theme.getSizeValue({size, sizes: switchWidth}),
        padding: [0, 2],
        margin: 0,
        transitionProperty: "background-color, border-color",
        transitionTimingFunction: theme$1.transitionTimingFunction,
        transitionDuration: reduceMotion ? "1ms" : "150ms",
        boxSizing: "border-box",
        appearance: "none",
        display: "flex",
        alignItems: "center",
        "&::before": {
          borderRadius,
          boxSizing: "border-box",
          content: "''",
          display: "block",
          backgroundColor: theme$1.white,
          height: handleSize,
          width: handleSize,
          border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[3]}`,
          transition: reduceMotion ? "none" : `transform 150ms ${theme$1.transitionTimingFunction}`
        },
        "&:checked": {
          backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
          borderColor: theme.getThemeColor({theme: theme$1, color, shade: 6}),
          "&::before": {
            transform: `translateX(${theme.getSizeValue({size, sizes: switchWidth}) - theme.getSizeValue({size, sizes: handleSizes}) - 6}px)`,
            borderColor: theme.getThemeColor({theme: theme$1, color, shade: 6})
          }
        },
        "&:disabled": {
          backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
          borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
          cursor: "not-allowed",
          "&::before": {
            borderColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[2],
            backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[0]
          }
        }
      });
    },
    label: ({theme: theme$1, size}) => __spreadProps$9(__spreadValues$e({}, theme.getFontStyles(theme$1)), {
      WebkitTapHighlightColor: "transparent",
      fontSize: theme.getSizeValue({size, sizes: theme$1.fontSizes}),
      fontFamily: theme$1.fontFamily,
      paddingLeft: theme$1.spacing.sm,
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black
    })
  }, {link: true});

  var __defProp$d = Object.defineProperty;
  var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
  var __hasOwnProp$d = Object.prototype.hasOwnProperty;
  var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$d = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$d.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    if (__getOwnPropSymbols$d)
      for (var prop of __getOwnPropSymbols$d(b)) {
        if (__propIsEnum$d.call(b, prop))
          __defNormalProp$d(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$8 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$d.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$d)
      for (var prop of __getOwnPropSymbols$d(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$d.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const SWITCH_SIZES = sizes$1;
  function Switch(_a) {
    var _b = _a, {
      className,
      color,
      label,
      id,
      style,
      size = "md",
      radius = "xl",
      themeOverride,
      wrapperProps,
      inputStyle,
      inputClassName,
      elementRef
    } = _b, others = __objRest$8(_b, [
      "className",
      "color",
      "label",
      "id",
      "style",
      "size",
      "radius",
      "themeOverride",
      "wrapperProps",
      "inputStyle",
      "inputClassName",
      "elementRef"
    ]);
    const classes = useStyles$7({
      size,
      color,
      radius,
      reduceMotion: hooks.useReducedMotion(),
      theme: theme.useMantineTheme(themeOverride)
    });
    const uuid = hooks.useId(id);
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$d({
      className: cx__default(classes.wrapper, className),
      style
    }, wrapperProps), /* @__PURE__ */ React__default.createElement("input", __spreadValues$d({
      id: uuid,
      ref: elementRef,
      type: "checkbox",
      className: cx__default(classes.switch, inputClassName),
      style: inputStyle
    }, others)), label && /* @__PURE__ */ React__default.createElement("label", {
      className: classes.label,
      htmlFor: uuid
    }, label));
  }
  Switch.displayName = "@mantine/core/Switch";

  var __defProp$c = Object.defineProperty;
  var __defProps$8 = Object.defineProperties;
  var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
  var __hasOwnProp$c = Object.prototype.hasOwnProperty;
  var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$c = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$c.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    if (__getOwnPropSymbols$c)
      for (var prop of __getOwnPropSymbols$c(b)) {
        if (__propIsEnum$c.call(b, prop))
          __defNormalProp$c(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
  var useStyles$6 = reactJss.createUseStyles({
    striped: {},
    hover: {},
    table: ({theme: theme$1, captionSide}) => __spreadProps$8(__spreadValues$c({}, theme.getFontStyles(theme$1)), {
      width: "100%",
      borderCollapse: "collapse",
      captionSide,
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      lineHeight: theme$1.lineHeight,
      "& caption": {
        marginTop: captionSide === "top" ? 0 : theme$1.spacing.xs,
        marginBottom: captionSide === "bottom" ? 0 : theme$1.spacing.xs,
        fontSize: theme$1.fontSizes.sm,
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6]
      },
      "& thead tr th, & tfoot tr th": {
        textAlign: "left",
        fontWeight: "bold",
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.colors.gray[7],
        fontSize: 14,
        padding: [7, 10]
      },
      "& thead tr th": {
        borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`
      },
      "& tfoot tr th": {
        borderTop: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`
      },
      "& tbody tr td": {
        padding: [7, 10],
        borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`,
        fontSize: 14
      },
      "& tbody tr:last-of-type td": {
        borderBottom: "none"
      },
      "&$striped tbody tr:nth-of-type(odd)": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[8] : theme$1.colors.gray[0]
      },
      "&$hover tbody tr:hover": {
        backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[1]
      }
    })
  }, {link: true});

  var __defProp$b = Object.defineProperty;
  var __defProps$7 = Object.defineProperties;
  var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
  var __hasOwnProp$b = Object.prototype.hasOwnProperty;
  var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$b = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$b.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    if (__getOwnPropSymbols$b)
      for (var prop of __getOwnPropSymbols$b(b)) {
        if (__propIsEnum$b.call(b, prop))
          __defNormalProp$b(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
  var __objRest$7 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$b.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$b)
      for (var prop of __getOwnPropSymbols$b(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$b.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Table(_a) {
    var _b = _a, {
      className,
      children,
      striped = false,
      highlightOnHover = false,
      themeOverride,
      captionSide = "top"
    } = _b, others = __objRest$7(_b, [
      "className",
      "children",
      "striped",
      "highlightOnHover",
      "themeOverride",
      "captionSide"
    ]);
    const classes = useStyles$6({captionSide, theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("table", __spreadProps$7(__spreadValues$b({}, others), {
      className: cx__default(classes.table, {[classes.striped]: striped, [classes.hover]: highlightOnHover}, className)
    }), children);
  }
  Table.displayName = "@mantine/core/Table";

  function Tab(props) {
    return null;
  }
  Tab.displayName = "@mantine/core/Tab";

  var __defProp$a = Object.defineProperty;
  var __defProps$6 = Object.defineProperties;
  var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
  var __hasOwnProp$a = Object.prototype.hasOwnProperty;
  var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$a = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$a.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    if (__getOwnPropSymbols$a)
      for (var prop of __getOwnPropSymbols$a(b)) {
        if (__propIsEnum$a.call(b, prop))
          __defNormalProp$a(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
  var useStyles$5 = reactJss.createUseStyles({
    tab: ({theme: theme$1, reduceMotion}) => __spreadProps$6(__spreadValues$a(__spreadValues$a({}, theme.getFontStyles(theme$1)), theme.getFocusStyles(theme$1)), {
      WebkitTapHighlightColor: "transparent",
      boxSizing: "border-box",
      display: "block",
      height: 40,
      backgroundColor: "transparent",
      border: 0,
      borderBottom: "2px solid transparent",
      padding: [0, theme$1.spacing.md],
      fontSize: theme$1.fontSizes.sm,
      cursor: "pointer",
      transition: reduceMotion ? "none" : "border-color 150ms ease, color 150ms ease",
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      "&:disabled": {
        cursor: "not-allowed",
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[3] : theme$1.colors.gray[5]
      }
    }),
    tabActive: ({theme: theme$1, color}) => ({
      color: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6}),
      borderBottomColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 4 : 6})
    }),
    tabInner: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1,
      height: 40
    },
    tabIcon: ({theme}) => ({
      "&:not(:only-child)": {
        marginRight: theme.spacing.xs
      },
      "& *": {
        display: "block"
      }
    })
  });

  var __defProp$9 = Object.defineProperty;
  var __defProps$5 = Object.defineProperties;
  var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
  var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
  var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$9 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$9.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    if (__getOwnPropSymbols$9)
      for (var prop of __getOwnPropSymbols$9(b)) {
        if (__propIsEnum$9.call(b, prop))
          __defNormalProp$9(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
  var __objRest$6 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$9)
      for (var prop of __getOwnPropSymbols$9(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function TabControl(_a) {
    var _b = _a, {
      themeOverride,
      active,
      elementRef,
      tabProps,
      color,
      className
    } = _b, others = __objRest$6(_b, [
      "themeOverride",
      "active",
      "elementRef",
      "tabProps",
      "color",
      "className"
    ]);
    const _a2 = tabProps, {label, icon, color: overrideColor, elementRef: _} = _a2, props = __objRest$6(_a2, ["label", "icon", "color", "elementRef"]);
    const classes = useStyles$5({
      reduceMotion: hooks.useReducedMotion(),
      color: overrideColor || color,
      theme: theme.useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default.createElement("button", __spreadProps$5(__spreadValues$9(__spreadValues$9({}, others), props), {
      "data-mantine-tab": true,
      "data-mantine-composable": true,
      tabIndex: active ? 0 : -1,
      className: cx__default(classes.tab, {[classes.tabActive]: active}, className),
      type: "button",
      role: "tab",
      "aria-selected": active,
      ref: hooks.useMergedRef(elementRef, tabProps.elementRef)
    }), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.tabInner
    }, icon && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-icon": true,
      className: classes.tabIcon
    }, icon), label && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-label": true
    }, label)));
  }
  TabControl.displayName = "@mantine/core/TabControl";

  var useStyles$4 = reactJss.createUseStyles({
    tabs: ({theme}) => ({
      borderBottom: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`
    }),
    tabsInner: {
      marginBottom: -2
    },
    body: ({theme}) => ({
      paddingTop: theme.spacing.sm
    })
  }, {link: true});

  var __defProp$8 = Object.defineProperty;
  var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
  var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
  var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$8 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$8.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    if (__getOwnPropSymbols$8)
      for (var prop of __getOwnPropSymbols$8(b)) {
        if (__propIsEnum$8.call(b, prop))
          __defNormalProp$8(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$5 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$8)
      for (var prop of __getOwnPropSymbols$8(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  function getPreviousTab(active, tabs) {
    for (let i = active - 1; i >= 0; i -= 1) {
      if (!tabs[i].props.disabled) {
        return i;
      }
    }
    return active;
  }
  function getNextTab(active, tabs) {
    for (let i = active + 1; i < tabs.length; i += 1) {
      if (!tabs[i].props.disabled) {
        return i;
      }
    }
    return active;
  }
  function findInitialTab(tabs) {
    for (let i = 0; i < tabs.length; i += 1) {
      if (!tabs[i].props.disabled) {
        return i;
      }
    }
    return -1;
  }
  function Tabs(_a) {
    var _b = _a, {
      children,
      initialTab,
      themeOverride,
      active,
      position = "left",
      grow = false,
      onTabChange,
      color
    } = _b, others = __objRest$5(_b, [
      "children",
      "initialTab",
      "themeOverride",
      "active",
      "position",
      "grow",
      "onTabChange",
      "color"
    ]);
    const classes = useStyles$4({theme: theme.useMantineTheme(themeOverride)});
    const controlRefs = React.useRef({});
    const tabs = React__default.Children.toArray(children).filter((item) => item.type === Tab);
    const [_activeTab, _setActiveTab] = React.useState(typeof initialTab === "number" ? initialTab : findInitialTab(tabs));
    const activeTab = clamp(typeof active === "number" ? active : _activeTab, 0, tabs.length - 1);
    const setActiveTab = (tabIndex) => {
      _setActiveTab(tabIndex);
      if (typeof onTabChange === "function") {
        onTabChange(tabIndex);
      }
    };
    const handleKeyDown = (event) => {
      if (event.nativeEvent.code === "ArrowRight") {
        const nextTab = getNextTab(activeTab, tabs);
        setActiveTab(nextTab);
        controlRefs.current[nextTab].focus();
      }
      if (event.nativeEvent.code === "ArrowLeft") {
        const previousTab = getPreviousTab(activeTab, tabs);
        setActiveTab(previousTab);
        controlRefs.current[previousTab].focus();
      }
    };
    const panes = tabs.map((tab, index) => /* @__PURE__ */ React__default.createElement(TabControl, {
      key: index,
      active: activeTab === index,
      tabProps: tab.props,
      onKeyDown: handleKeyDown,
      color,
      elementRef: (node) => {
        controlRefs.current[index] = node;
      },
      onClick: () => activeTab !== index && setActiveTab(index)
    }));
    const content = tabs[activeTab].props.children;
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$8({}, others), /* @__PURE__ */ React__default.createElement("div", {
      className: classes.tabs
    }, /* @__PURE__ */ React__default.createElement(ElementsGroup, {
      className: classes.tabsInner,
      role: "tablist",
      "aria-orientation": "horizontal",
      spacing: 0,
      position,
      grow
    }, panes)), content && /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-tab-content": true,
      className: classes.body,
      role: "tabpanel"
    }, content));
  }
  Tabs.displayName = "@mantine/core/Tabs";

  var __defProp$7 = Object.defineProperty;
  var __defProps$4 = Object.defineProperties;
  var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
  var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
  var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$7 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$7.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    if (__getOwnPropSymbols$7)
      for (var prop of __getOwnPropSymbols$7(b)) {
        if (__propIsEnum$7.call(b, prop))
          __defNormalProp$7(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
  var __objRest$4 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$7)
      for (var prop of __getOwnPropSymbols$7(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Textarea(_a) {
    var _b = _a, {
      autosize = false,
      maxRows,
      minRows,
      label,
      error,
      description,
      id,
      className,
      required,
      themeOverride,
      style,
      wrapperProps,
      inputStyle,
      elementRef
    } = _b, others = __objRest$4(_b, [
      "autosize",
      "maxRows",
      "minRows",
      "label",
      "error",
      "description",
      "id",
      "className",
      "required",
      "themeOverride",
      "style",
      "wrapperProps",
      "inputStyle",
      "elementRef"
    ]);
    const uuid = hooks.useId(id);
    const theme$1 = theme.useMantineTheme(themeOverride);
    return /* @__PURE__ */ React__default.createElement(InputWrapper, __spreadValues$7({
      label,
      error,
      id: uuid,
      description,
      required,
      style,
      className
    }, wrapperProps), autosize ? /* @__PURE__ */ React__default.createElement(Input, __spreadValues$7({
      required,
      component: TextareaAutosize__default,
      invalid: !!error,
      maxRows,
      minRows,
      id: uuid,
      elementRef,
      inputStyle: __spreadProps$4(__spreadValues$7({
        paddingTop: theme$1.spacing.xs,
        paddingBottom: theme$1.spacing.xs
      }, inputStyle), {
        height: void 0
      })
    }, others)) : /* @__PURE__ */ React__default.createElement(Input, __spreadValues$7({
      component: "textarea",
      required,
      id: uuid,
      invalid: !!error,
      rows: minRows,
      elementRef,
      inputStyle: __spreadValues$7({
        paddingTop: theme$1.spacing.xs,
        paddingBottom: theme$1.spacing.xs
      }, inputStyle)
    }, others)));
  }
  Textarea.displayName = "@mantine/core/Textarea";

  const sizes = {
    xs: 16,
    sm: 20,
    md: 26,
    lg: 32,
    xl: 40
  };
  var useStyles$3 = reactJss.createUseStyles({
    themeIcon: ({theme: theme$1, color, size, radius, variant}) => {
      const iconSize = theme.getSizeValue({size, sizes});
      return {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        backgroundColor: theme.getThemeColor({
          theme: theme$1,
          color,
          shade: variant === "filled" ? theme$1.colorScheme === "dark" ? 4 : 6 : 1
        }),
        color: variant === "filled" ? theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white : theme.getThemeColor({theme: theme$1, color, shade: 9}),
        width: iconSize,
        height: iconSize,
        borderRadius: theme.getSizeValue({size: radius, sizes: theme$1.radius})
      };
    }
  }, {link: true});

  var __defProp$6 = Object.defineProperty;
  var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
  var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
  var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$6 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    if (__getOwnPropSymbols$6)
      for (var prop of __getOwnPropSymbols$6(b)) {
        if (__propIsEnum$6.call(b, prop))
          __defNormalProp$6(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$3 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$6)
      for (var prop of __getOwnPropSymbols$6(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  const THEME_ICON_SIZES = sizes;
  function ThemeIcon(_a) {
    var _b = _a, {
      className,
      size = "md",
      radius = "sm",
      variant = "filled",
      color,
      children,
      themeOverride
    } = _b, others = __objRest$3(_b, [
      "className",
      "size",
      "radius",
      "variant",
      "color",
      "children",
      "themeOverride"
    ]);
    const classes = useStyles$3({
      variant,
      radius,
      color,
      size,
      theme: theme.useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$6({
      "data-mantine-composable": true,
      className: cx__default(classes.themeIcon, className)
    }, others), children);
  }
  ThemeIcon.displayName = "@mantine/core/ThemeIcon";

  var __defProp$5 = Object.defineProperty;
  var __defProps$3 = Object.defineProperties;
  var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
  var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
  var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$5 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    if (__getOwnPropSymbols$5)
      for (var prop of __getOwnPropSymbols$5(b)) {
        if (__propIsEnum$5.call(b, prop))
          __defNormalProp$5(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
  var useStyles$2 = reactJss.createUseStyles({
    title: ({theme: theme$1, element}) => __spreadProps$3(__spreadValues$5({}, theme.getFontStyles(theme$1)), {
      fontFamily: theme$1.headings.fontFamily,
      fontWeight: theme$1.headings.fontWeight,
      fontSize: theme$1.headings.sizes[element].fontSize,
      lineHeight: theme$1.headings.sizes[element].lineHeight,
      margin: 0,
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
      "@media (max-width: 755px)": {
        fontSize: typeof theme$1.headings.sizes[element].fontSize === "number" && theme$1.headings.sizes[element].fontSize / 1.3
      }
    })
  }, {link: true});

  var __defProp$4 = Object.defineProperty;
  var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
  var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
  var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$4 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    if (__getOwnPropSymbols$4)
      for (var prop of __getOwnPropSymbols$4(b)) {
        if (__propIsEnum$4.call(b, prop))
          __defNormalProp$4(a, prop, b[prop]);
      }
    return a;
  };
  var __objRest$2 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$4)
      for (var prop of __getOwnPropSymbols$4(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Title(_a) {
    var _b = _a, {className, themeOverride, order = 1, children} = _b, others = __objRest$2(_b, ["className", "themeOverride", "order", "children"]);
    if (![1, 2, 3, 4, 5, 6].includes(order)) {
      return null;
    }
    const element = `h${order}`;
    const classes = useStyles$2({theme: theme.useMantineTheme(themeOverride), element});
    return React__default.createElement(element, __spreadValues$4({
      className: cx__default(classes.title, className)
    }, others), children);
  }
  Title.displayName = "@mantine/core/Title";

  var __defProp$3 = Object.defineProperty;
  var __defProps$2 = Object.defineProperties;
  var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
  var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
  var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$3 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    if (__getOwnPropSymbols$3)
      for (var prop of __getOwnPropSymbols$3(b)) {
        if (__propIsEnum$3.call(b, prop))
          __defNormalProp$3(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
  const verticalPlacement = {
    "&$center": {
      left: "50%",
      transform: "translateX(-50%)"
    },
    "&$end": {
      right: 0
    },
    "&$start": {
      left: 0
    }
  };
  const horizontalPlacement = {
    "&$center": {
      top: "50%",
      transform: "translateY(-50%)"
    },
    "&$end": {
      bottom: 0
    },
    "&$start": {
      top: 0
    }
  };
  var useStyles$1 = reactJss.createUseStyles({
    withArrow: {},
    center: {},
    start: {},
    end: {},
    wrapper: {
      position: "relative",
      display: "inline-block"
    },
    tooltipInner: ({theme: theme$1, color}) => __spreadProps$2(__spreadValues$3({}, theme.getFontStyles(theme$1)), {
      backgroundColor: theme.getThemeColor({theme: theme$1, color, shade: theme$1.colorScheme === "dark" ? 3 : 9}),
      lineHeight: theme$1.lineHeight,
      fontSize: theme$1.fontSizes.sm,
      borderRadius: theme$1.radius.sm,
      padding: [theme$1.spacing.xs / 2, theme$1.spacing.xs],
      color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.white,
      position: "relative",
      "&$withArrow::before": {
        display: "block",
        position: "absolute",
        content: '""',
        width: 0,
        height: 0,
        borderStyle: "solid"
      }
    }),
    tooltip: {
      display: "inline-block",
      position: "absolute"
    },
    top: ({gutter, theme: theme$1, color, arrowSize}) => __spreadProps$2(__spreadValues$3({}, verticalPlacement), {
      bottom: `calc(100% + ${gutter}px)`,
      "& $tooltipInner$withArrow::before": {
        top: "100%",
        borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`,
        borderColor: `${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 9
      })} transparent transparent transparent`
      },
      "&$center $tooltipInner$withArrow::before": {
        left: `calc(50% - ${arrowSize}px)`
      },
      "&$start $tooltipInner$withArrow::before": {
        left: arrowSize
      },
      "&$end $tooltipInner$withArrow::before": {
        right: arrowSize
      }
    }),
    bottom: ({gutter, theme: theme$1, color, arrowSize}) => __spreadProps$2(__spreadValues$3({}, verticalPlacement), {
      top: `calc(100% + ${gutter}px)`,
      "& $tooltipInner$withArrow::before": {
        bottom: "100%",
        borderWidth: `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`,
        borderColor: `transparent transparent ${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 9
      })} transparent`
      },
      "&$center $tooltipInner$withArrow::before": {
        left: `calc(50% - ${arrowSize}px)`
      },
      "&$start $tooltipInner$withArrow::before": {
        left: arrowSize
      },
      "&$end $tooltipInner$withArrow::before": {
        right: arrowSize
      }
    }),
    right: ({gutter, theme: theme$1, color, arrowSize}) => __spreadProps$2(__spreadValues$3({}, horizontalPlacement), {
      left: `calc(100% + ${gutter}px)`,
      "& $tooltipInner$withArrow::before": {
        right: "100%",
        borderWidth: `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`,
        borderColor: `transparent ${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 9
      })} transparent transparent`
      },
      "&$center $tooltipInner$withArrow::before": {
        top: `calc(50% - ${arrowSize}px)`
      },
      "&$start $tooltipInner$withArrow::before": {
        top: arrowSize
      },
      "&$end $tooltipInner$withArrow::before": {
        bottom: arrowSize
      }
    }),
    left: ({gutter, theme: theme$1, color, arrowSize}) => __spreadProps$2(__spreadValues$3({}, horizontalPlacement), {
      right: `calc(100% + ${gutter}px)`,
      "& $tooltipInner$withArrow::before": {
        left: "100%",
        borderWidth: `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
        borderColor: `transparent transparent transparent ${theme.getThemeColor({
        theme: theme$1,
        color,
        shade: theme$1.colorScheme === "dark" ? 3 : 9
      })}`
      },
      "&$center $tooltipInner$withArrow::before": {
        top: `calc(50% - ${arrowSize}px)`
      },
      "&$start $tooltipInner$withArrow::before": {
        top: arrowSize
      },
      "&$end $tooltipInner$withArrow::before": {
        bottom: arrowSize
      }
    })
  }, {link: true});

  var __defProp$2 = Object.defineProperty;
  var __defProps$1 = Object.defineProperties;
  var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
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
  var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
  var __objRest$1 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$2)
      for (var prop of __getOwnPropSymbols$2(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function Tooltip(_a) {
    var _b = _a, {
      className,
      themeOverride,
      label,
      children,
      opened,
      delay = 0,
      gutter = 5,
      color = "gray",
      disabled = false,
      withArrow = false,
      arrowSize = 3,
      position = "top",
      placement = "center",
      transition = "slide-up",
      transitionDuration = 100,
      zIndex = 1e3,
      transitionTimingFunction,
      width = "auto",
      wrapLines = false,
      allowPointerEvents = false,
      elementRef,
      tooltipRef,
      tooltipId
    } = _b, others = __objRest$1(_b, [
      "className",
      "themeOverride",
      "label",
      "children",
      "opened",
      "delay",
      "gutter",
      "color",
      "disabled",
      "withArrow",
      "arrowSize",
      "position",
      "placement",
      "transition",
      "transitionDuration",
      "zIndex",
      "transitionTimingFunction",
      "width",
      "wrapLines",
      "allowPointerEvents",
      "elementRef",
      "tooltipRef",
      "tooltipId"
    ]);
    const theme$1 = theme.useMantineTheme(themeOverride);
    const classes = useStyles$1({theme: theme$1, color, gutter, arrowSize});
    const timeoutRef = React.useRef();
    const [_opened, setOpened] = React.useState(false);
    const visible = (typeof opened === "boolean" ? opened : _opened) && !disabled;
    const duration = hooks.useReducedMotion() ? 0 : transitionDuration;
    const handleOpen = () => {
      window.clearTimeout(timeoutRef.current);
      setOpened(true);
    };
    const handleClose = () => {
      if (delay !== 0) {
        timeoutRef.current = window.setTimeout(() => {
          setOpened(false);
        }, delay);
      } else {
        setOpened(false);
      }
    };
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues$2({
      className: cx__default(classes.wrapper, className),
      ref: tooltipRef
    }, others), /* @__PURE__ */ React__default.createElement(Transition, {
      mounted: visible,
      transition,
      duration,
      timingFunction: transitionTimingFunction
    }, (transitionStyles) => /* @__PURE__ */ React__default.createElement("div", {
      id: tooltipId,
      role: "tooltip",
      style: {zIndex, width, pointerEvents: allowPointerEvents ? "all" : "none"},
      "data-mantine-tooltip": true,
      className: cx__default(classes.tooltip, classes[placement], classes[position]),
      ref: tooltipRef
    }, /* @__PURE__ */ React__default.createElement("div", {
      "data-mantine-tooltip-inner": true,
      className: cx__default(classes.tooltipInner, {
        [classes.withArrow]: withArrow
      }),
      style: __spreadProps$1(__spreadValues$2({}, transitionStyles), {whiteSpace: wrapLines ? "normal" : "nowrap"})
    }, label))), /* @__PURE__ */ React__default.createElement("div", {
      onMouseEnter: handleOpen,
      onMouseLeave: handleClose
    }, children));
  }
  Tooltip.displayName = "@mantine/core/Tooltip";

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
  var useStyles = reactJss.createUseStyles({
    innerHtml: ({theme: theme$1}) => {
      const headings = Object.keys(theme$1.headings.sizes).reduce((acc, h) => {
        acc[`& ${h}`] = __spreadProps(__spreadValues$1({
          fontFamily: theme$1.headings.fontFamily,
          fontWeight: theme$1.headings.fontWeight,
          marginTop: theme$1.spacing.lg * theme$1.headings.sizes[h].lineHeight,
          marginBottom: theme$1.spacing.xs * theme$1.headings.sizes[h].lineHeight
        }, theme$1.headings.sizes[h]), {
          "@media (max-width: 755px)": {
            fontSize: typeof theme$1.headings.sizes[h].fontSize === "number" && theme$1.headings.sizes[h].fontSize / 1.3
          }
        });
        return acc;
      }, {});
      return __spreadProps(__spreadValues$1(__spreadProps(__spreadValues$1({}, theme.getFontStyles(theme$1)), {
        color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
        lineHeight: theme$1.lineHeight,
        fontSize: theme$1.fontSizes.md,
        "@media (max-width: 755px)": {
          fontSize: theme$1.fontSizes.sm
        }
      }), headings), {
        "& img": {
          maxWidth: "100%",
          marginBottom: theme$1.spacing.xs
        },
        "& p": {
          marginTop: 0,
          marginBottom: theme$1.spacing.sm
        },
        "& hr": {
          marginTop: theme$1.spacing.md,
          marginBottom: theme$1.spacing.sm,
          borderBottom: 0,
          borderLeft: 0,
          borderRight: 0,
          borderTop: `1px dashed ${theme$1.colors.gray[theme$1.colorScheme === "dark" ? 4 : 6]}`
        },
        "& a": __spreadProps(__spreadValues$1({}, theme.getFocusStyles(theme$1)), {
          color: theme$1.colors[theme$1.primaryColor][theme$1.colorScheme === "dark" ? 4 : 6],
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline"
          }
        }),
        "& pre": {
          padding: theme$1.spacing.xs,
          lineHeight: theme$1.lineHeight,
          margin: 0,
          marginTop: theme$1.spacing.md,
          marginBottom: theme$1.spacing.md,
          overflowX: "auto",
          fontFamily: theme$1.fontFamilyMonospace,
          backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[0]
        },
        "& code": {
          lineHeight: theme$1.lineHeight,
          padding: [1, theme$1.spacing.xs / 2],
          borderRadius: theme$1.radius.sm,
          color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
          backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[0],
          fontFamily: theme$1.fontFamilyMonospace,
          fontSize: theme$1.fontSizes.xs,
          border: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[3]}`
        },
        "& ul, & ol": {
          marginBottom: theme$1.spacing.md,
          paddingLeft: theme$1.spacing.lg * 2,
          "& li": {
            marginTop: theme$1.spacing.xs
          }
        },
        "& table": {
          width: "100%",
          borderCollapse: "collapse",
          captionSide: "bottom",
          marginBottom: theme$1.spacing.md,
          "& caption": {
            marginTop: theme$1.spacing.xs,
            fontSize: theme$1.fontSizes.sm,
            color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6]
          },
          "& th": {
            textAlign: "left",
            fontWeight: "bold",
            color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.colors.gray[7],
            fontSize: 14,
            padding: [7, 10]
          },
          "& thead th": {
            borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`
          },
          "& tfoot th": {
            borderTop: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`
          },
          "& td": {
            padding: [7, 10],
            borderBottom: `1px solid ${theme$1.colorScheme === "dark" ? theme$1.colors.dark[4] : theme$1.colors.gray[3]}`,
            fontSize: 14
          },
          "& tr:last-of-type td": {
            borderBottom: "none"
          }
        },
        "& blockquote": {
          fontSize: theme$1.fontSizes.lg,
          lineHeight: theme$1.lineHeight,
          margin: [theme$1.spacing.md, 0],
          borderTopRightRadius: theme$1.radius.sm,
          borderBottomRightRadius: theme$1.radius.sm,
          padding: [theme$1.spacing.md, theme$1.spacing.lg],
          backgroundColor: theme$1.colorScheme === "dark" ? theme$1.colors.dark[9] : theme$1.colors.gray[0],
          color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[0] : theme$1.black,
          borderLeft: `3px solid ${theme.getThemeColor({
          theme: theme$1,
          color: theme$1.primaryColor,
          shade: theme$1.colorScheme === "dark" ? 4 : 6
        })}`,
          "& cite": {
            display: "block",
            fontSize: theme$1.fontSizes.sm,
            marginTop: theme$1.spacing.xs,
            color: theme$1.colorScheme === "dark" ? theme$1.colors.dark[2] : theme$1.colors.gray[6],
            overflow: "hidden",
            textOverflow: "ellipsis"
          }
        }
      });
    }
  }, {link: true});

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
  function TypographyStylesProvider(_a) {
    var _b = _a, {
      className,
      themeOverride
    } = _b, others = __objRest(_b, [
      "className",
      "themeOverride"
    ]);
    const classes = useStyles({theme: theme.useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
      className: cx__default(classes.innerHtml, className)
    }, others));
  }
  TypographyStylesProvider.displayName = "@mantine/core/TypographyStylesProvider";

  exports.ACTION_ICON_SIZES = ACTION_ICON_SIZES;
  exports.AVAILABLE_TRANSITIONS = AVAILABLE_TRANSITIONS;
  exports.AVATAR_SIZES = AVATAR_SIZES;
  exports.ActionIcon = ActionIcon;
  exports.Alert = Alert;
  exports.Anchor = Anchor;
  exports.Avatar = Avatar;
  exports.BADGE_SIZES = BADGE_SIZES;
  exports.BURGER_SIZES = BURGER_SIZES;
  exports.BUTTON_SIZES = BUTTON_SIZES;
  exports.Badge = Badge;
  exports.Blockquote = Blockquote;
  exports.Breadcrumbs = Breadcrumbs;
  exports.Burger = Burger;
  exports.Button = Button;
  exports.CHECKBOX_SIZES = CHECKBOX_SIZES;
  exports.CONTAINER_SIZES = CONTAINER_SIZES;
  exports.Card = Card;
  exports.CardsGrid = CardsGrid;
  exports.Checkbox = Checkbox;
  exports.Code = Code;
  exports.ColorSwatch = ColorSwatch;
  exports.Container = Container;
  exports.DRAWER_SIZES = DRAWER_SIZES;
  exports.Drawer = Drawer;
  exports.ElementsGroup = ElementsGroup;
  exports.GroupedTransition = GroupedTransition;
  exports.HR_SIZES = HR_SIZES;
  exports.Highlight = Highlight;
  exports.Hr = Hr;
  exports.Image = Image;
  exports.Input = Input;
  exports.InputWrapper = InputWrapper;
  exports.Kbd = Kbd;
  exports.LOADER_SIZES = LOADER_SIZES;
  exports.Loader = Loader;
  exports.LoadingOverlay = LoadingOverlay;
  exports.MENU_SIZES = MENU_SIZES;
  exports.MODAL_SIZES = MODAL_SIZES;
  exports.Menu = Menu;
  exports.MenuBody = MenuBody;
  exports.MenuItem = MenuItem;
  exports.Modal = Modal;
  exports.Notification = Notification;
  exports.NumberInput = NumberInput;
  exports.Overlay = Overlay;
  exports.PROGRESS_SIZES = PROGRESS_SIZES;
  exports.Paper = Paper;
  exports.PasswordInput = PasswordInput;
  exports.Portal = Portal;
  exports.Progress = Progress;
  exports.RADIO_SIZES = RADIO_SIZES;
  exports.Radio = Radio;
  exports.RadioGroup = RadioGroup;
  exports.SWITCH_SIZES = SWITCH_SIZES;
  exports.Select = Select;
  exports.Spoiler = Spoiler;
  exports.Switch = Switch;
  exports.THEME_ICON_SIZES = THEME_ICON_SIZES;
  exports.Tab = Tab;
  exports.Table = Table;
  exports.Tabs = Tabs;
  exports.Text = Text;
  exports.TextInput = TextInput;
  exports.Textarea = Textarea;
  exports.ThemeIcon = ThemeIcon;
  exports.Title = Title;
  exports.Tooltip = Tooltip;
  exports.Transition = Transition;
  exports.TypographyStylesProvider = TypographyStylesProvider;
  Object.keys(theme).forEach(function (k) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = theme[k];
  });

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
