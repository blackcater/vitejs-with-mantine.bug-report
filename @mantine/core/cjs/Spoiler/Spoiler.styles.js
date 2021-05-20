'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');

var useStyles = reactJss.createUseStyles({
  spoiler: {
    position: "relative"
  },
  content: ({transitionDuration}) => ({
    overflow: "hidden",
    transitionProperty: "max-height",
    transitionTimingFunction: "ease",
    transitionDuration: transitionDuration || 0
  })
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=Spoiler.styles.js.map
