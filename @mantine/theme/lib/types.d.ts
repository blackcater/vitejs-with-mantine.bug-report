import type { CSSProperties } from 'react';
import type { DeepPartial, Tuple } from '@mantine/types';
export declare type MantineSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type MantineNumberSize = MantineSize | number;
declare type HeadingStyle = {
    readonly fontSize: CSSProperties['fontSize'];
    readonly lineHeight: CSSProperties['lineHeight'];
};
export declare type MantineSizes = Record<MantineSize, number>;
export interface MantineTheme {
    readonly colorScheme: 'light' | 'dark';
    readonly white: string;
    readonly black: string;
    readonly colors: Record<string, Tuple<string, 10>>;
    readonly fontFamily: CSSProperties['fontFamily'];
    readonly lineHeight: CSSProperties['lineHeight'];
    readonly transitionTimingFunction: CSSProperties['transitionTimingFunction'];
    readonly fontFamilyMonospace: CSSProperties['fontFamily'];
    readonly primaryColor: string;
    readonly fontSizes: MantineSizes;
    readonly radius: MantineSizes;
    readonly spacing: MantineSizes;
    readonly shadows: Record<MantineSize, string>;
    readonly headings: {
        readonly fontFamily: CSSProperties['fontFamily'];
        readonly fontWeight: CSSProperties['fontWeight'];
        readonly sizes: {
            readonly h1: HeadingStyle;
            readonly h2: HeadingStyle;
            readonly h3: HeadingStyle;
            readonly h4: HeadingStyle;
            readonly h5: HeadingStyle;
            readonly h6: HeadingStyle;
        };
    };
}
export interface InternalMantineTheme extends MantineTheme {
    __mantine_theme: boolean;
}
export declare type MantineThemeOverride = DeepPartial<MantineTheme>;
export interface DefaultProps {
    className?: string;
    style?: CSSProperties;
    readonly themeOverride?: MantineThemeOverride;
}
export {};
//# sourceMappingURL=types.d.ts.map