import React from 'react';
import { DefaultProps } from '@mantine/theme';
export interface BreadcrumbsProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Separator between breadcrumbs */
    separator?: React.ReactNode;
    /** React nodes that should be separated */
    children: React.ReactNode;
}
export declare function Breadcrumbs({ className, themeOverride, children, separator, ...others }: BreadcrumbsProps): JSX.Element;
export declare namespace Breadcrumbs {
    var displayName: string;
}
//# sourceMappingURL=Breadcrumbs.d.ts.map