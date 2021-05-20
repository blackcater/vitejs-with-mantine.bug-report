import React from 'react';
export interface MantineTransitionStyles {
    common?: React.CSSProperties;
    in: React.CSSProperties;
    out: React.CSSProperties;
    transitionProperty: React.CSSProperties['transitionProperty'];
}
export declare type MantineTransitionName = 'fade' | 'skew-up' | 'skew-down' | 'rotate-right' | 'rotate-left' | 'slide-down' | 'slide-up' | 'slide-right' | 'slide-left';
export declare type MantineTransition = MantineTransitionName | MantineTransitionStyles;
export declare const transitions: Record<MantineTransitionName, MantineTransitionStyles>;
//# sourceMappingURL=transitions.d.ts.map