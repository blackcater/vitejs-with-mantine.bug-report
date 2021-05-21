'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var utils = require('@mantine/utils');

function useId(id, generateId = utils.randomId) {
  const generatedId = react.useRef(generateId());
  return id || generatedId.current;
}

exports.useId = useId;
//# sourceMappingURL=use-id.js.map
