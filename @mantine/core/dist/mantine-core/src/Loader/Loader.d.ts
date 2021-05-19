import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
export declare const LOADER_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export interface LoaderProps extends DefaultProps, React.ComponentPropsWithoutRef<'svg'> {
    /** Defines width of loader */
    size?: MantineNumberSize;
    /** Loader color from theme */
    color?: string;
}
export declare function Loader({ size, color, themeOverride, ...others }: LoaderProps): JSX.Element;
export declare namespace Loader {
    var displayName: string;
}
//# sourceMappingURL=Loader.d.ts.map