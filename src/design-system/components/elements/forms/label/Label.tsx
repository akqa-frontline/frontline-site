/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';

export interface LabelProps
  extends Assign<ComponentPropsWithRef<'label'>, Omit<BoxOwnProps, 'as'>> {}

const LabelBox = Box.withComponent('label');

const BaseLabelStyle: SxStyleProp = {
  width: '100%',
  display: 'flex',
};

const Label: ForwardRef<HTMLLabelElement, LabelProps> = forwardRef(
  ({ ...props }, ref) => (
    <LabelBox
      ref={ref}
      as="label"
      {...props}
      __themeKey="labels"
      __css={{
        ...BaseLabelStyle,
      }}
    />
  )
);

export { Label };
