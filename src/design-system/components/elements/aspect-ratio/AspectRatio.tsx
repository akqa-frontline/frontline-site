/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';

export interface AspectRatioProps
  extends Assign<
    ComponentPropsWithRef<'div'>,
    Omit<BoxOwnProps, 'as' | 'variant'>
  > {
  ratio?: number | number[];
}

const toResponsiveValues = (n: number | number[]) =>
  Array.isArray(n)
    ? (n as number[]).map(toResponsiveValues)
    : !!n && 100 / n + '%';

const AspectRatio: ForwardRef<HTMLDivElement, AspectRatioProps> = forwardRef(
  ({ ratio = 4 / 3, children, ...props }, ref) => (
    <Box
      ref={ref}
      {...props}
      __css={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 0,
          paddingBottom: toResponsiveValues(ratio),
        }}
      />
      <Box
        {...props}
        __css={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  )
);

export { AspectRatio };
