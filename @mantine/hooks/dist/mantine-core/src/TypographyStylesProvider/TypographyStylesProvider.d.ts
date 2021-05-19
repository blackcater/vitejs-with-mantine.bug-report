import React from 'react';
import { DefaultProps } from '@mantine/theme';
export interface TypographyStylesProviderProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Render any content to add Mantine typography styles */
    children: React.ReactNode;
}
export declare function TypographyStylesProvider({ className, themeOverride, ...others }: TypographyStylesProviderProps): JSX.Element;
export declare namespace TypographyStylesProvider {
    var displayName: string;
}
//# sourceMappingURL=TypographyStylesProvider.d.ts.map