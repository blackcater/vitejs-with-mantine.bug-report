import { useLayoutEffect } from 'react';

function useDocumentTitle(title) {
  useLayoutEffect(() => {
    if (typeof title === "string" && title.trim().length > 0) {
      document.title = title.trim();
    }
  }, [title]);
}

export { useDocumentTitle };
//# sourceMappingURL=use-document-title.js.map
