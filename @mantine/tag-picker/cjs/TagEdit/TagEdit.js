'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');
var CheckIcon = require('./CheckIcon.js');
var TagEdit_styles = require('./TagEdit.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function TagEdit({
  style,
  onClose,
  initialValues,
  deleteLabel,
  colors,
  onTagUpdate,
  onTagDelete,
  id,
  saveLabel,
  tagNameEditLabel,
  themeOverride,
  enableDelete,
  enableColorChange
}) {
  const theme = core.useMantineTheme(themeOverride);
  const classes = TagEdit_styles['default']({theme});
  const dropdownRef = hooks.useClickOutside(onClose);
  const focusTrapRef = hooks.useFocusTrap();
  const [values, setValues] = React.useState({name: "", color: ""});
  const handleNameChange = (value) => setValues((current) => __spreadProps(__spreadValues({}, current), {name: value}));
  const handleColorChange = (value) => setValues((current) => __spreadProps(__spreadValues({}, current), {color: value}));
  const handleSubmit = () => {
    onTagUpdate(id, {name: values.name, color: values.color});
    onClose();
  };
  const handleDelete = () => {
    onTagDelete(id);
    onClose();
  };
  const handleKeyDownCapture = (event) => {
    if (event.nativeEvent.code === "Escape") {
      onClose();
    }
  };
  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);
  const colorsList = colors.map((color) => /* @__PURE__ */ React__default.createElement("button", {
    "data-mantine-tag-color": true,
    className: classes.colorControl,
    type: "button",
    key: color.color,
    onClick: () => handleColorChange(color.color)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.colorControlBody
  }, /* @__PURE__ */ React__default.createElement(core.ColorSwatch, {
    color: theme.colors[color.color][5],
    size: 18,
    themeOverride
  }), /* @__PURE__ */ React__default.createElement("span", {
    "data-mantine-tag-color-label": true,
    className: classes.colorLabel
  }, color.name)), color.color === values.color && /* @__PURE__ */ React__default.createElement(CheckIcon.CheckIcon, {
    style: {width: 14, height: 14}
  })));
  return /* @__PURE__ */ React__default.createElement(core.Paper, {
    shadow: "sm",
    className: classes.tagEdit,
    elementRef: dropdownRef,
    onKeyDownCapture: handleKeyDownCapture,
    style,
    themeOverride
  }, /* @__PURE__ */ React__default.createElement("div", {
    ref: focusTrapRef
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.header
  }, /* @__PURE__ */ React__default.createElement(core.TextInput, {
    "data-mantine-tag-input": true,
    className: classes.input,
    value: values.name,
    onChange: (event) => handleNameChange(event.currentTarget.value),
    onKeyDown: (event) => event.nativeEvent.code === "Enter" && handleSubmit(),
    autoFocus: true,
    "aria-label": tagNameEditLabel,
    themeOverride
  }), /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
    "data-mantine-tag-save": true,
    size: 36,
    variant: theme.colorScheme === "dark" ? "transparent" : "light",
    onClick: handleSubmit,
    themeOverride,
    "aria-label": saveLabel
  }, /* @__PURE__ */ React__default.createElement(CheckIcon.CheckIcon, {
    style: {width: 16, height: 16}
  }))), enableDelete && /* @__PURE__ */ React__default.createElement("button", {
    "data-mantine-tag-delete": true,
    className: classes.deleteControl,
    type: "button",
    onClick: handleDelete
  }, deleteLabel), enableColorChange && /* @__PURE__ */ React__default.createElement("div", {
    "data-mantine-tag-colors": true,
    className: classes.colorsList
  }, colorsList)));
}
TagEdit.displayName = "@mantine/tag-picker/TagEdit";

exports.TagEdit = TagEdit;
//# sourceMappingURL=TagEdit.js.map
