'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useClickOutside(handler, events = ["mousedown", "touchstart"]) {
  const ref = react.useRef();
  react.useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
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

exports.useClickOutside = useClickOutside;
//# sourceMappingURL=use-click-outside.js.map
