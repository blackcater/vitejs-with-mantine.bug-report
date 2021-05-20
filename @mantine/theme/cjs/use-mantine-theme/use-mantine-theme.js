'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeContext = require('../MantineProvider/theme-context.js');
var mergeTheme = require('../utils/merge-theme/merge-theme.js');
var defaultTheme = require('../default-theme.js');

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
  const internalTheme = __spreadValues({}, themeContext.useTheme());
  let mergedTheme = null;
  if (!internalTheme.__mantine_theme) {
    mergedTheme = mergeTheme.mergeTheme(__spreadValues({__mantine_theme: true}, defaultTheme.DEFAULT_THEME), themeOverride);
  } else {
    mergedTheme = mergeTheme.mergeTheme(internalTheme, themeOverride);
  }
  delete mergedTheme.__mantine_theme;
  return mergedTheme;
}

exports.useMantineTheme = useMantineTheme;
//# sourceMappingURL=use-mantine-theme.js.map
