'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactTransitionGroup = require('react-transition-group');
var theme = require('@mantine/theme');
var getTransitionStyles = require('./get-transition-styles/get-transition-styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function GroupedTransition({
  transitions,
  mounted,
  children,
  themeOverride
}) {
  const theme$1 = theme.useMantineTheme(themeOverride);
  const duration = Math.max(...Object.keys(transitions).map((transition) => transitions[transition].duration));
  return /* @__PURE__ */ React__default['default'].createElement(reactTransitionGroup.Transition, {
    in: mounted,
    timeout: duration,
    unmountOnExit: true,
    mountOnEnter: true,
    onEnter: (node) => node.offsetHeight
  }, (transitionState) => {
    const transitionsStyles = Object.keys(transitions).reduce((acc, transition) => {
      acc[transition] = getTransitionStyles.getTransitionStyles({
        duration: transitions[transition].duration,
        transition: transitions[transition].transition,
        timingFunction: transitions[transition].timingFunction || theme$1.transitionTimingFunction,
        state: transitionState
      });
      return acc;
    }, {});
    return children(transitionsStyles);
  });
}
GroupedTransition.displayName = "@mantine/core/GroupedTransition";

exports.GroupedTransition = GroupedTransition;
//# sourceMappingURL=GroupedTransition.js.map
