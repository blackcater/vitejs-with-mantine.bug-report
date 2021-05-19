import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
import { MantineTransition } from '../Transition/Transition';
import { MenuBody } from './MenuBody/MenuBody';
import { MenuItem } from './MenuItem/MenuItem';
export { MenuBody, MenuItem };
export declare const MENU_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface MenuPosition {
    top?: React.CSSProperties['top'];
    bottom?: React.CSSProperties['bottom'];
    left?: React.CSSProperties['left'];
    right?: React.CSSProperties['right'];
}
interface MenuProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** <MenuItem /> and <Hr /> components only, children are passed to MenuBody component  */
    children: React.ReactNode;
    /** React element that will be used as menu control */
    control?: React.ReactElement;
    /** Use opened and onClose props to setup controlled menu */
    opened?: boolean;
    /** Called every time menu is closed */
    onClose?(): void;
    /** Called every time menu is opened */
    onOpen?(): void;
    /** Menu button aria-label and title props */
    menuButtonLabel?: string;
    /** MenuBody component props */
    menuBodyProps?: Record<string, any>;
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
    /** Should menu close on item click */
    closeOnItemClick?: boolean;
    /** Id attribute of menu */
    menuId?: string;
    /** Menu dropdown position */
    menuPosition?: MenuPosition;
    /** Control prop to get element ref */
    controlRefProp?: string;
    /** Menu body z-index */
    zIndex?: number;
    /** Get control ref */
    elementRef?: React.ForwardedRef<HTMLButtonElement>;
}
export declare function Menu({ control, children, onClose, onOpen, opened, themeOverride, menuPosition, style, menuId, menuBodyProps, closeOnItemClick, transitionDuration, size, shadow, transition, transitionTimingFunction, menuButtonLabel, controlRefProp, zIndex, elementRef, ...others }: MenuProps): JSX.Element;
export declare namespace Menu {
    var displayName: string;
}
//# sourceMappingURL=Menu.d.ts.map