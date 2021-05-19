import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import { InputProps } from '../Input/Input';
interface SelectItem {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps extends DefaultProps, InputWrapperBaseProps, Omit<InputProps, 'rightSection' | 'rightSectionWidth' | 'rightSectionProps'>, React.ComponentPropsWithoutRef<'select'> {
    /** id is used to bind input and label, if not passed unique id will be generated for each input */
    id?: string;
    /** Adds hidden option to select and sets it as selected if value is not present */
    placeholder?: string;
    /** Data used to render options */
    data: SelectItem[];
    /** Style properties added to select element */
    inputStyle?: React.CSSProperties;
    /** Props passed to root element (InputWrapper component) */
    wrapperProps?: Record<string, any>;
    /** Get element ref */
    elementRef?: React.ForwardedRef<HTMLSelectElement>;
}
export declare function Select({ id, className, required, label, error, style, data, placeholder, themeOverride, wrapperProps, inputStyle, description, elementRef, ...others }: SelectProps): JSX.Element;
export declare namespace Select {
    var displayName: string;
}
export {};
//# sourceMappingURL=Select.d.ts.map