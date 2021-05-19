import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../../mantine-theme/src";
interface CardsGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Space between cards, predefined value from theme.spacing or number for margins in px */
    gutter?: MantineNumberSize;
    /** Amount of cards that should be in each row */
    cardsPerRow?: number;
    /** Should last row items fill all available space */
    grow?: boolean;
    /** <Card /> components only */
    children: React.ReactNode;
}
export declare function CardsGrid({ gutter, cardsPerRow, grow, children, className, themeOverride, ...others }: CardsGridProps): JSX.Element;
export declare namespace CardsGrid {
    var displayName: string;
}
export {};
//# sourceMappingURL=CardsGrid.d.ts.map