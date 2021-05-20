import { createUseStyles } from 'react-jss';
import { getSizeValue, getThemeColor } from '@mantine/theme';
export const sizes = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
};
export default createUseStyles({
    hr: ({ theme, size, variant, color }) => ({
        border: 0,
        borderTopWidth: getSizeValue({ size, sizes }),
        borderTopColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
        borderTopStyle: variant,
        margin: 0,
    }),
}, { link: true });
