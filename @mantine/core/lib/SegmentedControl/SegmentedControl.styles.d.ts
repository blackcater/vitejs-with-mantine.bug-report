import { MantineTheme, MantineNumberSize, MantineSize } from '@mantine/theme';
export declare const WRAPPER_PADDING = 4;
interface SegmentedControlStyles {
    theme: MantineTheme;
    fullWidth: boolean;
    color: string;
    radius: MantineNumberSize;
    reduceMotion: boolean;
    transitionDuration: number;
    transitionTimingFunction: string;
    size: MantineSize;
}
declare const _default: (args?: SegmentedControlStyles) => import("jss").Classes<"input" | "label" | "wrapper" | "active" | "control" | "controlActive" | "labelActive">;
export default _default;
//# sourceMappingURL=SegmentedControl.styles.d.ts.map