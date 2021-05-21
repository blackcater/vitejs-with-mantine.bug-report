import { createMemoStyles, getFontStyles } from '@mantine/core';

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
var useStyles = createMemoStyles({
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
  createControl: ({theme}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
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
});

export default useStyles;
//# sourceMappingURL=TagsList.styles.js.map
