import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
export declare const HR_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export interface HrProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
    /** Hr borderStyle */
    variant?: 'solid' | 'dashed' | 'dotted';
    /** Hr height */
    size?: MantineNumberSize;
    /** Hr color */
    color?: string;
}
export declare function Hr({ size, className, variant, themeOverride, color, ...others }: HrProps): JSX.Element;
export declare namespace Hr {
    var displayName: string;
}
//# sourceMappingURL=Hr.d.ts.map