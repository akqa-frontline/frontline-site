/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Assign, ForwardRef } from '@/design-system/types';
import theme from '@/design-system/theme-ui.theme';

export interface ImageProps
  extends Assign<ComponentPropsWithRef<'img'>, Omit<BoxOwnProps, 'as'>> {}

const ImageBox = Box.withComponent('img');

const BaseImageStyle: SxStyleProp = {
  ...theme.styles.img,
};

const Image: ForwardRef<HTMLImageElement, ImageProps> = forwardRef(
  (props, ref) => (
    <ImageBox
      ref={ref}
      as="img"
      {...props}
      __themeKey="images"
      __css={{
        ...BaseImageStyle,
      }}
    />
  )
);

export { Image };
