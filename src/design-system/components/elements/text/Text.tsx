/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import theme from '@/design-system/theme-ui.theme';
import { Assign, ForwardRef } from '@/design-system/types';

export interface TextProps
  extends Assign<ComponentPropsWithRef<'p'>, Omit<BoxOwnProps, 'as'>> {}

const TextBox = Box.withComponent('p');

const BaseTextStyle: SxStyleProp = {
  ...theme.styles.p,
  '&:last-of-type': {
    mb: 0,
  },
};

const Text: ForwardRef<HTMLParagraphElement, TextProps> = forwardRef(
  ({ ...props }, ref) => (
    <TextBox
      ref={ref}
      as="p"
      {...props}
      __themeKey="text"
      __css={{
        ...BaseTextStyle,
      }}
    />
  )
);

export { Text };
