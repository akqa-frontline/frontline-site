/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';

export interface ContainerProps
  extends Assign<ComponentPropsWithRef<'div'>, BoxOwnProps> {}

const ContainerBox = Box.withComponent('div');

const BaseContainerStyle: SxStyleProp = {
  width: '100%',
  maxWidth: 'container',
  mx: 'auto',
  padding: ['10px 20px', '20px 40px'],
};

const Container: ForwardRef<HTMLDivElement, ContainerProps> = forwardRef(
  (props, ref) => (
    <ContainerBox
      ref={ref}
      variant="container"
      {...props}
      __themeKey="layout"
      __css={{
        ...BaseContainerStyle,
      }}
    />
  )
);

export { Container };
