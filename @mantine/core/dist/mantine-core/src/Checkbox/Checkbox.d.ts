import React from 'react';
import { DefaultProps, MantineSize } from "../../../mantine-theme/src";
export declare const CHECKBOX_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface CheckboxProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
    /** Checkbox checked and intermediate state color from theme, defaults to theme.primaryColor */
    color?: string;
    /** Predefined label font-size and checkbox width and height in px */
    size?: MantineSize;
    /** Checkbox label */
    label?: React.ReactNode;
    /** Intermediate state of checkbox, overwrites checked */
    intermediate?: boolean;
    /** Style properties added to input element */
    inputStyle?: React.CSSProperties;
    /** Class name added to input element */
    inputClassName?: string;
    /** Props spread to wrapper element */
    wrapperProps?: Record<string, any>;
    /** Id is used to bind input and label, if not passed unique id will be generated for each input */
    id?: string;
    /** Get input ref */
    elementRef?: React.ForwardedRef<HTMLInputElement>;
}
export declare function Checkbox({ className, checked, onChange, color, themeOverride, label, disabled, intermediate, id, size, wrapperProps, style, inputStyle, inputClassName, elementRef, ...others }: CheckboxProps): JSX.Element;
export declare namespace Checkbox {
    var displayName: string;
}
export {};
//# sourceMappingURL=Checkbox.d.ts.map