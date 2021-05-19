import React from 'react';
import { DefaultProps } from '@mantine/theme';
import { TabProps } from '../Tab/Tab';
export interface TabControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
    active: boolean;
    elementRef(node: HTMLButtonElement): void;
    tabProps: TabProps;
    color?: string;
}
export declare function TabControl({ themeOverride, active, elementRef, tabProps, color, className, ...others }: TabControlProps): JSX.Element;
export declare namespace TabControl {
    var displayName: string;
}
//# sourceMappingURL=TabControl.d.ts.map