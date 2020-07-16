/** @jsx jsx */
import { Box as ThemeUiBox, jsx } from 'theme-ui';
import React from 'react';
import { ThemeUiBoxProps } from '@/design-system/interface';

export interface BoxProps extends ThemeUiBoxProps {}

const Box: React.FunctionComponent<BoxProps> = ({
  children,
  as = 'div',
  sx,
  variant,
  ...props
}) => (
  <ThemeUiBox
    as={as}
    variant={variant}
    sx={{
      ...sx,
    }}
    {...props}
  >
    {children}
  </ThemeUiBox>
);

export default Box;
