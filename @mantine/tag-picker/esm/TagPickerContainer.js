import React, { useRef, useState } from 'react';
import { TagPicker } from './TagPicker/TagPicker.js';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function getRandomColor(colors) {
  if (Array.isArray(colors)) {
    return colors[Math.floor(Math.random() * colors.length)].color;
  }
  return null;
}
function TagPickerContainer(_a) {
  var _b = _a, {transitionDuration = 250} = _b, props = __objRest(_b, ["transitionDuration"]);
  const controlRef = useRef();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const [query, setQuery] = useState("");
  const [createColor, setCreateColor] = useState(getRandomColor(props.colors));
  const [shouldCaptureEvents, setShouldCaptureEvents] = useState(true);
  const [shouldCaptureArrowEvents, setShouldCaptureArrowEvents] = useState(true);
  const closeDropdown = () => {
    if (shouldCaptureEvents) {
      setDropdownOpened(false);
      setHovered(-1);
      setQuery("");
      setTimeout(() => controlRef.current.focus(), transitionDuration + 35);
      typeof props.onDropdownClose === "function" && props.onDropdownClose();
    }
  };
  const openDropdown = () => {
    setDropdownOpened(true);
    typeof props.onDropdownOpen === "function" && props.onDropdownOpen();
  };
  const handleSearchChange = (value) => {
    setQuery(value);
    setHovered(0);
    typeof props.onSearchChange === "function" && props.onSearchChange(value);
  };
  const handleCreate = () => {
    props.onChange(props.onTagCreate({color: createColor, name: query}));
    setCreateColor(getRandomColor(props.colors));
    closeDropdown();
  };
  const handleUpdate = (id, values) => {
    if (props.value && props.value.id === id) {
      props.onChange(__spreadProps(__spreadValues({}, values), {id}));
    }
    props.onTagUpdate(id, values);
  };
  const handleChange = (value) => {
    props.onChange(value);
    closeDropdown();
  };
  const filteredData = props.data.filter((tag) => tag.name.toLowerCase().trim().includes(query.toLowerCase().trim()));
  const canCreate = query.trim().length > 0 && props.data.every((tag) => tag.name.toLowerCase().trim() !== query.trim().toLowerCase());
  const handleKeyboardEvents = (event) => {
    if (dropdownOpened && shouldCaptureEvents) {
      const {code} = event.nativeEvent;
      if (code === "Escape") {
        event.preventDefault();
        closeDropdown();
      }
      if (code === "ArrowUp" && shouldCaptureArrowEvents) {
        event.preventDefault();
        const targetIndex = canCreate ? filteredData.length : filteredData.length - 1;
        setHovered(hovered <= 0 ? targetIndex : hovered - 1);
      }
      if (code === "ArrowDown" && shouldCaptureArrowEvents) {
        event.preventDefault();
        const targetIndex = canCreate ? hovered : hovered + 1;
        setHovered(targetIndex === filteredData.length ? 0 : hovered + 1);
      }
      if (code === "Enter" && hovered > -1) {
        event.preventDefault();
        if (filteredData[hovered]) {
          handleChange(filteredData[hovered]);
          closeDropdown();
        }
        if (canCreate && hovered === filteredData.length) {
          handleCreate();
        }
      }
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    onKeyDownCapture: handleKeyboardEvents,
    className: props.className,
    style: props.style
  }, /* @__PURE__ */ React.createElement(TagPicker, {
    createColor,
    searchQuery: query,
    hovered,
    dropdownOpened,
    controlRef: (node) => {
      controlRef.current = node;
      typeof props.controlRef === "function" && props.controlRef(node);
    },
    openDropdown,
    closeDropdown,
    description: props.description,
    searchPlaceholder: props.searchPlaceholder,
    onSearchChange: handleSearchChange,
    data: filteredData,
    canCreate,
    value: props.value,
    createLabel: props.createLabel,
    saveLabel: props.saveLabel,
    editTagLabel: props.editTagLabel,
    deleteLabel: props.deleteLabel,
    noValueLabel: props.noValueLabel,
    tagNameEditLabel: props.tagNameEditLabel,
    onCreate: handleCreate,
    colors: props.colors,
    onTagUpdate: handleUpdate,
    onTagDelete: props.onTagDelete,
    onChange: handleChange,
    onHoveredChange: setHovered,
    onEventsCaptureChange: setShouldCaptureEvents,
    onArrowsCaptureChange: setShouldCaptureArrowEvents,
    enableCreate: props.enableCreate,
    enableUpdate: props.enableUpdate,
    enableDelete: props.enableDelete,
    enableColorChange: props.enableColorChange,
    transitionDuration,
    transition: props.transition,
    transitionTimingFunction: props.transitionTimingFunction,
    themeOverride: props.themeOverride
  }));
}

export { TagPickerContainer };
//# sourceMappingURL=TagPickerContainer.js.map
