import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
export interface InputWrapperBaseProps {
    /** Input label, displayed before input */
    label?: React.ReactNode;
    /** Input description, displayed after label */
    description?: React.ReactNode;
    /** Displays error message after input */
    error?: React.ReactNode;
    /** Adds red asterisk on the right side of label */
    required?: boolean;
}
interface InputWrapperProps extends DefaultProps, InputWrapperBaseProps, React.ComponentPropsWithoutRef<'div'> {
    /** Input that should be wrapped */
    children: React.ReactNode;
    /** htmlFor label prop */
    id?: string;
    /** Render label as label with htmlFor or as div */
    labelElement?: 'label' | 'div';
}
export declare function InputWrapper({ className, label, children, required, id, error, description, themeOverride, labelElement, ...others }: InputWrapperProps): JSX.Element;
export declare namespace InputWrapper {
    var displayName: string;
}
export {};
//# sourceMappingURL=InputWrapper.d.ts.map