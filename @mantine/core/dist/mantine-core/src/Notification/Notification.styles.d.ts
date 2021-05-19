import { MantineTheme } from "../../../mantine-theme/src";
interface NotificationStyles {
    color: string;
    theme: MantineTheme;
    disallowClose: boolean;
}
declare const _default: (data?: NotificationStyles & {
    theme?: MantineTheme;
}) => import("jss").Classes<"body" | "title" | "icon" | "withIcon" | "description" | "notification" | "loader">;
export default _default;
//# sourceMappingURL=Notification.styles.d.ts.map