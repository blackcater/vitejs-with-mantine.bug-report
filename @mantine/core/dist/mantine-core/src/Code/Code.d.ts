import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
interface CodeProps extends DefaultProps, React.ComponentPropsWithoutRef<'code'> {
    /** Code content */
    children: React.ReactNode;
    /** Code color and background from theme, defaults to gray in light theme and to dark in dark theme */
    color?: string;
    /** True for code block, false for inline code */
    block?: boolean;
}
export declare function Code({ children, themeOverride, block, className, color, ...others }: CodeProps): JSX.Element;
export declare namespace Code {
    var displayName: string;
}
export {};
//# sourceMappingURL=Code.d.ts.map