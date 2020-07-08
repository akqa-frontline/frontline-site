/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import { accordionButtonStyles } from '@/design-system/components/accordion/AccordionButton';

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
}

const accordionLinkStyles = {
  ...accordionButtonStyles,
  textDecoration: 'none',
  // reset anchor styles
  '& > a, & > a:hover, & > a:focus, & > a:active': {
    color: 'inherit',
    textDecoration: 'none',
  },
};

const accordionLinkActiveStyles = {
  backgroundColor: 'light',
};

const AccordionLink: React.FunctionComponent<AccordionLinkProps> = ({
  children,
  fontSize = 1,
  paddingLeft = 'pg2',
  active = false,
  ...props
}) => {
  return (
    <div
      {...props}
      sx={{
        ...accordionLinkStyles,
        // styles from props
        fontSize,
        paddingLeft,
        ...(active && {
          ...accordionLinkActiveStyles,
        }),
      }}
    >
      {children}
    </div>
  );
};

export { AccordionLink, accordionLinkStyles, accordionLinkActiveStyles };
