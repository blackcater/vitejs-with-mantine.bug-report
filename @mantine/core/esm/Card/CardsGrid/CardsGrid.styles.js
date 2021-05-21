import { createMemoStyles, getSizeValue } from '@mantine/theme';

var useStyles = createMemoStyles({
  grid: ({theme, gutter, cardsPerRow, grow}) => {
    const gutterSize = getSizeValue({size: gutter, sizes: theme.spacing});
    const getCardFlex = (perRow) => `${grow ? 1 : 0} 0 calc(${100 / perRow}% - ${gutterSize}px)`;
    return {
      display: "flex",
      flexWrap: "wrap",
      margin: -gutterSize / 2,
      "& [data-mantine-card]": {
        margin: gutterSize / 2,
        flex: getCardFlex(cardsPerRow)
      }
    };
  }
});

export default useStyles;
//# sourceMappingURL=CardsGrid.styles.js.map
