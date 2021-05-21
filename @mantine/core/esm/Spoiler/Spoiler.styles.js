import { createMemoStyles } from '@mantine/theme';

var useStyles = createMemoStyles({
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

export default useStyles;
//# sourceMappingURL=Spoiler.styles.js.map
