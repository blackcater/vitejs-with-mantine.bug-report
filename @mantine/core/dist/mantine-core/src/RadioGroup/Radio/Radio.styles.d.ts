import { MantineTheme, MantineSize } from "../../../../mantine-theme/src";
interface RadioStylesProps {
    theme: MantineTheme;
    size: MantineSize;
    color: string;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (data?: RadioStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"label" | "labelDisabled" | "wrapper" | "radio">;
export default _default;
//# sourceMappingURL=Radio.styles.d.ts.map