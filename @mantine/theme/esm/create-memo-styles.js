import { useMemo } from 'react';
import { createUseStyles } from 'react-jss';

function createMemoStyles(styles) {
  const useStyles = createUseStyles(styles);
  return function useMemoStyles(args) {
    const dependencies = typeof args === "object" && args !== null ? Object.keys(args).filter((key) => key !== "theme").map((key) => args[key]) : [];
    if (typeof args === "object" && "theme" in args) {
      dependencies.push(args.theme.colorScheme);
    }
    const stylesProps = useMemo(() => args, dependencies);
    return useStyles(stylesProps);
  };
}

export { createMemoStyles };
//# sourceMappingURL=create-memo-styles.js.map
