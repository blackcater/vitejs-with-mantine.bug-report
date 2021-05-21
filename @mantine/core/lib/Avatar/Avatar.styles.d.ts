import { MantineTheme, MantineNumberSize } from '@mantine/theme';
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface AvatarStylesProps {
    size: MantineNumberSize;
    radius: MantineNumberSize;
    theme: MantineTheme;
    color: string;
}
declare const _default: (args?: AvatarStylesProps) => import("jss").Classes<"image" | "placeholder" | "avatar" | "placeholderIcon">;
export default _default;
//# sourceMappingURL=Avatar.styles.d.ts.map