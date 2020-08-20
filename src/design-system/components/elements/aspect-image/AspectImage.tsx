/** @jsx jsx */
import { jsx } from 'theme-ui';
import { forwardRef } from 'react';
import { ForwardRef } from '@/design-system/types';
import {
  Image,
  ImageProps,
} from '@/design-system/components/elements/image/Image';
import { AspectRatio } from '@/design-system/components/elements/aspect-ratio/AspectRatio';

export interface AspectImageProps extends Omit<ImageProps, 'as' | 'variant'> {
  ratio?: number | number[];
}

const AspectImage: ForwardRef<HTMLImageElement, AspectImageProps> = forwardRef(
  ({ ratio, ...props }, ref) => (
    <AspectRatio ratio={ratio}>
      <Image ref={ref} {...props} __css={{ objectFit: 'cover' }} />
    </AspectRatio>
  )
);

export { AspectImage };
