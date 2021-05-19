import React from 'react';
import { DefaultProps } from '@mantine/theme';
import { MenuItemProps } from '../MenuItem/MenuItem';
export interface MenuButtonProps extends DefaultProps, MenuItemProps {
    children: React.ReactNode;
    hovered: boolean;
    onHover(): void;
    elementRef(node: HTMLButtonElement): void;
}
export declare function MenuButton({ children, onHover, hovered, themeOverride, elementRef, icon, color, disabled, rightSection, className, ...others }: MenuButtonProps): JSX.Element;
export declare namespace MenuButton {
    var displayName: string;
}
//# sourceMappingURL=MenuButton.d.ts.map