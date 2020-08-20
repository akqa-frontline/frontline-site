/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { forwardRef, ComponentPropsWithRef } from 'react';

import theme from '@/design-system/theme-ui.theme';
import { Assign, ForwardRef } from '@/design-system/types';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';

export interface LinkProps
  extends Assign<ComponentPropsWithRef<'a'>, Omit<BoxOwnProps, 'as'>> {}

const AnchorBox = Box.withComponent('a');

const BaseLinkStyle: SxStyleProp = {
  ...theme.styles.a,
};

const Link: ForwardRef<HTMLAnchorElement, LinkProps> = forwardRef(
  ({ ...props }, ref) => (
    <AnchorBox
      ref={ref}
      as="a"
      // Since <Box/> has no default variant group, we add this for the users so they dont need to worry about typing out "links.foo" but can just type "foo".
      // {...(variant ? { variant: `links.${variant}` } : {})}
      {...props}
      __themeKey="links"
      __css={{
        ...BaseLinkStyle,
      }}
    />
  )
);

export { Link };
