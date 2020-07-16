/** @jsx jsx */
import { Box, jsx, Link } from 'theme-ui';
import React from 'react';
import get from 'lodash/get';

import theme from '@/design-system/theme-ui.theme';
import Icon from '@/design-system/components/icon/Icon';
import { ReactComponent as LinkIcon } from '@/design-system/icons/source/link-2.svg';
import { ThemeUiBoxProps } from '@/design-system/interface';

// @ts-ignore
export interface HeadingProps extends HTMLHeadingElement, ThemeUiBoxProps {
  /**
   * Sets the variable font-weight
   */
  fontWeight?: number;
  // If we dont declare the `as` and `variant` prop, again, then the docblock from the generic ThemeUiBoxProps wont be included in Storybook...
  as?: React.ElementType;
  // If we DO declare the `sx` prop, again, then the docblock from the generic ThemeUiBoxProps wont be included in Storybook ...
  // yeah - exact opposite of the `as` prop.
  // this is what happens when library authors dont write in TS but rely on ie. DefinitelyTyped types. SIGH
  // sx?: SxStyleProp;
}

const headingAnchorLinkStyles = {
  marginLeft: '-20px',
  paddingRight: 'pg1',
  opacity: 0,
};

const headingStyles = {
  position: 'relative',
  '&:hover > a': {
    opacity: 1,
  },
};

const HeadingAnchorLink: React.FunctionComponent<Pick<HeadingProps, 'id'>> = ({
  id,
}) => (
  <Link href={`#${id}`} sx={{ ...headingAnchorLinkStyles }}>
    <Icon size="20px" sx={{ verticalAlign: 'middle' }}>
      <LinkIcon />
    </Icon>
  </Link>
);

const Heading: React.FunctionComponent<HeadingProps> = ({
  fontWeight = 'heading',
  as = 'h2',
  variant = 'heading',
  id,
  children,
  sx,
  ...props
}) => (
  <Box
    as={as}
    variant={variant}
    sx={{
      ...headingStyles,
      // @ts-ignore
      fontVariationSettings: `"wght" ${
        get(theme, variant)
          ? theme.fontWeights[get(theme, variant)['fontWeight']]
          : theme.fontWeights[fontWeight]
      }`,
      ...sx,
    }}
    {...props}
  >
    {id && <HeadingAnchorLink id={id} />}
    {children}
  </Box>
);

export { Heading };
