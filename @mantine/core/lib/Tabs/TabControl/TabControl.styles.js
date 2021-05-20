import { createUseStyles } from 'react-jss';
import { getFontStyles, getFocusStyles, getThemeColor } from '@mantine/theme';
export default createUseStyles({
    tab: ({ theme, reduceMotion }) => (Object.assign(Object.assign(Object.assign({}, getFontStyles(theme)), getFocusStyles(theme)), { WebkitTapHighlightColor: 'transparent', boxSizing: 'border-box', display: 'block', height: 40, backgroundColor: 'transparent', border: 0, borderBottom: '2px solid transparent', padding: [0, theme.spacing.md], fontSize: theme.fontSizes.sm, cursor: 'pointer', transition: reduceMotion ? 'none' : 'border-color 150ms ease, color 150ms ease', color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black, '&:disabled': {
            cursor: 'not-allowed',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        } })),
    tabActive: ({ theme, color }) => ({
        color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
        borderBottomColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    }),
    tabInner: {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        height: 40,
    },
    tabIcon: ({ theme }) => ({
        '&:not(:only-child)': {
            marginRight: theme.spacing.xs,
        },
        // this fixes alignment as by default images and svg are inline and will have extra space on the bottom
        '& *': {
            display: 'block',
        },
    }),
});
