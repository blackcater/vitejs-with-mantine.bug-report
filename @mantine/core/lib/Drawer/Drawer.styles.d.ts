import { MantineTheme } from '@mantine/theme';
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: string;
};
export declare type Position = 'top' | 'bottom' | 'left' | 'right';
interface DrawerStylesProps {
    theme: MantineTheme;
    position: Position;
    size: number | string;
}
declare const _default: (args?: DrawerStylesProps) => import("jss").Classes<"wrapper" | "noOverlay" | "drawer">;
export default _default;
//# sourceMappingURL=Drawer.styles.d.ts.map