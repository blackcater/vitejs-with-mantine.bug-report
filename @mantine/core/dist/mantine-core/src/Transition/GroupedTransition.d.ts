import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { MantineTransition } from './transitions';
interface GroupedTransitionItem {
    duration: number;
    timingFunction?: React.CSSProperties['transitionTimingFunction'];
    transition: MantineTransition;
}
interface GroupedTransitionProps extends Omit<DefaultProps, 'className'> {
    /** Transitions group */
    transitions: Record<string, GroupedTransitionItem>;
    /** When true, component will ne mounted */
    mounted: boolean;
    /** Render function with transition group styles argument */
    children(styles: Record<string, React.CSSProperties>): React.ReactNode;
}
export declare function GroupedTransition({ transitions, mounted, children, themeOverride, }: GroupedTransitionProps): JSX.Element;
export declare namespace GroupedTransition {
    var displayName: string;
}
export {};
//# sourceMappingURL=GroupedTransition.d.ts.map