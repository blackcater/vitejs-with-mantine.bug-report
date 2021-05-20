'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function randomId() {
  return `mantine-${Math.random().toString(36).substr(2, 9)}`;
}
function useId(id, generateId = randomId) {
  const generatedId = react.useRef(generateId());
  return id || generatedId.current;
}

exports.randomId = randomId;
exports.useId = useId;
//# sourceMappingURL=use-id.js.map
