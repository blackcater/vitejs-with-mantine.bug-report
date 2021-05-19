import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
interface AlertProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    /** Optional alert title */
    title?: React.ReactNode;
    /** Alert message */
    children: React.ReactNode;
    /** Alert title and line colors from theme */
    color?: string;
    /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
    shadow?: string;
}
export declare function Alert({ className, title, children, themeOverride, color, shadow, ...others }: AlertProps): JSX.Element;
export declare namespace Alert {
    var displayName: string;
}
export {};
//# sourceMappingURL=Alert.d.ts.map