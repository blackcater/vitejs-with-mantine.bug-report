(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-jss')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-jss'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@mantine/theme'] = {}, global.React, global.reactJss));
}(this, (function (exports, React, reactJss) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

  var __defProp$2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  function mergeTheme(currentTheme, themeOverride) {
    if (!themeOverride) {
      return currentTheme;
    }
    return Object.keys(currentTheme).reduce((acc, key) => {
      if (key === "headings" && themeOverride.headings) {
        const sizes = themeOverride.headings.sizes ? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
          headingsAcc[h] = __spreadValues$2(__spreadValues$2({}, currentTheme.headings.sizes[h]), themeOverride.headings.sizes[h]);
          return headingsAcc;
        }, {}) : currentTheme.headings.sizes;
        return __spreadProps(__spreadValues$2({}, acc), {
          headings: __spreadProps(__spreadValues$2(__spreadValues$2({}, currentTheme.headings), themeOverride.headings), {
            sizes
          })
        });
      }
      acc[key] = typeof themeOverride[key] === "object" ? __spreadValues$2(__spreadValues$2({}, currentTheme[key]), themeOverride[key]) : themeOverride[key] || currentTheme[key];
      return acc;
    }, {});
  }

  const ThemeContext = React.createContext({});
  const theming = reactJss.createTheming(ThemeContext);
  const {ThemeProvider, useTheme} = theming;

  var __defProp$1 = Object.defineProperty;
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
  function MantineProvider({children, theme}) {
    return /* @__PURE__ */ React__default['default'].createElement(ThemeProvider, {
      theme: mergeTheme(__spreadValues$1({__mantine_theme: true}, DEFAULT_THEME), theme)
    }, children);
  }
  MantineProvider.displayName = "@mantine/Provider";

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
  function useMantineTheme(themeOverride) {
    const internalTheme = __spreadValues({}, useTheme());
    let mergedTheme = null;
    if (!internalTheme.__mantine_theme) {
      mergedTheme = mergeTheme(__spreadValues({__mantine_theme: true}, DEFAULT_THEME), themeOverride);
    } else {
      mergedTheme = mergeTheme(internalTheme, themeOverride);
    }
    delete mergedTheme.__mantine_theme;
    return mergedTheme;
  }

  exports.DEFAULT_THEME = DEFAULT_THEME;
  exports.MantineProvider = MantineProvider;
  exports.getFocusStyles = getFocusStyles;
  exports.getFontStyles = getFontStyles;
  exports.getSizeValue = getSizeValue;
  exports.getThemeColor = getThemeColor;
  exports.theming = theming;
  exports.useMantineTheme = useMantineTheme;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
