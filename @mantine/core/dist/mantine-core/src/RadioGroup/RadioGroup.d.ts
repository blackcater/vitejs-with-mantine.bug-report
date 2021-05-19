import React from 'react';
import { DefaultProps, MantineNumberSize, MantineSize } from "../../../mantine-theme/src";
import { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import { Radio } from './Radio/Radio';
export declare const RADIO_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export { Radio };
interface RadioGroupProps extends DefaultProps, InputWrapperBaseProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
    /** <Radio /> components only */
    children: React.ReactNode;
    /** Input name attribute, used to bind radios in one group, by default generated randomly with use-id hook */
    name?: string;
    /** Value of currently selected radio */
    value?: string;
    /** Called when value changes */
    onChange?(value: string): void;
    /** Initial value for uncontrolled component */
    defaultValue?: string;
    /** Radios position */
    variant?: 'horizontal' | 'vertical';
    /** Spacing between radios in horizontal variant */
    spacing?: MantineNumberSize;
    /** Active radio color */
    color?: string;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: MantineSize;
}
export declare function RadioGroup({ className, themeOverride, name, children, value, defaultValue, onChange, variant, spacing, color, size, ...others }: RadioGroupProps): JSX.Element;
export declare namespace RadioGroup {
    var displayName: string;
}
//# sourceMappingURL=RadioGroup.d.ts.map