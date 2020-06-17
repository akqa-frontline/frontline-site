/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import {
  AccordionButton as ReachAccordionButton,
  AccordionButtonProps,
  useAccordionItemContext,
} from '@reach/accordion';

import Icon from '@/design-system/components/icon/Icon';
import { ReactComponent as ChevronRight } from '@/design-system/icons/source/chevron-right.svg';
import { ReactComponent as ChevronDown } from '@/design-system/icons/source/chevron-down.svg';

const AccordionButton: React.FunctionComponent<AccordionButtonProps> = ({
  children,
  ...props
}) => {
  const { isExpanded } = useAccordionItemContext();

  return (
    <ReachAccordionButton
      {...props}
      sx={{
        // reset button
        border: 'none',
        // layout
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        // theme
        paddingX: 2,
        paddingY: 1,
        color: 'primary',
        backgroundColor: 'transparent',
        fontSize: [1, 2],
        '&:hover': {
          backgroundColor: 'light',
        },
      }}
    >
      {children}
      <Icon color="secondary" width={[4, 5]} height={[4, 5]}>
        {isExpanded ? <ChevronDown /> : <ChevronRight />}
      </Icon>
    </ReachAccordionButton>
  );
};

export { AccordionButton };
