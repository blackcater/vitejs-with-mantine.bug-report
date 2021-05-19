import React from 'react';
import { InputProps, InputWrapperBaseProps } from "../../../mantine-core/src";
interface ColorInputProps extends InputProps, InputWrapperBaseProps, Omit<React.ComponentPropsWithoutRef<'button'>, 'value' | 'onChange'> {
    value: string;
    onChange(color: string): void;
    data: string[];
}
export declare function ColorInput({ id, value, placeholder, onChange, data, required, description, label, error, ...others }: ColorInputProps): JSX.Element;
export {};
//# sourceMappingURL=ColorInput.d.ts.map