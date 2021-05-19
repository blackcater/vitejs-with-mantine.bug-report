import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
export declare const PROGRESS_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface ProgressProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Percent of filled bar (0-100) */
    value: number;
    /** Progress color from theme */
    color?: string;
    /** Predefined progress height or number for height in px */
    size?: MantineNumberSize;
    /** Predefined progress radius from theme.radius or number for height in px */
    radius?: MantineNumberSize;
    /** Adds stripes */
    striped?: boolean;
}
export declare function Progress({ className, value, color, size, radius, striped, themeOverride, 'aria-label': ariaLabel, ...others }: ProgressProps): JSX.Element;
export declare namespace Progress {
    var displayName: string;
}
export {};
//# sourceMappingURL=Progress.d.ts.map