'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var theme = require('@mantine/theme');

var useStyles = theme.createMemoStyles({
  spoiler: {
    position: "relative"
  },
  content: ({transitionDuration}) => ({
    overflow: "hidden",
    transitionProperty: "max-height",
    transitionTimingFunction: "ease",
    transitionDuration: transitionDuration || 0
  })
});

exports.default = useStyles;
//# sourceMappingURL=Spoiler.styles.js.map
