import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { Paper } from '../Paper/Paper';
export { CardsGrid } from './CardsGrid/CardsGrid';
interface CardProps extends DefaultProps, React.ComponentPropsWithoutRef<typeof Paper> {
}
export declare function Card({ className, themeOverride, padding, radius, ...others }: CardProps): JSX.Element;
export declare namespace Card {
    var displayName: string;
}
//# sourceMappingURL=Card.d.ts.map