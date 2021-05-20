export function getFontStyles(theme) {
    return {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        fontFamily: theme.fontFamily || 'sans-serif',
    };
}
