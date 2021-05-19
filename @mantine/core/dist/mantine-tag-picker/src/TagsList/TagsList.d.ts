import { MantineThemeOverride, MantineTransition } from "../../../mantine-core/src";
import { TagPickerColor, TagPickerTag } from '../types';
export interface TagsListProps {
    description?: string;
    searchPlaceholder?: string;
    searchQuery: string;
    hovered: number;
    value: TagPickerTag;
    data: TagPickerTag[];
    canCreate: boolean;
    createLabel?: string;
    tagNameEditLabel?: string;
    saveLabel?: string;
    deleteLabel?: string;
    editTagLabel?: string;
    colors: TagPickerColor[];
    createColor: string;
    onSearchChange(query: string): void;
    onCreate(): void;
    onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
    onTagDelete(id: string): void;
    onChange(value: TagPickerTag): void;
    onHoveredChange(index: number): void;
    onEventsCaptureChange(shouldCaptureEvents: boolean): void;
    onArrowsCaptureChange(shouldCaptureArrowEvents: boolean): void;
    themeOverride?: MantineThemeOverride;
    enableCreate?: boolean;
    enableUpdate?: boolean;
    enableDelete?: boolean;
    enableColorChange?: boolean;
    transitionDuration?: number;
    transition?: MantineTransition;
    transitionTimingFunction?: string;
}
export declare function TagsList({ searchQuery, searchPlaceholder, description, hovered, data, value, canCreate, createLabel, deleteLabel, saveLabel, editTagLabel, tagNameEditLabel, colors, createColor, onSearchChange, onCreate, onTagDelete, onTagUpdate, onChange, onHoveredChange, onEventsCaptureChange, onArrowsCaptureChange, themeOverride, enableCreate, enableUpdate, enableDelete, enableColorChange, transitionDuration, transition, transitionTimingFunction, }: TagsListProps): JSX.Element;
export declare namespace TagsList {
    var displayName: string;
}
//# sourceMappingURL=TagsList.d.ts.map