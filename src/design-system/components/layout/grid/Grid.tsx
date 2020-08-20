/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';
import { ResponsiveValue } from '../../../interface';

export interface GridProps
  extends Assign<ComponentPropsWithRef<'div'>, Omit<BoxOwnProps, 'as'>> {
  /**
   * Minimum width of child elements
   */
  width?: ResponsiveValue;

  /**
   * Number of (equally-sized) columns, or string with grid syntax for the layout (cannot be used in conjunction with the width prop)
   */
  columns?: ResponsiveValue;

  /**
   * Space between child elements
   */
  gap?: ResponsiveValue;
}

const GridBox = Box.withComponent('div');

const BaseGridStyle: SxStyleProp = {
  display: 'grid',
};

const px = n => (typeof n === 'number' ? n + 'px' : n);

const widthToColumns = (width: ResponsiveValue) =>
  Array.isArray(width)
    ? (width as Array<string | number>).map(widthToColumns)
    : !!width && `repeat(auto-fit, minmax(${px(width)}, 1fr))`;

const countToColumns = (n: ResponsiveValue) =>
  Array.isArray(n)
    ? (n as Array<string | number>).map(countToColumns)
    : !!n && (typeof n === 'number' ? `repeat(${n}, 1fr)` : n);

const Grid: ForwardRef<HTMLDivElement, GridProps> = forwardRef(
  ({ width, columns, gap = 3, ...props }, ref) => {
    const gridTemplateColumns = !!width
      ? widthToColumns(width)
      : countToColumns(columns);

    return (
      <GridBox
        ref={ref}
        {...props}
        __themeKey="grid"
        __css={{
          ...BaseGridStyle,
          gridGap: gap,
          gridTemplateColumns,
        }}
      />
    );
  }
);

export { Grid };
