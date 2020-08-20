import React from 'react';
import { Assign, ForwardRef } from '@/design-system/types';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';

export interface SVGProps
  extends Assign<React.ComponentProps<'svg'>, BoxOwnProps> {
  size?: number | string;
}

const SVG: ForwardRef<HTMLOrSVGElement, SVGProps> = React.forwardRef(
  ({ size = 24, ...props }, ref) => (
    // @ts-ignore
    <Box
      // @ts-ignore
      ref={ref}
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={size + ''}
      height={size + ''}
      viewBox="0 0 24 24"
      fill="currentcolor"
      {...props}
    />
  )
);

export { SVG };
