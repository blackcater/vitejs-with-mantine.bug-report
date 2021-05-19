import { MantineTheme, MantineSize, MantineNumberSize, MantineSizes } from "../../../mantine-theme/src";
interface ButtonStylesProps {
    color: string;
    size: MantineSize;
    radius: MantineNumberSize;
    theme: MantineTheme;
    fullWidth: boolean;
}
export declare const heights: MantineSizes;
declare const _default: (data?: ButtonStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"label" | "link" | "outline" | "light" | "filled" | "icon" | "inner" | "leftIcon" | "rightIcon" | "shared">;
export default _default;
//# sourceMappingURL=Button.styles.d.ts.map