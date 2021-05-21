import { MantineTheme, MantineNumberSize, MantineSize } from '@mantine/theme';
interface SwitchStylesProps {
    reduceMotion: boolean;
    color: string;
    size: MantineSize;
    radius: MantineNumberSize;
    theme: MantineTheme;
}
export declare const sizes: Record<MantineSize, {
    width: number;
    height: number;
}>;
declare const _default: (args?: SwitchStylesProps) => import("jss").Classes<"label" | "switch" | "wrapper">;
export default _default;
//# sourceMappingURL=Switch.styles.d.ts.map