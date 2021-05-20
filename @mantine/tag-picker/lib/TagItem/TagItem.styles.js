import { createUseStyles } from 'react-jss';
import { getFocusStyles } from '@mantine/core';
export default createUseStyles({
    item: {
        position: 'relative',
    },
    body: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    control: ({ theme }) => (Object.assign(Object.assign({}, getFocusStyles(theme)), { height: 32, flex: 1, textAlign: 'left', padding: 0, backgroundColor: 'transparent', border: '1px solid transparent', cursor: 'pointer', paddingLeft: 10, maxWidth: 'calc(100% - 34px)' })),
    controlInner: {
        display: 'flex',
    },
    badge: {
        display: 'block !important',
        width: 'auto',
    },
    hovered: ({ theme }) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    }),
}, { link: true });
