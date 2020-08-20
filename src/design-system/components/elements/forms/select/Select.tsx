/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';
import { getMargin, omitMargin } from '@/design-system/utils/margin';
import { Icon } from '@/design-system/components/elements/icon/Icon';
import { ReactComponent as ChevronDown } from '@/design-system/icons/source/chevron-down.svg';

export interface SelectProps
  extends Assign<ComponentPropsWithRef<'select'>, Omit<BoxOwnProps, 'as'>> {}

const SelectBox = Box.withComponent('select');

const BaseSelectStyle: SxStyleProp = {
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

const Select: ForwardRef<HTMLSelectElement, SelectProps> = forwardRef(
  ({ ...props }, ref) => (
    <Box
      {...getMargin(props)}
      sx={{
        display: 'flex',
      }}
    >
      <SelectBox
        ref={ref}
        as="select"
        {...omitMargin(props)}
        __themeKey="inputs"
        __css={{
          ...BaseSelectStyle,
        }}
      />
      <Icon
        sx={{
          ml: -28,
          alignSelf: 'center',
          pointerEvents: 'none',
        }}
      >
        <ChevronDown />
      </Icon>
    </Box>
  )
);

export { Select };
