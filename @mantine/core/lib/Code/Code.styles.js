import { createUseStyles } from 'react-jss';
import { getThemeColor, getFontStyles } from '@mantine/theme';
export default createUseStyles({
    code: ({ theme, color }) => (Object.assign(Object.assign({}, getFontStyles(theme)), { lineHeight: theme.lineHeight, padding: [1, theme.spacing.xs / 2], borderRadius: theme.radius.sm, color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 1 : 9 }), backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }), fontFamily: theme.fontFamilyMonospace, fontSize: theme.fontSizes.xs, border: `1px solid ${getThemeColor({
            theme,
            color,
            shade: theme.colorScheme === 'dark' ? 9 : 3,
        })}` })),
    pre: ({ theme }) => ({
        padding: theme.spacing.xs,
        margin: 0,
        overflowX: 'auto',
    }),
}, { link: true });
