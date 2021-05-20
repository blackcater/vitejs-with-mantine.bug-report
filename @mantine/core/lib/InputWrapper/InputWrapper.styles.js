import { createUseStyles } from 'react-jss';
import { getFontStyles } from '@mantine/theme';
export default createUseStyles({
    inputWrapper: ({ theme }) => (Object.assign(Object.assign({}, getFontStyles(theme)), { lineHeight: theme.lineHeight })),
    label: ({ theme }) => ({
        display: 'block',
        marginBottom: 5,
        fontSize: 14,
        fontWeight: 500,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
        wordBreak: 'break-word',
    }),
    error: ({ theme }) => ({
        marginTop: theme.spacing.xs / 2,
        wordBreak: 'break-word',
    }),
    description: ({ theme }) => ({
        marginTop: theme.spacing.xs / 2,
        marginBottom: theme.spacing.xs / 2,
        wordBreak: 'break-word',
    }),
    required: ({ theme }) => ({
        color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
    }),
}, { link: true });
