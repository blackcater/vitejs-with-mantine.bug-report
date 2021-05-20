import { MantineTheme, MantineNumberSize } from '@mantine/theme';
interface BurgerStylesProps {
    size: MantineNumberSize;
    theme: MantineTheme;
    color: string;
    reduceMotion: boolean;
}
export declare const sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare const _default: (data?: BurgerStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"opened" | "wrapper" | "burger">;
export default _default;
//# sourceMappingURL=Burger.styles.d.ts.map