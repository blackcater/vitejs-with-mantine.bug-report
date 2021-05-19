import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
interface TypographyStylesProviderProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Render any content to add Mantine typography styles */
    children: React.ReactNode;
}
export declare function TypographyStylesProvider({ className, themeOverride, ...others }: TypographyStylesProviderProps): JSX.Element;
export declare namespace TypographyStylesProvider {
    var displayName: string;
}
export {};
//# sourceMappingURL=TypographyStylesProvider.d.ts.map