import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
import { ComponentPassThrough } from "../../../mantine-types/src";
interface ColorSwatchProps extends DefaultProps {
    /** Swatch color value in any css valid format (hex, rgb, etc.) */
    color: string;
    /** Width, height and border-radius in px */
    size?: number;
    /** Swatch border-radius predefined from theme or number for px value */
    radius?: MantineNumberSize;
}
export declare function ColorSwatch<T extends React.ElementType = 'div', U = HTMLDivElement>({ component: Element, color, size, style, radius, className, themeOverride, ...others }: ComponentPassThrough<T, ColorSwatchProps> & {
    /** Get element ref */
    elementRef?: React.ForwardedRef<U>;
}): JSX.Element;
export declare namespace ColorSwatch {
    var displayName: string;
}
export {};
//# sourceMappingURL=ColorSwatch.d.ts.map