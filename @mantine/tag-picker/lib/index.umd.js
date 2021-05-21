(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@mantine/hooks'), require('@mantine/core'), require('react-jss')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', '@mantine/hooks', '@mantine/core', 'react-jss'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@mantine/tag-picker'] = {}, global.React, global['@mantine/hooks'], global['@mantine/core'], global.reactJss));
}(this, (function (exports, React, hooks, core, reactJss) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	function toVal(mix) {
		var k, y, str='';

		if (typeof mix === 'string' || typeof mix === 'number') {
			str += mix;
		} else if (typeof mix === 'object') {
			if (Array.isArray(mix)) {
				for (k=0; k < mix.length; k++) {
					if (mix[k]) {
						if (y = toVal(mix[k])) {
							str && (str += ' ');
							str += y;
						}
					}
				}
			} else {
				for (k in mix) {
					if (mix[k]) {
						str && (str += ' ');
						str += k;
					}
				}
			}
		}

		return str;
	}

	function cx () {
		var i=0, tmp, x, str='';
		while (i < arguments.length) {
			if (tmp = arguments[i++]) {
				if (x = toVal(tmp)) {
					str && (str += ' ');
					str += x;
				}
			}
		}
		return str;
	}

	var __defProp$8 = Object.defineProperty;
	var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
	var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
	var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
	var __spreadValues$8 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$8.call(b, prop))
	      __defNormalProp$8(a, prop, b[prop]);
	  if (__getOwnPropSymbols$8)
	    for (var prop of __getOwnPropSymbols$8(b)) {
	      if (__propIsEnum$8.call(b, prop))
	        __defNormalProp$8(a, prop, b[prop]);
	    }
	  return a;
	};
	function MenuIcon(props) {
	  return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$8({
	    width: "15",
	    height: "15",
	    viewBox: "0 0 15 15",
	    fill: "none",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, props), /* @__PURE__ */ React__default['default'].createElement("path", {
	    d: "M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",
	    fill: "currentColor",
	    fillRule: "evenodd",
	    clipRule: "evenodd"
	  }));
	}

	var __defProp$7 = Object.defineProperty;
	var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
	var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
	var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
	var __spreadValues$7 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$7.call(b, prop))
	      __defNormalProp$7(a, prop, b[prop]);
	  if (__getOwnPropSymbols$7)
	    for (var prop of __getOwnPropSymbols$7(b)) {
	      if (__propIsEnum$7.call(b, prop))
	        __defNormalProp$7(a, prop, b[prop]);
	    }
	  return a;
	};
	function CheckIcon(props) {
	  return /* @__PURE__ */ React__default['default'].createElement("svg", __spreadValues$7({
	    width: "20",
	    height: "20",
	    viewBox: "0 0 15 15",
	    fill: "none",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, props), /* @__PURE__ */ React__default['default'].createElement("path", {
	    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
	    fill: "currentColor",
	    fillRule: "evenodd",
	    clipRule: "evenodd"
	  }));
	}

	var __defProp$6 = Object.defineProperty;
	var __defProps$5 = Object.defineProperties;
	var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
	var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
	var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
	var __spreadValues$6 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$6.call(b, prop))
	      __defNormalProp$6(a, prop, b[prop]);
	  if (__getOwnPropSymbols$6)
	    for (var prop of __getOwnPropSymbols$6(b)) {
	      if (__propIsEnum$6.call(b, prop))
	        __defNormalProp$6(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
	var useStyles$3 = reactJss.createUseStyles({
	  tagEdit: ({theme}) => ({
	    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
	    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
	    paddingTop: 10,
	    paddingBottom: 10,
	    position: "absolute",
	    top: 0,
	    width: 240,
	    left: 240,
	    zIndex: 5
	  }),
	  header: {
	    display: "flex",
	    justifyContent: "space-between",
	    alignItems: "center",
	    paddingLeft: 10,
	    paddingRight: 10
	  },
	  input: {
	    flex: 1,
	    marginRight: 10
	  },
	  deleteControl: ({theme}) => __spreadProps$5(__spreadValues$6(__spreadValues$6({}, core.getFontStyles(theme)), core.getFocusStyles(theme)), {
	    fontSize: theme.fontSizes.sm,
	    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
	    border: 0,
	    width: "100%",
	    backgroundColor: "transparent",
	    textAlign: "left",
	    height: 32,
	    display: "flex",
	    alignItems: "center",
	    paddingLeft: 10,
	    paddingRight: 10,
	    cursor: "pointer",
	    marginTop: 10,
	    "&:hover, &:focus": {
	      backgroundColor: theme.colorScheme === "dark" ? theme.colors.red[9] : theme.colors.red[0],
	      color: theme.colorScheme === "dark" ? theme.colors.red[0] : theme.colors.red[7]
	    }
	  }),
	  deleteIcon: {
	    marginRight: 10
	  },
	  colorsList: ({theme}) => ({
	    marginTop: 5,
	    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
	    paddingTop: 10
	  }),
	  colorControl: ({theme}) => __spreadProps$5(__spreadValues$6(__spreadValues$6({}, core.getFontStyles(theme)), core.getFocusStyles(theme)), {
	    fontSize: theme.fontSizes.sm,
	    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
	    textTransform: "capitalize",
	    width: "100%",
	    display: "flex",
	    alignItems: "center",
	    backgroundColor: "transparent",
	    border: "1px dotted transparent",
	    paddingLeft: 10,
	    paddingRight: 10,
	    height: 28,
	    cursor: "pointer",
	    outline: 0,
	    "&:hover": {
	      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
	    }
	  }),
	  colorLabel: {
	    marginLeft: 10
	  },
	  colorControlBody: {
	    display: "flex",
	    alignItems: "center",
	    flex: 1
	  }
	}, {link: true});

	var __defProp$5 = Object.defineProperty;
	var __defProps$4 = Object.defineProperties;
	var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
	var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
	var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
	var __spreadValues$5 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$5.call(b, prop))
	      __defNormalProp$5(a, prop, b[prop]);
	  if (__getOwnPropSymbols$5)
	    for (var prop of __getOwnPropSymbols$5(b)) {
	      if (__propIsEnum$5.call(b, prop))
	        __defNormalProp$5(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
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
	  const classes = useStyles$3({theme});
	  const dropdownRef = hooks.useClickOutside(onClose);
	  const focusTrapRef = hooks.useFocusTrap();
	  const [values, setValues] = React.useState({name: "", color: ""});
	  const handleNameChange = (value) => setValues((current) => __spreadProps$4(__spreadValues$5({}, current), {name: value}));
	  const handleColorChange = (value) => setValues((current) => __spreadProps$4(__spreadValues$5({}, current), {color: value}));
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
	  const colorsList = colors.map((color) => /* @__PURE__ */ React__default['default'].createElement("button", {
	    "data-mantine-tag-color": true,
	    className: classes.colorControl,
	    type: "button",
	    key: color.color,
	    onClick: () => handleColorChange(color.color)
	  }, /* @__PURE__ */ React__default['default'].createElement("div", {
	    className: classes.colorControlBody
	  }, /* @__PURE__ */ React__default['default'].createElement(core.ColorSwatch, {
	    color: theme.colors[color.color][5],
	    size: 18,
	    themeOverride
	  }), /* @__PURE__ */ React__default['default'].createElement("span", {
	    "data-mantine-tag-color-label": true,
	    className: classes.colorLabel
	  }, color.name)), color.color === values.color && /* @__PURE__ */ React__default['default'].createElement(CheckIcon, {
	    style: {width: 14, height: 14}
	  })));
	  return /* @__PURE__ */ React__default['default'].createElement(core.Paper, {
	    shadow: "sm",
	    className: classes.tagEdit,
	    elementRef: dropdownRef,
	    onKeyDownCapture: handleKeyDownCapture,
	    style,
	    themeOverride
	  }, /* @__PURE__ */ React__default['default'].createElement("div", {
	    ref: focusTrapRef
	  }, /* @__PURE__ */ React__default['default'].createElement("div", {
	    className: classes.header
	  }, /* @__PURE__ */ React__default['default'].createElement(core.TextInput, {
	    "data-mantine-tag-input": true,
	    className: classes.input,
	    value: values.name,
	    onChange: (event) => handleNameChange(event.currentTarget.value),
	    onKeyDown: (event) => event.nativeEvent.code === "Enter" && handleSubmit(),
	    autoFocus: true,
	    "aria-label": tagNameEditLabel,
	    themeOverride
	  }), /* @__PURE__ */ React__default['default'].createElement(core.ActionIcon, {
	    "data-mantine-tag-save": true,
	    size: 36,
	    variant: theme.colorScheme === "dark" ? "transparent" : "light",
	    onClick: handleSubmit,
	    themeOverride,
	    "aria-label": saveLabel
	  }, /* @__PURE__ */ React__default['default'].createElement(CheckIcon, {
	    style: {width: 16, height: 16}
	  }))), enableDelete && /* @__PURE__ */ React__default['default'].createElement("button", {
	    "data-mantine-tag-delete": true,
	    className: classes.deleteControl,
	    type: "button",
	    onClick: handleDelete
	  }, deleteLabel), enableColorChange && /* @__PURE__ */ React__default['default'].createElement("div", {
	    "data-mantine-tag-colors": true,
	    className: classes.colorsList
	  }, colorsList)));
	}
	TagEdit.displayName = "@mantine/tag-picker/TagEdit";

	var __defProp$4 = Object.defineProperty;
	var __defProps$3 = Object.defineProperties;
	var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
	var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
	var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
	var __spreadValues$4 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$4.call(b, prop))
	      __defNormalProp$4(a, prop, b[prop]);
	  if (__getOwnPropSymbols$4)
	    for (var prop of __getOwnPropSymbols$4(b)) {
	      if (__propIsEnum$4.call(b, prop))
	        __defNormalProp$4(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
	var useStyles$2 = reactJss.createUseStyles({
	  item: {
	    position: "relative"
	  },
	  body: {
	    display: "flex",
	    alignItems: "center",
	    justifyContent: "space-between",
	    paddingRight: 10
	  },
	  control: ({theme}) => __spreadProps$3(__spreadValues$4({}, core.getFocusStyles(theme)), {
	    height: 32,
	    flex: 1,
	    textAlign: "left",
	    padding: 0,
	    backgroundColor: "transparent",
	    border: "1px solid transparent",
	    cursor: "pointer",
	    paddingLeft: 10,
	    maxWidth: "calc(100% - 34px)"
	  }),
	  controlInner: {
	    display: "flex"
	  },
	  badge: {
	    display: "block !important",
	    width: "auto"
	  },
	  hovered: ({theme}) => ({
	    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
	  })
	}, {link: true});

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
	  const classes = useStyles$2({theme: core.useMantineTheme(themeOverride)});
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
	  return /* @__PURE__ */ React__default['default'].createElement("div", {
	    className: cx(classes.item, {[classes.hovered]: hovered === index}),
	    onMouseEnter: () => onHover(index)
	  }, /* @__PURE__ */ React__default['default'].createElement(core.Transition, {
	    duration,
	    mounted: editDropdownOpened,
	    transition,
	    timingFunction: transitionTimingFunction,
	    themeOverride
	  }, (transitionStyles) => /* @__PURE__ */ React__default['default'].createElement(TagEdit, {
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
	  })), /* @__PURE__ */ React__default['default'].createElement("div", {
	    className: classes.body
	  }, /* @__PURE__ */ React__default['default'].createElement("button", {
	    role: "option",
	    type: "button",
	    "aria-selected": !!selected && data.id === selected.id,
	    className: classes.control,
	    onClick: () => onSelect(data)
	  }, /* @__PURE__ */ React__default['default'].createElement("div", {
	    className: classes.controlInner
	  }, /* @__PURE__ */ React__default['default'].createElement(core.Badge, {
	    variant: "light",
	    className: classes.badge,
	    color: data.color,
	    fullWidth: true,
	    style: {cursor: "pointer"},
	    themeOverride
	  }, data.name))), enableUpdate && /* @__PURE__ */ React__default['default'].createElement(core.ActionIcon, {
	    onClick: openEditDropdown,
	    elementRef: controlRef,
	    themeOverride,
	    "aria-label": editTagLabel
	  }, /* @__PURE__ */ React__default['default'].createElement(MenuIcon, null))));
	}
	TagItem.displayName = "@mantine/tag-picker/TagItem";

	var __defProp$3 = Object.defineProperty;
	var __defProps$2 = Object.defineProperties;
	var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
	var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
	var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
	var __spreadValues$3 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$3.call(b, prop))
	      __defNormalProp$3(a, prop, b[prop]);
	  if (__getOwnPropSymbols$3)
	    for (var prop of __getOwnPropSymbols$3(b)) {
	      if (__propIsEnum$3.call(b, prop))
	        __defNormalProp$3(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
	var useStyles$1 = reactJss.createUseStyles({
	  tagsList: ({theme}) => ({
	    paddingTop: theme.spacing.xs,
	    paddingBottom: theme.spacing.xs
	  }),
	  description: ({theme}) => ({
	    marginTop: theme.spacing.xs,
	    marginBottom: theme.spacing.xs,
	    padding: [0, theme.spacing.xs]
	  }),
	  searchInput: ({theme}) => ({
	    marginLeft: theme.spacing.xs,
	    marginRight: theme.spacing.xs,
	    marginBottom: theme.spacing.xs
	  }),
	  createControl: ({theme}) => __spreadProps$2(__spreadValues$3({}, core.getFontStyles(theme)), {
	    backgroundColor: "transparent",
	    border: 0,
	    outline: 0,
	    paddingLeft: theme.spacing.xs,
	    paddingRight: theme.spacing.xs,
	    width: "100%",
	    textAlign: "left",
	    height: 32,
	    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
	    cursor: "pointer",
	    whiteSpace: "nowrap",
	    overflow: "hidden",
	    display: "flex",
	    alignItems: "center"
	  }),
	  createControlBadge: {
	    display: "block !important"
	  },
	  createControlLabel: ({theme}) => ({
	    marginRight: 10,
	    fontSize: theme.fontSizes.sm
	  }),
	  createControlHovered: ({theme}) => ({
	    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
	  })
	}, {link: true});

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
	  const classes = useStyles$1({theme: core.useMantineTheme(themeOverride)});
	  const focusTrapRef = hooks.useFocusTrap();
	  const tags = data.map((tag, index) => /* @__PURE__ */ React__default['default'].createElement(TagItem, {
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
	  return /* @__PURE__ */ React__default['default'].createElement("div", {
	    className: classes.tagsList,
	    ref: focusTrapRef,
	    role: "listbox"
	  }, /* @__PURE__ */ React__default['default'].createElement(core.TextInput, {
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
	  }), description && /* @__PURE__ */ React__default['default'].createElement(core.Text, {
	    color: "gray",
	    size: "sm",
	    className: classes.description,
	    themeOverride
	  }, description), /* @__PURE__ */ React__default['default'].createElement("div", null, tags, enableCreate && canCreate && /* @__PURE__ */ React__default['default'].createElement("button", {
	    className: cx(classes.createControl, {
	      [classes.createControlHovered]: hovered === data.length
	    }),
	    type: "button",
	    onClick: onCreate,
	    onMouseEnter: () => onHoveredChange(data.length)
	  }, /* @__PURE__ */ React__default['default'].createElement("span", {
	    className: classes.createControlLabel
	  }, createLabel || "+"), /* @__PURE__ */ React__default['default'].createElement(core.Badge, {
	    variant: "light",
	    className: classes.createControlBadge,
	    color: createColor,
	    style: {cursor: "pointer"},
	    themeOverride
	  }, searchQuery))));
	}
	TagsList.displayName = "@mantine/tag-picker/TagsList";

	var __defProp$2 = Object.defineProperty;
	var __defProps$1 = Object.defineProperties;
	var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
	var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
	var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
	var __spreadValues$2 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$2.call(b, prop))
	      __defNormalProp$2(a, prop, b[prop]);
	  if (__getOwnPropSymbols$2)
	    for (var prop of __getOwnPropSymbols$2(b)) {
	      if (__propIsEnum$2.call(b, prop))
	        __defNormalProp$2(a, prop, b[prop]);
	    }
	  return a;
	};
	var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
	var useStyles = reactJss.createUseStyles({
	  tagPicker: {
	    position: "relative"
	  },
	  dropdown: ({theme}) => ({
	    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
	    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
	    width: 280,
	    position: "absolute",
	    top: 0,
	    left: 0,
	    zIndex: 1
	  }),
	  control: ({theme}) => __spreadProps$1(__spreadValues$2({}, core.getFocusStyles(theme)), {
	    border: 0,
	    padding: [0, 0],
	    borderRadius: 24,
	    cursor: "pointer",
	    appearance: "none",
	    WebkitAppearance: "none"
	  })
	}, {link: true});

	var __defProp$1 = Object.defineProperty;
	var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
	var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
	var __spreadValues$1 = (a, b) => {
	  for (var prop in b || (b = {}))
	    if (__hasOwnProp$1.call(b, prop))
	      __defNormalProp$1(a, prop, b[prop]);
	  if (__getOwnPropSymbols$1)
	    for (var prop of __getOwnPropSymbols$1(b)) {
	      if (__propIsEnum$1.call(b, prop))
	        __defNormalProp$1(a, prop, b[prop]);
	    }
	  return a;
	};
	var __objRest$1 = (source, exclude) => {
	  var target = {};
	  for (var prop in source)
	    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
	      target[prop] = source[prop];
	  if (source != null && __getOwnPropSymbols$1)
	    for (var prop of __getOwnPropSymbols$1(source)) {
	      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
	        target[prop] = source[prop];
	    }
	  return target;
	};
	function TagPicker(_a) {
	  var _b = _a, {
	    dropdownOpened,
	    openDropdown,
	    closeDropdown,
	    controlRef,
	    value,
	    noValueLabel,
	    themeOverride,
	    transitionDuration,
	    controlId,
	    labelledBy,
	    transition = "skew-up",
	    transitionTimingFunction
	  } = _b, others = __objRest$1(_b, [
	    "dropdownOpened",
	    "openDropdown",
	    "closeDropdown",
	    "controlRef",
	    "value",
	    "noValueLabel",
	    "themeOverride",
	    "transitionDuration",
	    "controlId",
	    "labelledBy",
	    "transition",
	    "transitionTimingFunction"
	  ]);
	  const theme = core.useMantineTheme(themeOverride);
	  const classes = useStyles({theme});
	  const dropdownRef = hooks.useClickOutside(closeDropdown);
	  const reduceMotion = hooks.useReducedMotion();
	  const duration = reduceMotion ? 1 : transitionDuration;
	  return /* @__PURE__ */ React__default['default'].createElement("div", {
	    className: classes.tagPicker
	  }, /* @__PURE__ */ React__default['default'].createElement("button", {
	    className: classes.control,
	    type: "button",
	    ref: controlRef,
	    onClick: openDropdown,
	    id: controlId,
	    "aria-labelledby": labelledBy,
	    "aria-haspopup": "listbox",
	    "aria-expanded": dropdownOpened
	  }, /* @__PURE__ */ React__default['default'].createElement(core.Badge, {
	    color: value && value.color || "gray",
	    style: {cursor: "pointer", display: "block"},
	    themeOverride
	  }, value && value.name || noValueLabel)), /* @__PURE__ */ React__default['default'].createElement(core.Transition, {
	    duration,
	    mounted: dropdownOpened,
	    transition,
	    timingFunction: transitionTimingFunction,
	    themeOverride
	  }, (transitionStyles) => /* @__PURE__ */ React__default['default'].createElement(core.Paper, {
	    shadow: "sm",
	    className: classes.dropdown,
	    elementRef: dropdownRef,
	    style: transitionStyles,
	    themeOverride,
	    tabIndex: -1
	  }, /* @__PURE__ */ React__default['default'].createElement(TagsList, __spreadValues$1({
	    value,
	    transition,
	    transitionDuration,
	    transitionTimingFunction,
	    themeOverride
	  }, others)))));
	}

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
	  const controlRef = React.useRef();
	  const [dropdownOpened, setDropdownOpened] = React.useState(false);
	  const [hovered, setHovered] = React.useState(-1);
	  const [query, setQuery] = React.useState("");
	  const [createColor, setCreateColor] = React.useState(getRandomColor(props.colors));
	  const [shouldCaptureEvents, setShouldCaptureEvents] = React.useState(true);
	  const [shouldCaptureArrowEvents, setShouldCaptureArrowEvents] = React.useState(true);
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
	  return /* @__PURE__ */ React__default['default'].createElement("div", {
	    onKeyDownCapture: handleKeyboardEvents,
	    className: props.className,
	    style: props.style
	  }, /* @__PURE__ */ React__default['default'].createElement(TagPicker, {
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

	exports.TagPicker = TagPickerContainer;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
