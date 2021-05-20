import React from 'react';
export interface TabProps extends React.ComponentProps<'button'> {
    /** Tab control label */
    label?: React.ReactNode;
    /** Icon on the left side of label */
    icon?: React.ReactNode;
    /** Tab content */
    children?: React.ReactNode;
    /** Get tab control ref */
    elementRef?: React.ForwardedRef<HTMLButtonElement>;
}
export interface TabType {
    type: any;
    props: TabProps;
}
export declare function Tab(props: TabProps): any;
export declare namespace Tab {
    var displayName: string;
}
//# sourceMappingURL=Tab.d.ts.map