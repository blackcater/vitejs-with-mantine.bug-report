import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
export interface ActionIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
    /** Icon rendered inside button */
    children: React.ReactNode;
    /** Controls appearance */
    variant?: 'transparent' | 'hover' | 'filled' | 'outline' | 'light';
    /** Button hover, active and icon colors from theme */
    color?: string;
    /** Button border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Predefined icon size or number to set width and height in px */
    size?: MantineNumberSize;
    /** Get element ref */
    elementRef?: React.ForwardedRef<HTMLButtonElement>;
}
export declare const ACTION_ICON_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export declare function ActionIcon<T extends React.ElementType = 'button', U = HTMLButtonElement>({ className, color, children, radius, size, variant, themeOverride, elementRef, component: Element, ...others }: ComponentPassThrough<T, ActionIconProps> & {
    elementRef?: React.ForwardedRef<U>;
}): JSX.Element;
export declare namespace ActionIcon {
    var displayName: string;
}
//# sourceMappingURL=ActionIcon.d.ts.map