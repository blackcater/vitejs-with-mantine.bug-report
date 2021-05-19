import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
export declare const AVATAR_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface AvatarProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Image url */
    src?: string;
    /** Image alt text or title for placeholder variant */
    alt?: string;
    /** Avatar width and height */
    size?: MantineNumberSize;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Color from theme used for letter and icon placeholders */
    color?: string;
}
export declare function Avatar({ className, size, src, alt, radius, children, color, themeOverride, ...others }: AvatarProps): JSX.Element;
export declare namespace Avatar {
    var displayName: string;
}
export {};
//# sourceMappingURL=Avatar.d.ts.map