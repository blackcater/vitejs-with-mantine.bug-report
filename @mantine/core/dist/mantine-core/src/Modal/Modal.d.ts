import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { MantineTransition } from '../Transition/Transition';
export declare const MODAL_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: string;
};
interface ModalProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    /** Mounts modal if true */
    opened: boolean;
    /** Called when close button clicked and when escape key is pressed */
    onClose(): void;
    /** Modal title, displayed in header before close button */
    title?: React.ReactNode;
    /** Modal z-index property */
    zIndex?: number;
    /** Control vertical overflow behavior */
    overflow?: 'outside' | 'inside';
    /** Hides close button, modal still can be closed with escape key and by clicking outside */
    hideCloseButton?: boolean;
    /** Overlay below modal opacity, defaults to 0.75 in light theme and to 0.85 in dark theme */
    overlayOpacity?: number;
    /** Overlay below modal color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme */
    overlayColor?: string;
    /** Modal body width */
    size?: string | number;
    /** Modal body transition */
    transition?: MantineTransition;
    /** Duration in ms of modal transitions, set to 0 to disable all animations */
    transitionDuration?: number;
    /** Modal body transitionTimingFunction, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Close button aria-label and title attributes */
    closeButtonLabel?: string;
    /** id base, used to generate ids to connect modal title and body with aria- attributes, defaults to random id */
    id?: string;
}
export declare function Modal({ className, opened, themeOverride, title, onClose, children, hideCloseButton, overlayOpacity, size, transitionDuration, closeButtonLabel, overlayColor, zIndex, overflow, transition, id, ...others }: ModalProps): JSX.Element;
export declare namespace Modal {
    var displayName: string;
}
export {};
//# sourceMappingURL=Modal.d.ts.map