import React from 'react';
import { DefaultProps, MantineNumberSize, MantineSize } from "../../../mantine-theme/src";
export declare const SWITCH_SIZES: Record<MantineSize, {
    width: number;
    height: number;
}>;
interface SwitchProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
    /** Id is used to bind input and label, if not passed unique id will be generated for each input */
    id?: string;
    /** Switch label */
    label?: React.ReactNode;
    /** Switch checked state color from theme, defaults to theme.primaryColor */
    color?: string;
    /** Predefined size value */
    size?: MantineSize;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Style properties added to input element */
    inputStyle?: React.CSSProperties;
    /** Class name added to input element */
    inputClassName?: string;
    /** Props spread to wrapper element */
    wrapperProps?: Record<string, any>;
    /** Get element ref */
    elementRef?: React.ForwardedRef<HTMLInputElement>;
}
export declare function Switch({ className, color, label, id, style, size, radius, themeOverride, wrapperProps, inputStyle, inputClassName, elementRef, ...others }: SwitchProps): JSX.Element;
export declare namespace Switch {
    var displayName: string;
}
export {};
//# sourceMappingURL=Switch.d.ts.map