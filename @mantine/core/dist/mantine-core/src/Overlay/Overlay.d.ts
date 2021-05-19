import React from 'react';
import { ComponentPassThrough } from "../../../mantine-types/src";
interface OverlayProps {
    /** Overlay opacity */
    opacity?: React.CSSProperties['opacity'];
    /** Overlay background-color */
    color?: React.CSSProperties['backgroundColor'];
    /** Overlay z-index */
    zIndex?: React.CSSProperties['zIndex'];
}
export declare function Overlay<T extends React.ElementType = 'div'>({ opacity, color, zIndex, style, component: Element, ...others }: ComponentPassThrough<T, OverlayProps>): JSX.Element;
export declare namespace Overlay {
    var displayName: string;
}
export {};
//# sourceMappingURL=Overlay.d.ts.map