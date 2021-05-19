import { MantineTheme, MantineNumberSize } from "../../../mantine-theme/src";
interface ThemeIconStylesProps {
    theme: MantineTheme;
    color: string;
    size: MantineNumberSize;
    radius: MantineNumberSize;
    variant: 'filled' | 'light';
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (data?: ThemeIconStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"themeIcon">;
export default _default;
//# sourceMappingURL=ThemeIcon.styles.d.ts.map