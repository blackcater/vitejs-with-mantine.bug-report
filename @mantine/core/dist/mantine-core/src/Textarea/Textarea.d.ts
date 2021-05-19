import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import { InputProps } from '../Input/Input';
interface TextareaProps extends DefaultProps, InputWrapperBaseProps, InputProps, React.ComponentPropsWithoutRef<'textarea'> {
    /** Id is used to bind input and label, if not passed unique id will be generated for each input */
    id?: string;
    /** If true textarea will grow with content until maxRows are reached  */
    autosize?: boolean;
    /** Defines maxRows in autosize variant, not applicable to regular variant */
    maxRows?: number;
    /** Defined minRows in autosize variant and rows in regular variant */
    minRows?: number;
    /** Style properties added to input element */
    inputStyle?: React.CSSProperties;
    /** Props passed to root element (InputWrapper component) */
    wrapperProps?: Record<string, any>;
    /** Get element ref */
    elementRef?: React.ForwardedRef<HTMLTextAreaElement>;
}
export declare function Textarea({ autosize, maxRows, minRows, label, error, description, id, className, required, themeOverride, style, wrapperProps, inputStyle, elementRef, ...others }: TextareaProps): JSX.Element;
export declare namespace Textarea {
    var displayName: string;
}
export {};
//# sourceMappingURL=Textarea.d.ts.map