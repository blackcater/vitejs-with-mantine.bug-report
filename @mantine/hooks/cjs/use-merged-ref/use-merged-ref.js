'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function useMergedRef(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref != null) {
        ref.current = node;
      }
    });
  };
}

exports.useMergedRef = useMergedRef;
//# sourceMappingURL=use-merged-ref.js.map
