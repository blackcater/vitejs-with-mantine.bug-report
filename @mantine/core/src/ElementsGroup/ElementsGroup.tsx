import React, { Children } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize } from '@mantine/theme';
import useStyles, { ElementsGroupPosition } from './ElementsGroup.styles';

export interface ElementsGroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Defines justify-content property */
  position?: ElementsGroupPosition;

  /** Defined flex-wrap property */
  noWrap?: boolean;

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: MantineNumberSize;
}

export type { ElementsGroupPosition };

export function ElementsGroup({
  className,
  position = 'left',
  children,
  noWrap = false,
  grow = false,
  spacing = 'md',
  themeOverride,
  ...others
}: ElementsGroupProps) {
  const classes = useStyles({
    grow,
    noWrap,
    spacing,
    position,
    theme: useMantineTheme(themeOverride),
  });

  const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
    React.cloneElement(child, { className: cx(classes.child, child.props.className) })
  );

  return (
    <div className={className} {...others}>
      <div className={classes.elementsGroup}>{items}</div>
    </div>
  );
}

ElementsGroup.displayName = '@mantine/core/ElementsGroup';
