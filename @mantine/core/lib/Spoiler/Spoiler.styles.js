import { createUseStyles } from 'react-jss';
export default createUseStyles({
    spoiler: {
        position: 'relative',
    },
    content: ({ transitionDuration }) => ({
        overflow: 'hidden',
        transitionProperty: 'max-height',
        transitionTimingFunction: 'ease',
        transitionDuration: transitionDuration || 0,
    }),
}, { link: true });
