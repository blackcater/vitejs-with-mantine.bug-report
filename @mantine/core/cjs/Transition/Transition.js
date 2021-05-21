'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactTransitionGroup = require('react-transition-group');
var theme = require('@mantine/theme');
var hooks = require('@mantine/hooks');
var getTransitionStyles = require('./get-transition-styles/get-transition-styles.js');
var transitions = require('./transitions.js');
var GroupedTransition = require('./GroupedTransition.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const AVAILABLE_TRANSITIONS = Object.keys(transitions.transitions);
function Transition({
  transition,
  duration = 250,
  mounted,
  children,
  themeOverride,
  timingFunction,
  onExit,
  onEntered,
  onEnter,
  onExited
}) {
  const theme$1 = theme.useMantineTheme(themeOverride);
  const reduceMotion = hooks.useReducedMotion();
  return /* @__PURE__ */ React__default.createElement(reactTransitionGroup.Transition, {
    in: mounted,
    timeout: duration,
    unmountOnExit: true,
    mountOnEnter: true,
    onEnter: (node) => {
      node.offsetHeight;
      typeof onEnter === "function" && onEnter();
    },
    onExited,
    onEntered,
    onExit
  }, (transitionState) => children(getTransitionStyles.getTransitionStyles({
    transition,
    duration: reduceMotion ? 0 : duration,
    state: transitionState,
    timingFunction: timingFunction || theme$1.transitionTimingFunction
  })));
}
Transition.displayName = "@mantine/core/Transition";

exports.GroupedTransition = GroupedTransition.GroupedTransition;
exports.AVAILABLE_TRANSITIONS = AVAILABLE_TRANSITIONS;
exports.Transition = Transition;
//# sourceMappingURL=Transition.js.map
