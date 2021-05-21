import React from 'react';
import { MantineNumberSize, MantineTheme } from '@mantine/theme';
interface DividerStylesProps {
    theme: MantineTheme;
    size: MantineNumberSize;
    margins: MantineNumberSize;
    variant: React.CSSProperties['borderTopStyle'];
    color: string;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (args?: DividerStylesProps) => import("jss").Classes<"left" | "right" | "label" | "horizontal" | "vertical" | "withLabel">;
export default _default;
//# sourceMappingURL=Divider.styles.d.ts.map