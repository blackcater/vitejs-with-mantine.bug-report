'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const preventDefault = (event) => {
  event.preventDefault();
};
function useScrollLock(lock, options = {disableTouchEvents: false}) {
  const locked = react.useRef(false);
  const bodyOverflow = react.useRef(null);
  const unlockScroll = () => {
    if (locked.current) {
      locked.current = false;
      document.body.style.overflow = bodyOverflow.current || "";
      if (options.disableTouchEvents) {
        document.body.removeEventListener("touchmove", preventDefault);
      }
    }
  };
  const lockScroll = () => {
    locked.current = true;
    bodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (options.disableTouchEvents) {
      document.body.addEventListener("touchmove", preventDefault, {passive: false});
    }
  };
  react.useEffect(() => {
    if (lock) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return unlockScroll;
  }, [lock]);
}

exports.useScrollLock = useScrollLock;
//# sourceMappingURL=use-scroll-lock.js.map
