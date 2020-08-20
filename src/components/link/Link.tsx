import React, { ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import {
  Link as UILink,
  LinkProps as UILinkProps,
} from '@/design-system/components/elements/link/Link';
import { Assign } from '@/design-system/types';

export interface LinkProps extends Assign<NextLinkProps, UILinkProps> {
  children: ReactNode;
}

/**
 * Enhanced Next Link
 *
 * We deal with the href-less a tag so you dont have to - happy typescript compilation and linting
 */
export const Link = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...rest
}: LinkProps) => (
  <NextLink
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    passHref={true}
    prefetch={prefetch}
  >
    {/* href is passed by NextLink */}
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
    <UILink {...rest} />
  </NextLink>
);
