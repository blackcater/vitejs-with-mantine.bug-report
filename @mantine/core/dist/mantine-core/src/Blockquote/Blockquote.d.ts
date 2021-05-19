import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
interface BlockquoteProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'blockquote'>, 'cite'> {
    /** Border and icon color from theme */
    color?: string;
    /** Icon, defaults to quote icon */
    icon?: React.ReactNode;
    /** Describe a reference to a cited quote */
    cite?: React.ReactNode;
}
export declare function Blockquote({ className, color, icon, cite, children, themeOverride, ...others }: BlockquoteProps): JSX.Element;
export declare namespace Blockquote {
    var displayName: string;
}
export {};
//# sourceMappingURL=Blockquote.d.ts.map