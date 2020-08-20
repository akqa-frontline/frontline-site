/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';
import { Icon } from '@/design-system/components/elements/icon/Icon';
import { SVG } from '@/design-system/components/elements/svg/SVG';
import { getThemeUiProps } from '@/design-system/utils/get-props';

export interface CheckboxProps
  extends Assign<ComponentPropsWithRef<'input'>, Omit<BoxOwnProps, 'as'>> {}

const CheckboxBox = Box.withComponent('input');

const CheckboxChecked = props => (
  <SVG {...props} viewBox="0 0 24 24">
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </SVG>
);

const CheckboxUnchecked = props => (
  <SVG {...props} viewBox="0 0 24 24">
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </SVG>
);

const CheckboxIcon = props => (
  <>
    <Icon
      size={4}
      sx={{
        display: 'none',
        'input:checked ~ &': {
          display: 'inline-flex',
        },
      }}
      {...props}
    >
      <CheckboxChecked />
    </Icon>
    <Icon
      size={4}
      sx={{
        display: 'inline-flex',
        'input:checked ~ &': {
          display: 'none',
        },
      }}
      {...props}
    >
      <CheckboxUnchecked />
    </Icon>
  </>
);

const BaseCheckboxStyle: SxStyleProp = {
  position: 'absolute',
  opacity: 0,
  zIndex: -1,
  width: 1,
  height: 1,
  overflow: 'hidden',
};

const Checkbox: ForwardRef<HTMLInputElement, CheckboxProps> = forwardRef(
  ({ className, sx, variant, ...props }, ref) => {
    const { sxProps, otherProps } = getThemeUiProps(props);

    return (
      <Box>
        <CheckboxBox
          ref={ref}
          as="input"
          type="checkbox"
          {...otherProps}
          __css={{
            ...BaseCheckboxStyle,
          }}
        />
        <Box
          as={CheckboxIcon}
          aria-hidden="true"
          __themeKey="checkbox"
          variant={variant}
          className={className}
          {...sxProps}
          sx={sx}
          __css={{
            mr: 2,
            borderRadius: 4,
            color: 'primary',
            'input:focus ~ &': {
              bg: 'highlight',
            },
          }}
        />
      </Box>
    );
  }
);

export { Checkbox };
