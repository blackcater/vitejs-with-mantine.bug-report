/// <reference types="react" />
import { TransitionStatus } from 'react-transition-group';
import { NotificationsProviderPositioning } from '../../types';
interface NotificationStateStylesProps {
    state: TransitionStatus;
    maxHeight: number;
    positioning: NotificationsProviderPositioning;
    transitionDuration: number;
}
export default function getNotificationStateStyles({ state, maxHeight, positioning, transitionDuration, }: NotificationStateStylesProps): React.CSSProperties;
export {};
//# sourceMappingURL=get-notification-state-styles.d.ts.map