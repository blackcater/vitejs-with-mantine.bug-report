import React from 'react';
import { DefaultProps } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import { MenuItemProps } from '../MenuItem/MenuItem';
export interface MenuButtonProps extends DefaultProps, MenuItemProps {
    children: React.ReactNode;
    hovered: boolean;
    onHover(): void;
    elementRef(node: HTMLButtonElement): void;
    component?: any;
}
export declare function MenuButton<T extends React.ElementType = 'button'>({ children, onHover, hovered, themeOverride, elementRef, icon, color, disabled, rightSection, className, component: Element, ...others }: ComponentPassThrough<T, MenuButtonProps>): JSX.Element;
export declare namespace MenuButton {
    var displayName: string;
}
//# sourceMappingURL=MenuButton.d.ts.map