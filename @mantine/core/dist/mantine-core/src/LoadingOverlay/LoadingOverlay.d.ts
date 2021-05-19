import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
import { LoaderProps } from '../Loader/Loader';
interface LoadingOverlayProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Loader component props */
    loaderProps?: LoaderProps;
    /** Sets overlay opacity */
    overlayOpacity?: number;
    /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
    overlayColor?: string;
    /** Loading overlay z-index */
    zIndex?: number;
    /** If visible overlay will take 100% width and height of first parent with relative position and overlay all of its content */
    visible: boolean;
    /** Appear and disappear animation duration */
    transitionDuration?: number;
}
export declare function LoadingOverlay({ className, visible, loaderProps, overlayOpacity, overlayColor, themeOverride, transitionDuration, zIndex, style, ...others }: LoadingOverlayProps): JSX.Element;
export declare namespace LoadingOverlay {
    var displayName: string;
}
export {};
//# sourceMappingURL=LoadingOverlay.d.ts.map