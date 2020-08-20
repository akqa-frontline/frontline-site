/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import React from 'react';
import {
  AccordionItem as ReachAccordionItem,
  AccordionItemProps as ReachAccordionItemProps,
} from '@reach/accordion';

export interface AccordionItemProps extends ReachAccordionItemProps {
  // accept theme-ui sx props
  sx?: SxStyleProp;
}

const BaseAccordionItemStyles = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const AccordionItem: React.FunctionComponent<AccordionItemProps> = ({
  children,
  disabled = false,
  sx,
  ...props
}) => {
  return (
    <ReachAccordionItem {...props} sx={{ ...BaseAccordionItemStyles, ...sx }}>
      {children}
    </ReachAccordionItem>
  );
};

export { AccordionItem, BaseAccordionItemStyles };
