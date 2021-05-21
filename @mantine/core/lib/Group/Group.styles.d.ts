import { MantineTheme, MantineNumberSize } from '@mantine/theme';
export declare type GroupPosition = 'right' | 'center' | 'left' | 'apart';
interface GroupStylesProps {
    position: GroupPosition;
    noWrap: boolean;
    grow: boolean;
    spacing: MantineNumberSize;
    direction: 'row' | 'column';
    theme: MantineTheme;
}
declare const _default: (args?: GroupStylesProps) => import("jss").Classes<"child" | "group">;
export default _default;
//# sourceMappingURL=Group.styles.d.ts.map