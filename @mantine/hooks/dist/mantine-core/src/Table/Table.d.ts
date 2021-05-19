import React from 'react';
import { DefaultProps } from '@mantine/theme';
export interface TableProps extends DefaultProps, React.ComponentPropsWithoutRef<'table'> {
    /** If true every odd row of table will have gray background color */
    striped?: boolean;
    /** If true row will have hover color */
    highlightOnHover?: boolean;
    /** Table caption position */
    captionSide?: 'top' | 'bottom';
}
export declare function Table({ className, children, striped, highlightOnHover, themeOverride, captionSide, ...others }: TableProps): JSX.Element;
export declare namespace Table {
    var displayName: string;
}
//# sourceMappingURL=Table.d.ts.map