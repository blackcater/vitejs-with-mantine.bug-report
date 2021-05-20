import { MantineTheme, MantineNumberSize } from '@mantine/theme';
export declare type ElementsGroupPosition = 'right' | 'center' | 'left' | 'apart';
interface ElementsGroupStylesProps {
    position: ElementsGroupPosition;
    noWrap: boolean;
    grow: boolean;
    spacing: MantineNumberSize;
    theme: MantineTheme;
}
declare const _default: (data?: ElementsGroupStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"child" | "elementsGroup">;
export default _default;
//# sourceMappingURL=ElementsGroup.styles.d.ts.map