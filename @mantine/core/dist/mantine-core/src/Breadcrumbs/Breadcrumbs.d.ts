import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
interface BreadcrumbsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Separator between breadcrumbs */
    separator?: React.ReactNode;
    /** React nodes that should be separated */
    children: React.ReactNode;
}
export declare function Breadcrumbs({ className, themeOverride, children, separator, ...others }: BreadcrumbsProps): JSX.Element;
export declare namespace Breadcrumbs {
    var displayName: string;
}
export {};
//# sourceMappingURL=Breadcrumbs.d.ts.map