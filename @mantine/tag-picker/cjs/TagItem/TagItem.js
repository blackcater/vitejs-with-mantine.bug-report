'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cx = require('clsx');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var MenuIcon = require('./MenuIcon.js');
var TagEdit = require('../TagEdit/TagEdit.js');
var TagItem_styles = require('./TagItem.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);

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
  const classes = TagItem_styles['default']({theme: core.useMantineTheme(themeOverride)});
  const controlRef = React.useRef();
  const [editDropdownOpened, setEditDropdownOpened] = React.useState(false);
  const reduceMotion = hooks.useReducedMotion();
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
  return /* @__PURE__ */ React__default.createElement("div", {
    className: cx__default(classes.item, {[classes.hovered]: hovered === index}),
    onMouseEnter: () => onHover(index)
  }, /* @__PURE__ */ React__default.createElement(core.Transition, {
    duration,
    mounted: editDropdownOpened,
    transition,
    timingFunction: transitionTimingFunction,
    themeOverride
  }, (transitionStyles) => /* @__PURE__ */ React__default.createElement(TagEdit.TagEdit, {
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
  })), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.body
  }, /* @__PURE__ */ React__default.createElement("button", {
    role: "option",
    type: "button",
    "aria-selected": !!selected && data.id === selected.id,
    className: classes.control,
    onClick: () => onSelect(data)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.controlInner
  }, /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "light",
    className: classes.badge,
    color: data.color,
    fullWidth: true,
    style: {cursor: "pointer"},
    themeOverride
  }, data.name))), enableUpdate && /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    onClick: openEditDropdown,
    elementRef: controlRef,
    themeOverride,
    "aria-label": editTagLabel
  }, /* @__PURE__ */ React__default.createElement(MenuIcon.MenuIcon, null))));
}
TagItem.displayName = "@mantine/tag-picker/TagItem";

exports.TagItem = TagItem;
//# sourceMappingURL=TagItem.js.map
