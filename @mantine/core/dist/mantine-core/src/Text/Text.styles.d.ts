import { MantineTheme, MantineSize } from "../../../mantine-theme/src";
export declare type TextVariant = 'text' | 'link';
interface TextStylesProps {
    theme: MantineTheme;
    color: string;
    variant: TextVariant;
    size: MantineSize;
}
declare const _default: (data?: TextStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"text">;
export default _default;
//# sourceMappingURL=Text.styles.d.ts.map