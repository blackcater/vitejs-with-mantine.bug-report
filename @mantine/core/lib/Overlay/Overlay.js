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
export function Overlay(_a) {
    var { opacity = 0.6, color = '#fff', zIndex = 1000, style, component: Element = 'div' } = _a, others = __rest(_a, ["opacity", "color", "zIndex", "style", "component"]);
    return (React.createElement(Element, Object.assign({ style: Object.assign({ opacity, backgroundColor: color, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex }, style) }, others)));
}
Overlay.displayName = '@mantine/core/Overlay';
