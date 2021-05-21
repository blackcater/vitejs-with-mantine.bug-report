import { MantineTheme, MantineSize, MantineNumberSize } from '@mantine/theme';
interface BadgeStylesProps {
    color: string;
    theme: MantineTheme;
    size: MantineSize;
    radius: MantineNumberSize;
    fullWidth: boolean;
}
export declare const heights: Record<MantineSize, number>;
declare const _default: (args?: BadgeStylesProps) => import("jss").Classes<"outline" | "filled" | "light" | "leftSection" | "rightSection" | "inner" | "badge">;
export default _default;
//# sourceMappingURL=Badge.styles.d.ts.map