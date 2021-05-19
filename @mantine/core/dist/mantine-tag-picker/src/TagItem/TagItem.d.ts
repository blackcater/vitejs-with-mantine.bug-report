import { MantineThemeOverride, MantineTransition } from "../../../mantine-core/src";
import { TagPickerColor, TagPickerTag } from '../types';
interface TagItemProps {
    index: number;
    hovered: number;
    data: TagPickerTag;
    selected?: TagPickerTag;
    colors: TagPickerColor[];
    deleteLabel: string;
    tagNameEditLabel?: string;
    saveLabel: string;
    editTagLabel: string;
    onSelect(value: TagPickerTag): void;
    onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
    onTagDelete(id: string): void;
    onHover(index: number): void;
    onEventsCaptureChange(shouldCaptureEvents: boolean): void;
    themeOverride?: MantineThemeOverride;
    enableUpdate?: boolean;
    enableDelete?: boolean;
    enableColorChange?: boolean;
    transitionDuration?: number;
    transition?: MantineTransition;
    transitionTimingFunction: string;
}
export declare function TagItem({ index, hovered, data, onSelect, onTagUpdate, onHover, deleteLabel, saveLabel, editTagLabel, tagNameEditLabel, colors, selected, onTagDelete, onEventsCaptureChange, themeOverride, enableUpdate, enableDelete, enableColorChange, transitionDuration, transition, transitionTimingFunction, }: TagItemProps): JSX.Element;
export declare namespace TagItem {
    var displayName: string;
}
export {};
//# sourceMappingURL=TagItem.d.ts.map