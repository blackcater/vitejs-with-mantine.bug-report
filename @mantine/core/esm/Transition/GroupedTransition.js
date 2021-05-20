import React from 'react';
import { Transition } from 'react-transition-group';
import { useMantineTheme } from '@mantine/theme';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles.js';

function GroupedTransition({
  transitions,
  mounted,
  children,
  themeOverride
}) {
  const theme = useMantineTheme(themeOverride);
  const duration = Math.max(...Object.keys(transitions).map((transition) => transitions[transition].duration));
  return /* @__PURE__ */ React.createElement(Transition, {
    in: mounted,
    timeout: duration,
    unmountOnExit: true,
    mountOnEnter: true,
    onEnter: (node) => node.offsetHeight
  }, (transitionState) => {
    const transitionsStyles = Object.keys(transitions).reduce((acc, transition) => {
      acc[transition] = getTransitionStyles({
        duration: transitions[transition].duration,
        transition: transitions[transition].transition,
        timingFunction: transitions[transition].timingFunction || theme.transitionTimingFunction,
        state: transitionState
      });
      return acc;
    }, {});
    return children(transitionsStyles);
  });
}
GroupedTransition.displayName = "@mantine/core/GroupedTransition";

export { GroupedTransition };
//# sourceMappingURL=GroupedTransition.js.map
