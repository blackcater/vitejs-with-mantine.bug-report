import React, { useRef, useState } from 'react';
import cx from 'clsx';
import { useMantineTheme, Transition, Badge, ActionIcon } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import { MenuIcon } from './MenuIcon.js';
import { TagEdit } from '../TagEdit/TagEdit.js';
import useStyles from './TagItem.styles.js';

function TagItem({
  index,
  hovered,
  data,
  onSelect,
  onTagUpdate,
  onHover,
  deleteLabel,
  saveLabel,
  editTagLabel,
  tagNameEditLabel,
  colors,
  selected,
  onTagDelete,
  onEventsCaptureChange,
  themeOverride,
  enableUpdate,
  enableDelete,
  enableColorChange,
  transitionDuration,
  transition = "skew-up",
  transitionTimingFunction
}) {
  const classes = useStyles({theme: useMantineTheme(themeOverride)});
  const controlRef = useRef();
  const [editDropdownOpened, setEditDropdownOpened] = useState(false);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  const openEditDropdown = () => {
    setEditDropdownOpened(true);
    onEventsCaptureChange(false);
  };
  const closeEditDropdown = () => {
    setEditDropdownOpened(false);
    onEventsCaptureChange(true);
    setTimeout(() => {
      controlRef.current.focus();
    }, transitionDuration + 35);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.item, {[classes.hovered]: hovered === index}),
    onMouseEnter: () => onHover(index)
  }, /* @__PURE__ */ React.createElement(Transition, {
    duration,
    mounted: editDropdownOpened,
    transition,
    timingFunction: transitionTimingFunction,
    themeOverride
  }, (transitionStyles) => /* @__PURE__ */ React.createElement(TagEdit, {
    style: transitionStyles,
    saveLabel,
    tagNameEditLabel,
    onClose: closeEditDropdown,
    initialValues: data,
    deleteLabel,
    colors,
    onTagUpdate,
    onTagDelete,
    id: data.id,
    enableDelete,
    enableColorChange,
    themeOverride
  })), /* @__PURE__ */ React.createElement("div", {
    className: classes.body
  }, /* @__PURE__ */ React.createElement("button", {
    role: "option",
    type: "button",
    "aria-selected": !!selected && data.id === selected.id,
    className: classes.control,
    onClick: () => onSelect(data)
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.controlInner
  }, /* @__PURE__ */ React.createElement(Badge, {
    variant: "light",
    className: classes.badge,
    color: data.color,
    fullWidth: true,
    style: {cursor: "pointer"},
    themeOverride
  }, data.name))), enableUpdate && /* @__PURE__ */ React.createElement(ActionIcon, {
    onClick: openEditDropdown,
    elementRef: controlRef,
    themeOverride,
    "aria-label": editTagLabel
  }, /* @__PURE__ */ React.createElement(MenuIcon, null))));
}
TagItem.displayName = "@mantine/tag-picker/TagItem";

export { TagItem };
//# sourceMappingURL=TagItem.js.map
