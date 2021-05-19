import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
export declare const CONTAINER_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Predefined container max-width or number for max-width in px */
    size?: MantineNumberSize;
    /** Horizontal padding defined in theme.spacing, or number value for padding in px */
    padding?: MantineNumberSize;
    /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
    fluid?: boolean;
}
export declare function Container({ className, padding, fluid, size, themeOverride, ...others }: ContainerProps): JSX.Element;
export declare namespace Container {
    var displayName: string;
}
export {};
//# sourceMappingURL=Container.d.ts.map