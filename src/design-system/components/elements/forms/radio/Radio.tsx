/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';
import { Icon } from '@/design-system/components/elements/icon/Icon';
import { SVG } from '@/design-system/components/elements/svg/SVG';
import { getThemeUiProps } from '@/design-system/utils/get-props';

export interface RadioProps
  extends Assign<ComponentPropsWithRef<'input'>, Omit<BoxOwnProps, 'as'>> {}

const RadioBox = Box.withComponent('input');

const RadioChecked = props => (
  <SVG {...props} viewBox="0 0 24 24">
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </SVG>
);

const RadioUnchecked = props => (
  <SVG {...props} viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </SVG>
);

const RadioIcon = props => (
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
      <RadioChecked />
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
      <RadioUnchecked />
    </Icon>
  </>
);

const BaseRadioStyle: SxStyleProp = {
  position: 'absolute',
  opacity: 0,
  zIndex: -1,
  width: 1,
  height: 1,
  overflow: 'hidden',
};

const Radio: ForwardRef<HTMLInputElement, RadioProps> = forwardRef(
  ({ className, sx, variant, ...props }, ref) => {
    const { sxProps, otherProps } = getThemeUiProps(props);

    return (
      <Box>
        <RadioBox
          ref={ref}
          as="input"
          type="radio"
          {...otherProps}
          __css={{
            ...BaseRadioStyle,
          }}
        />
        <Box
          as={RadioIcon}
          aria-hidden="true"
          __themeKey="radio"
          variant={variant}
          className={className}
          {...sxProps}
          sx={sx}
          __css={{
            mr: 2,
            borderRadius: 9999,
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

export { Radio };
