import { useTheme } from '../MantineProvider/theme-context';
import { mergeTheme } from '../utils/merge-theme/merge-theme';
import { DEFAULT_THEME } from '../default-theme';
export function useMantineTheme(themeOverride) {
    const internalTheme = Object.assign({}, useTheme());
    let mergedTheme = null;
    if (!internalTheme.__mantine_theme) {
        mergedTheme = mergeTheme(Object.assign({ __mantine_theme: true }, DEFAULT_THEME), themeOverride);
    }
    else {
        mergedTheme = mergeTheme(internalTheme, themeOverride);
    }
    delete mergedTheme.__mantine_theme;
    return mergedTheme;
}
