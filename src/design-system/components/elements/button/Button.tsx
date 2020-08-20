/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';

export interface ButtonProps
  extends Assign<ComponentPropsWithRef<'button'>, BoxOwnProps> {}

const ButtonBox = Box.withComponent('button');

const BaseButtonStyle: SxStyleProp = {
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
};

const Button: ForwardRef<HTMLButtonElement, ButtonProps> = forwardRef(
  ({ ...props }, ref) => (
    <ButtonBox
      ref={ref}
      as="button"
      variant="simple"
      {...props}
      __themeKey="buttons"
      __css={{
        ...BaseButtonStyle,
      }}
    />
  )
);

export { Button };
