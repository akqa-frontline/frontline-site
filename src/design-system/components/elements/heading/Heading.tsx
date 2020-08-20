/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React, { ComponentPropsWithRef, forwardRef } from 'react';

import theme from '@/design-system/theme-ui.theme';
import { Icon } from '@/design-system/components/elements/icon/Icon';
import LinkIcon from '@/design-system/icons/source/link-2.svg';
import { Assign, ForwardRef } from '@/design-system/types';
import { Box, BoxOwnProps } from '@/design-system/components/elements/box/Box';
import { Link } from '@/design-system/components/elements/link/Link';

export interface HeadingProps
  extends Assign<ComponentPropsWithRef<'h2'>, BoxOwnProps> {}

const HeadingBox = Box.withComponent('h2');

const HeadingAnchorLinkStyles = {
  marginLeft: '-24px',
  paddingRight: '4px',
  opacity: 0,
};

const BaseHeadingStyles: SxStyleProp = {
  position: 'relative',
  '&:last-of-type': {
    mb: 0,
  },
};

const HeadingAnchorStyles: SxStyleProp = {
  '&:hover > a': {
    opacity: 1,
  },
};

const HeadingAnchorLink: React.FunctionComponent<Pick<HeadingProps, 'id'>> = ({
  id,
}) => (
  <Link href={`#${id}`} sx={{ ...HeadingAnchorLinkStyles }}>
    <Icon size="20px" sx={{ verticalAlign: 'middle' }}>
      <LinkIcon />
    </Icon>
  </Link>
);

const Heading: ForwardRef<HTMLHeadingElement, HeadingProps> = forwardRef(
  ({ id, as = 'h2', variant, children, ...props }, ref) => (
    <HeadingBox
      ref={ref}
      as={as}
      variant="heading"
      {...props}
      __themeKey="text"
      __css={{
        ...BaseHeadingStyles,
        // Applied if the Heading has an `id` prop or attribute.
        ...(id && { ...HeadingAnchorStyles }),
        // Apply variant styles if variant is used - if not apply appropriate heading level styles
        ...(variant ? theme.text[variant] : theme.styles[as as string]),
      }}
      id={id}
    >
      {id && <HeadingAnchorLink id={id} />}
      {children}
    </HeadingBox>
  )
);

export { Heading };
