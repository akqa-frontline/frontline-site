/** @jsx jsx */
import { Box, BoxProps, jsx } from 'theme-ui';
import React from 'react';
import { ThemeUiBoxProps } from '@/design-system/interface';

export interface IconProps extends Omit<ThemeUiBoxProps, 'variant'> {
  /**
   * By default the icon will size itself relative to the parent, but size can be overwritten using the `size` prop.
   */
  size?: number | number[] | string | string[];
  /**
   * Color allows you to set the color of the icon using theme values.
   */
  color?: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  size = '1em',
  color = 'currentColor',
  children,
  sx,
  ...props
}) => (
  <Box
    as="i"
    sx={{
      display: 'inline-block',
      verticalAlign: 'middle',
      lineHeight: '1',
      fontSize: size,
      color: color,
      '> svg': {
        width: '1em',
        height: '1em',
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default Icon;
