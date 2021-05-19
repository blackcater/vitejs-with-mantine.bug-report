import { useRef, useEffect } from 'react';

const preventDefault = (event) => {
  event.preventDefault();
};
function useScrollLock(lock) {
  const locked = useRef(false);
  const bodyOverflow = useRef(null);
  const unlockScroll = () => {
    if (locked.current) {
      locked.current = false;
      document.body.style.overflow = bodyOverflow.current || "";
      document.body.removeEventListener("touchmove", preventDefault);
    }
  };
  const lockScroll = () => {
    locked.current = true;
    bodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.addEventListener("touchmove", preventDefault, {passive: false});
  };
  useEffect(() => {
    if (lock) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return unlockScroll;
  }, [lock]);
}

export { useScrollLock };
//# sourceMappingURL=use-scroll-lock.js.map
