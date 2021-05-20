import { useLayoutEffect } from 'react';
export function useDocumentTitle(title) {
    useLayoutEffect(() => {
        if (typeof title === 'string' && title.trim().length > 0) {
            document.title = title.trim();
        }
    }, [title]);
}
