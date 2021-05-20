import React from 'react';
import { DefaultProps } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import { TextProps } from '../Text/Text';
export declare function highlighter(value: string, highlightPart: string): {
    start: string;
    highlighted: string;
    end: string;
};
export interface HighlightProps extends DefaultProps, Omit<TextProps, 'children'> {
    /** String part to highligh in children */
    highlight: string;
    /** Color from theme that is used for highlighting */
    highlightColor?: string;
    /** Full string part of which will be highlighted */
    children: string;
}
export declare function Highlight<T extends React.ElementType = 'div'>({ children, highlight, component, themeOverride, highlightColor, ...others }: ComponentPassThrough<T, HighlightProps>): JSX.Element;
export declare namespace Highlight {
    var displayName: string;
}
//# sourceMappingURL=Highlight.d.ts.map