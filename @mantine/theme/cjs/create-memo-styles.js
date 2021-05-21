'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactJss = require('react-jss');

function createMemoStyles(styles) {
  const useStyles = reactJss.createUseStyles(styles);
  return function useMemoStyles(args) {
    const dependencies = typeof args === "object" && args !== null ? Object.keys(args).filter((key) => key !== "theme").map((key) => args[key]) : [];
    if (typeof args === "object" && "theme" in args) {
      dependencies.push(args.theme.colorScheme);
    }
    const stylesProps = React.useMemo(() => args, dependencies);
    return useStyles(stylesProps);
  };
}

exports.createMemoStyles = createMemoStyles;
//# sourceMappingURL=create-memo-styles.js.map
