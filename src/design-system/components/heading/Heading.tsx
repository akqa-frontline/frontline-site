/** @jsx jsx */
import { Box, HeadingProps as ThemeUIHeadingProps, jsx } from 'theme-ui';
import React from 'react';

import theme from '@/design-system/theme-ui.theme';

export interface HeadingProps extends ThemeUIHeadingProps {
  fontWeight?: string | number;
}

const Heading = React.forwardRef(
  (
    props: React.PropsWithChildren<HeadingProps>,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    return (
      <Box
        ref={ref}
        as={props.as || 'h2'}
        variant={props.variant || 'heading'}
        sx={{
          fontVariationSettings: `"wght" ${props.fontWeight ||
            (theme[props.variant] && theme[props.variant].fontWeight) ||
            theme.fontWeights['heading']}`,
        }}
        {...props}
      />
    );
  },
);

export { Heading };
