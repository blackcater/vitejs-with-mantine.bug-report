import { createUseStyles } from 'react-jss';
import { getSizeValue } from '@mantine/theme';
export const sizes = {
    xs: 570,
    sm: 770,
    md: 970,
    lg: 1170,
    xl: 1370,
};
export default createUseStyles({
    container: ({ fluid, size, padding, theme }) => ({
        maxWidth: fluid ? '100%' : getSizeValue({ size, sizes }),
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: getSizeValue({ size: padding, sizes: theme.spacing }),
        paddingRight: getSizeValue({ size: padding, sizes: theme.spacing }),
    }),
}, { link: true });
