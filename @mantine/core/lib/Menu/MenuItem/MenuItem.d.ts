import React from 'react';
export interface MenuItemProps extends React.ComponentPropsWithoutRef<'button'> {
    /** Item label */
    children: React.ReactNode;
    /** Icon rendered on the left side of label */
    icon?: React.ReactNode;
    /** Any color from theme.colors */
    color?: string;
    /** Any react node to render on the right side of item, for example, keyboard shortcut or badge */
    rightSection?: React.ReactNode;
}
export interface MenuItemType {
    type: any;
    props: MenuItemProps;
    ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}
export declare function MenuItem(props: MenuItemProps): any;
export declare namespace MenuItem {
    var displayName: string;
}
//# sourceMappingURL=MenuItem.d.ts.map