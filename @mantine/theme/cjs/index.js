'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getThemeColor = require('./utils/get-theme-color/get-theme-color.js');
var getFocusStyles = require('./utils/get-focus-styles/get-focus-styles.js');
var getFontStyles = require('./utils/get-font-styles/get-font-styles.js');
var getSizeValue = require('./utils/get-size-value/get-size-value.js');
var MantineProvider = require('./MantineProvider/MantineProvider.js');
var useMantineTheme = require('./use-mantine-theme/use-mantine-theme.js');
var themeContext = require('./MantineProvider/theme-context.js');
var defaultTheme = require('./default-theme.js');



exports.getThemeColor = getThemeColor.getThemeColor;
exports.getFocusStyles = getFocusStyles.getFocusStyles;
exports.getFontStyles = getFontStyles.getFontStyles;
exports.getSizeValue = getSizeValue.getSizeValue;
exports.MantineProvider = MantineProvider.MantineProvider;
exports.useMantineTheme = useMantineTheme.useMantineTheme;
exports.theming = themeContext.theming;
exports.DEFAULT_THEME = defaultTheme.DEFAULT_THEME;
//# sourceMappingURL=index.js.map
