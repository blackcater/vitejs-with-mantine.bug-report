import { MantineTheme } from '@mantine/theme';
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: string;
};
interface ModalStylesProps {
    theme: MantineTheme;
    overflow: 'outside' | 'inside';
    size: string | number;
}
declare const _default: (data?: ModalStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"body" | "header" | "title" | "inner" | "wrapper" | "modal">;
export default _default;
//# sourceMappingURL=Modal.styles.d.ts.map