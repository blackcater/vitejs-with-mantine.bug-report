import React, { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { useId, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, MantineSize, useMantineTheme } from '@mantine/theme';
import useStyles, { WRAPPER_PADDING } from './SegmentedControl.styles';

interface SegmentedControlItem {
  value: string;
  label: React.ReactNode;
}

export interface SegmentedControlProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Data based on which controls are rendered */
  data: SegmentedControlItem[];

  /** Current selected value */
  value: string;

  /** Called when value changes */
  onChange(value: string): void;

  /** Name of the radio group, default to random id */
  name?: string;

  /** True if component should have 100% width */
  fullWidth?: boolean;

  /** Active control color from theme, defaults to white in light color scheme and theme.colors.dark[9] in dark */
  color?: string;

  /** Controls font-size, paddings and height */
  size?: MantineSize;

  /** Border-radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Transition duration in ms, set to 0 to turn off transitions */
  transitionDuration?: number;

  /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;
}

export function SegmentedControl({
  className,
  themeOverride,
  data,
  name,
  value,
  onChange,
  color,
  fullWidth,
  radius = 'sm',
  size = 'sm',
  transitionDuration = 200,
  transitionTimingFunction,
  ...others
}: SegmentedControlProps) {
  // reduce motion should be implemented via js, there is a bug in jss with media queries
  // https://github.com/cssinjs/jss/issues/1320
  const reduceMotion = useReducedMotion();
  const theme = useMantineTheme(themeOverride);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const classes = useStyles({
    theme,
    size,
    fullWidth,
    color,
    radius,
    reduceMotion: reduceMotion || !shouldAnimate,
    transitionDuration,
    transitionTimingFunction,
  });

  const [activePosition, setActivePosition] = useState({ width: 0, translate: 0 });
  const uuid = useId(name);
  const refs = useRef<Record<string, HTMLLabelElement>>({});
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (value in refs.current && wrapperRef.current) {
        const element = refs.current[value];
        const rect = element.getBoundingClientRect();
        setActivePosition({
          width: rect.width,
          translate: rect.x - wrapperRef.current.getBoundingClientRect().x - WRAPPER_PADDING,
        });

        if (!shouldAnimate) {
          setTimeout(() => {
            setShouldAnimate(true);
          }, 4);
        }
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [value]);

  const controls = data.map((item) => (
    <div
      className={cx(classes.control, { [classes.controlActive]: value === item.value })}
      key={item.value}
    >
      <input
        data-mantine-radio
        className={classes.input}
        type="radio"
        name={uuid}
        value={item.value}
        id={`${uuid}-${item.value}`}
        checked={value === item.value}
        onChange={() => onChange(item.value)}
      />

      <label
        data-mantine-label
        className={cx(classes.label, { [classes.labelActive]: value === item.value })}
        htmlFor={`${uuid}-${item.value}`}
        ref={(node) => {
          refs.current[item.value] = node;
        }}
      >
        {item.label}
      </label>
    </div>
  ));

  return (
    <div className={cx(classes.wrapper, className)} ref={wrapperRef} {...others}>
      {!!value && (
        <span
          data-mantine-active
          className={classes.active}
          style={{
            width: activePosition.width,
            transform: `translateX(${activePosition.translate}px)`,
          }}
        />
      )}

      {controls}
    </div>
  );
}

SegmentedControl.displayName = '@mantine/core/SegmentedControl';
