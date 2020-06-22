import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ComponentProps } from 'react';

export interface LinkProps
  extends NextLinkProps,
    Omit<ComponentProps<'a'>, keyof NextLinkProps> {}

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
    passHref={passHref}
    prefetch={prefetch}
  >
    {/* href is passed by NextLink */}
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
    <a {...rest} />
  </NextLink>
);
