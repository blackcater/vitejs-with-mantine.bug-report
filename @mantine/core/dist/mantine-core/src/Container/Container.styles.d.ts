import { MantineTheme, MantineNumberSize } from "../../../mantine-theme/src";
interface ContainerStylesProps {
    fluid: boolean;
    size: MantineNumberSize;
    theme: MantineTheme;
    padding: MantineNumberSize;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (data?: ContainerStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"container">;
export default _default;
//# sourceMappingURL=Container.styles.d.ts.map