import { createUseStyles } from 'react-jss';
export default createUseStyles({
    notifications: ({ theme }) => ({
        width: `calc(100% - ${theme.spacing.md * 2}px)`,
        boxSizing: 'border-box',
        position: 'fixed',
        zIndex: 1000,
    }),
    notification: ({ theme }) => ({
        '& + &': {
            marginTop: theme.spacing.sm,
        },
    }),
}, { link: true });
