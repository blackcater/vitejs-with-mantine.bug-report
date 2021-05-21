import { MantineTheme, MantineNumberSize } from '@mantine/theme';
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface ProgressStylesProps {
    theme: MantineTheme;
    color: string;
    radius: MantineNumberSize;
    reduceMotion: boolean;
    size: MantineNumberSize;
    striped: boolean;
}
declare const _default: (args?: ProgressStylesProps) => import("jss").Classes<"progress" | "bar">;
export default _default;
//# sourceMappingURL=Progress.styles.d.ts.map