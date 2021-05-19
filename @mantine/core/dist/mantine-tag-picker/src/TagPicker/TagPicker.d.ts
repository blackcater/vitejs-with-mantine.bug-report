import React from 'react';
import { TagsListProps } from '../TagsList/TagsList';
interface TagPickerProps extends TagsListProps {
    dropdownOpened: boolean;
    controlRef: React.RefCallback<HTMLButtonElement>;
    openDropdown(): void;
    closeDropdown(): void;
    onEventsCaptureChange(shouldCaptureEvents: boolean): void;
    noValueLabel: string;
    labelledBy?: string;
    controlId?: string;
}
export declare function TagPicker({ dropdownOpened, openDropdown, closeDropdown, controlRef, value, noValueLabel, themeOverride, transitionDuration, controlId, labelledBy, transition, transitionTimingFunction, ...others }: TagPickerProps): JSX.Element;
export {};
//# sourceMappingURL=TagPicker.d.ts.map