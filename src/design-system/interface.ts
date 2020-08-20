import React from 'react';
import { BoxProps, SxStyleProp } from 'theme-ui';
import { OverwriteCSSProperties } from '@styled-system/css';

// https://theme-ui.com/components/box
export interface ThemeUiBoxProps extends BoxProps {
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

/**
 * Theme UI includes a shorthand syntax for writing mobile-first responsive styles using arrays as values.
 * This is useful when you want to change a single property across multiple breakpoints without needing to write verbose media query syntax.
 */
export type ResponsiveValue = string | string[] | number | number[];
