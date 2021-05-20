import { createUseStyles } from 'react-jss';
import { getSizeValue } from '@mantine/theme';

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
const sizes = {
  xs: 180,
  sm: 240,
  md: 320,
  lg: 360,
  xl: 500,
  full: "100%"
};
function getPositionStyles({
  position,
  size
}) {
  switch (position) {
    case "top":
      return {top: 0, left: 0, right: 0, height: getSizeValue({size, sizes})};
    case "bottom":
      return {bottom: 0, left: 0, right: 0, height: getSizeValue({size, sizes})};
    case "right":
      return {bottom: 0, top: 0, right: 0, width: getSizeValue({size, sizes})};
    case "left":
      return {bottom: 0, top: 0, left: 0, width: getSizeValue({size, sizes})};
    default:
      return null;
  }
}
var useStyles = createUseStyles({
  noOverlay: {},
  wrapper: {
    "&:not($noOverlay)": {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  },
  drawer: ({size, position}) => __spreadProps(__spreadValues({}, getPositionStyles({position, size})), {
    maxWidth: "100%",
    maxHeight: "100vh",
    position: "fixed",
    outline: 0
  })
}, {link: true});

export default useStyles;
export { sizes };
//# sourceMappingURL=Drawer.styles.js.map
