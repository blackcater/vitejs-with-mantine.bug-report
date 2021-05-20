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
import { useMantineTheme, getThemeColor, getSizeValue, } from '@mantine/theme';
export const LOADER_SIZES = {
    xs: 18,
    sm: 22,
    md: 36,
    lg: 44,
    xl: 58,
};
export function Loader(_a) {
    var { size = 'md', color, themeOverride } = _a, others = __rest(_a, ["size", "color", "themeOverride"]);
    const theme = useMantineTheme(themeOverride);
    return (React.createElement("svg", Object.assign({ width: `${getSizeValue({ size, sizes: LOADER_SIZES })}px`, fill: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }), viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg", role: "presentation" }, others),
        React.createElement("rect", { y: "10", width: "15", height: "120", rx: "6" },
            React.createElement("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            React.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })),
        React.createElement("rect", { x: "30", y: "10", width: "15", height: "120", rx: "6" },
            React.createElement("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            React.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })),
        React.createElement("rect", { x: "60", width: "15", height: "140", rx: "6" },
            React.createElement("animate", { attributeName: "height", begin: "0s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            React.createElement("animate", { attributeName: "y", begin: "0s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })),
        React.createElement("rect", { x: "90", y: "10", width: "15", height: "120", rx: "6" },
            React.createElement("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            React.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })),
        React.createElement("rect", { x: "120", y: "10", width: "15", height: "120", rx: "6" },
            React.createElement("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
            React.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" }))));
}
Loader.displayName = '@mantine/core/Loader';
