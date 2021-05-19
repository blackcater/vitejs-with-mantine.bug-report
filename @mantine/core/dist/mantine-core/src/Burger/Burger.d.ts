import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
export declare const BURGER_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface BurgerProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
    /** Burger state: true for cross, false for burger */
    opened: boolean;
    /** Burger color from theme */
    color?: string;
    /** Predefined burger size or number to set width and height in px */
    size?: MantineNumberSize;
    /** Get element ref */
    elementRef?: React.ForwardedRef<HTMLButtonElement>;
}
export declare function Burger({ className, opened, color, size, themeOverride, elementRef, ...others }: BurgerProps): JSX.Element;
export declare namespace Burger {
    var displayName: string;
}
export {};
//# sourceMappingURL=Burger.d.ts.map