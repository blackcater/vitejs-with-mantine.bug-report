import React from 'react';
import { DefaultProps } from "../../../../mantine-theme/src";
import { TabProps } from '../Tab/Tab';
interface TabControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
    active: boolean;
    elementRef(node: HTMLButtonElement): void;
    tabProps: TabProps;
    color?: string;
}
export declare function TabControl({ themeOverride, active, elementRef, tabProps, color, ...others }: TabControlProps): JSX.Element;
export declare namespace TabControl {
    var displayName: string;
}
export {};
//# sourceMappingURL=TabControl.d.ts.map