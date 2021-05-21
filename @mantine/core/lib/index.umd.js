(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-jss'), require('@mantine/hooks'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-jss', '@mantine/hooks', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@mantine/core'] = {}, global.React, global.reactJss, global['@mantine/hooks'], global.ReactDOM));
}(this, (function (exports, React, reactJss, hooks, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function getThemeColor({
    theme,
    color,
    shade
  }) {
    const primaryShades = theme.colors[theme.primaryColor];
    return color in theme.colors ? theme.colors[color][shade] : primaryShades[shade];
  }

  function getFocusStyles(theme) {
    return {
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 2px ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white}, 0 0 0 4px ${theme.colors[theme.primaryColor][5]}`
      },
      "&:focus:not(:focus-visible)": {
        boxShadow: "none"
      }
    };
  }

  function getFontStyles(theme) {
    return {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      fontFamily: theme.fontFamily || "sans-serif"
    };
  }

  function getSizeValue({
    size,
    sizes,
    defaultSize = "md"
  }) {
    if (typeof size === "number") {
      return size;
    }
    return sizes[size] || size || sizes[defaultSize];
  }

  const colors = {
    dark: [
      "#d5d7e0",
      "#acaebf",
      "#8c8fa3",
      "#666980",
      "#4d4f66",
      "#34354a",
      "#2b2c3d",
      "#1d1e30",
      "#0c0d21",
      "#01010a"
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529"
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a"
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d"
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c"
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4"
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7"
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab"
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285"
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b"
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e"
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d"
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700"
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f"
    ]
  };

  const DEFAULT_THEME = {
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    transitionTimingFunction: "cubic-bezier(.51,.3,0,1.21)",
    colors,
    lineHeight: 1.4,
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace: "Menlo, Monaco, Lucida Console, monospace",
    primaryColor: "blue",
    shadows: {
      xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
      sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
      md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
      xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20
    },
    radius: {
      xs: 2,
      sm: 4,
      md: 8,
      lg: 16,
      xl: 32
    },
    spacing: {
      xs: 10,
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24
    },
    headings: {
      fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: 700,
      sizes: {
        h1: {fontSize: 34, lineHeight: 1.3},
        h2: {fontSize: 26, lineHeight: 1.35},
        h3: {fontSize: 22, lineHeight: 1.4},
        h4: {fontSize: 18, lineHeight: 1.45},
        h5: {fontSize: 16, lineHeight: 1.5},
        h6: {fontSize: 14, lineHeight: 1.5}
      }
    }
  };

  var __defProp$1j = Object.defineProperty;
  var __defProps$J = Object.defineProperties;
  var __getOwnPropDescs$J = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$1j = Object.getOwnPropertySymbols;
  var __hasOwnProp$1j = Object.prototype.hasOwnProperty;
  var __propIsEnum$1j = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1j = (obj, key, value) => key in obj ? __defProp$1j(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1j = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1j.call(b, prop))
        __defNormalProp$1j(a, prop, b[prop]);
    if (__getOwnPropSymbols$1j)
      for (var prop of __getOwnPropSymbols$1j(b)) {
        if (__propIsEnum$1j.call(b, prop))
          __defNormalProp$1j(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps$J = (a, b) => __defProps$J(a, __getOwnPropDescs$J(b));
  function mergeTheme(currentTheme, themeOverride) {
    if (!themeOverride) {
      return currentTheme;
    }
    return Object.keys(currentTheme).reduce((acc, key) => {
      if (key === "headings" && themeOverride.headings) {
        const sizes = themeOverride.headings.sizes ? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
          headingsAcc[h] = __spreadValues$1j(__spreadValues$1j({}, currentTheme.headings.sizes[h]), themeOverride.headings.sizes[h]);
          return headingsAcc;
        }, {}) : currentTheme.headings.sizes;
        return __spreadProps$J(__spreadValues$1j({}, acc), {
          headings: __spreadProps$J(__spreadValues$1j(__spreadValues$1j({}, currentTheme.headings), themeOverride.headings), {
            sizes
          })
        });
      }
      acc[key] = typeof themeOverride[key] === "object" ? __spreadValues$1j(__spreadValues$1j({}, currentTheme[key]), themeOverride[key]) : themeOverride[key] || currentTheme[key];
      return acc;
    }, {});
  }

  const ThemeContext = React.createContext({});
  const theming = reactJss.createTheming(ThemeContext);
  const {ThemeProvider, useTheme} = theming;

  var __defProp$1i = Object.defineProperty;
  var __getOwnPropSymbols$1i = Object.getOwnPropertySymbols;
  var __hasOwnProp$1i = Object.prototype.hasOwnProperty;
  var __propIsEnum$1i = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1i = (obj, key, value) => key in obj ? __defProp$1i(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1i = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1i.call(b, prop))
        __defNormalProp$1i(a, prop, b[prop]);
    if (__getOwnPropSymbols$1i)
      for (var prop of __getOwnPropSymbols$1i(b)) {
        if (__propIsEnum$1i.call(b, prop))
          __defNormalProp$1i(a, prop, b[prop]);
      }
    return a;
  };
  function MantineProvider({children, theme}) {
    return /* @__PURE__ */ React__default['default'].createElement(ThemeProvider, {
      theme: mergeTheme(__spreadValues$1i({__mantine_theme: true}, DEFAULT_THEME), theme)
    }, children);
  }
  MantineProvider.displayName = "@mantine/Provider";

  var __defProp$1h = Object.defineProperty;
  var __getOwnPropSymbols$1h = Object.getOwnPropertySymbols;
  var __hasOwnProp$1h = Object.prototype.hasOwnProperty;
  var __propIsEnum$1h = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$1h = (obj, key, value) => key in obj ? __defProp$1h(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues$1h = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$1h.call(b, prop))
        __defNormalProp$1h(a, prop, b[prop]);
    if (__getOwnPropSymbols$1h)
      for (var prop of __getOwnPropSymbols$1h(b)) {
        if (__propIsEnum$1h.call(b, prop))
          __defNormalProp$1h(a, prop, b[prop]);
      }
    return a;
  };
  function useMantineTheme(themeOverride) {
    const internalTheme = __spreadValues$1h({}, useTheme());
    let mergedTheme = null;
    if (!internalTheme.__mantine_theme) {
      mergedTheme = mergeTheme(__spreadValues$1h({__mantine_theme: true}, DEFAULT_THEME), themeOverride);
    } else {
      mergedTheme = mergeTheme(internalTheme, themeOverride);
    }
    delete mergedTheme.__mantine_theme;
    return mergedTheme;
  }

  function toVal(mix) {
  	var k, y, str='';

  	if (typeof mix === 'string' || typeof mix === 'number') {
  		str += mix;
  	} else if (typeof mix === 'object') {
  		if (Array.isArray(mix)) {
  			for (k=0; k < mix.length; k++) {
  				if (mix[k]) {
  					if (y = toVal(mix[k])) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else {
  			for (k in mix) {
  				if (mix[k]) {
  					str && (str += ' ');
  					str += k;
  				}
  			}
  		}
  	}

  	return str;
  }

  function cx () {
  	var i=0, tmp, x, str='';
  	while (i < arguments.length) {
  		if (tmp = arguments[i++]) {
  			if (x = toVal(tmp)) {
  				str && (str += ' ');
  				str += x;
  			}
  		}
  	}
  	return str;
  }

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
    filled: ({theme, color}) => ({
      backgroundColor: getThemeColor({theme, color, shade: 6}),
      color: theme.white,
      "&:not(:disabled):hover": {
        backgroundColor: getThemeColor({theme, color, shade: 7})
      },
      "&:disabled": {
        backgroundColor: getThemeColor({
          theme,
          color: "gray",
          shade: theme.colorScheme === "dark" ? 8 : 1
        })
      }
    }),
    light: ({theme, color}) => ({
      backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 0}),
      color: theme.colorScheme === "dark" ? theme.colors.dark[9] : getThemeColor({theme, color, shade: 9}),
      "&:not(:disabled):hover": {
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === "dark" ? 5 : 1
        })
      },
      "&:disabled": {
        backgroundColor: getThemeColor({
          theme,
          color: "gray",
          shade: theme.colorScheme === "dark" ? 8 : 1
        })
      }
    }),
    hover: ({theme, color}) => ({
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      backgroundColor: "transparent",
      "&:not(:disabled):hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : getThemeColor({theme, color, shade: 0})
      }
    }),
    transparent: ({theme, color}) => ({
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      backgroundColor: "transparent"
    }),
    actionIcon: ({radius, theme, size}) => __spreadProps$I(__spreadValues$1g(__spreadValues$1g({}, getFocusStyles(theme)), getFontStyles(theme)), {
      appearance: "none",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      border: "1px solid transparent",
      boxSizing: "border-box",
      height: getSizeValue({size, sizes: sizes$e}),
      minHeight: getSizeValue({size, sizes: sizes$e}),
      width: getSizeValue({size, sizes: sizes$e}),
      minWidth: getSizeValue({size, sizes: sizes$e}),
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
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
        color: theme.colors.gray[theme.colorScheme === "dark" ? 6 : 4],
        cursor: "not-allowed"
      }
    }),
    outline: ({theme, color}) => ({
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      backgroundColor: "transparent",
      borderColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === "dark" ? 4 : 6
      }),
      "&:not(:disabled):hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : getThemeColor({theme, color, shade: 0})
      },
      "&:disabled": {
        borderColor: theme.colors.gray[theme.colorScheme === "dark" ? 7 : 3]
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
      theme: useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default['default'].createElement("button", __spreadProps$H(__spreadValues$1f({}, others), {
      "data-mantine-composable": true,
      className: cx(classes.actionIcon, classes[variant], className),
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
    text: ({theme, color, variant, size}) => __spreadProps$G(__spreadValues$1e(__spreadValues$1e({}, getFontStyles(theme)), getFocusStyles(theme)), {
      color: color in theme.colors ? theme.colors[color][theme.colorScheme === "dark" ? 4 : 6] : variant === "link" ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6] : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      fontSize: theme.fontSizes[size],
      lineHeight: theme.lineHeight,
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
    const classes = useStyles$D({variant, color, size, theme: useMantineTheme(themeOverride)});
    return React__default['default'].createElement(component, __spreadValues$1d({
      className: cx(classes.text, className),
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
    return /* @__PURE__ */ React__default['default'].createElement(Text, __spreadValues$1d({
      component,
      variant: "link"
    }, others));
  }
  Anchor.displayName = "@mantine/core/Anchor";

  var useStyles$C = reactJss.createUseStyles({
    paper: ({theme, radius, shadow, padding}) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxSizing: "border-box",
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      boxShadow: theme.shadows[shadow] || shadow || "none",
      padding: getSizeValue({size: padding, sizes: theme.spacing})
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
    const classes = useStyles$C({radius, shadow, padding, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$1c({
      className: cx(classes.paper, className),
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
    alert: ({color, theme}) => ({
      position: "relative",
      padding: [theme.spacing.xs, theme.spacing.md],
      paddingLeft: theme.spacing.md + theme.spacing.xs / 2 + LINE_WIDTH,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}`,
      "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: theme.spacing.xs,
        bottom: theme.spacing.xs,
        left: theme.spacing.xs,
        width: LINE_WIDTH,
        borderRadius: LINE_WIDTH,
        backgroundColor: getThemeColor({theme, color, shade: 6})
      }
    }),
    title: ({color, theme}) => ({
      boxSizing: "border-box",
      color: getThemeColor({theme, color, shade: 6}),
      margin: 0,
      marginBottom: theme.spacing.xs / 2,
      textOverflow: "ellipsis",
      overflow: "hidden"
    }),
    body: ({theme}) => __spreadProps$F(__spreadValues$1b({}, getFontStyles(theme)), {
      lineHeight: theme.lineHeight,
      borderBottomLeftRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&:only-child": {
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm
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
    const classes = useStyles$B({color, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement(Paper, __spreadValues$1a({
      shadow,
      className: cx(classes.alert, className),
      themeOverride
    }, others), title && /* @__PURE__ */ React__default['default'].createElement(Text, {
      themeOverride,
      "data-mantine-alert-title": true,
      weight: 700,
      className: classes.title
    }, title), /* @__PURE__ */ React__default['default'].createElement("div", {
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
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadProps$E(__spreadValues$19({}, props), {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ React__default['default'].createElement("path", {
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
    avatar: ({size, radius, theme}) => ({
      boxSizing: "border-box",
      position: "relative",
      userSelect: "none",
      overflow: "hidden",
      width: getSizeValue({size, sizes: sizes$d}),
      height: getSizeValue({size, sizes: sizes$d}),
      borderRadius: radius ? getSizeValue({size: radius, sizes: theme.radius}) : size
    }),
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%"
    },
    placeholder: ({theme, size, color}) => __spreadProps$D(__spreadValues$18({}, getFontStyles(theme)), {
      fontSize: getSizeValue({size, sizes: sizes$d}) / 2.5,
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 0 : 6}),
      fontWeight: 700,
      backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 9 : 1}),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      userSelect: "none"
    }),
    placeholderIcon: ({theme, color}) => ({
      width: "70%",
      height: "70%",
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 0 : 6})
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
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles$A({color, radius, size, theme});
    const [error, setError] = React.useState(!src);
    React.useEffect(() => {
      !src ? setError(true) : setError(false);
    }, [src]);
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadProps$C(__spreadValues$17({}, others), {
      "data-mantine-composable": true,
      className: cx(classes.avatar, className)
    }), error ? /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-placeholder": true,
      className: classes.placeholder,
      title: alt
    }, children || /* @__PURE__ */ React__default['default'].createElement(PlaceholderIcon, {
      className: classes.placeholderIcon
    })) : /* @__PURE__ */ React__default['default'].createElement("img", {
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
    badge: ({theme, size, fullWidth, radius}) => {
      const {fontSize, height} = size in sizes$c ? sizes$c[size] : sizes$c.md;
      return __spreadProps$B(__spreadValues$16(__spreadValues$16({}, getFocusStyles(theme)), getFontStyles(theme)), {
        fontSize,
        height,
        WebkitTapHighlightColor: "transparent",
        lineHeight: `${height - 2}px`,
        border: "1px solid transparent",
        textDecoration: "none",
        padding: [0, getSizeValue({size, sizes: theme.spacing}) / 1.5],
        boxSizing: "border-box",
        display: fullWidth ? "flex" : "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: fullWidth ? "100%" : "auto",
        textTransform: "uppercase",
        borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
        fontWeight: 700,
        letterSpacing: 0.25,
        cursor: "default",
        textOverflow: "ellipsis",
        overflow: "hidden"
      });
    },
    light: ({theme, color}) => ({
      backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 3 : 0}),
      color: theme.colorScheme === "dark" ? theme.colors.dark[9] : getThemeColor({theme, color, shade: 9})
    }),
    filled: ({theme, color}) => ({
      backgroundColor: getThemeColor({theme, color, shade: 7}),
      color: theme.white,
      textShadow: `1px 1px 0 ${getThemeColor({theme, color, shade: 9})}`
    }),
    outline: ({theme, color}) => ({
      backgroundColor: "transparent",
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      borderColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6})
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
      theme: useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default['default'].createElement(Component, __spreadProps$A(__spreadValues$15({}, others), {
      "data-mantine-composable": true,
      className: cx(classes.badge, classes[variant], className)
    }), leftSection && /* @__PURE__ */ React__default['default'].createElement("span", {
      "data-mantine-badge-left": true,
      className: classes.leftSection
    }, leftSection), /* @__PURE__ */ React__default['default'].createElement("span", {
      className: classes.inner
    }, children), rightSection && /* @__PURE__ */ React__default['default'].createElement("span", {
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
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$14({
      width: "20",
      height: "20",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default['default'].createElement("path", {
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
    blockquote: ({theme, color}) => __spreadProps$z(__spreadValues$13({}, getFontStyles(theme)), {
      fontSize: theme.fontSizes.lg,
      lineHeight: theme.lineHeight,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      margin: 0,
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
      borderLeft: `3px solid ${getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === "dark" ? 4 : 6
    })}`,
      padding: [theme.spacing.md, theme.spacing.lg]
    }),
    inner: {
      display: "flex"
    },
    body: {
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    icon: ({theme, color}) => ({
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      marginRight: theme.spacing.md,
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
  const defaultIcon = /* @__PURE__ */ React__default['default'].createElement(QuoteIcon, null);
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
    const classes = useStyles$y({color, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("blockquote", __spreadValues$12({
      className: cx(classes.blockquote, className)
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.inner
    }, icon && /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-icon": true,
      className: classes.icon
    }, icon), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.body
    }, children, cite && /* @__PURE__ */ React__default['default'].createElement("cite", {
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
    const classes = useStyles$x({theme: useMantineTheme(themeOverride)});
    const items = React__default['default'].Children.toArray(children).reduce((acc, child, index, array) => {
      acc.push(React__default['default'].cloneElement(child, {
        className: classes.breadcrumb,
        key: index,
        "data-mantine-breadcrumb": true
      }));
      if (index !== array.length - 1) {
        acc.push(/* @__PURE__ */ React__default['default'].createElement(Text, {
          size: "sm",
          "data-mantine-separator": true,
          className: classes.separator,
          key: `separator-${index}`,
          themeOverride
        }, separator));
      }
      return acc;
    }, []);
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$11({
      className: cx(classes.breadcrumbs, className)
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
    wrapper: ({size, theme}) => __spreadProps$y(__spreadValues$10({}, getFocusStyles(theme)), {
      WebkitTapHighlightColor: "transparent",
      borderRadius: theme.radius.sm,
      width: getSizeValue({size, sizes: sizes$b}) + theme.spacing.xs,
      height: getSizeValue({size, sizes: sizes$b}) + theme.spacing.xs,
      padding: theme.spacing.xs / 2,
      backgroundColor: "transparent",
      border: 0,
      cursor: "pointer"
    }),
    burger: ({size, theme, color, reduceMotion}) => {
      const sizeValue = getSizeValue({size, sizes: sizes$b});
      return {
        position: "relative",
        userSelect: "none",
        boxSizing: "border-box",
        "&, &:before, &:after": {
          display: "block",
          width: sizeValue,
          height: Math.ceil(sizeValue / 12),
          backgroundColor: getThemeColor({
            theme,
            color,
            shade: theme.colorScheme === "dark" ? 4 : 7
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
      theme: useMantineTheme(themeOverride),
      reduceMotion: hooks.useReducedMotion()
    });
    return /* @__PURE__ */ React__default['default'].createElement("button", __spreadValues$$({
      type: "button",
      className: cx(classes.wrapper, className),
      ref: elementRef
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: cx(classes.burger, {[classes.opened]: opened})
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
    shared: (props) => __spreadProps$x(__spreadValues$_(__spreadValues$_(__spreadValues$_(__spreadValues$_({}, sizes$a[props.size]), getFontStyles(props.theme)), getFocusStyles(props.theme)), getWidthStyles(props.fullWidth)), {
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",
      boxSizing: "border-box",
      textDecoration: "none",
      cursor: "pointer",
      appearance: "none",
      WebkitAppearance: "none"
    }),
    outline: ({color, radius, theme}) => ({
      backgroundColor: "transparent",
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      textTransform: "uppercase",
      fontWeight: "bold",
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 8}),
      border: `1px solid ${getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === "dark" ? 4 : 8
    })}`,
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        borderColor: "transparent",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
        cursor: "not-allowed"
      }
    }),
    light: ({color, size, radius, theme}) => ({
      border: "1px solid transparent",
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      textTransform: "uppercase",
      fontWeight: "bold",
      backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 0}),
      color: theme.colorScheme === "dark" ? theme.colors.dark[9] : getThemeColor({theme, color, shade: 9}),
      "& $inner": {
        height: sizes$a[size].height - 2
      },
      "&:hover": {
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === "dark" ? 5 : 1
        })
      },
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        borderColor: "transparent",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
        textShadow: "none",
        cursor: "not-allowed"
      }
    }),
    filled: ({color, size, radius, theme}) => ({
      border: "1px solid transparent",
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      textTransform: "uppercase",
      fontWeight: "bold",
      backgroundColor: getThemeColor({theme, color, shade: 6}),
      textShadow: `1px 1px 0 ${getThemeColor({theme, color, shade: 8})}`,
      color: theme.white,
      "& $inner": {
        height: sizes$a[size].height - 2
      },
      "&:hover": {
        backgroundColor: getThemeColor({theme, color, shade: 7})
      },
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        borderColor: "transparent",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
        textShadow: "none",
        cursor: "not-allowed"
      }
    }),
    link: ({color, radius, theme}) => ({
      padding: 0,
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      backgroundColor: "transparent",
      border: 0,
      display: "inline-block",
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline"
      },
      "&:disabled": {
        color: theme.colors.gray[5],
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
      theme: useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default['default'].createElement(Element, __spreadProps$w(__spreadValues$Z({}, others), {
      className: cx(classes.shared, classes[variant], className),
      type,
      disabled,
      "data-mantine-composable": true,
      ref: elementRef,
      onTouchStart: () => {
      }
    }), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.inner
    }, leftIcon && /* @__PURE__ */ React__default['default'].createElement("span", {
      "data-mantine-left-icon": true,
      className: cx(classes.icon, classes.leftIcon)
    }, leftIcon), /* @__PURE__ */ React__default['default'].createElement("span", {
      className: classes.label,
      "data-mantine-label": true
    }, children), rightIcon && /* @__PURE__ */ React__default['default'].createElement("span", {
      "data-mantine-right-icon": true,
      className: cx(classes.icon, classes.rightIcon)
    }, rightIcon)));
  }
  Button.displayName = "@mantine/core/Button";

  var useStyles$u = reactJss.createUseStyles({
    card: ({theme, radius, padding}) => {
      const spacing = getSizeValue({size: padding, sizes: theme.spacing});
      const borderRadius = getSizeValue({size: radius, sizes: theme.radius});
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
          borderTopColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
          marginLeft: -spacing,
          marginRight: -spacing,
          marginBottom: spacing / 2,
          marginTop: spacing / 2
        }
      };
    }
  }, {link: true});

  var useStyles$t = reactJss.createUseStyles({
    grid: ({theme, gutter, cardsPerRow, grow}) => {
      const gutterSize = getSizeValue({size: gutter, sizes: theme.spacing});
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
      theme: useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$Y({
      className: cx(classes.grid, className)
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
    const classes = useStyles$u({radius, padding, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement(Paper, __spreadValues$X({
      "data-mantine-card": true,
      className: cx(classes.card, className),
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
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$W({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, others), /* @__PURE__ */ React__default['default'].createElement("path", {
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
      width: getSizeValue({size, sizes: sizes$9}),
      height: getSizeValue({size, sizes: sizes$9})
    }),
    label: ({theme, size}) => __spreadProps$v(__spreadValues$V({}, getFontStyles(theme)), {
      WebkitTapHighlightColor: "transparent",
      paddingLeft: theme.spacing.sm,
      fontSize: getSizeValue({size, sizes: theme.fontSizes}),
      lineHeight: `${getSizeValue({size, sizes: sizes$9})}px`,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
    }),
    checkbox: ({size, theme, color}) => __spreadProps$v(__spreadValues$V({}, getFocusStyles(theme)), {
      appearance: "none",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
      width: getSizeValue({size, sizes: sizes$9}),
      height: getSizeValue({size, sizes: sizes$9}),
      borderRadius: theme.radius.sm,
      padding: 0,
      outline: 0,
      display: "block",
      margin: 0,
      "&:checked": {
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === "dark" ? 4 : 6
        }),
        borderColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
        color: theme.white,
        "& + $icon": {
          color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
          display: "block"
        }
      },
      "&:disabled": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[3],
        cursor: "not-allowed",
        "& + $icon": {
          color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[5]
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
    const classes = useStyles$s({size, color, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$U({
      className: cx(classes.wrapper, className),
      style
    }, wrapperProps), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.checkboxWrapper
    }, /* @__PURE__ */ React__default['default'].createElement("input", __spreadProps$u(__spreadValues$U({}, others), {
      id: uuid,
      ref: elementRef,
      type: "checkbox",
      className: cx(classes.checkbox, inputClassName),
      checked: intermediate || checked,
      onChange,
      disabled,
      style: inputStyle
    })), /* @__PURE__ */ React__default['default'].createElement(CheckboxIcon, {
      intermediate,
      className: classes.icon
    })), label && /* @__PURE__ */ React__default['default'].createElement("label", {
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
    code: ({theme, color}) => __spreadProps$t(__spreadValues$T({}, getFontStyles(theme)), {
      lineHeight: theme.lineHeight,
      padding: [1, theme.spacing.xs / 2],
      borderRadius: theme.radius.sm,
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 1 : 9}),
      backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 9 : 0}),
      fontFamily: theme.fontFamilyMonospace,
      fontSize: theme.fontSizes.xs,
      border: `1px solid ${getThemeColor({
      theme,
      color,
      shade: theme.colorScheme === "dark" ? 9 : 3
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
    const theme = useMantineTheme(themeOverride);
    const themeColor = color || (theme.colorScheme === "dark" ? "dark" : "gray");
    const classes = useStyles$r({color: themeColor, theme: useMantineTheme(themeOverride)});
    if (block) {
      return /* @__PURE__ */ React__default['default'].createElement("pre", __spreadValues$S({
        className: cx(classes.code, classes.pre, className)
      }, others), children);
    }
    return /* @__PURE__ */ React__default['default'].createElement("code", __spreadValues$S({
      className: cx(classes.code, className)
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
    colorSwatch: ({theme, radius}) => __spreadProps$s(__spreadValues$R({}, getFocusStyles(theme)), {
      border: 0,
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
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
    const classes = useStyles$q({radius, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement(Element, __spreadValues$Q({
      className: cx(classes.colorSwatch, className),
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
    container: ({fluid, size, padding, theme}) => ({
      maxWidth: fluid ? "100%" : getSizeValue({size, sizes: sizes$8}),
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: getSizeValue({size: padding, sizes: theme.spacing}),
      paddingRight: getSizeValue({size: padding, sizes: theme.spacing})
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
    const classes = useStyles$p({padding, fluid, size, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$P({
      className: cx(classes.container, className)
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
    return /* @__PURE__ */ React__default['default'].createElement(Element, __spreadValues$O({
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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  var propTypes = {exports: {}};

  var reactIs = {exports: {}};

  var reactIs_production_min = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
  reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
  reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
  reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

  var reactIs_development = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */



  if (process.env.NODE_ENV !== "production") {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  reactIs_development.AsyncMode = AsyncMode;
  reactIs_development.ConcurrentMode = ConcurrentMode;
  reactIs_development.ContextConsumer = ContextConsumer;
  reactIs_development.ContextProvider = ContextProvider;
  reactIs_development.Element = Element;
  reactIs_development.ForwardRef = ForwardRef;
  reactIs_development.Fragment = Fragment;
  reactIs_development.Lazy = Lazy;
  reactIs_development.Memo = Memo;
  reactIs_development.Portal = Portal;
  reactIs_development.Profiler = Profiler;
  reactIs_development.StrictMode = StrictMode;
  reactIs_development.Suspense = Suspense;
  reactIs_development.isAsyncMode = isAsyncMode;
  reactIs_development.isConcurrentMode = isConcurrentMode;
  reactIs_development.isContextConsumer = isContextConsumer;
  reactIs_development.isContextProvider = isContextProvider;
  reactIs_development.isElement = isElement;
  reactIs_development.isForwardRef = isForwardRef;
  reactIs_development.isFragment = isFragment;
  reactIs_development.isLazy = isLazy;
  reactIs_development.isMemo = isMemo;
  reactIs_development.isPortal = isPortal;
  reactIs_development.isProfiler = isProfiler;
  reactIs_development.isStrictMode = isStrictMode;
  reactIs_development.isSuspense = isSuspense;
  reactIs_development.isValidElementType = isValidElementType;
  reactIs_development.typeOf = typeOf;
    })();
  }

  if (process.env.NODE_ENV === 'production') {
    reactIs.exports = reactIs_production_min;
  } else {
    reactIs.exports = reactIs_development;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var printWarning$1 = function() {};

  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has$1(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning$1(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning$1(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes$1.resetWarningCache = function() {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactIs$1 = reactIs.exports;
  var assign = objectAssign;

  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var checkPropTypes = checkPropTypes_1;

  var has = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning = function() {};

  if (process.env.NODE_ENV !== 'production') {
    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret$1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs$1.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = ReactPropTypesSecret_1;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = reactIs.exports;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = factoryWithThrowingShims();
  }

  var PropTypes = propTypes.exports;

  var config = {
    disabled: false
  };

  var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number,
    appear: PropTypes.number
  }).isRequired]) : null;
  process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string,
    active: PropTypes.string
  }), PropTypes.shape({
    enter: PropTypes.string,
    enterDone: PropTypes.string,
    enterActive: PropTypes.string,
    exit: PropTypes.string,
    exitDone: PropTypes.string,
    exitActive: PropTypes.string
  })]) : null;

  var TransitionGroupContext = React__default['default'].createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition$1 = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }
    ;

    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();

        if (nextStatus === ENTERING) {
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;

      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default['default'].findDOMNode(this), appearing],
          maybeNode = _ref2[0],
          maybeAppearing = _ref2[1];

      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }

      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(maybeNode, maybeAppearing);

        _this2.onTransitionEnd(enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };

    _proto.performExit = function performExit() {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default['default'].findDOMNode(this); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
        return;
      }

      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(maybeNode);

        _this3.onTransitionEnd(timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default['default'].findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
            maybeNode = _ref3[0],
            maybeNextCallback = _ref3[1];

        this.props.addEndListener(maybeNode, maybeNextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children;
          _this$props.in;
          _this$props.mountOnEnter;
          _this$props.unmountOnExit;
          _this$props.appear;
          _this$props.enter;
          _this$props.exit;
          _this$props.timeout;
          _this$props.addEndListener;
          _this$props.onEnter;
          _this$props.onEntering;
          _this$props.onEntered;
          _this$props.onExit;
          _this$props.onExiting;
          _this$props.onExited;
          _this$props.nodeRef;
          var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

      return (
        /*#__PURE__*/
        // allows for nested Transitions
        React__default['default'].createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === 'function' ? children(status, childProps) : React__default['default'].cloneElement(React__default['default'].Children.only(children), childProps))
      );
    };

    return Transition;
  }(React__default['default'].Component);

  Transition$1.contextType = TransitionGroupContext;
  Transition$1.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * A React reference to DOM element that need to transition:
     * https://stackoverflow.com/a/51127130/4671932
     *
     *   - When `nodeRef` prop is used, `node` is not passed to callback functions
     *      (e.g. `onEnter`) because user already has direct access to the node.
     *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
     *     `nodeRef` need to be provided to `Transition` with changed `key` prop
     *     (see
     *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
     */
    nodeRef: PropTypes.shape({
      current: typeof Element === 'undefined' ? PropTypes.any : PropTypes.instanceOf(Element)
    }),

    /**
     * A `function` child can be used instead of a React element. This function is
     * called with the current transition status (`'entering'`, `'entered'`,
     * `'exiting'`, `'exited'`), which can be used to apply context
     * specific props to a component.
     *
     * ```jsx
     * <Transition in={this.state.in} timeout={150}>
     *   {state => (
     *     <MyComponent className={`fade fade-${state}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: PropTypes.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: PropTypes.bool,

    /**
     * By default the child component does not perform the enter transition when
     * it first mounts, regardless of the value of `in`. If you want this
     * behavior, set both `appear` and `in` to `true`.
     *
     * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
     * > only adds an additional enter transition. However, in the
     * > `<CSSTransition>` component that first enter transition does result in
     * > additional `.appear-*` classes, that way you can choose to style it
     * > differently.
     */
    appear: PropTypes.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: PropTypes.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: PropTypes.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided.
     *
     * You may specify a single timeout for all transitions:
     *
     * ```jsx
     * timeout={500}
     * ```
     *
     * or individually:
     *
     * ```jsx
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * - `appear` defaults to the value of `enter`
     * - `enter` defaults to `0`
     * - `exit` defaults to `0`
     *
     * @type {number | { enter?: number, exit?: number, appear?: number }}
     */
    timeout: function timeout(props) {
      var pt = timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return pt.apply(void 0, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. Timeouts are still used as a fallback if provided.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: PropTypes.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: PropTypes.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: PropTypes.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: PropTypes.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: PropTypes.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: PropTypes.func
  } : {}; // Name the function so it is clearer in the documentation

  function noop$1() {}

  Transition$1.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop$1,
    onEntering: noop$1,
    onEntered: noop$1,
    onExit: noop$1,
    onExiting: noop$1,
    onExited: noop$1
  };
  Transition$1.UNMOUNTED = UNMOUNTED;
  Transition$1.EXITED = EXITED;
  Transition$1.ENTERING = ENTERING;
  Transition$1.ENTERED = ENTERED;
  Transition$1.EXITING = EXITING;

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
    const theme = useMantineTheme(themeOverride);
    const duration = Math.max(...Object.keys(transitions).map((transition) => transitions[transition].duration));
    return /* @__PURE__ */ React__default['default'].createElement(Transition$1, {
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
          timingFunction: transitions[transition].timingFunction || theme.transitionTimingFunction,
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
    const theme = useMantineTheme(themeOverride);
    const reduceMotion = hooks.useReducedMotion();
    return /* @__PURE__ */ React__default['default'].createElement(Transition$1, {
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
      timingFunction: timingFunction || theme.transitionTimingFunction
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
        return {top: 0, left: 0, right: 0, height: getSizeValue({size, sizes: sizes$7})};
      case "bottom":
        return {bottom: 0, left: 0, right: 0, height: getSizeValue({size, sizes: sizes$7})};
      case "right":
        return {bottom: 0, top: 0, right: 0, width: getSizeValue({size, sizes: sizes$7})};
      case "left":
        return {bottom: 0, top: 0, left: 0, width: getSizeValue({size, sizes: sizes$7})};
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
    const theme = useMantineTheme(themeOverride);
    const duration = hooks.useReducedMotion() ? 1 : transitionDuration;
    const classes = useStyles$o({theme, size, position});
    const focusTrapRef = hooks.useFocusTrap(!noFocusTrap);
    hooks.useScrollLock(opened && !noScrollLock);
    const clickOutsideRef = hooks.useClickOutside(() => opened && !noCloseOnClickOutside && onClose());
    const drawerTransition = transition || transitions[position];
    const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme.colorScheme === "dark" ? 0.85 : 0.75;
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
    return /* @__PURE__ */ React__default['default'].createElement(GroupedTransition, {
      mounted: opened,
      transitions: {
        overlay: {duration: duration / 2, transition: "fade", timingFunction: "ease"},
        drawer: {
          duration,
          transition: drawerTransition,
          timingFunction: transitionTimingFunction
        }
      }
    }, (styles) => /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$L({
      className: cx(classes.wrapper, {[classes.noOverlay]: noOverlay}, className),
      role: "dialog",
      "aria-modal": true
    }, others), /* @__PURE__ */ React__default['default'].createElement(Paper, {
      className: cx(classes.drawer, className),
      elementRef: hooks.useMergedRef(focusTrapRef, clickOutsideRef),
      style: __spreadProps$q(__spreadValues$L({}, styles.drawer), {zIndex: zIndex + 1}),
      radius: 0,
      tabIndex: -1,
      onKeyDownCapture: (event) => event.nativeEvent.code === "Escape" && !noCloseOnEscape && onClose(),
      shadow,
      padding,
      themeOverride
    }, children), !noOverlay && /* @__PURE__ */ React__default['default'].createElement("div", {
      style: styles.overlay
    }, /* @__PURE__ */ React__default['default'].createElement(Overlay, {
      opacity: _overlayOpacity,
      zIndex,
      color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.black)
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
    elementsGroup: ({spacing, position, noWrap, theme}) => ({
      display: "flex",
      alignItems: "center",
      flexWrap: noWrap ? "nowrap" : "wrap",
      justifyContent: JUSTIFY_CONTENT[position],
      margin: -1 * getSizeValue({size: spacing, sizes: theme.spacing}) / 2
    }),
    child: ({grow, spacing, theme}) => ({
      flexGrow: grow ? 1 : 0,
      margin: getSizeValue({size: spacing, sizes: theme.spacing}) / 2
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
      theme: useMantineTheme(themeOverride)
    });
    const items = React.Children.toArray(children).map((child) => React__default['default'].cloneElement(child, {className: cx(classes.child, child.props.className)}));
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$K({
      className
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
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
    const theme = useMantineTheme(themeOverride);
    const color = getThemeColor({
      theme,
      color: highlightColor,
      shade: 2
    });
    const {start, end, highlighted} = highlighter(children, highlight);
    return /* @__PURE__ */ React__default['default'].createElement(Text, __spreadValues$J({
      component,
      themeOverride
    }, others), !!start && start, !!highlighted && /* @__PURE__ */ React__default['default'].createElement("mark", {
      style: {
        backgroundColor: color,
        color: theme.colorScheme === "dark" ? theme.colors.dark[9] : "inherit"
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
    hr: ({theme, size, variant, color}) => ({
      border: 0,
      borderTopWidth: getSizeValue({size, sizes: sizes$6}),
      borderTopColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
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
    const classes = useStyles$m({color, variant, size, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("hr", __spreadValues$I({
      "data-mantine-hr": true,
      className: cx(classes.hr, className)
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
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$H({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default['default'].createElement("path", {
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
    image: ({theme, radius}) => __spreadProps$p(__spreadValues$G({}, getFontStyles(theme)), {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      border: 0
    }),
    placeholderIcon: ({theme, radius}) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
      position: "absolute",
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
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
    const classes = useStyles$l({radius, theme: useMantineTheme(themeOverride)});
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
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$F({
      "data-mantine-image": true,
      className: cx(classes.wrapper, className),
      style: __spreadValues$F({width, height}, style),
      ref: elementRef
    }, others), isPlaceholder && /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-image-placeholder": true,
      className: classes.placeholderIcon,
      title: alt
    }, placeholder || /* @__PURE__ */ React__default['default'].createElement(ImageIcon, {
      style: {width: 40, height: 40}
    })), /* @__PURE__ */ React__default['default'].createElement("img", __spreadValues$F({
      className: cx(classes.image, imageProps == null ? void 0 : imageProps.className),
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
    inputWrapper: ({radius, theme}) => ({
      position: "relative",
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      "&, & *": {boxSizing: "border-box"}
    }),
    defaultVariant: ({theme, radius}) => ({
      "& $input": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
        minHeight: 36,
        padding: [7, theme.spacing.sm],
        borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4]}`,
        transition: "border-color 100ms ease, box-shadow 100ms ease",
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        "&:focus": {
          outline: "none",
          borderColor: theme.colors[theme.primaryColor][6],
          boxShadow: `0 0 4px ${theme.colors.gray[3]}`
        }
      },
      "&$invalid $input": {
        borderColor: theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
      },
      "& $withIcon": {
        paddingLeft: 35
      },
      "& $icon": {
        width: 36
      }
    }),
    filledVariant: ({theme, radius}) => ({
      "& $input": {
        minHeight: 36,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
        border: "1px solid transparent",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[1],
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        "&:focus": {
          outline: "none",
          borderColor: `${theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]} !important`,
          boxShadow: `0 0 4px ${theme.colors.gray[3]}`
        },
        "&::placeholder": {
          color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6]
        }
      },
      "& $input:disabled": {
        "&::placeholder": {
          color: theme.colors.gray[5]
        }
      },
      "&$invalid $input": {
        borderColor: theme.colorScheme === "dark" ? theme.colors.red[4] : "transparent",
        backgroundColor: theme.colorScheme !== "dark" && theme.colors.red[0]
      },
      "& $withIcon": {
        paddingLeft: 35
      },
      "& $icon": {
        width: 36,
        color: theme.colors.gray[6]
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
    input: ({theme}) => __spreadProps$n(__spreadValues$E({}, getFontStyles(theme)), {
      WebkitTapHighlightColor: "transparent",
      lineHeight: theme.lineHeight,
      appearance: "none",
      resize: "none",
      boxSizing: "border-box",
      fontSize: 14,
      width: "100%",
      color: theme.black,
      display: "block",
      textAlign: "left",
      "&:disabled": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
        opacity: 0.6,
        cursor: "not-allowed"
      },
      "&::placeholder": {
        opacity: 1,
        color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5]
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
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles$k({radius, theme});
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$D({
      className: cx(classes.inputWrapper, {[classes.invalid]: invalid}, classes[`${variant}Variant`], className),
      style
    }, wrapperProps), icon && /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-icon": true,
      className: classes.icon
    }, icon), /* @__PURE__ */ React__default['default'].createElement(Element, __spreadProps$m(__spreadValues$D({}, others), {
      "data-mantine-input": true,
      ref: elementRef,
      "aria-required": required,
      "aria-invalid": invalid,
      className: cx({[classes.withIcon]: icon}, classes.input, inputClassName),
      style: __spreadValues$D({
        paddingRight: rightSection ? rightSectionWidth : theme.spacing.md
      }, inputStyle)
    })), rightSection && /* @__PURE__ */ React__default['default'].createElement("div", __spreadProps$m(__spreadValues$D({}, rightSectionProps), {
      "data-mantine-input-section": true,
      style: __spreadProps$m(__spreadValues$D({}, rightSectionProps.style), {width: rightSectionWidth}),
      className: cx(classes.rightSection, rightSectionProps.className)
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
    inputWrapper: ({theme}) => __spreadProps$l(__spreadValues$C({}, getFontStyles(theme)), {
      lineHeight: theme.lineHeight
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
    const classes = useStyles$j({theme: useMantineTheme(themeOverride)});
    const labelProps = labelElement === "label" ? {htmlFor: id} : {};
    const inputLabel = React.createElement(labelElement, __spreadProps$k(__spreadValues$B({}, labelProps), {className: classes.label}), /* @__PURE__ */ React__default['default'].createElement(React__default['default'].Fragment, null, label, required && /* @__PURE__ */ React__default['default'].createElement("span", {
      "data-mantine-required": true,
      className: classes.required
    }, " ", "*")));
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$B({
      className: cx(classes.inputWrapper, className)
    }, others), label && inputLabel, description && /* @__PURE__ */ React__default['default'].createElement(Text, {
      themeOverride,
      "data-mantine-description": true,
      color: "gray",
      size: "xs",
      className: classes.description
    }, description), children, typeof error !== "boolean" && error && /* @__PURE__ */ React__default['default'].createElement(Text, {
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
    const classes = useStyles$i({theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("kbd", __spreadValues$A({
      className: cx(classes.kbd, className)
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
    const theme = useMantineTheme(themeOverride);
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$z({
      width: `${getSizeValue({size, sizes: LOADER_SIZES})}px`,
      fill: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      viewBox: "0 0 135 140",
      xmlns: "http://www.w3.org/2000/svg",
      role: "presentation"
    }, others), /* @__PURE__ */ React__default['default'].createElement("rect", {
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "height",
      begin: "0.5s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "y",
      begin: "0.5s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })), /* @__PURE__ */ React__default['default'].createElement("rect", {
      x: "30",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "height",
      begin: "0.25s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "y",
      begin: "0.25s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })), /* @__PURE__ */ React__default['default'].createElement("rect", {
      x: "60",
      width: "15",
      height: "140",
      rx: "6"
    }, /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "height",
      begin: "0s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "y",
      begin: "0s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })), /* @__PURE__ */ React__default['default'].createElement("rect", {
      x: "90",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "height",
      begin: "0.25s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "y",
      begin: "0.25s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite"
    })), /* @__PURE__ */ React__default['default'].createElement("rect", {
      x: "120",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, /* @__PURE__ */ React__default['default'].createElement("animate", {
      attributeName: "height",
      begin: "0.5s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite"
    }), /* @__PURE__ */ React__default['default'].createElement("animate", {
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
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles$h();
    const reduceMotion = hooks.useReducedMotion();
    const duration = reduceMotion ? 1 : transitionDuration;
    return /* @__PURE__ */ React__default['default'].createElement(Transition, {
      duration,
      mounted: visible,
      transition: "fade",
      themeOverride
    }, (transitionStyles) => /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$y({
      className: cx(classes.loadingOverlay, className),
      style: __spreadProps$j(__spreadValues$y(__spreadValues$y({}, transitionStyles), style), {zIndex})
    }, others), /* @__PURE__ */ React__default['default'].createElement(Loader, __spreadValues$y({
      themeOverride,
      style: {zIndex: zIndex + 1}
    }, loaderProps)), /* @__PURE__ */ React__default['default'].createElement(Overlay, {
      opacity: overlayOpacity,
      color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white),
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
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$x({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default['default'].createElement("path", {
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
    item: ({theme, color}) => __spreadProps$i(__spreadValues$w({}, getFontStyles(theme)), {
      WebkitTapHighlightColor: "transparent",
      fontSize: theme.fontSizes.sm,
      border: 0,
      backgroundColor: "transparent",
      outline: 0,
      width: "100%",
      textAlign: "left",
      height: 32,
      padding: [0, theme.spacing.sm],
      cursor: "pointer",
      color: color ? getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}) : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
      "&:disabled": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[5],
        cursor: "not-allowed"
      },
      "&$hovered:not(:disabled), &:not(:disabled):hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
        "&:not(:disabled):active": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
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
    const classes = useStyles$g({color, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("button", __spreadValues$v({
      type: "button",
      role: "menuitem",
      className: cx(classes.item, {[classes.hovered]: hovered}, className),
      onMouseEnter: () => !disabled && onHover(),
      ref: elementRef,
      disabled
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.inner
    }, icon && /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-icon": true,
      className: classes.icon
    }, icon), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.body
    }, /* @__PURE__ */ React__default['default'].createElement("div", {
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
    menu: ({theme, size}) => ({
      position: "absolute",
      width: getSizeValue({size, sizes: sizes$5}),
      overflow: "hidden",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}`,
      paddingTop: theme.spacing.xs / 2,
      paddingBottom: theme.spacing.xs / 2
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
    const items = React__default['default'].Children.toArray(children).filter((item) => item.type === MenuItem || item.type === Hr);
    const hoveredTimeout = React.useRef();
    const buttonsRefs = React.useRef({});
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles$f({size, theme});
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
        return /* @__PURE__ */ React__default['default'].createElement(MenuButton, __spreadProps$h(__spreadValues$u({}, item.props), {
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
        return /* @__PURE__ */ React__default['default'].createElement(Hr, {
          key: index,
          variant: "solid",
          className: classes.hr
        });
      }
      return null;
    });
    return /* @__PURE__ */ React__default['default'].createElement(Transition, {
      mounted: opened,
      duration,
      transition,
      timingFunction: transitionTimingFunction,
      themeOverride
    }, (transitionStyles) => /* @__PURE__ */ React__default['default'].createElement(Paper, __spreadValues$u({
      shadow,
      className: cx(classes.menu, className),
      style: __spreadProps$h(__spreadValues$u(__spreadValues$u({}, style), transitionStyles), {zIndex}),
      onKeyDownCapture: handleKeyDown,
      elementRef: menuRef,
      role: "menu",
      "aria-orientation": "vertical"
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
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
  const defaultControl = /* @__PURE__ */ React__default['default'].createElement(ActionIcon, null, /* @__PURE__ */ React__default['default'].createElement(MenuIcon, null));
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
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$t({
      "data-mantine-composable": true,
      ref: wrapperRef,
      style: __spreadValues$t({display: "inline-block", position: "relative"}, style)
    }, others), menuControl, /* @__PURE__ */ React__default['default'].createElement(MenuBody, __spreadProps$g(__spreadValues$t({}, menuBodyProps), {
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
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$s({
      width: "20",
      height: "20",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default['default'].createElement("path", {
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
    modal: ({theme, size}) => ({
      width: getSizeValue({sizes: sizes$4, size}),
      padding: theme.spacing.lg,
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
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles$e({size, overflow, theme});
    const clickOutsideRef = hooks.useClickOutside(onClose);
    const focusTrapRef = hooks.useFocusTrap();
    const duration = reduceMotion ? 1 : transitionDuration;
    const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : theme.colorScheme === "dark" ? 0.85 : 0.75;
    hooks.useScrollLock(opened);
    return /* @__PURE__ */ React__default['default'].createElement(GroupedTransition, {
      mounted: opened,
      transitions: {
        modal: {duration, transition},
        overlay: {duration: duration / 2, transition: "fade", timingFunction: "ease"}
      }
    }, (styles) => /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$r({
      className: cx(classes.wrapper, className)
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-modal-inner": true,
      className: classes.inner,
      onKeyDownCapture: (event) => event.nativeEvent.code === "Escape" && onClose(),
      style: {zIndex: zIndex + 1},
      ref: focusTrapRef
    }, /* @__PURE__ */ React__default['default'].createElement(Paper, {
      className: classes.modal,
      shadow: "lg",
      role: "dialog",
      "aria-labelledby": titleId,
      "aria-describedby": bodyId,
      "aria-modal": true,
      style: styles.modal,
      elementRef: clickOutsideRef,
      tabIndex: -1
    }, (title || !hideCloseButton) && /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-modal-header": true,
      className: classes.header
    }, /* @__PURE__ */ React__default['default'].createElement(Text, {
      id: titleId,
      "data-mantine-modal-title": true,
      className: classes.title
    }, title), !hideCloseButton && /* @__PURE__ */ React__default['default'].createElement(ActionIcon, {
      onClick: onClose,
      "aria-label": closeButtonLabel
    }, /* @__PURE__ */ React__default['default'].createElement(CloseIcon, null))), /* @__PURE__ */ React__default['default'].createElement("div", {
      id: bodyId,
      className: classes.body
    }, children))), /* @__PURE__ */ React__default['default'].createElement("div", {
      style: styles.overlay
    }, /* @__PURE__ */ React__default['default'].createElement(Overlay, {
      color: overlayColor || (theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.black),
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
    notification: ({color, theme}) => ({
      boxSizing: "border-box",
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingLeft: 22,
      paddingRight: 5,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 4,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
      "&::before": {
        content: "''",
        display: "block",
        position: "absolute",
        width: 6,
        top: 4,
        bottom: 4,
        left: 4,
        borderRadius: 4,
        backgroundColor: getThemeColor({theme, color, shade: 6})
      },
      "& $icon": {
        backgroundColor: getThemeColor({theme, color, shade: 6}),
        color: theme.white
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
    const classes = useStyles$d({color, disallowClose, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement(Paper, __spreadValues$q({
      shadow: "lg",
      padding: "sm",
      className: cx(classes.notification, {[classes.withIcon]: icon || loading}, className),
      role: "alert",
      themeOverride
    }, others), icon && !loading && /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-icon": true,
      className: classes.icon
    }, icon), loading && /* @__PURE__ */ React__default['default'].createElement(Loader, {
      size: 28,
      color,
      className: classes.loader
    }), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.body
    }, title && /* @__PURE__ */ React__default['default'].createElement(Text, {
      "data-mantine-title": true,
      className: classes.title,
      size: "sm",
      weight: 500,
      themeOverride
    }, title), /* @__PURE__ */ React__default['default'].createElement(Text, {
      "data-mantine-body": true,
      className: classes.description,
      size: "sm",
      themeOverride
    }, children)), !disallowClose && /* @__PURE__ */ React__default['default'].createElement(ActionIcon, __spreadProps$f(__spreadValues$q({}, closeButtonProps), {
      color: "gray",
      onClick: onClose,
      themeOverride
    }), /* @__PURE__ */ React__default['default'].createElement(CloseIcon, null)));
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
    return /* @__PURE__ */ React__default['default'].createElement(InputWrapper, __spreadValues$p({
      required,
      id: uuid,
      label,
      error,
      description,
      className,
      style,
      themeOverride
    }, wrapperProps), /* @__PURE__ */ React__default['default'].createElement(Input, __spreadProps$e(__spreadValues$p({}, others), {
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
    controlUp: ({theme, radius}) => ({
      borderTopRightRadius: getSizeValue({size: radius, sizes: theme.radius}) - 1,
      "&::after": {
        borderWidth: [0, 5, 5, 5],
        borderColor: [
          "transparent",
          "transparent",
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "transparent"
        ]
      },
      "&:disabled::after": {
        borderBottomColor: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5]
      }
    }),
    controlDown: ({theme, radius}) => ({
      borderBottomRightRadius: getSizeValue({size: radius, sizes: theme.radius}) - 1,
      borderBottom: 0,
      "&::after": {
        borderWidth: [5, 5, 0, 5],
        borderColor: [
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "transparent",
          "transparent",
          "transparent"
        ]
      },
      "&:disabled::after": {
        borderTopColor: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5]
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
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles$c({theme, radius});
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
    const rightSection = /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.rightSection
    }, /* @__PURE__ */ React__default['default'].createElement("button", {
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
      className: cx(classes.control, classes.controlUp)
    }), /* @__PURE__ */ React__default['default'].createElement("button", {
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
      className: cx(classes.control, classes.controlDown)
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
    return /* @__PURE__ */ React__default['default'].createElement(TextInput, __spreadProps$d(__spreadValues$o({}, others), {
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
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$n({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, others), /* @__PURE__ */ React__default['default'].createElement("path", {
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
    const rightSection = /* @__PURE__ */ React__default['default'].createElement(ActionIcon, {
      onClick: toggleReveal,
      themeOverride,
      title: reveal ? hidePasswordLabel : showPasswordLabel,
      "aria-label": reveal ? hidePasswordLabel : showPasswordLabel,
      radius
    }, /* @__PURE__ */ React__default['default'].createElement(PasswordToggleIcon, {
      reveal
    }));
    return /* @__PURE__ */ React__default['default'].createElement(TextInput, __spreadProps$c(__spreadValues$m({}, others), {
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
    return ReactDOM.createPortal(/* @__PURE__ */ React__default['default'].createElement("div", {
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
    progress: ({radius, size, theme}) => ({
      height: getSizeValue({size, sizes: sizes$3}),
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2],
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      overflow: "hidden"
    }),
    bar: ({theme, color, radius, reduceMotion, striped}) => ({
      height: "100%",
      backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      borderRadius: getSizeValue({size: radius, sizes: theme.radius}),
      transition: reduceMotion ? "none" : `width 200ms ${theme.transitionTimingFunction}`,
      backgroundSize: [theme.spacing.md, theme.spacing.md],
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
      theme: useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$l({
      className: cx(classes.progress, className)
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
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
    radio: ({theme, size, color}) => __spreadProps$b(__spreadValues$k({}, getFocusStyles(theme)), {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[0],
      border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]}`,
      position: "relative",
      appearance: "none",
      width: getSizeValue({sizes: sizes$2, size}),
      height: getSizeValue({sizes: sizes$2, size}),
      borderRadius: getSizeValue({sizes: sizes$2, size}),
      margin: 0,
      marginRight: theme.spacing.sm,
      background: "red",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:checked": {
        background: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
        borderColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
        "&::before": {
          content: '""',
          display: "block",
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          width: getSizeValue({sizes: sizes$2, size}) / 2,
          height: getSizeValue({sizes: sizes$2, size}) / 2,
          borderRadius: getSizeValue({sizes: sizes$2, size}) / 2
        }
      },
      "&:disabled": {
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1],
        "&::before": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[4]
        }
      }
    }),
    label: ({theme, size}) => __spreadProps$b(__spreadValues$k({}, getFontStyles(theme)), {
      display: "flex",
      alignItems: "center",
      fontSize: theme.fontSizes[size] || theme.fontSizes.md,
      lineHeight: `${getSizeValue({sizes: sizes$2, size})}px`,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&$labelDisabled": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
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
    const classes = useStyles$a({color, size, theme: useMantineTheme(themeOverride)});
    const uuid = hooks.useId(id);
    return /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-radio": true,
      className: cx(classes.wrapper, className),
      style,
      title
    }, /* @__PURE__ */ React__default['default'].createElement("label", {
      className: cx(classes.label, {[classes.labelDisabled]: disabled}),
      htmlFor: uuid
    }, /* @__PURE__ */ React__default['default'].createElement("input", __spreadValues$j({
      ref: elementRef,
      className: classes.radio,
      type: "radio",
      id: uuid,
      disabled
    }, others)), /* @__PURE__ */ React__default['default'].createElement("span", null, children)));
  }
  Radio.displayName = "@mantine/core/Radio";

  var useStyles$9 = reactJss.createUseStyles({
    wrapper: ({theme, spacing, variant}) => ({
      display: "flex",
      flexWrap: "wrap",
      flexDirection: variant === "vertical" ? "column" : "row",
      margin: getSizeValue({sizes: theme.spacing, size: spacing}) / 2 * -1,
      marginTop: getSizeValue({sizes: theme.spacing, size: spacing}) / 4 * (variant === "vertical" ? 1 : -1),
      "& [data-mantine-radio]": {
        margin: getSizeValue({sizes: theme.spacing, size: spacing}) / 2,
        marginTop: variant === "vertical" && getSizeValue({sizes: theme.spacing, size: spacing}) / 4,
        marginBottom: variant === "vertical" && getSizeValue({sizes: theme.spacing, size: spacing}) / 4
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
    const classes = useStyles$9({spacing, variant, theme: useMantineTheme(themeOverride)});
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
    return /* @__PURE__ */ React__default['default'].createElement(InputWrapper, __spreadValues$i({
      labelElement: "div"
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
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
    return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$h({
      width: "20",
      height: "20",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /* @__PURE__ */ React__default['default'].createElement("path", {
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
    const theme = useMantineTheme(themeOverride);
    const uuid = hooks.useId(id);
    const options = data.map((item) => /* @__PURE__ */ React__default['default'].createElement("option", {
      key: item.value,
      value: item.value,
      disabled: item.disabled
    }, item.label));
    if (placeholder) {
      options.unshift(/* @__PURE__ */ React__default['default'].createElement("option", {
        key: "placeholder",
        value: "",
        selected: true,
        disabled: true,
        hidden: true
      }, placeholder));
    }
    const chevron = /* @__PURE__ */ React__default['default'].createElement(ChevronIcon, {
      style: {color: error ? theme.colors.red[6] : theme.colors.gray[6]}
    });
    return /* @__PURE__ */ React__default['default'].createElement(InputWrapper, __spreadProps$a(__spreadValues$g({}, wrapperProps), {
      required,
      id: uuid,
      label,
      error,
      className,
      style,
      themeOverride,
      description
    }), /* @__PURE__ */ React__default['default'].createElement(Input, __spreadProps$a(__spreadValues$g({}, others), {
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
      theme: useMantineTheme(themeOverride)
    });
    const [show, setShowState] = React.useState(false);
    const [spoiler, setSpoilerState] = React.useState(false);
    const contentRef = React.useRef(null);
    const spoilerMoreContent = show ? hideLabel : showLabel;
    React.useEffect(() => {
      setSpoilerState(maxHeight < contentRef.current.clientHeight);
    }, [maxHeight, children]);
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$f({
      className: cx(classes.spoiler, className)
    }, others), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.content,
      style: {
        maxHeight: !show ? maxHeight : contentRef.current && contentRef.current.clientHeight
      }
    }, /* @__PURE__ */ React__default['default'].createElement("div", {
      ref: contentRef
    }, children)), spoiler && /* @__PURE__ */ React__default['default'].createElement(Button, {
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
    switch: ({size, radius, theme, reduceMotion, color}) => {
      const handleSize = getSizeValue({size, sizes: handleSizes});
      const borderRadius = getSizeValue({size: radius, sizes: theme.radius});
      return __spreadProps$9(__spreadValues$e({}, getFocusStyles(theme)), {
        WebkitTapHighlightColor: "transparent",
        position: "relative",
        borderRadius,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2],
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`,
        height: getSizeValue({size, sizes: switchHeight}),
        width: getSizeValue({size, sizes: switchWidth}),
        minWidth: getSizeValue({size, sizes: switchWidth}),
        padding: [0, 2],
        margin: 0,
        transitionProperty: "background-color, border-color",
        transitionTimingFunction: theme.transitionTimingFunction,
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
          backgroundColor: theme.white,
          height: handleSize,
          width: handleSize,
          border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`,
          transition: reduceMotion ? "none" : `transform 150ms ${theme.transitionTimingFunction}`
        },
        "&:checked": {
          backgroundColor: getThemeColor({theme, color, shade: 6}),
          borderColor: getThemeColor({theme, color, shade: 6}),
          "&::before": {
            transform: `translateX(${getSizeValue({size, sizes: switchWidth}) - getSizeValue({size, sizes: handleSizes}) - 6}px)`,
            borderColor: getThemeColor({theme, color, shade: 6})
          }
        },
        "&:disabled": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
          borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
          cursor: "not-allowed",
          "&::before": {
            borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[0]
          }
        }
      });
    },
    label: ({theme, size}) => __spreadProps$9(__spreadValues$e({}, getFontStyles(theme)), {
      WebkitTapHighlightColor: "transparent",
      fontSize: getSizeValue({size, sizes: theme.fontSizes}),
      fontFamily: theme.fontFamily,
      paddingLeft: theme.spacing.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
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
      theme: useMantineTheme(themeOverride)
    });
    const uuid = hooks.useId(id);
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$d({
      className: cx(classes.wrapper, className),
      style
    }, wrapperProps), /* @__PURE__ */ React__default['default'].createElement("input", __spreadValues$d({
      id: uuid,
      ref: elementRef,
      type: "checkbox",
      className: cx(classes.switch, inputClassName),
      style: inputStyle
    }, others)), label && /* @__PURE__ */ React__default['default'].createElement("label", {
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
    table: ({theme, captionSide}) => __spreadProps$8(__spreadValues$c({}, getFontStyles(theme)), {
      width: "100%",
      borderCollapse: "collapse",
      captionSide,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
      "& caption": {
        marginTop: captionSide === "top" ? 0 : theme.spacing.xs,
        marginBottom: captionSide === "bottom" ? 0 : theme.spacing.xs,
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6]
      },
      "& thead tr th, & tfoot tr th": {
        textAlign: "left",
        fontWeight: "bold",
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: 14,
        padding: [7, 10]
      },
      "& thead tr th": {
        borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
      },
      "& tfoot tr th": {
        borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
      },
      "& tbody tr td": {
        padding: [7, 10],
        borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
        fontSize: 14
      },
      "& tbody tr:last-of-type td": {
        borderBottom: "none"
      },
      "&$striped tbody tr:nth-of-type(odd)": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
      },
      "&$hover tbody tr:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
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
    const classes = useStyles$6({captionSide, theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("table", __spreadProps$7(__spreadValues$b({}, others), {
      className: cx(classes.table, {[classes.striped]: striped, [classes.hover]: highlightOnHover}, className)
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
    tab: ({theme, reduceMotion}) => __spreadProps$6(__spreadValues$a(__spreadValues$a({}, getFontStyles(theme)), getFocusStyles(theme)), {
      WebkitTapHighlightColor: "transparent",
      boxSizing: "border-box",
      display: "block",
      height: 40,
      backgroundColor: "transparent",
      border: 0,
      borderBottom: "2px solid transparent",
      padding: [0, theme.spacing.md],
      fontSize: theme.fontSizes.sm,
      cursor: "pointer",
      transition: reduceMotion ? "none" : "border-color 150ms ease, color 150ms ease",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "&:disabled": {
        cursor: "not-allowed",
        color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
      }
    }),
    tabActive: ({theme, color}) => ({
      color: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6}),
      borderBottomColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 4 : 6})
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
      theme: useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default['default'].createElement("button", __spreadProps$5(__spreadValues$9(__spreadValues$9({}, others), props), {
      "data-mantine-tab": true,
      "data-mantine-composable": true,
      tabIndex: active ? 0 : -1,
      className: cx(classes.tab, {[classes.tabActive]: active}, className),
      type: "button",
      role: "tab",
      "aria-selected": active,
      ref: hooks.useMergedRef(elementRef, tabProps.elementRef)
    }), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.tabInner
    }, icon && /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-icon": true,
      className: classes.tabIcon
    }, icon), label && /* @__PURE__ */ React__default['default'].createElement("div", {
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
    const classes = useStyles$4({theme: useMantineTheme(themeOverride)});
    const controlRefs = React.useRef({});
    const tabs = React__default['default'].Children.toArray(children).filter((item) => item.type === Tab);
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
    const panes = tabs.map((tab, index) => /* @__PURE__ */ React__default['default'].createElement(TabControl, {
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
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$8({}, others), /* @__PURE__ */ React__default['default'].createElement("div", {
      className: classes.tabs
    }, /* @__PURE__ */ React__default['default'].createElement(ElementsGroup, {
      className: classes.tabsInner,
      role: "tablist",
      "aria-orientation": "horizontal",
      spacing: 0,
      position,
      grow
    }, panes)), content && /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-tab-content": true,
      className: classes.body,
      role: "tabpanel"
    }, content));
  }
  Tabs.displayName = "@mantine/core/Tabs";

  var index$1 = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;

  var useLatest = function useLatest(value) {
    var ref = React.useRef(value);
    index$1(function () {
      ref.current = value;
    });
    return ref;
  };

  var updateRef = function updateRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
      return;
    }
    ref.current = value;
  };

  var useComposedRef = function useComposedRef(libRef, userRef) {
    var prevUserRef = React.useRef();
    return React.useCallback(function (instance) {
      libRef.current = instance;

      if (prevUserRef.current) {
        updateRef(prevUserRef.current, null);
      }

      prevUserRef.current = userRef;

      if (!userRef) {
        return;
      }

      updateRef(userRef, instance);
    }, [userRef]);
  };

  var HIDDEN_TEXTAREA_STYLE = {
    'min-height': '0',
    'max-height': 'none',
    height: '0',
    visibility: 'hidden',
    overflow: 'hidden',
    position: 'absolute',
    'z-index': '-1000',
    top: '0',
    right: '0'
  };

  var forceHiddenStyles = function forceHiddenStyles(node) {
    Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
      node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
    });
  };

  //   export type CalculatedNodeHeights = [height: number, rowHeight: number];
  // https://github.com/microsoft/TypeScript/issues/28259

  var hiddenTextarea = null;

  var getHeight = function getHeight(node, sizingData) {
    var height = node.scrollHeight;

    if (sizingData.sizingStyle.boxSizing === 'border-box') {
      // border-box: add border, since height = content + padding + border
      return height + sizingData.borderSize;
    } // remove padding, since height = content


    return height - sizingData.paddingSize;
  };

  function calculateNodeHeight(sizingData, value, minRows, maxRows) {
    if (minRows === void 0) {
      minRows = 1;
    }

    if (maxRows === void 0) {
      maxRows = Infinity;
    }

    if (!hiddenTextarea) {
      hiddenTextarea = document.createElement('textarea');
      hiddenTextarea.setAttribute('tab-index', '-1');
      hiddenTextarea.setAttribute('aria-hidden', 'true');
      forceHiddenStyles(hiddenTextarea);
    }

    if (hiddenTextarea.parentNode === null) {
      document.body.appendChild(hiddenTextarea);
    }

    var paddingSize = sizingData.paddingSize,
        borderSize = sizingData.borderSize,
        sizingStyle = sizingData.sizingStyle;
    var boxSizing = sizingStyle.boxSizing;
    Object.keys(sizingStyle).forEach(function (_key) {
      var key = _key;
      hiddenTextarea.style[key] = sizingStyle[key];
    });
    forceHiddenStyles(hiddenTextarea);
    hiddenTextarea.value = value;
    var height = getHeight(hiddenTextarea, sizingData); // measure height of a textarea with a single row

    hiddenTextarea.value = 'x';
    var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
    var minHeight = rowHeight * minRows;

    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }

    height = Math.max(minHeight, height);
    var maxHeight = rowHeight * maxRows;

    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }

    height = Math.min(maxHeight, height);
    return [height, rowHeight];
  }

  var noop = function noop() {};
  var pick = function pick(props, obj) {
    return props.reduce(function (acc, prop) {
      acc[prop] = obj[prop];
      return acc;
    }, {});
  };

  var SIZING_STYLE = ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'boxSizing', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', // non-standard
  'tabSize', 'textIndent', // non-standard
  'textRendering', 'textTransform', 'width'];
  var isIE = typeof document !== 'undefined' ? !!document.documentElement.currentStyle : false;

  var getSizingData = function getSizingData(node) {
    var style = window.getComputedStyle(node);

    if (style === null) {
      return null;
    }

    var sizingStyle = pick(SIZING_STYLE, style);
    var boxSizing = sizingStyle.boxSizing; // probably node is detached from DOM, can't read computed dimensions

    if (boxSizing === '') {
      return null;
    } // IE (Edge has already correct behaviour) returns content width as computed width
    // so we need to add manually padding and border widths


    if (isIE && boxSizing === 'border-box') {
      sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + 'px';
    }

    var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
    var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
    return {
      sizingStyle: sizingStyle,
      paddingSize: paddingSize,
      borderSize: borderSize
    };
  };

  var useWindowResizeListener = function useWindowResizeListener(listener) {
    var latestListener = useLatest(listener);
    React.useLayoutEffect(function () {
      var handler = function handler(event) {
        latestListener.current(event);
      };

      window.addEventListener('resize', handler);
      return function () {
        window.removeEventListener('resize', handler);
      };
    }, []);
  };

  var TextareaAutosize = function TextareaAutosize(_ref, userRef) {
    var cacheMeasurements = _ref.cacheMeasurements,
        maxRows = _ref.maxRows,
        minRows = _ref.minRows,
        _ref$onChange = _ref.onChange,
        onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
        _ref$onHeightChange = _ref.onHeightChange,
        onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange,
        props = _objectWithoutPropertiesLoose(_ref, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);

    if (process.env.NODE_ENV !== 'production' && props.style) {
      if ('maxHeight' in props.style) {
        throw new Error('Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.');
      }

      if ('minHeight' in props.style) {
        throw new Error('Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.');
      }
    }

    var isControlled = props.value !== undefined;
    var libRef = React.useRef(null);
    var ref = useComposedRef(libRef, userRef);
    var heightRef = React.useRef(0);
    var measurementsCacheRef = React.useRef();

    var resizeTextarea = function resizeTextarea() {
      var node = libRef.current;
      var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node);

      if (!nodeSizingData) {
        return;
      }

      measurementsCacheRef.current = nodeSizingData;

      var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || 'x', minRows, maxRows),
          height = _calculateNodeHeight[0],
          rowHeight = _calculateNodeHeight[1];

      if (heightRef.current !== height) {
        heightRef.current = height;
        node.style.setProperty('height', height + "px", 'important');
        onHeightChange(height, {
          rowHeight: rowHeight
        });
      }
    };

    var handleChange = function handleChange(event) {
      if (!isControlled) {
        resizeTextarea();
      }

      onChange(event);
    };

    if (typeof document !== 'undefined') {
      React.useLayoutEffect(resizeTextarea);
      useWindowResizeListener(resizeTextarea);
    }

    return /*#__PURE__*/React.createElement("textarea", _extends({}, props, {
      onChange: handleChange,
      ref: ref
    }));
  };

  var index = /* #__PURE__ */React.forwardRef(TextareaAutosize);

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
    const theme = useMantineTheme(themeOverride);
    return /* @__PURE__ */ React__default['default'].createElement(InputWrapper, __spreadValues$7({
      label,
      error,
      id: uuid,
      description,
      required,
      style,
      className
    }, wrapperProps), autosize ? /* @__PURE__ */ React__default['default'].createElement(Input, __spreadValues$7({
      required,
      component: index,
      invalid: !!error,
      maxRows,
      minRows,
      id: uuid,
      elementRef,
      inputStyle: __spreadProps$4(__spreadValues$7({
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs
      }, inputStyle), {
        height: void 0
      })
    }, others)) : /* @__PURE__ */ React__default['default'].createElement(Input, __spreadValues$7({
      component: "textarea",
      required,
      id: uuid,
      invalid: !!error,
      rows: minRows,
      elementRef,
      inputStyle: __spreadValues$7({
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs
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
    themeIcon: ({theme, color, size, radius, variant}) => {
      const iconSize = getSizeValue({size, sizes});
      return {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: variant === "filled" ? theme.colorScheme === "dark" ? 4 : 6 : 1
        }),
        color: variant === "filled" ? theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white : getThemeColor({theme, color, shade: 9}),
        width: iconSize,
        height: iconSize,
        borderRadius: getSizeValue({size: radius, sizes: theme.radius})
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
      theme: useMantineTheme(themeOverride)
    });
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$6({
      "data-mantine-composable": true,
      className: cx(classes.themeIcon, className)
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
    title: ({theme, element}) => __spreadProps$3(__spreadValues$5({}, getFontStyles(theme)), {
      fontFamily: theme.headings.fontFamily,
      fontWeight: theme.headings.fontWeight,
      fontSize: theme.headings.sizes[element].fontSize,
      lineHeight: theme.headings.sizes[element].lineHeight,
      margin: 0,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      "@media (max-width: 755px)": {
        fontSize: typeof theme.headings.sizes[element].fontSize === "number" && theme.headings.sizes[element].fontSize / 1.3
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
    const classes = useStyles$2({theme: useMantineTheme(themeOverride), element});
    return React__default['default'].createElement(element, __spreadValues$4({
      className: cx(classes.title, className)
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
    tooltipInner: ({theme, color}) => __spreadProps$2(__spreadValues$3({}, getFontStyles(theme)), {
      backgroundColor: getThemeColor({theme, color, shade: theme.colorScheme === "dark" ? 3 : 9}),
      lineHeight: theme.lineHeight,
      fontSize: theme.fontSizes.sm,
      borderRadius: theme.radius.sm,
      padding: [theme.spacing.xs / 2, theme.spacing.xs],
      color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
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
    top: ({gutter, theme, color, arrowSize}) => __spreadProps$2(__spreadValues$3({}, verticalPlacement), {
      bottom: `calc(100% + ${gutter}px)`,
      "& $tooltipInner$withArrow::before": {
        top: "100%",
        borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`,
        borderColor: `${getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === "dark" ? 3 : 9
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
    bottom: ({gutter, theme, color, arrowSize}) => __spreadProps$2(__spreadValues$3({}, verticalPlacement), {
      top: `calc(100% + ${gutter}px)`,
      "& $tooltipInner$withArrow::before": {
        bottom: "100%",
        borderWidth: `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`,
        borderColor: `transparent transparent ${getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === "dark" ? 3 : 9
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
    right: ({gutter, theme, color, arrowSize}) => __spreadProps$2(__spreadValues$3({}, horizontalPlacement), {
      left: `calc(100% + ${gutter}px)`,
      "& $tooltipInner$withArrow::before": {
        right: "100%",
        borderWidth: `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`,
        borderColor: `transparent ${getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === "dark" ? 3 : 9
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
    left: ({gutter, theme, color, arrowSize}) => __spreadProps$2(__spreadValues$3({}, horizontalPlacement), {
      right: `calc(100% + ${gutter}px)`,
      "& $tooltipInner$withArrow::before": {
        left: "100%",
        borderWidth: `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
        borderColor: `transparent transparent transparent ${getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === "dark" ? 3 : 9
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
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles$1({theme, color, gutter, arrowSize});
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
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues$2({
      className: cx(classes.wrapper, className),
      ref: tooltipRef
    }, others), /* @__PURE__ */ React__default['default'].createElement(Transition, {
      mounted: visible,
      transition,
      duration,
      timingFunction: transitionTimingFunction
    }, (transitionStyles) => /* @__PURE__ */ React__default['default'].createElement("div", {
      id: tooltipId,
      role: "tooltip",
      style: {zIndex, width, pointerEvents: allowPointerEvents ? "all" : "none"},
      "data-mantine-tooltip": true,
      className: cx(classes.tooltip, classes[placement], classes[position]),
      ref: tooltipRef
    }, /* @__PURE__ */ React__default['default'].createElement("div", {
      "data-mantine-tooltip-inner": true,
      className: cx(classes.tooltipInner, {
        [classes.withArrow]: withArrow
      }),
      style: __spreadProps$1(__spreadValues$2({}, transitionStyles), {whiteSpace: wrapLines ? "normal" : "nowrap"})
    }, label))), /* @__PURE__ */ React__default['default'].createElement("div", {
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
    innerHtml: ({theme}) => {
      const headings = Object.keys(theme.headings.sizes).reduce((acc, h) => {
        acc[`& ${h}`] = __spreadProps(__spreadValues$1({
          fontFamily: theme.headings.fontFamily,
          fontWeight: theme.headings.fontWeight,
          marginTop: theme.spacing.lg * theme.headings.sizes[h].lineHeight,
          marginBottom: theme.spacing.xs * theme.headings.sizes[h].lineHeight
        }, theme.headings.sizes[h]), {
          "@media (max-width: 755px)": {
            fontSize: typeof theme.headings.sizes[h].fontSize === "number" && theme.headings.sizes[h].fontSize / 1.3
          }
        });
        return acc;
      }, {});
      return __spreadProps(__spreadValues$1(__spreadProps(__spreadValues$1({}, getFontStyles(theme)), {
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
        fontSize: theme.fontSizes.md,
        "@media (max-width: 755px)": {
          fontSize: theme.fontSizes.sm
        }
      }), headings), {
        "& img": {
          maxWidth: "100%",
          marginBottom: theme.spacing.xs
        },
        "& p": {
          marginTop: 0,
          marginBottom: theme.spacing.sm
        },
        "& hr": {
          marginTop: theme.spacing.md,
          marginBottom: theme.spacing.sm,
          borderBottom: 0,
          borderLeft: 0,
          borderRight: 0,
          borderTop: `1px dashed ${theme.colors.gray[theme.colorScheme === "dark" ? 4 : 6]}`
        },
        "& a": __spreadProps(__spreadValues$1({}, getFocusStyles(theme)), {
          color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline"
          }
        }),
        "& pre": {
          padding: theme.spacing.xs,
          lineHeight: theme.lineHeight,
          margin: 0,
          marginTop: theme.spacing.md,
          marginBottom: theme.spacing.md,
          overflowX: "auto",
          fontFamily: theme.fontFamilyMonospace,
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[0]
        },
        "& code": {
          lineHeight: theme.lineHeight,
          padding: [1, theme.spacing.xs / 2],
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[0],
          fontFamily: theme.fontFamilyMonospace,
          fontSize: theme.fontSizes.xs,
          border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[3]}`
        },
        "& ul, & ol": {
          marginBottom: theme.spacing.md,
          paddingLeft: theme.spacing.lg * 2,
          "& li": {
            marginTop: theme.spacing.xs
          }
        },
        "& table": {
          width: "100%",
          borderCollapse: "collapse",
          captionSide: "bottom",
          marginBottom: theme.spacing.md,
          "& caption": {
            marginTop: theme.spacing.xs,
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6]
          },
          "& th": {
            textAlign: "left",
            fontWeight: "bold",
            color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
            fontSize: 14,
            padding: [7, 10]
          },
          "& thead th": {
            borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
          },
          "& tfoot th": {
            borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
          },
          "& td": {
            padding: [7, 10],
            borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
            fontSize: 14
          },
          "& tr:last-of-type td": {
            borderBottom: "none"
          }
        },
        "& blockquote": {
          fontSize: theme.fontSizes.lg,
          lineHeight: theme.lineHeight,
          margin: [theme.spacing.md, 0],
          borderTopRightRadius: theme.radius.sm,
          borderBottomRightRadius: theme.radius.sm,
          padding: [theme.spacing.md, theme.spacing.lg],
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[0],
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          borderLeft: `3px solid ${getThemeColor({
          theme,
          color: theme.primaryColor,
          shade: theme.colorScheme === "dark" ? 4 : 6
        })}`,
          "& cite": {
            display: "block",
            fontSize: theme.fontSizes.sm,
            marginTop: theme.spacing.xs,
            color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
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
    const classes = useStyles({theme: useMantineTheme(themeOverride)});
    return /* @__PURE__ */ React__default['default'].createElement("div", __spreadValues({
      className: cx(classes.innerHtml, className)
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
  exports.DEFAULT_THEME = DEFAULT_THEME;
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
  exports.MantineProvider = MantineProvider;
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
  exports.getFocusStyles = getFocusStyles;
  exports.getFontStyles = getFontStyles;
  exports.getSizeValue = getSizeValue;
  exports.getThemeColor = getThemeColor;
  exports.theming = theming;
  exports.useMantineTheme = useMantineTheme;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
