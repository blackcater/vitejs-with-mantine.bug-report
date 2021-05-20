import { useState } from 'react';
export function useListState(initialValue = []) {
    const [state, setState] = useState(initialValue);
    const append = (...items) => setState((current) => [...current, ...items]);
    const prepend = (...items) => setState((current) => [...items, ...current]);
    const insert = (index, ...items) => setState((current) => [...current.slice(0, index), ...items, ...current.slice(index)]);
    const apply = (fn) => setState((current) => current.map((item, index) => fn(item, index)));
    const remove = (...indices) => setState((current) => current.filter((_, index) => !indices.includes(index)));
    const reorder = ({ from, to }) => setState((current) => {
        const cloned = [...current];
        const item = current[from];
        cloned.splice(from, 1);
        cloned.splice(to, 0, item);
        return cloned;
    });
    const setItem = (index, item) => setState((current) => {
        const cloned = [...current];
        cloned[index] = item;
        return cloned;
    });
    const setItemProp = (index, prop, value) => setState((current) => {
        const cloned = [...current];
        cloned[index] = Object.assign(Object.assign({}, cloned[index]), { [prop]: value });
        return cloned;
    });
    return [
        state,
        {
            setState,
            append,
            prepend,
            insert,
            apply,
            remove,
            reorder,
            setItem,
            setItemProp,
        },
    ];
}
