import React from 'react';
import { DefaultProps, MantineSize, MantineNumberSize } from "../../../mantine-theme/src";
import { ComponentPassThrough } from "../../../mantine-types/src";
export declare const BADGE_SIZES: Record<MantineSize, number>;
interface BadgeProps extends DefaultProps {
    /** Badge color from theme */
    color?: string;
    /** Controls badge background, color and border styles */
    variant?: 'light' | 'filled' | 'outline';
    /** Defines badge height and font-size */
    size?: MantineSize;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
    fullWidth?: boolean;
    /** Section rendered on the left side of label */
    leftSection?: React.ReactNode;
    /** Section rendered on the right side of label */
    rightSection?: React.ReactNode;
}
export declare function Badge<T extends React.ElementType = 'div'>({ component: Component, className, color, variant, fullWidth, children, themeOverride, size, leftSection, rightSection, radius, ...others }: ComponentPassThrough<T, BadgeProps>): JSX.Element;
export declare namespace Badge {
    var displayName: string;
}
export {};
//# sourceMappingURL=Badge.d.ts.map