import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { createPortal } from 'react-dom';
// useLayoutEffect is required for Portal to appear after hydration
// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
const useIsomorphicEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;
export function Portal({ children, zIndex = 1, target, className }) {
    const [mounted, setMounted] = useState(false);
    const elementRef = useRef();
    useIsomorphicEffect(() => {
        setMounted(true);
        elementRef.current = target || document.createElement('div');
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
    return createPortal(React.createElement("div", { className: className, style: { position: 'relative', zIndex }, "data-mantine-portal": true }, children), elementRef.current);
}
Portal.displayName = '@mantine/core/Portal';
