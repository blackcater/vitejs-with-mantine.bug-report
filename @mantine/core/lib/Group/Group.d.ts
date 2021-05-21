import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/theme';
import { GroupPosition } from './Group.styles';
export interface GroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Defines justify-content property */
    position?: GroupPosition;
    /** Defined flex-wrap property */
    noWrap?: boolean;
    /** Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow?: boolean;
    /** Space between elements */
    spacing?: MantineNumberSize;
    /** Defines flex-direction property, row for horizontal, column for vertical */
    direction?: 'row' | 'column';
}
export type { GroupPosition };
export declare function Group({ className, position, children, noWrap, grow, spacing, direction, themeOverride, ...others }: GroupProps): JSX.Element;
export declare namespace Group {
    var displayName: string;
}
//# sourceMappingURL=Group.d.ts.map