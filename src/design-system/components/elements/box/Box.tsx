import {
  css,
  get,
  SystemCssProperties,
  Theme,
  SystemStyleObject,
} from '@theme-ui/css';
import { ColorProps, SpaceProps } from 'styled-system';
import React from 'react';
import { InterpolationWithTheme, ObjectInterpolation } from '@emotion/core';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import space from '@styled-system/space';
import color from '@styled-system/color';
import { Assign } from '@/design-system/types';
import { StyledComponent } from '@emotion/styled-base';
import styled from '@emotion/styled';
import { SxStyleProp } from 'theme-ui';

export interface BoxOwnProps extends SpaceProps, ColorProps {
  /**
   * If you want to keep all the styling you've applied to a component but just switch out what's being ultimately rendered
   * (be it a different HTML tag or a different custom component), you can use the `as` prop to do this at runtime.
   */
  as?: React.ElementType;
  /**
   * Variants allow you to define the styles used across multiple buttons, typographic elements, or any element in your theme object.
   */
  variant?: string;
  /**
   * The `sx` prop accepts a `SxStyleProp` object and properties that are part of
   * the `Theme` will be transformed to their corresponding values. Other valid
   * CSS properties are also allowed.
   */
  sx?: SxStyleProp;

  css?: InterpolationWithTheme<any>;

  __themeKey?: string;
  __css?: SystemCssProperties;
}

export interface BoxProps
  extends Assign<
    React.ComponentProps<'div'>,
    Omit<BoxOwnProps, '__themeKey'>
  > {}

const BaseBoxStyles: SystemStyleObject = {
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
};

const shouldForwardProp = createShouldForwardProp([
  ...space.propNames,
  ...color.propNames,
]);

const sx = (props: { sx?: SystemStyleObject; theme?: Theme }) =>
  css(props.sx)(props.theme) as ObjectInterpolation<any>;

const base = (props: { __css?: SystemCssProperties; theme?: Theme }) =>
  css(props.__css)(props.theme) as ObjectInterpolation<any>;

const variant = ({ theme, variant, __themeKey = 'variants' }: any) =>
  css(
    get(theme, __themeKey + '.' + variant, get(theme, variant))
  ) as () => ObjectInterpolation<any>;

const Box: StyledComponent<
  React.ComponentProps<'div'>,
  BoxOwnProps,
  {}
> = styled('div', { shouldForwardProp })(
  BaseBoxStyles,
  base,
  variant,
  space,
  color,
  sx,
  (props: any) => props.css
);

export { Box };
