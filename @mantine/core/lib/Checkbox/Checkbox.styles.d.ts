import { MantineTheme, MantineSize } from '@mantine/theme';
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
interface CheckboxStylesProps {
    theme: MantineTheme;
    size: MantineSize;
    color: string;
}
declare const _default: (data?: CheckboxStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"icon" | "checkbox" | "label" | "wrapper" | "checkboxWrapper">;
export default _default;
//# sourceMappingURL=Checkbox.styles.d.ts.map