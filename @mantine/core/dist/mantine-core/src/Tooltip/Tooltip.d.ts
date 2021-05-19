import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { MantineTransition } from '../Transition/Transition';
interface TooltipProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Tooltip content */
    label: React.ReactNode;
    /** Any react node that should trigger tooltip */
    children: React.ReactNode;
    /** Tooltip opened state for controlled variant */
    opened?: boolean;
    /** Close delay in ms, 0 to disable delay */
    delay?: number;
    /** Any color from theme.colors, defaults to gray in light color scheme and dark in dark colors scheme */
    color?: string;
    /** Space between tooltip and element in px */
    gutter?: number;
    /** True to disable tooltip */
    disabled?: boolean;
    /** Adds arrow, arrow position depends on position and placement props */
    withArrow?: boolean;
    /** Arrow size in px */
    arrowSize?: number;
    /** Tooltip position relative to children */
    position?: 'top' | 'left' | 'right' | 'bottom';
    /** Tooltip placement relative to children */
    placement?: 'start' | 'center' | 'end';
    /** Tooltip z-index */
    zIndex?: number;
    /** Tooltip width in px or auto */
    width?: number | 'auto';
    /** Allow multiline tooltip content */
    wrapLines?: boolean;
    /** Allow pointer events on tooltip, warning: this may break some animations */
    allowPointerEvents?: boolean;
    /** Customize mount/unmount transition */
    transition?: MantineTransition;
    /** Mount/unmount transition duration in ms */
    transitionDuration?: number;
    /** Mount/unmount transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Get wrapper ref */
    elementRef?: React.ForwardedRef<HTMLDivElement>;
    /** Get tooltip ref */
    tooltipRef?: React.ForwardedRef<HTMLDivElement>;
    /** Tooltip id to bind aria-describedby */
    tooltipId?: string;
}
export declare function Tooltip({ className, themeOverride, label, children, opened, delay, gutter, color, disabled, withArrow, arrowSize, position, placement, transition, transitionDuration, zIndex, transitionTimingFunction, width, wrapLines, allowPointerEvents, elementRef, tooltipRef, tooltipId, ...others }: TooltipProps): JSX.Element;
export declare namespace Tooltip {
    var displayName: string;
}
export {};
//# sourceMappingURL=Tooltip.d.ts.map