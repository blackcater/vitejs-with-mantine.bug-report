import React from 'react';
import { TextInput } from '../TextInput/TextInput';
interface PasswordInputProps extends Omit<React.ComponentPropsWithoutRef<typeof TextInput>, 'rightSection' | 'rightSectionProps' | 'rightSectionWidth'> {
    /** Title for visibility toggle button in hidden state */
    showPasswordLabel?: string;
    /** Title for visibility toggle button in visible state */
    hidePasswordLabel?: string;
    /** Focus input when toggle button is pressed */
    focusInputOnToggle?: boolean;
}
export declare function PasswordInput({ radius, disabled, hidePasswordLabel, showPasswordLabel, themeOverride, focusInputOnToggle, elementRef, ...others }: PasswordInputProps): JSX.Element;
export declare namespace PasswordInput {
    var displayName: string;
}
export {};
//# sourceMappingURL=PasswordInput.d.ts.map