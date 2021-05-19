import { MantineTheme } from "../../../mantine-theme/src";
declare type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface TitleStylesProps {
    theme: MantineTheme;
    element: HeadingElement;
}
declare const _default: (data?: TitleStylesProps & {
    theme?: MantineTheme;
}) => import("jss").Classes<"title">;
export default _default;
//# sourceMappingURL=Title.styles.d.ts.map