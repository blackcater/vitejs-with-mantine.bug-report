import { createMemoStyles, getSizeValue, MantineNumberSize, MantineTheme } from '@mantine/theme';

interface MenuStylesProps {
  theme: MantineTheme;
  size: MantineNumberSize;
}

export const sizes = {
  xs: 120,
  sm: 160,
  md: 200,
  lg: 240,
  xl: 300,
};

export default createMemoStyles({
  menu: ({ theme, size }: MenuStylesProps) => ({
    position: 'absolute',
    width: getSizeValue({ size, sizes }),
    overflow: 'hidden',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    paddingTop: theme.spacing.xs / 2,
    paddingBottom: theme.spacing.xs / 2,
  }),

  hr: ({ theme }: MenuStylesProps) => ({
    borderTopColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
    marginTop: theme.spacing.xs / 2,
    marginBottom: theme.spacing.xs / 2,
  }),
});
