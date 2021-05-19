import { createUseStyles } from 'react-jss';

var useStyles = createUseStyles({
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

export default useStyles;
//# sourceMappingURL=Spoiler.styles.js.map
