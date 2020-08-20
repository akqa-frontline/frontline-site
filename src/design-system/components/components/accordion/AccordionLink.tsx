/** @jsx jsx */
import { Box, jsx, SxStyleProp } from 'theme-ui';
import React from 'react';

import { BaseAccordionButtonStyles } from '@/design-system/components/components/accordion/AccordionButton';

export interface AccordionLinkProps {
  /**
   * Meant for anchor elements - some styles are reset on children anchor elements.
   */
  children: React.ReactNode;
  /**
   * Useful to convey hierachy in nested accordions, accepts theme-ui `fontSize` values
   */
  fontSize?: number | string | number[] | string[];
  /**
   * Useful to convey hierachy in nested accordions, accepts theme-ui `spacing` values
   */
  paddingLeft?: number | string | number[] | string[];
  /**
   * If true, will highlight the AccordionLink like when hovered
   */
  active?: boolean;
  // accept theme-ui sx props
  sx?: SxStyleProp;
}

const BaseAccordionLinkStyles = {
  ...BaseAccordionButtonStyles,
  textDecoration: 'none',
  // reset anchor styles
  color: 'secondary',
  '& > a, & > a:hover, & > a:focus, & > a:active': {
    color: 'inherit',
    textDecoration: 'none',
  },
};

const BaseAccordionLinkActiveStyles = {
  color: 'primary',
};

const AccordionLink: React.FunctionComponent<AccordionLinkProps> = ({
  children,
  fontSize = 1,
  paddingLeft = 'pg2',
  active = false,
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        ...BaseAccordionLinkStyles,
        // styles from props
        fontSize,
        paddingLeft,
        ...(active && {
          ...BaseAccordionLinkActiveStyles,
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export {
  AccordionLink,
  BaseAccordionLinkStyles,
  BaseAccordionLinkActiveStyles,
};
