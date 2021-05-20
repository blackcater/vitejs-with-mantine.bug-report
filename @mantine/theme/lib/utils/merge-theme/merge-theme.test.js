import { mergeTheme } from './merge-theme';
import { DEFAULT_THEME } from '../../default-theme';
describe('@mantine/theme/merge-theme', () => {
    it('shallow merges non-object properties', () => {
        expect(mergeTheme(Object.assign({ __mantine_theme: true }, DEFAULT_THEME), { primaryColor: 'red', white: '#ccc' })).toEqual(Object.assign(Object.assign({ __mantine_theme: true }, DEFAULT_THEME), { primaryColor: 'red', white: '#ccc' }));
    });
    it('shallow merges theme object properties', () => {
        expect(mergeTheme(Object.assign({ __mantine_theme: true }, DEFAULT_THEME), { colors: { stone: ['#ccc', '#ddd', '#eee'], red: ['red'] }, spacing: { xl: 900 } })).toEqual(Object.assign(Object.assign({ __mantine_theme: true }, DEFAULT_THEME), { colors: Object.assign(Object.assign({}, DEFAULT_THEME.colors), { stone: ['#ccc', '#ddd', '#eee'], red: ['red'] }), spacing: Object.assign(Object.assign({}, DEFAULT_THEME.spacing), { xl: 900 }) }));
    });
    it('merges headings correctly', () => {
        expect(mergeTheme(Object.assign({ __mantine_theme: true }, DEFAULT_THEME), { headings: { fontFamily: 'sans-serif', sizes: { h3: { fontSize: 500 } } } })).toEqual(Object.assign(Object.assign({ __mantine_theme: true }, DEFAULT_THEME), { headings: Object.assign(Object.assign({}, DEFAULT_THEME.headings), { fontFamily: 'sans-serif', sizes: Object.assign(Object.assign({}, DEFAULT_THEME.headings.sizes), { h3: Object.assign(Object.assign({}, DEFAULT_THEME.headings.sizes.h3), { fontSize: 500 }) }) }) }));
    });
});
