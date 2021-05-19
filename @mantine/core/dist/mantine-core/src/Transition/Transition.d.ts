import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { MantineTransition } from './transitions';
export { GroupedTransition } from './GroupedTransition';
export declare const AVAILABLE_TRANSITIONS: import("./transitions").MantineTransitionName[];
export type { MantineTransition };
interface TransitionProps extends Omit<DefaultProps, 'className'> {
    /** Predefined transition name or transition styles */
    transition: MantineTransition;
    /** Transition duration in ms */
    duration?: number;
    /** Transition timing function, defaults to theme.transitionTimingFunction */
    timingFunction?: string;
    /** When true, component will be mounted */
    mounted: boolean;
    /** Render function with transition styles argument */
    children(styles: React.CSSProperties): React.ReactNode;
    /** Calls when exit transition ends */
    onExited?: () => void;
    /** Calls when exit transition starts */
    onExit?: () => void;
    /** Calls when enter transition starts */
    onEnter?: () => void;
    /** Calls when enter transition ends */
    onEntered?: () => void;
}
export declare function Transition({ transition, duration, mounted, children, themeOverride, timingFunction, onExit, onEntered, onEnter, onExited, }: TransitionProps): JSX.Element;
export declare namespace Transition {
    var displayName: string;
}
//# sourceMappingURL=Transition.d.ts.map