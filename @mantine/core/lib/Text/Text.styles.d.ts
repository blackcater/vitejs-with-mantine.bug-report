import { MantineTheme, MantineSize } from '@mantine/theme';
export declare type TextVariant = 'text' | 'link';
interface TextStylesProps {
    theme: MantineTheme;
    color: string;
    variant: TextVariant;
    size: MantineSize;
}
declare const _default: (args?: TextStylesProps) => import("jss").Classes<"text">;
export default _default;
//# sourceMappingURL=Text.styles.d.ts.map