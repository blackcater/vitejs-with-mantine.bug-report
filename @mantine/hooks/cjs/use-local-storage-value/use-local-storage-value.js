'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var useWindowEvent = require('../use-window-event/use-window-event.js');

function useLocalStorageValue({
  key,
  defaultValue = null
}) {
  const [value, setValue] = react.useState(typeof window !== "undefined" && "localStorage" in window ? window.localStorage.getItem(key) : defaultValue);
  const setLocalStorageValue = (val) => {
    if (typeof val === "function") {
      setValue((current) => {
        const result = val(current);
        window.localStorage.setItem(key, result);
        return result;
      });
    } else {
      window.localStorage.setItem(key, val);
      setValue(val);
    }
  };
  useWindowEvent.useWindowEvent("storage", (event) => {
    if (event.storageArea === window.localStorage && event.key === key) {
      setValue(event.newValue);
    }
  });
  return [value, setLocalStorageValue];
}

exports.useLocalStorageValue = useLocalStorageValue;
//# sourceMappingURL=use-local-storage-value.js.map
