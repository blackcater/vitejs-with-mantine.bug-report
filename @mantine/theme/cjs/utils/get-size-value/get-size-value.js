'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getSizeValue({
  size,
  sizes,
  defaultSize = "md"
}) {
  if (typeof size === "number") {
    return size;
  }
  return sizes[size] || size || sizes[defaultSize];
}

exports.getSizeValue = getSizeValue;
//# sourceMappingURL=get-size-value.js.map
