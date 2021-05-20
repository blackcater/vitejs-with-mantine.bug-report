import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
export declare const THEME_ICON_SIZES: {
    xs: number;
    sm: number;
    md: number;
    /** Predefined width and height or number for width and height in px */
    lg: number;
    xl: number;
};
export interface ThemeIconProps extends DefaultProps, React.ComponentProps<'div'> {
    /** Icon */
    children: React.ReactNode;
    /** Predefined width and height or number for width and height in px */
    size?: MantineNumberSize;
    /** Predefined border-radius from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Icon color from theme */
    color?: string;
    /** Controls appearance */
    variant?: 'filled' | 'light';
}
export declare function ThemeIcon({ className, size, radius, variant, color, children, themeOverride, ...others }: ThemeIconProps): JSX.Element;
export declare namespace ThemeIcon {
    var displayName: string;
}
//# sourceMappingURL=ThemeIcon.d.ts.map