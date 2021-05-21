import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '@mantine/hooks';

function Portal({children, zIndex = 1, target, className}) {
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef();
  useIsomorphicEffect(() => {
    setMounted(true);
    elementRef.current = target || document.createElement("div");
    if (!target) {
      document.body.appendChild(elementRef.current);
    }
    return () => {
      !target && document.body.removeChild(elementRef.current);
    };
  }, [target]);
  if (!mounted) {
    return null;
  }
  return createPortal(/* @__PURE__ */ React.createElement("div", {
    className,
    style: {position: "relative", zIndex},
    "data-mantine-portal": true
  }, children), elementRef.current);
}
Portal.displayName = "@mantine/core/Portal";

export { Portal };
//# sourceMappingURL=Portal.js.map
