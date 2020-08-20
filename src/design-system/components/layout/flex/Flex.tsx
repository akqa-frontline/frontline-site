/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';

export interface FlexProps
  extends Assign<ComponentPropsWithRef<'div'>, Omit<BoxOwnProps, 'as'>> {}

const FlexBox = Box.withComponent('div');

const BaseFlexStyle: SxStyleProp = {
  display: 'flex',
};

const Flex: ForwardRef<HTMLDivElement, FlexProps> = forwardRef((props, ref) => (
  <FlexBox
    ref={ref}
    {...props}
    __css={{
      ...BaseFlexStyle,
    }}
  />
));

export { Flex };
