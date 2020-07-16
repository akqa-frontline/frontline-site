import React from 'react';
import { BoxProps, SxStyleProp } from 'theme-ui';

// https://theme-ui.com/components/box
export interface ThemeUiBoxProps extends BoxProps, React.ComponentProps<'div'> {
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
}
