import { createUseStyles } from 'react-jss';

var useStyles = createUseStyles({
  tabs: ({theme}) => ({
    borderBottom: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`
  }),
  tabsInner: {
    marginBottom: -2
  },
  body: ({theme}) => ({
    paddingTop: theme.spacing.sm
  })
}, {link: true});

export default useStyles;
//# sourceMappingURL=Tabs.styles.js.map
