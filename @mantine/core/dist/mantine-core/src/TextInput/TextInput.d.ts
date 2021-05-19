import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { InputProps } from '../Input/Input';
import { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
interface TextInputProps extends DefaultProps, InputProps, InputWrapperBaseProps, React.ComponentPropsWithoutRef<'input'> {
    /** id is used to bind input and label, if not passed unique id will be generated for each input */
    id?: string;
    /** Adds icon on the left side of input */
    icon?: React.ReactNode;
    /** Input element type */
    type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';
    /** Props passed to root element (InputWrapper component) */
    wrapperProps?: Record<string, any>;
    /** Get element ref */
    elementRef?: React.ForwardedRef<HTMLInputElement>;
}
export declare function TextInput({ className, id, label, error, required, type, style, icon, description, themeOverride, wrapperProps, elementRef, ...others }: TextInputProps): JSX.Element;
export declare namespace TextInput {
    var displayName: string;
}
export {};
//# sourceMappingURL=TextInput.d.ts.map