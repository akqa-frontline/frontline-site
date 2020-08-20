/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';

export interface InputProps
  extends Assign<ComponentPropsWithRef<'input'>, Omit<BoxOwnProps, 'as'>> {
  prepend?: ReactNode;
  append?: ReactNode;
}

const InputBox = Box.withComponent('input');

const InputWrapperStyle: SxStyleProp = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

const BaseAppendPrependStyle: SxStyleProp = {
  position: 'absolute',
};

const PrependStyle: SxStyleProp = {
  ...BaseAppendPrependStyle,
  left: '0',
};

const AppendStyle: SxStyleProp = {
  ...BaseAppendPrependStyle,
  right: '0',
};

const BaseInputStyle: SxStyleProp = {
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

const Input: ForwardRef<HTMLInputElement, InputProps> = forwardRef(
  ({ prepend, append, ...props }, ref) => (
    <div sx={{ ...InputWrapperStyle }}>
      {prepend && <div sx={{ ...PrependStyle }}>{prepend}</div>}
      <InputBox
        ref={ref}
        as="input"
        {...props}
        __themeKey="inputs"
        __css={{
          ...BaseInputStyle,
        }}
      />
      {append && <div sx={{ ...AppendStyle }}>{append}</div>}
    </div>
  )
);

export { Input };
