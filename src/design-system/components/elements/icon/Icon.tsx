/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { forwardRef, ComponentPropsWithRef } from 'react';
import { Assign, ForwardRef } from '@/design-system/types';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { ResponsiveValue } from 'styled-system';

export interface IconProps
  extends Assign<
    ComponentPropsWithRef<'i'>,
    Omit<BoxOwnProps, 'as' | 'variant'>
  > {
  size?: ResponsiveValue<number> | ResponsiveValue<string>;
}

const IconBox = Box.withComponent('i');

const BaseIconStyles: SxStyleProp = {
  display: 'inline-flex',
  verticalAlign: 'middle',
  // lineHeight: '1',
  '> svg': {
    width: '1em',
    height: '1em',
  },
};

const Icon: ForwardRef<HTMLElement, IconProps> = forwardRef(
  ({ sx, size = 1, ...props }, ref) => (
    <IconBox
      ref={ref}
      as="i"
      sx={{
        fontSize: size,
        ...sx,
      }}
      {...props}
      __themeKey="icons"
      __css={{
        ...BaseIconStyles,
      }}
    />
  )
);

export { Icon };
