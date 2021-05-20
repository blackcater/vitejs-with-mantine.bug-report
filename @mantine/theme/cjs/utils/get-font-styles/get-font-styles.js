'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getFontStyles(theme) {
  return {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: theme.fontFamily || "sans-serif"
  };
}

exports.getFontStyles = getFontStyles;
//# sourceMappingURL=get-font-styles.js.map
