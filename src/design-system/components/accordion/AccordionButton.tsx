/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  AccordionButton as ReachAccordionButton,
  AccordionButtonProps as ReachAccordionButtonProps,
  useAccordionItemContext,
} from '@reach/accordion';

import Icon from '@/design-system/components/icon/Icon';
import { ReactComponent as ChevronRight } from '@/design-system/icons/source/chevron-right.svg';
import { ReactComponent as ChevronDown } from '@/design-system/icons/source/chevron-down.svg';

export interface AccordionButtonProps extends ReachAccordionButtonProps {
  /**
   * Useful to convey hierachy in nested accordions, accepts theme-ui `fontSize` values
   */
  fontSize?: number | string | number[] | string[];
  /**
   * Useful to convey hierachy in nested accordions, accepts theme-ui `spacing` values
   */
  paddingLeft?: number | string | number[] | string[];
}

const accordionButtonStyles = {
  // reset button
  border: 'none',
  padding: 0,
  // layout
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  // typography
  lineHeight: 2,
  // theme
  color: 'primary',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'light',
    cursor: 'pointer',
  },
};

const AccordionButton: React.FunctionComponent<AccordionButtonProps> = ({
  children,
  fontSize = 1,
  paddingLeft = 'pg2',
  ...props
}) => {
  const { isExpanded } = useAccordionItemContext();

  return (
    <ReachAccordionButton
      {...props}
      sx={{
        ...accordionButtonStyles,
        // styles from props
        fontSize,
        paddingLeft,
      }}
    >
      {children}
      <Icon color="secondary" width={[4, 5]} height={[4, 5]}>
        {isExpanded ? <ChevronDown /> : <ChevronRight />}
      </Icon>
    </ReachAccordionButton>
  );
};

export { AccordionButton, accordionButtonStyles };
