import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
export declare const DIVIDER_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export interface DividerProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
    /** Line color from theme, defaults to gray in light color scheme and to dark in dark color scheme */
    color?: string;
    /** Line orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Sets height in horizontal orientation and with in vertical */
    size?: MantineNumberSize;
    /** Adds text after line in horizontal orientation */
    label?: React.ReactNode;
    /** Label position */
    labelPosition?: 'left' | 'center' | 'right';
    /** Props spread to Text component in label */
    labelProps?: Record<string, any>;
    /** Divider borderStyle */
    variant?: 'solid' | 'dashed' | 'dotted';
    /** Top and bottom margins for horizontal variant, left and right for vertical, xs, sm, md, lg, xl for value from theme.spacing, number for margins in px */
    margins?: MantineNumberSize;
}
export declare function Divider({ color, className, orientation, size, label, labelPosition, labelProps, themeOverride, variant, margins, ...others }: DividerProps): JSX.Element;
export declare namespace Divider {
    var displayName: string;
}
//# sourceMappingURL=Divider.d.ts.map