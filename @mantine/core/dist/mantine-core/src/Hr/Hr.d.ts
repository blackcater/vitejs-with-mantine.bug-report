import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
export declare const HR_SIZES: {
    xs: number;
    sm: number;
    md: number; /** Hr height */
    lg: number;
    xl: number;
};
interface HrProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
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
export {};
//# sourceMappingURL=Hr.d.ts.map