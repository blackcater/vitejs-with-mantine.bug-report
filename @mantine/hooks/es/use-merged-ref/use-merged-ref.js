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

export { useMergedRef };
//# sourceMappingURL=use-merged-ref.js.map
