import React from 'react';
import { MantineThemeOverride } from '../types';
export interface MantineProviderProps {
    children: React.ReactNode;
    theme?: MantineThemeOverride;
}
export declare function MantineProvider({ children, theme }: MantineProviderProps): JSX.Element;
export declare namespace MantineProvider {
    var displayName: string;
}
//# sourceMappingURL=MantineProvider.d.ts.map