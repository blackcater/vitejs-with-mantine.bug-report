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
import { useId } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import useStyles from './Radio.styles';
export function Radio(_a) {
    var { className, themeOverride, id, children, style, size, elementRef, title, disabled, color } = _a, others = __rest(_a, ["className", "themeOverride", "id", "children", "style", "size", "elementRef", "title", "disabled", "color"]);
    const classes = useStyles({ color, size, theme: useMantineTheme(themeOverride) });
    const uuid = useId(id);
    return (React.createElement("div", { "data-mantine-radio": true, className: cx(classes.wrapper, className), style: style, title: title },
        React.createElement("label", { className: cx(classes.label, { [classes.labelDisabled]: disabled }), htmlFor: uuid },
            React.createElement("input", Object.assign({ ref: elementRef, className: classes.radio, type: "radio", id: uuid, disabled: disabled }, others)),
            React.createElement("span", null, children))));
}
Radio.displayName = '@mantine/core/Radio';
