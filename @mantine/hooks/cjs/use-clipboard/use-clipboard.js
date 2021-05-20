'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useClipboard({timeout = 2e3} = {}) {
  const [error, setError] = react.useState(null);
  const [copied, setCopied] = react.useState(false);
  const [copyTimeout, setCopyTimeout] = react.useState(null);
  const handleCopyResult = (value) => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };
  const copy = (valueToCopy) => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(valueToCopy).then(() => handleCopyResult(true)).catch((err) => setError(err));
    } else {
      setError(new Error("useClipboard: navigator.clipboard is not supported"));
    }
  };
  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };
  return {copy, reset, error, copied};
}

exports.useClipboard = useClipboard;
//# sourceMappingURL=use-clipboard.js.map
