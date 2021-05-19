import React from 'react';
import { DefaultProps, MantineSize } from "../../../mantine-theme/src";
import { ComponentPassThrough } from "../../../mantine-types/src";
export interface TextProps extends DefaultProps {
    /** Text itself */
    children?: React.ReactNode;
    /** Predefined font-size from theme.fontSizes */
    size?: MantineSize;
    /** Text color from theme */
    color?: string;
    /** Sets font-weight css property */
    weight?: React.CSSProperties['fontWeight'];
    /** Sets text-transform css property */
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    /** Sets text-align css property */
    align?: 'left' | 'center' | 'right';
    /** Link or text variant */
    variant?: 'text' | 'link';
}
export declare function Text<T extends React.ElementType = 'div', U = HTMLDivElement>({ className, component, children, size, weight, transform, style, color, align, variant, themeOverride, elementRef, ...others }: ComponentPassThrough<T, TextProps> & {
    elementRef?: React.ForwardedRef<U>;
}): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare namespace Text {
    var displayName: string;
}
export declare function Anchor<T extends React.ElementType = 'a', U = HTMLAnchorElement>({ component, ...others }: ComponentPassThrough<T, TextProps> & {
    elementRef?: React.ForwardedRef<U>;
}): JSX.Element;
export declare namespace Anchor {
    var displayName: string;
}
//# sourceMappingURL=Text.d.ts.map