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
import React, { Children, cloneElement, useState } from 'react';
import { useId } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Radio } from './Radio/Radio';
import { sizes } from './Radio/Radio.styles';
import useStyles from './RadioGroup.styles';
export const RADIO_SIZES = sizes;
export { Radio };
export function RadioGroup(_a) {
    var { className, themeOverride, name, children, value, defaultValue, onChange, variant = 'horizontal', spacing = 'md', color, size } = _a, others = __rest(_a, ["className", "themeOverride", "name", "children", "value", "defaultValue", "onChange", "variant", "spacing", "color", "size"]);
    const [_value, setValue] = useState(value || defaultValue || '');
    const finalValue = typeof value === 'string' ? value : _value;
    const classes = useStyles({ spacing, variant, theme: useMantineTheme(themeOverride) });
    const uuid = useId(name);
    const handleChange = (v) => {
        setValue(v);
        typeof onChange === 'function' && onChange(v);
    };
    const radios = Children.toArray(children)
        .filter((item) => item.type === Radio)
        .map((radio, index) => cloneElement(radio, {
        key: index,
        checked: finalValue === radio.props.value,
        name: uuid,
        color,
        size,
        onChange: (event) => handleChange(event.currentTarget.value),
    }));
    return (React.createElement(InputWrapper, Object.assign({ labelElement: "div" }, others),
        React.createElement("div", { role: "radiogroup", className: classes.wrapper }, radios)));
}
RadioGroup.displayName = '@mantine/core/RadioGroup';
