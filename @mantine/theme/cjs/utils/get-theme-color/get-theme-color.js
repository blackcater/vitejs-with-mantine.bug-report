'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getThemeColor({
  theme,
  color,
  shade
}) {
  const primaryShades = theme.colors[theme.primaryColor];
  return color in theme.colors ? theme.colors[color][shade] : primaryShades[shade];
}

exports.getThemeColor = getThemeColor;
//# sourceMappingURL=get-theme-color.js.map
