import React from 'react';
import { DefaultProps, MantineSize, MantineNumberSize } from "../../../mantine-theme/src";
import { ComponentPassThrough } from "../../../mantine-types/src";
export declare const BUTTON_SIZES: import("../../../mantine-theme/src").MantineSizes;
interface ButtonBaseProps extends DefaultProps {
    /** Predefined button size */
    size?: MantineSize;
    /** Button type attribute */
    type?: 'submit' | 'button' | 'reset';
    /** Button color from theme */
    color?: string;
    /** Adds icon before button label  */
    leftIcon?: React.ReactNode;
    /** Adds icon after button label  */
    rightIcon?: React.ReactNode;
    /** Sets button width to 100% of parent element */
    fullWidth?: boolean;
    /** Button border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Controls button appearance */
    variant?: 'link' | 'filled' | 'outline' | 'light';
}
export declare function Button<T extends React.ElementType = 'button', U extends HTMLElement = HTMLButtonElement>({ className, size, color, type, disabled, children, leftIcon, rightIcon, fullWidth, variant, radius, component: Element, elementRef, themeOverride, ...others }: ComponentPassThrough<T, ButtonBaseProps> & {
    /** Get root element ref */
    elementRef?: React.ForwardedRef<U>;
}): JSX.Element;
export declare namespace Button {
    var displayName: string;
}
export {};
//# sourceMappingURL=Button.d.ts.map