import { transitions } from '../transitions';
const transitionStatuses = {
    entering: 'in',
    entered: 'in',
    exiting: 'out',
    exited: 'out',
};
export function getTransitionStyles({ transition, state, duration, timingFunction, }) {
    const shared = {
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: timingFunction,
    };
    if (typeof transition === 'string') {
        if (!(transition in transitions)) {
            return null;
        }
        return Object.assign(Object.assign(Object.assign({ transitionProperty: transitions[transition].transitionProperty }, shared), transitions[transition].common), transitions[transition][transitionStatuses[state]]);
    }
    return Object.assign(Object.assign(Object.assign({ transitionProperty: transition.transitionProperty }, shared), transition.common), transition[transitionStatuses[state]]);
}
