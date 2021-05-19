import React from 'react';
import { Textarea } from "../../../mantine-core/src";
interface JsonInputProps extends Omit<React.ComponentPropsWithoutRef<typeof Textarea>, 'error' | 'onChange'> {
    value: string;
    onChange(value: string): void;
}
export declare function JsonInput({ value, onChange, onBlur, onFocus, inputStyle, ...others }: JsonInputProps): JSX.Element;
export {};
//# sourceMappingURL=JsonInput.d.ts.map