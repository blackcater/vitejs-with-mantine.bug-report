import React from 'react';
import { DEFAULT_THEME } from '../default-theme.js';
import { mergeTheme } from '../utils/merge-theme/merge-theme.js';
import { ThemeProvider } from './theme-context.js';

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
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme: mergeTheme(__spreadValues({__mantine_theme: true}, DEFAULT_THEME), theme)
  }, children);
}
MantineProvider.displayName = "@mantine/Provider";

export { MantineProvider };
//# sourceMappingURL=MantineProvider.js.map
