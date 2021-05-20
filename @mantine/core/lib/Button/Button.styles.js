import { createUseStyles } from 'react-jss';
import { getFontStyles, getSizeValue, getFocusStyles, getThemeColor, } from '@mantine/theme';
const sizes = {
    xs: {
        fontSize: 10,
        height: 22,
        padding: [0, 11],
    },
    sm: {
        fontSize: 11,
        height: 26,
        padding: [0, 13],
    },
    md: {
        fontSize: 13,
        height: 30,
        padding: [0, 15],
    },
    lg: {
        fontSize: 14,
        height: 36,
        padding: [0, 18],
    },
    xl: {
        fontSize: 16,
        height: 44,
        padding: [0, 22],
    },
};
export const heights = Object.keys(sizes).reduce((acc, size) => {
    acc[size] = sizes[size].height;
    return acc;
}, {});
const getWidthStyles = (fullWidth) => ({
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : 'auto',
});
export default createUseStyles({
    icon: {
        display: 'flex',
        alignItems: 'center',
    },
    leftIcon: {
        marginRight: 10,
    },
    rightIcon: {
        marginLeft: 10,
    },
    inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    label: {
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    shared: (props) => (Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, sizes[props.size]), getFontStyles(props.theme)), getFocusStyles(props.theme)), getWidthStyles(props.fullWidth)), { WebkitTapHighlightColor: 'transparent', userSelect: 'none', boxSizing: 'border-box', textDecoration: 'none', cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none' })),
    outline: ({ color, radius, theme }) => ({
        backgroundColor: 'transparent',
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 8 }),
        border: `1px solid ${getThemeColor({
            theme,
            color,
            shade: theme.colorScheme === 'dark' ? 4 : 8,
        })}`,
        '&:not(:disabled):active': {
            transform: 'translateY(1px)',
        },
        '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
            cursor: 'not-allowed',
        },
    }),
    light: ({ color, size, radius, theme }) => ({
        border: '1px solid transparent',
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 0 }),
        color: theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : getThemeColor({ theme, color, shade: 9 }),
        '& $inner': {
            height: sizes[size].height - 2,
        },
        '&:hover': {
            backgroundColor: getThemeColor({
                theme,
                color,
                shade: theme.colorScheme === 'dark' ? 5 : 1,
            }),
        },
        '&:not(:disabled):active': {
            transform: 'translateY(1px)',
        },
        '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
            textShadow: 'none',
            cursor: 'not-allowed',
        },
    }),
    filled: ({ color, size, radius, theme }) => ({
        border: '1px solid transparent',
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        backgroundColor: getThemeColor({ theme, color, shade: 6 }),
        textShadow: `1px 1px 0 ${getThemeColor({ theme, color, shade: 8 })}`,
        color: theme.white,
        '& $inner': {
            height: sizes[size].height - 2,
        },
        '&:hover': {
            backgroundColor: getThemeColor({ theme, color, shade: 7 }),
        },
        '&:not(:disabled):active': {
            transform: 'translateY(1px)',
        },
        '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
            textShadow: 'none',
            cursor: 'not-allowed',
        },
    }),
    link: ({ color, radius, theme }) => ({
        padding: 0,
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        backgroundColor: 'transparent',
        border: 0,
        display: 'inline-block',
        color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        },
        '&:disabled': {
            color: theme.colors.gray[5],
            cursor: 'not-allowed',
            '&:hover': {
                textDecoration: 'none',
            },
        },
    }),
}, { link: true });
