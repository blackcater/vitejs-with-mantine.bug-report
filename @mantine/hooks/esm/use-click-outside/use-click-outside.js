import { useRef, useEffect } from 'react';

function useClickOutside(handler, events = ["mousedown", "touchstart"]) {
  const ref = useRef();
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        event.preventDefault();
        handler();
      }
    };
    events.forEach((fn) => document.addEventListener(fn, listener));
    return () => {
      events.forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler]);
  return ref;
}

export { useClickOutside };
//# sourceMappingURL=use-click-outside.js.map
