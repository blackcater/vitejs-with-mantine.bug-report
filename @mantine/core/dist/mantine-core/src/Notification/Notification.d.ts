import React from 'react';
import { DefaultProps } from "../../../mantine-theme/src";
interface NotificationProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    /** Called when close button is clicked */
    onClose(): void;
    /** Notification line or icon color */
    color?: string;
    /** Notification icon, replaces color line */
    icon?: React.ReactNode;
    /** Notification title, displayed before body */
    title?: React.ReactNode;
    /** Notification body, place main text here */
    children?: React.ReactNode;
    /** Replaces colored line or icon with Loader component */
    loading?: boolean;
    /** Removes close button */
    disallowClose?: boolean;
    /** Props spread to close button */
    closeButtonProps?: Record<string, any>;
}
export declare function Notification({ className, color, loading, disallowClose, title, icon, children, onClose, closeButtonProps, themeOverride, ...others }: NotificationProps): JSX.Element;
export declare namespace Notification {
    var displayName: string;
}
export {};
//# sourceMappingURL=Notification.d.ts.map