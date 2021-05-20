export function useMergedRef(...refs) {
    return (node) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(node);
            }
            else if (ref != null) {
                // eslint-disable-next-line no-param-reassign
                ref.current = node;
            }
        });
    };
}
