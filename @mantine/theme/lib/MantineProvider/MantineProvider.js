import React from 'react';
import { DEFAULT_THEME } from '../default-theme';
import { mergeTheme } from '../utils/merge-theme/merge-theme';
import { ThemeProvider } from './theme-context';
export function MantineProvider({ children, theme }) {
    return (React.createElement(ThemeProvider, { theme: mergeTheme(Object.assign({ __mantine_theme: true }, DEFAULT_THEME), theme) }, children));
}
MantineProvider.displayName = '@mantine/Provider';
