(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@mantine/utils'] = {}));
}(this, (function (exports) { 'use strict';

  function randomId() {
    return `mantine-${Math.random().toString(36).substr(2, 9)}`;
  }

  function upperFirst(value) {
    return typeof value !== "string" ? "" : value.charAt(0).toUpperCase() + value.slice(1);
  }

  exports.randomId = randomId;
  exports.upperFirst = upperFirst;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
