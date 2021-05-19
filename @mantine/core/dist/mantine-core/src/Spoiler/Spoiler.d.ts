import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
interface SpoilerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Max height of visible content, when this point is reached spoiler appears */
    maxHeight: number;
    /** Label for close spoiler action */
    hideLabel: React.ReactNode;
    /** Label for open spoiler action */
    showLabel: React.ReactNode;
    /** Get ref of spoiler toggle button */
    controlRef?: React.ForwardedRef<HTMLButtonElement>;
    /** Spoiler reveal transition duration in ms, 0 or null to turn off animation */
    transitionDuration?: number;
}
export declare function Spoiler({ className, children, maxHeight, hideLabel, showLabel, themeOverride, transitionDuration, controlRef, ...others }: SpoilerProps): JSX.Element;
export declare namespace Spoiler {
    var displayName: string;
}
export {};
//# sourceMappingURL=Spoiler.d.ts.map