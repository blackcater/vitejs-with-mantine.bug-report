import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
import { ElementsGroupPosition } from './ElementsGroup.styles';
interface ElementsGroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Defines justify-content property */
    position?: ElementsGroupPosition;
    /** Defined flex-wrap property */
    noWrap?: boolean;
    /** Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow?: boolean;
    /** Space between elements */
    spacing?: MantineNumberSize;
}
export type { ElementsGroupPosition };
export declare function ElementsGroup({ className, position, children, noWrap, grow, spacing, themeOverride, ...others }: ElementsGroupProps): JSX.Element;
export declare namespace ElementsGroup {
    var displayName: string;
}
//# sourceMappingURL=ElementsGroup.d.ts.map