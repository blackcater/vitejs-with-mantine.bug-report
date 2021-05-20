import { createUseStyles } from 'react-jss';
import { getFontStyles, getThemeColor, getFocusStyles, getSizeValue, } from '@mantine/theme';
const sizes = {
    xs: {
        fontSize: 9,
        height: 16,
    },
    sm: {
        fontSize: 10,
        height: 18,
    },
    md: {
        fontSize: 11,
        height: 20,
    },
    lg: {
        fontSize: 13,
        height: 26,
    },
    xl: {
        fontSize: 16,
        height: 32,
    },
};
export const heights = Object.keys(sizes).reduce((acc, key) => {
    acc[key] = sizes[key].height;
    return acc;
}, {});
export default createUseStyles({
    leftSection: ({ theme }) => ({
        marginRight: theme.spacing.xs / 2,
    }),
    rightSection: ({ theme }) => ({
        marginLeft: theme.spacing.xs / 2,
    }),
    inner: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    badge: ({ theme, size, fullWidth, radius }) => {
        const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;
        return Object.assign(Object.assign(Object.assign({}, getFocusStyles(theme)), getFontStyles(theme)), { fontSize,
            height, WebkitTapHighlightColor: 'transparent', lineHeight: `${height - 2}px`, border: '1px solid transparent', textDecoration: 'none', padding: [0, getSizeValue({ size, sizes: theme.spacing }) / 1.5], boxSizing: 'border-box', display: fullWidth ? 'flex' : 'inline-flex', alignItems: 'center', justifyContent: 'center', width: fullWidth ? '100%' : 'auto', textTransform: 'uppercase', borderRadius: getSizeValue({ size: radius, sizes: theme.radius }), fontWeight: 700, letterSpacing: 0.25, cursor: 'default', textOverflow: 'ellipsis', overflow: 'hidden' });
    },
    light: ({ theme, color }) => ({
        backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 0 }),
        color: theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : getThemeColor({ theme, color, shade: 9 }),
    }),
    filled: ({ theme, color }) => ({
        backgroundColor: getThemeColor({ theme, color, shade: 7 }),
        color: theme.white,
        textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,
    }),
    outline: ({ theme, color }) => ({
        backgroundColor: 'transparent',
        color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
        borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    }),
}, { link: true });
