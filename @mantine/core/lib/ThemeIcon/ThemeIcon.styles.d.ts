import { MantineTheme, MantineNumberSize } from '@mantine/theme';
interface ThemeIconStylesProps {
    theme: MantineTheme;
    color: string;
    size: MantineNumberSize;
    radius: MantineNumberSize;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (args?: ThemeIconStylesProps) => import("jss").Classes<"filled" | "light" | "themeIcon">;
export default _default;
//# sourceMappingURL=ThemeIcon.styles.d.ts.map