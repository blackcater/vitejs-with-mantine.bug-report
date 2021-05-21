import React from 'react';
import { DefaultProps, MantineNumberSize, MantineSize } from '@mantine/theme';
interface SegmentedControlItem {
    value: string;
    label: React.ReactNode;
}
export interface SegmentedControlProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
    /** Data based on which controls are rendered */
    data: SegmentedControlItem[];
    /** Current selected value */
    value: string;
    /** Called when value changes */
    onChange(value: string): void;
    /** Name of the radio group, default to random id */
    name?: string;
    /** True if component should have 100% width */
    fullWidth?: boolean;
    /** Active control color from theme, defaults to white in light color scheme and theme.colors.dark[9] in dark */
    color?: string;
    /** Controls font-size, paddings and height */
    size?: MantineSize;
    /** Border-radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Transition duration in ms, set to 0 to turn off transitions */
    transitionDuration?: number;
    /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
}
export declare function SegmentedControl({ className, themeOverride, data, name, value, onChange, color, fullWidth, radius, size, transitionDuration, transitionTimingFunction, ...others }: SegmentedControlProps): JSX.Element;
export declare namespace SegmentedControl {
    var displayName: string;
}
export {};
//# sourceMappingURL=SegmentedControl.d.ts.map