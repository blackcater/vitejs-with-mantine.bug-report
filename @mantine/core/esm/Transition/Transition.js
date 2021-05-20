import React from 'react';
import { Transition as Transition$1 } from 'react-transition-group';
import { useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles.js';
import { transitions } from './transitions.js';

const AVAILABLE_TRANSITIONS = Object.keys(transitions);
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
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();
  return /* @__PURE__ */ React.createElement(Transition$1, {
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
  }, (transitionState) => children(getTransitionStyles({
    transition,
    duration: reduceMotion ? 0 : duration,
    state: transitionState,
    timingFunction: timingFunction || theme.transitionTimingFunction
  })));
}
Transition.displayName = "@mantine/core/Transition";

export { AVAILABLE_TRANSITIONS, Transition };
//# sourceMappingURL=Transition.js.map
