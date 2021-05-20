'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var defaultTheme = require('../default-theme.js');
var mergeTheme = require('../utils/merge-theme/merge-theme.js');
var themeContext = require('./theme-context.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
function MantineProvider({children, theme}) {
  return /* @__PURE__ */ React__default['default'].createElement(themeContext.ThemeProvider, {
    theme: mergeTheme.mergeTheme(__spreadValues({__mantine_theme: true}, defaultTheme.DEFAULT_THEME), theme)
  }, children);
}
MantineProvider.displayName = "@mantine/Provider";

exports.MantineProvider = MantineProvider;
//# sourceMappingURL=MantineProvider.js.map
