import { createUseStyles } from 'react-jss';
import { getSizeValue } from '@mantine/theme';
export default createUseStyles({
    grid: ({ theme, gutter, cardsPerRow, grow }) => {
        const gutterSize = getSizeValue({ size: gutter, sizes: theme.spacing });
        const getCardFlex = (perRow) => `${grow ? 1 : 0} 0 calc(${100 / perRow}% - ${gutterSize}px)`;
        return {
            display: 'flex',
            flexWrap: 'wrap',
            margin: -gutterSize / 2,
            '& [data-mantine-card]': {
                margin: gutterSize / 2,
                flex: getCardFlex(cardsPerRow),
            },
        };
    },
}, { link: true });
