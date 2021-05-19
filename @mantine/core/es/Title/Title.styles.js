import { createUseStyles } from 'react-jss';
import { getFontStyles } from '../mantine-theme/src/utils/get-font-styles/get-font-styles.js';
import '../mantine-theme/src/MantineProvider/MantineProvider.js';
import '../mantine-theme/src/MantineProvider/theme-context.js';

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
var useStyles = createUseStyles({
  title: ({theme, element}) => __spreadProps(__spreadValues({}, getFontStyles(theme)), {
    fontFamily: theme.headings.fontFamily,
    fontWeight: theme.headings.fontWeight,
    fontSize: theme.headings.sizes[element].fontSize,
    lineHeight: theme.headings.sizes[element].lineHeight,
    margin: 0,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    "@media (max-width: 755px)": {
      fontSize: typeof theme.headings.sizes[element].fontSize === "number" && theme.headings.sizes[element].fontSize / 1.3
    }
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=Title.styles.js.map
