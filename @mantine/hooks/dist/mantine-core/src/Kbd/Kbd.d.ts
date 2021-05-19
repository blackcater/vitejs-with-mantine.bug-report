import React from 'react';
import { DefaultProps } from '@mantine/theme';
export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
    /** Keyboard key */
    children: React.ReactNode;
}
export declare function Kbd({ className, children, themeOverride, ...others }: KbdProps): JSX.Element;
export declare namespace Kbd {
    var displayName: string;
}
//# sourceMappingURL=Kbd.d.ts.map