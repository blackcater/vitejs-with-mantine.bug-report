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
import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/theme';
import { ImageIcon } from './ImageIcon';
import useStyles from './Image.styles';
export function Image(_a) {
    var { className, themeOverride, alt, src, fit = 'cover', width = '100%', height = 'auto', radius = 0, style, imageProps, withPlaceholder = false, placeholder, imageRef, elementRef } = _a, others = __rest(_a, ["className", "themeOverride", "alt", "src", "fit", "width", "height", "radius", "style", "imageProps", "withPlaceholder", "placeholder", "imageRef", "elementRef"]);
    const classes = useStyles({ radius, theme: useMantineTheme(themeOverride) });
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(!src);
    const isPlaceholder = withPlaceholder && (!loaded || error);
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        }
        else {
            setLoaded(false);
            setError(false);
        }
    }, [src]);
    return (React.createElement("div", Object.assign({ "data-mantine-image": true, className: cx(classes.wrapper, className), style: Object.assign({ width, height }, style), ref: elementRef }, others),
        isPlaceholder && (React.createElement("div", { "data-mantine-image-placeholder": true, className: classes.placeholderIcon, title: alt }, placeholder || React.createElement(ImageIcon, { style: { width: 40, height: 40 } }))),
        React.createElement("img", Object.assign({ className: cx(classes.image, imageProps === null || imageProps === void 0 ? void 0 : imageProps.className), src: src, alt: alt, style: Object.assign(Object.assign({}, imageProps === null || imageProps === void 0 ? void 0 : imageProps.style), { objectFit: fit }), ref: imageRef, onLoad: (event) => {
                setLoaded(true);
                typeof (imageProps === null || imageProps === void 0 ? void 0 : imageProps.onLoad) === 'function' && imageProps.onLoad(event);
            }, onError: (event) => {
                setError(true);
                typeof (imageProps === null || imageProps === void 0 ? void 0 : imageProps.onError) === 'function' && imageProps.onError(event);
            } }, imageProps))));
}
Image.displayName = '@mantine/core/Image';
