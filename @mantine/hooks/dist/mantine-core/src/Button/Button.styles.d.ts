import { MantineTheme, MantineSize, MantineNumberSize, MantineSizes } from '@mantine/theme';
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
}) => import("jss").Classes<"light" | "label" | "link" | "outline" | "filled" | "icon" | "inner" | "leftIcon" | "rightIcon" | "shared">;
export default _default;
//# sourceMappingURL=Button.styles.d.ts.map