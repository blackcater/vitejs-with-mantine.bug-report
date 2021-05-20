import { createUseStyles } from 'react-jss';
import { getSizeValue, getFocusStyles } from '@mantine/theme';
export default createUseStyles({
    colorSwatch: ({ theme, radius }) => (Object.assign(Object.assign({}, getFocusStyles(theme)), { border: 0, borderRadius: getSizeValue({ size: radius, sizes: theme.radius }), appearance: 'none', WebkitAppearance: 'none', padding: 0 })),
}, { link: true });
