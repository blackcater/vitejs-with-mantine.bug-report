import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
import { ComponentPassThrough } from "../../../mantine-types/src";
export interface InputProps extends DefaultProps {
    /** Sets border color to red and aria-invalid=true on input element */
    invalid?: boolean;
    /** Adds icon on the left side of input */
    icon?: React.ReactNode;
    /** Right section of input, similar to icon but on the right */
    rightSection?: React.ReactNode;
    /** Width of right section, is used to calculate input padding-right */
    rightSectionWidth?: number;
    /** Props spread to rightSection div element */
    rightSectionProps?: Record<string, any>;
    /** Add className to input element */
    inputClassName?: string;
    /** Properties spread to root element */
    wrapperProps?: Record<string, any>;
    /** Adds style to input element */
    inputStyle?: React.CSSProperties;
    /** Sets aria-required=true on input element */
    required?: boolean;
    /** Input border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Defines input appearance */
    variant?: 'default' | 'filled' | 'unstyled';
}
export declare function Input<T extends React.ElementType = 'input', U extends HTMLElement = HTMLInputElement>({ component: Element, className, invalid, required, variant, icon, style, rightSectionWidth, rightSection, rightSectionProps, radius, inputClassName, inputStyle, themeOverride, wrapperProps, elementRef, ...others }: ComponentPassThrough<T, InputProps> & {
    /** Get element ref */
    elementRef?: React.ForwardedRef<U>;
}): JSX.Element;
export declare namespace Input {
    var displayName: string;
}
//# sourceMappingURL=Input.d.ts.map