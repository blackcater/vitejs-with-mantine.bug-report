'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactJss = require('react-jss');

const ThemeContext = React.createContext({});
const theming = reactJss.createTheming(ThemeContext);
const {ThemeProvider, useTheme} = theming;

exports.ThemeProvider = ThemeProvider;
exports.theming = theming;
exports.useTheme = useTheme;
//# sourceMappingURL=theme-context.js.map
