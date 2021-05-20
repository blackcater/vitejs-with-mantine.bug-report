var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './CardsGrid.styles';
export function CardsGrid(_a) {
    var { gutter = 'md', cardsPerRow = 1, grow = false, children, className, themeOverride } = _a, others = __rest(_a, ["gutter", "cardsPerRow", "grow", "children", "className", "themeOverride"]);
    const classes = useStyles({
        cardsPerRow,
        gutter,
        grow,
        theme: useMantineTheme(themeOverride),
    });
    return (React.createElement("div", Object.assign({ className: cx(classes.grid, className) }, others), children));
}
CardsGrid.displayName = '@mantine/core/CardsGrid';
