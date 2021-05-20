import { createUseStyles } from 'react-jss';
import { getFontStyles } from '@mantine/core';
export default createUseStyles({
    tagsList: ({ theme }) => ({
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
    }),
    description: ({ theme }) => ({
        marginTop: theme.spacing.xs,
        marginBottom: theme.spacing.xs,
        padding: [0, theme.spacing.xs],
    }),
    searchInput: ({ theme }) => ({
        marginLeft: theme.spacing.xs,
        marginRight: theme.spacing.xs,
        marginBottom: theme.spacing.xs,
    }),
    createControl: ({ theme }) => (Object.assign(Object.assign({}, getFontStyles(theme)), { backgroundColor: 'transparent', border: 0, outline: 0, paddingLeft: theme.spacing.xs, paddingRight: theme.spacing.xs, width: '100%', textAlign: 'left', height: 32, color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black, cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex', alignItems: 'center' })),
    createControlBadge: {
        display: 'block !important',
    },
    createControlLabel: ({ theme }) => ({
        marginRight: 10,
        fontSize: theme.fontSizes.sm,
    }),
    createControlHovered: ({ theme }) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    }),
}, { link: true });
