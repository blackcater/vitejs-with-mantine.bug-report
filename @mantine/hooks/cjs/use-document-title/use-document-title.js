'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useDocumentTitle(title) {
  react.useLayoutEffect(() => {
    if (typeof title === "string" && title.trim().length > 0) {
      document.title = title.trim();
    }
  }, [title]);
}

exports.useDocumentTitle = useDocumentTitle;
//# sourceMappingURL=use-document-title.js.map
