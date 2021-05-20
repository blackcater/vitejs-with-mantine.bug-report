import React, { ReactPortal } from 'react';
export interface PortalProps {
    /** Portal children, for example, modal or popover */
    children: React.ReactNode;
    /** Root element z-index property */
    zIndex?: number;
    /** Element where portal should be rendered, by default new div element is created and appended to document.body */
    target?: HTMLDivElement;
    /** Root element className */
    className?: string;
}
export declare function Portal({ children, zIndex, target, className }: PortalProps): ReactPortal;
export declare namespace Portal {
    var displayName: string;
}
//# sourceMappingURL=Portal.d.ts.map