/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';

export interface TextareaProps
  extends Assign<ComponentPropsWithRef<'textarea'>, Omit<BoxOwnProps, 'as'>> {}

const TextareaBox = Box.withComponent('textarea');

const BaseTextareaStyle: SxStyleProp = {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent',
};

const Textarea: ForwardRef<HTMLTextAreaElement, TextareaProps> = forwardRef(
  ({ ...props }, ref) => (
    <TextareaBox
      ref={ref}
      as="textarea"
      {...props}
      __themeKey="inputs"
      __css={{
        ...BaseTextareaStyle,
      }}
    />
  )
);

export { Textarea };
