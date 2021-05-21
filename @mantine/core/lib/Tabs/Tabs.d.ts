import React from 'react';
import { DefaultProps } from '@mantine/theme';
import { GroupPosition } from '../Group/Group';
import { Tab, TabProps } from './Tab/Tab';
export { Tab };
export type { TabProps };
export interface TabsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** <Tab /> components only */
    children: React.ReactNode;
    /** index of initial tab */
    initialTab?: number;
    /** index of active tab, overrides internal state */
    active?: number;
    /** active tab color from theme */
    color?: string;
    /** true if tabs should take all available space */
    grow?: boolean;
    /** tab controls position */
    position?: GroupPosition;
    /** called when tab control is clicked with tab index */
    onTabChange?(tabIndex: number): void;
}
export declare function Tabs({ children, initialTab, themeOverride, active, position, grow, onTabChange, color, ...others }: TabsProps): JSX.Element;
export declare namespace Tabs {
    var displayName: string;
}
//# sourceMappingURL=Tabs.d.ts.map