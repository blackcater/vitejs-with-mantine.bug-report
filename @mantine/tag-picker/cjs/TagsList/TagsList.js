'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');
var TagItem = require('../TagItem/TagItem.js');
var TagsList_styles = require('./TagsList.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
  const classes = TagsList_styles['default']({theme: core.useMantineTheme(themeOverride)});
  const focusTrapRef = hooks.useFocusTrap();
  const tags = data.map((tag, index) => /* @__PURE__ */ React__default.createElement(TagItem.TagItem, {
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
  return /* @__PURE__ */ React__default.createElement("div", {
    className: classes.tagsList,
    ref: focusTrapRef,
    role: "listbox"
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
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
  }), description && /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "gray",
    size: "sm",
    className: classes.description,
    themeOverride
  }, description), /* @__PURE__ */ React__default.createElement("div", null, tags, enableCreate && canCreate && /* @__PURE__ */ React__default.createElement("button", {
    className: cx__default(classes.createControl, {
      [classes.createControlHovered]: hovered === data.length
    }),
    type: "button",
    onClick: onCreate,
    onMouseEnter: () => onHoveredChange(data.length)
  }, /* @__PURE__ */ React__default.createElement("span", {
    className: classes.createControlLabel
  }, createLabel || "+"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "light",
    className: classes.createControlBadge,
    color: createColor,
    style: {cursor: "pointer"},
    themeOverride
  }, searchQuery))));
}
TagsList.displayName = "@mantine/tag-picker/TagsList";

exports.TagsList = TagsList;
//# sourceMappingURL=TagsList.js.map
