import React from 'react';
import cx from 'clsx';
import { useFocusTrap } from '@mantine/hooks';
import { useMantineTheme, TextInput, Text, Badge } from '@mantine/core';
import { TagItem } from '../TagItem/TagItem.js';
import useStyles from './TagsList.styles.js';

function TagsList({
  searchQuery,
  searchPlaceholder,
  description,
  hovered,
  data,
  value,
  canCreate,
  createLabel,
  deleteLabel,
  saveLabel,
  editTagLabel,
  tagNameEditLabel,
  colors,
  createColor,
  onSearchChange,
  onCreate,
  onTagDelete,
  onTagUpdate,
  onChange,
  onHoveredChange,
  onEventsCaptureChange,
  onArrowsCaptureChange,
  themeOverride,
  enableCreate,
  enableUpdate,
  enableDelete,
  enableColorChange,
  transitionDuration,
  transition,
  transitionTimingFunction
}) {
  const classes = useStyles({theme: useMantineTheme(themeOverride)});
  const focusTrapRef = useFocusTrap();
  const tags = data.map((tag, index) => /* @__PURE__ */ React.createElement(TagItem, {
    key: tag.id,
    index,
    hovered,
    data: tag,
    selected: value,
    saveLabel,
    tagNameEditLabel,
    editTagLabel,
    onSelect: onChange,
    onTagUpdate,
    onHover: onHoveredChange,
    colors,
    deleteLabel,
    onTagDelete,
    onEventsCaptureChange,
    enableUpdate,
    enableDelete,
    enableColorChange,
    transition,
    transitionTimingFunction,
    transitionDuration,
    themeOverride
  }));
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.tagsList,
    ref: focusTrapRef,
    role: "listbox"
  }, /* @__PURE__ */ React.createElement(TextInput, {
    themeOverride,
    className: classes.searchInput,
    placeholder: searchPlaceholder,
    value: searchQuery,
    onChange: (event) => onSearchChange(event.currentTarget.value),
    onFocus: () => onArrowsCaptureChange(true),
    onBlur: () => {
      onHoveredChange(-1);
      onArrowsCaptureChange(false);
    }
  }), description && /* @__PURE__ */ React.createElement(Text, {
    color: "gray",
    size: "sm",
    className: classes.description,
    themeOverride
  }, description), /* @__PURE__ */ React.createElement("div", null, tags, enableCreate && canCreate && /* @__PURE__ */ React.createElement("button", {
    className: cx(classes.createControl, {
      [classes.createControlHovered]: hovered === data.length
    }),
    type: "button",
    onClick: onCreate,
    onMouseEnter: () => onHoveredChange(data.length)
  }, /* @__PURE__ */ React.createElement("span", {
    className: classes.createControlLabel
  }, createLabel || "+"), /* @__PURE__ */ React.createElement(Badge, {
    variant: "light",
    className: classes.createControlBadge,
    color: createColor,
    style: {cursor: "pointer"},
    themeOverride
  }, searchQuery))));
}
TagsList.displayName = "@mantine/tag-picker/TagsList";

export { TagsList };
//# sourceMappingURL=TagsList.js.map
