/// <reference types="react" />
import { TransitionStatus } from 'react-transition-group';
import { MantineTransition } from '../transitions';
export declare function getTransitionStyles({ transition, state, duration, timingFunction, }: {
    transition: MantineTransition;
    state: TransitionStatus;
    duration: number;
    timingFunction: React.CSSProperties['transitionTimingFunction'];
}): React.CSSProperties;
//# sourceMappingURL=get-transition-styles.d.ts.map