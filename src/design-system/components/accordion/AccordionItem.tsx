/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  AccordionItem as ReachAccordionItem,
  AccordionItemProps as ReachAccordionItemProps,
} from '@reach/accordion';

export interface AccordionItemProps extends ReachAccordionItemProps {}

const accordionItemStyles = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const AccordionItem: React.FunctionComponent<AccordionItemProps> = ({
  children,
  disabled = false,
  ...props
}) => {
  return (
    <ReachAccordionItem {...props} sx={{ ...accordionItemStyles }}>
      {children}
    </ReachAccordionItem>
  );
};

export { AccordionItem, accordionItemStyles };
