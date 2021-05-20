import { createUseStyles } from 'react-jss';
import { getSizeValue } from '@mantine/theme';
export default createUseStyles({
    paper: ({ theme, radius, shadow, padding }) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        boxSizing: 'border-box',
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        boxShadow: theme.shadows[shadow] || shadow || 'none',
        padding: getSizeValue({ size: padding, sizes: theme.spacing }),
    }),
}, { link: true });
