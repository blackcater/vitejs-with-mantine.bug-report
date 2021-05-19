import React from 'react';
import { MantineNumberSize, MantineTheme } from "../../../mantine-theme/src";
interface HrStylesProps {
    theme: MantineTheme;
    size: MantineNumberSize;
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
declare const _default: (data?: HrStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"hr">;
export default _default;
//# sourceMappingURL=Hr.styles.d.ts.map