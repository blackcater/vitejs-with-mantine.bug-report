import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
import { MantineTransition } from '../Transition/Transition';
export interface PopoverProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    /** Disable closing by click outside */
    noClickOutside?: boolean;
    /** Disable focus trap (may impact close on escape feature) */
    noFocusTrap?: boolean;
    /** Disables close on escape */
    noEscape?: boolean;
    /** Adds close button */
    withCloseButton?: boolean;
    /** True to disable popover */
    disabled?: boolean;
    /** Popover placement relative to target */
    placement?: 'center' | 'end' | 'start';
    /** Popover position relative to target */
    position?: 'left' | 'right' | 'top' | 'bottom';
    /** Space between popover and target in px */
    gutter?: number;
    /** Customize mount/unmount transition */
    transition?: MantineTransition;
    /** Mount/unmount transition duration in ms */
    transitionDuration?: number;
    /** Mount/unmount transition timing function, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Adds arrow, arrow position depends on position and placement props */
    withArrow?: boolean;
    /** Arrow size in px */
    arrowSize?: number;
    /** Popover z-index */
    zIndex?: number;
    /** True to display popover */
    opened: boolean;
    /** Called when popover closes */
    onClose?(): void;
    /** Element which is used to position popover */
    target: React.ReactNode;
    /** Content inside popover */
    children: React.ReactNode;
    /** Optional popover title */
    title?: React.ReactNode;
    /** Popover body padding, value from theme.spacing or number to set padding in px */
    spacing?: MantineNumberSize;
    /** Popover body radius, value from theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Popover shadow, value from theme.shadows or string to set box-shadow to any value */
    shadow?: string;
    /** Popover body styles */
    bodyStyle?: React.CSSProperties;
    /** Popover body className */
    bodyClassName?: string;
    /** aria-label for close button */
    closeButtonLabel?: string;
}
export declare function Popover({ className, themeOverride, children, target, title, onClose, opened, zIndex, arrowSize, withArrow, transition, transitionDuration, transitionTimingFunction, gutter, position, placement, disabled, noClickOutside, noFocusTrap, noEscape, withCloseButton, radius, spacing, shadow, bodyStyle, bodyClassName, closeButtonLabel, id, ...others }: PopoverProps): JSX.Element;
export declare namespace Popover {
    var displayName: string;
}
//# sourceMappingURL=Popover.d.ts.map