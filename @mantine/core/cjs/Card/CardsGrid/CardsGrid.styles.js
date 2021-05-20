'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactJss = require('react-jss');
var theme = require('@mantine/theme');

var useStyles = reactJss.createUseStyles({
  grid: ({theme: theme$1, gutter, cardsPerRow, grow}) => {
    const gutterSize = theme.getSizeValue({size: gutter, sizes: theme$1.spacing});
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
}, {link: true});

exports.default = useStyles;
//# sourceMappingURL=CardsGrid.styles.js.map
