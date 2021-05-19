import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
import { MantineTransition } from '../Transition/Transition';
export declare const DRAWER_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: string;
};
interface DrawerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** If true drawer is mounted to the dom */
    opened: boolean;
    /** Called when drawer is closed (Escape key and click outside, depending on options) */
    onClose(): void;
    /** Drawer body position */
    position?: 'top' | 'left' | 'bottom' | 'right';
    /** Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width */
    size?: string | number;
    /** Drawer body shadow from theme or any css shadow value */
    shadow?: string;
    /** Drawer body padding from theme or number for padding in px */
    padding?: MantineNumberSize;
    /** Drawer z-index property */
    zIndex?: number;
    /** Disables focus trap */
    noFocusTrap?: boolean;
    /** Disables scroll lock */
    noScrollScroll?: boolean;
    /** Disable onClock trigger for outside events */
    noCloseOnClickOutside?: boolean;
    /** Disable onClock trigger for escape key press */
    noCloseOnEscape?: boolean;
    /** Drawer appear and disappear transition, see Transition component for full documentation */
    transition?: MantineTransition;
    /** Transition duration in ms */
    transitionDuration?: number;
    /** Drawer transitionTimingFunction css property */
    transitionTimingFunction?: string;
    /** Removes overlay entirely */
    noOverlay?: boolean;
    /** Sets overlay opacity, defaults to 0.75 in light theme and to 0.85 in dark theme */
    overlayOpacity?: number;
    /** Sets overlay color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme */
    overlayColor?: string;
}
export declare function Drawer({ opened, onClose, className, themeOverride, position, size, noFocusTrap, noScrollScroll, noCloseOnClickOutside, noCloseOnEscape, transition, transitionDuration, transitionTimingFunction, zIndex, overlayColor, overlayOpacity, children, noOverlay, shadow, padding, ...others }: DrawerProps): JSX.Element;
export declare namespace Drawer {
    var displayName: string;
}
export {};
//# sourceMappingURL=Drawer.d.ts.map