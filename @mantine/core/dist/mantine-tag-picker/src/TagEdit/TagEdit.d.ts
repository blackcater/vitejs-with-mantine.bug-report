import React from 'react';
import { MantineThemeOverride } from "../../../mantine-core/src";
import { TagPickerColor, TagPickerTag } from '../types';
export interface TagEditProps {
    style?: React.CSSProperties;
    initialValues: TagPickerTag;
    colors: TagPickerColor[];
    deleteLabel: string;
    tagNameEditLabel?: string;
    saveLabel: string;
    onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
    onTagDelete(id: string): void;
    onClose(): void;
    id: string;
    themeOverride?: MantineThemeOverride;
    enableDelete?: boolean;
    enableColorChange?: boolean;
}
export declare function TagEdit({ style, onClose, initialValues, deleteLabel, colors, onTagUpdate, onTagDelete, id, saveLabel, tagNameEditLabel, themeOverride, enableDelete, enableColorChange, }: TagEditProps): JSX.Element;
export declare namespace TagEdit {
    var displayName: string;
}
//# sourceMappingURL=TagEdit.d.ts.map