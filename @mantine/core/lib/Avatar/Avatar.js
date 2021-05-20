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
import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { PlaceholderIcon } from './PlaceholderIcon';
import useStyles, { sizes } from './Avatar.styles';
export const AVATAR_SIZES = sizes;
export function Avatar(_a) {
    var { className, size = 'md', src, alt, radius = 'sm', children, color = 'gray', themeOverride } = _a, others = __rest(_a, ["className", "size", "src", "alt", "radius", "children", "color", "themeOverride"]);
    const theme = useMantineTheme(themeOverride);
    const classes = useStyles({ color, radius, size, theme });
    const [error, setError] = useState(!src);
    useEffect(() => {
        !src ? setError(true) : setError(false);
    }, [src]);
    return (React.createElement("div", Object.assign({}, others, { "data-mantine-composable": true, className: cx(classes.avatar, className) }), error ? (React.createElement("div", { "data-mantine-placeholder": true, className: classes.placeholder, title: alt }, children || React.createElement(PlaceholderIcon, { className: classes.placeholderIcon }))) : (React.createElement("img", { className: classes.image, src: src, alt: alt, onError: () => setError(true) }))));
}
Avatar.displayName = '@mantine/core/Avatar';
