import React from 'react';
import { Transition as RTGTransition } from 'react-transition-group';
import { useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { transitions } from './transitions';
export { GroupedTransition } from './GroupedTransition';
export const AVAILABLE_TRANSITIONS = Object.keys(transitions);
export function Transition({ transition, duration = 250, mounted, children, themeOverride, timingFunction, onExit, onEntered, onEnter, onExited, }) {
    const theme = useMantineTheme(themeOverride);
    const reduceMotion = useReducedMotion();
    return (React.createElement(RTGTransition, { in: mounted, timeout: duration, unmountOnExit: true, mountOnEnter: true, onEnter: (node) => {
            node.offsetHeight;
            typeof onEnter === 'function' && onEnter();
        }, onExited: onExited, onEntered: onEntered, onExit: onExit }, (transitionState) => children(getTransitionStyles({
        transition,
        duration: reduceMotion ? 0 : duration,
        state: transitionState,
        timingFunction: timingFunction || theme.transitionTimingFunction,
    }))));
}
Transition.displayName = '@mantine/core/Transition';
