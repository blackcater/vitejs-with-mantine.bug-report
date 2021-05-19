import { useState } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event.js';

function useLocalStorageValue({
  key,
  defaultValue = null
}) {
  const [value, setValue] = useState(typeof window !== "undefined" && "localStorage" in window ? window.localStorage.getItem(key) : defaultValue);
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
  useWindowEvent("storage", (event) => {
    if (event.storageArea === window.localStorage && event.key === key) {
      setValue(event.newValue);
    }
  });
  return [value, setLocalStorageValue];
}

export { useLocalStorageValue };
//# sourceMappingURL=use-local-storage-value.js.map
