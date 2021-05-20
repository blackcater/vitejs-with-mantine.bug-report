import { createUseStyles } from 'react-jss';
import { getSizeValue, getFontStyles } from '@mantine/theme';
export default createUseStyles({
    wrapper: {
        position: 'relative',
        overflow: 'hidden',
    },
    image: ({ theme, radius }) => (Object.assign(Object.assign({}, getFontStyles(theme)), { display: 'block', width: '100%', height: '100%', borderRadius: getSizeValue({ size: radius, sizes: theme.radius }), border: 0 })),
    placeholderIcon: ({ theme, radius }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        position: 'absolute',
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }),
}, { link: true });
