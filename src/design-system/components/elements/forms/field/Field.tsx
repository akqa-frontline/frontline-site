/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';
import { Label } from '@/design-system/components/elements/forms/label/Label';
import { Input } from '@/design-system/components/elements/forms/input/Input';
import { getMargin, omitMargin } from '@/design-system/utils/margin';

export interface FieldProps
  extends Assign<ComponentPropsWithRef<'div'>, Omit<BoxOwnProps, 'as'>> {
  label: string;
  name: string;
  as: React.ElementType;
}

const FieldBox = Box.withComponent('div');

const BaseFieldStyle: SxStyleProp = {};

const Field: ForwardRef<HTMLDivElement, FieldProps> = forwardRef(
  ({ as: Control = Input, label, name, ...props }, ref) => (
    <FieldBox {...getMargin(props)}>
      <Label htmlFor={name} {...omitMargin(props)}>
        {label}
      </Label>
      <Control ref={ref} id={name} name={name} {...omitMargin(props)} />
    </FieldBox>
  )
);

export { Field };
