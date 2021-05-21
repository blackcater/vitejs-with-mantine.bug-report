import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
export interface ColProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    span: number;
    columns?: number;
    offset?: number;
    gutter?: MantineNumberSize;
    grow?: boolean;
}
export declare function isValidSpan(span: number): boolean;
export declare function Col({ themeOverride, children, span, gutter, offset, grow, style, columns, ...others }: ColProps): JSX.Element;
export declare namespace Col {
    var displayName: string;
}
//# sourceMappingURL=Col.d.ts.map