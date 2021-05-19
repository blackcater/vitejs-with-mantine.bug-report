import { MantineTheme, MantineSize, MantineNumberSize } from "../../../mantine-theme/src";
interface BadgeStylesProps {
    color: string;
    theme: MantineTheme;
    size: MantineSize;
    radius: MantineNumberSize;
    fullWidth: boolean;
}
export declare const heights: Record<MantineSize, number>;
declare const _default: (data?: BadgeStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"outline" | "light" | "filled" | "rightSection" | "inner" | "leftSection" | "badge">;
export default _default;
//# sourceMappingURL=Badge.styles.d.ts.map