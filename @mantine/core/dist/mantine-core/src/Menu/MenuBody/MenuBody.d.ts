import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../../mantine-theme/src";
import { MantineTransition } from '../../Transition/Transition';
interface MenuBodyProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** When true menu is mounted to the dom */
    opened: boolean;
    /** Triggers when menu is closed */
    onClose(): void;
    /** <MenuItem /> and <Hr /> components only */
    children: React.ReactNode;
    /** Transition styles */
    transition?: MantineTransition;
    /** Transitions duration in ms */
    transitionDuration?: number;
    /** Transition timing function */
    transitionTimingFunction?: string;
    /** Predefined menu width or number for width in px */
    size?: MantineNumberSize;
    /** Predefined shadow from theme or box-shadow value */
    shadow?: string;
    /** Should menu close on outside click */
    closeOnClickOutside?: boolean;
    /** Should menu close on item click */
    closeOnItemClick?: boolean;
    /** Menu body z-index */
    zIndex?: number;
}
export declare function MenuBody({ className, themeOverride, opened, onClose, transition, transitionDuration, transitionTimingFunction, style, children, size, shadow, closeOnClickOutside, closeOnItemClick, zIndex, ...others }: MenuBodyProps): JSX.Element;
export declare namespace MenuBody {
    var displayName: string;
}
export {};
//# sourceMappingURL=MenuBody.d.ts.map