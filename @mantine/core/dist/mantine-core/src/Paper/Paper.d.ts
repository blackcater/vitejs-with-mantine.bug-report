import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
interface PaperProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Predefined padding value from theme.spacing or number for padding in px */
    padding?: MantineNumberSize;
    /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
    shadow?: string;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Get element ref */
    elementRef?: React.ForwardedRef<HTMLDivElement>;
}
export declare function Paper({ className, children, padding, radius, shadow, themeOverride, elementRef, ...others }: PaperProps): JSX.Element;
export declare namespace Paper {
    var displayName: string;
}
export {};
//# sourceMappingURL=Paper.d.ts.map