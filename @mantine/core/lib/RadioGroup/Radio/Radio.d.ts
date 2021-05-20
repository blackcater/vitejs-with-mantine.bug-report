import React from 'react';
import { DefaultProps, MantineSize } from '@mantine/theme';
export interface RadioProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
    /** Radio label */
    children: React.ReactNode;
    /** Radio value */
    value: string;
    /** Active radio color */
    color?: string;
    /** Predefined label fontSize, radio width, height and border-radius */
    size?: MantineSize;
    /** Get input ref */
    elementRef?: React.ForwardedRef<HTMLInputElement>;
}
export declare function Radio({ className, themeOverride, id, children, style, size, elementRef, title, disabled, color, ...others }: RadioProps): JSX.Element;
export declare namespace Radio {
    var displayName: string;
}
//# sourceMappingURL=Radio.d.ts.map