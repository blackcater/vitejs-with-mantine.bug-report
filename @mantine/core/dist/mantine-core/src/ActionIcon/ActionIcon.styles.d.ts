import { MantineTheme, MantineNumberSize } from "../../../mantine-theme/src";
interface ActionIconStylesProps {
    color: string;
    size: MantineNumberSize;
    radius: MantineNumberSize;
    theme: MantineTheme;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (data?: ActionIconStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"outline" | "light" | "transparent" | "filled" | "hover" | "actionIcon">;
export default _default;
//# sourceMappingURL=ActionIcon.styles.d.ts.map