/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React from 'react';
import {
  AccordionButton as ReachAccordionButton,
  AccordionButtonProps as ReachAccordionButtonProps,
  useAccordionItemContext,
} from '@reach/accordion';

import { Icon } from '@/design-system/components/elements/icon/Icon';
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
  // accept theme-ui sx props
  sx?: SxStyleProp;
}

const BaseAccordionButtonStyles = {
  // reset button
  border: 'none',
  padding: 0,
  outline: 'none',
  // layout
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  // typography
  lineHeight: 2,
  // theme
  color: 'secondary',
  backgroundColor: 'transparent',
  borderRadius: 'default',
  '&:hover': {
    backgroundColor: 'muted',
    color: 'primaryHover',
    cursor: 'pointer',
  },
};

const AccordionButton: React.FunctionComponent<AccordionButtonProps> = ({
  children,
  fontSize = 1,
  paddingLeft = 'pg2',
  sx,
  ...props
}) => {
  const { isExpanded } = useAccordionItemContext();

  return (
    <ReachAccordionButton
      {...props}
      sx={{
        ...BaseAccordionButtonStyles,
        // styles from props
        fontSize,
        paddingLeft,
        ...sx,
      }}
    >
      {children}
      <Icon mr="pg1" color="gray.5" size={[4, 5]}>
        {isExpanded ? <ChevronDown /> : <ChevronRight />}
      </Icon>
    </ReachAccordionButton>
  );
};

export { AccordionButton, BaseAccordionButtonStyles };
