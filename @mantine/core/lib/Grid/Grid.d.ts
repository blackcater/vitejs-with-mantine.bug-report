import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
import { Col, ColProps } from './Col';
export { Col };
export type { ColProps };
export interface GridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** <Col /> components only */
    children: React.ReactNode;
    /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
    gutter?: MantineNumberSize;
    /** Should columns in the last row take 100% of grid width */
    grow?: boolean;
    /** Set grid justify-content property */
    justify?: React.CSSProperties['justifyContent'];
    /** Set grid align-content property */
    align?: React.CSSProperties['alignContent'];
    /** Amount of columns in each row */
    columns?: number;
}
export declare function Grid({ themeOverride, gutter, children, grow, justify, align, style, columns, ...others }: GridProps): JSX.Element;
export declare namespace Grid {
    var displayName: string;
}
//# sourceMappingURL=Grid.d.ts.map