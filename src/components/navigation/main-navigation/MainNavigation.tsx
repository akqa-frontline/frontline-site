import React from 'react';

import { Accordion, AccordionItem, AccordionPanel } from '@reach/accordion';

import { sidebars } from '@/sidebars';

import { Link } from '@/components/link/Link';
import { AccordionButton } from '@/design-system/components/accordion/AccordionButton';

interface NavListProps {
  navList: any;
}

const NavList: React.FunctionComponent<NavListProps> = ({ navList }) => {
  return (
    <Accordion collapsible multiple>
      {Object.keys(navList).map(key => (
        <AccordionItem key={key}>
          {typeof navList[key] === 'string' ? (
            <Link href={navList[key]}>{key}</Link>
          ) : (
            <>
              <AccordionButton>{key}</AccordionButton>
              <AccordionPanel>
                <NavList navList={navList[key]} />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const MainNavigation: React.FunctionComponent = () => {
  return (
    <Accordion collapsible multiple>
      {Object.keys(sidebars.docs).map(navItem => (
        <AccordionItem key={navItem}>
          <AccordionButton>{navItem}</AccordionButton>
          <AccordionPanel>
            <NavList key={navItem} navList={sidebars.docs[navItem]} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MainNavigation;
