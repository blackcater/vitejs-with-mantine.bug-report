'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const useIsomorphicEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function Portal({children, zIndex = 1, target, className}) {
  const [mounted, setMounted] = React.useState(false);
  const elementRef = React.useRef();
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
  return reactDom.createPortal(/* @__PURE__ */ React__default['default'].createElement("div", {
    className,
    style: {position: "relative", zIndex},
    "data-mantine-portal": true
  }, children), elementRef.current);
}
Portal.displayName = "@mantine/core/Portal";

exports.Portal = Portal;
//# sourceMappingURL=Portal.js.map
