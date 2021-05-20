'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.getFocusStyles = getFocusStyles;
//# sourceMappingURL=get-focus-styles.js.map
