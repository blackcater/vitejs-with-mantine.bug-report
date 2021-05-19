import React from 'react';
import { DefaultProps, MantineTransition } from "../../mantine-core/src";
import { TagPickerTag, TagPickerColor } from './types';
interface TagPickerProps extends DefaultProps {
    /** Options which should be rendered in the dropdown list */
    data: TagPickerTag[];
    /** Currently selected tag */
    value?: TagPickerTag;
    /** Called when user selects tag */
    onChange(value: TagPickerTag): void;
    /** Possible colors which tag can have */
    colors?: TagPickerColor[];
    /** Description displayed after search input */
    description?: string;
    /** Label for create control */
    createLabel?: string;
    /** Label for delete control */
    deleteLabel?: string;
    /** aria-label for save control */
    saveLabel?: string;
    /** aria-label for tag name edit field */
    tagNameEditLabel?: string;
    /** aria-label for edit tag control */
    editTagLabel?: string;
    /** aria-labelledby attribute for button control */
    labelledBy?: string;
    /** Set id on control, use it to connect with label */
    controlId?: string;
    /** Tag with this value is displayed when value prop is null */
    noValueLabel: string;
    /** Search field placeholder */
    searchPlaceholder?: string;
    /** Enable user to create new tags */
    enableCreate?: boolean;
    /** Enable user to update existing tags */
    enableUpdate?: boolean;
    /** Enable user to delete existing tags */
    enableDelete?: boolean;
    /** Enable user to change tag colors */
    enableColorChange?: boolean;
    /** Mount/unmount transitions for all dropdowns */
    transition?: MantineTransition;
    /** Mount/unmount transitions transitionTimingFunction, defaults to theme.transitionTimingFunction */
    transitionTimingFunction?: string;
    /** Mount/unmount transition duration for all dropdowns */
    transitionDuration?: number;
    /** Called when dropdown opens */
    onDropdownOpen?(): void;
    /** Called when dropdown closes */
    onDropdownClose?(): void;
    /** Called when search changes */
    onSearchChange?(query: string): void;
    /** Get control ref */
    controlRef?: React.RefCallback<HTMLButtonElement>;
    /** Called when user creates new tag */
    onTagCreate?(values: Omit<TagPickerTag, 'id'>): TagPickerTag;
    /** Called when user deletes tag */
    onTagDelete?(id: string): void;
    /** Called when user updates tag */
    onTagUpdate?(id: string, values: Omit<TagPickerTag, 'id'>): void;
}
export declare function TagPickerContainer({ transitionDuration, ...props }: TagPickerProps): JSX.Element;
export {};
//# sourceMappingURL=TagPickerContainer.d.ts.map