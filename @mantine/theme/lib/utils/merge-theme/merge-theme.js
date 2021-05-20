export function mergeTheme(currentTheme, themeOverride) {
    if (!themeOverride) {
        return currentTheme;
    }
    // @ts-ignore
    return Object.keys(currentTheme).reduce((acc, key) => {
        if (key === 'headings' && themeOverride.headings) {
            const sizes = themeOverride.headings.sizes
                ? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
                    // eslint-disable-next-line no-param-reassign
                    headingsAcc[h] = Object.assign(Object.assign({}, currentTheme.headings.sizes[h]), themeOverride.headings.sizes[h]);
                    return headingsAcc;
                }, {})
                : currentTheme.headings.sizes;
            return Object.assign(Object.assign({}, acc), { headings: Object.assign(Object.assign(Object.assign({}, currentTheme.headings), themeOverride.headings), { sizes }) });
        }
        acc[key] =
            typeof themeOverride[key] === 'object'
                ? Object.assign(Object.assign({}, currentTheme[key]), themeOverride[key]) : themeOverride[key] || currentTheme[key];
        return acc;
    }, {});
}
