import React from 'react';
import { TextInput } from '../TextInput/TextInput';
interface NumberInputProps extends Omit<React.ComponentPropsWithoutRef<typeof TextInput>, 'rightSection' | 'rightSectionProps' | 'rightSectionWidth' | 'onChange' | 'value'> {
    /** onChange input handler for controlled variant, note that input event is not exposed */
    onChange?(value: number): void;
    /** Input value for controlled variant */
    value?: number;
    /** Maximum possible value */
    max?: number;
    /** Minimal possible value */
    min?: number;
    /** Number by which value will be incremented/decremented with controls and up/down arrows */
    step?: number;
    /** Removes increment/decrement controls */
    hideControls?: boolean;
    /** Amount of digits after the decimal point  */
    precision?: number;
    /** Default value for uncontrolled variant only */
    defaultValue?: number;
    /** Prevent value clamp on blur */
    noClampOnBlur?: boolean;
}
export declare function NumberInput({ disabled, themeOverride, elementRef, value, onChange, min, max, step, onBlur, onFocus, hideControls, radius, variant, precision, defaultValue, noClampOnBlur, ...others }: NumberInputProps): JSX.Element;
export declare namespace NumberInput {
    var displayName: string;
}
export {};
//# sourceMappingURL=NumberInput.d.ts.map