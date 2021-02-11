/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link as InternalLink } from '@/components/link/Link';
import { useRouter } from 'next/router';
import { Accordion } from '@/design-system/components/components/accordion/Accordion';
import { AccordionItem } from '@/design-system/components/components/accordion/AccordionItem';
import { AccordionLink } from '@/design-system/components/components/accordion/AccordionLink';
import { AccordionButton } from '@/design-system/components/components/accordion/AccordionButton';
import { AccordionPanel } from '@/design-system/components/components/accordion/AccordionPanel';
import { sidebars } from '../../sidebars';

export const getPadding = (level: number) =>
  level < 1 ? 2 : level < 2 ? level + 3 : level + 4;

function recursive(list, level, activePath) {
  const defaultIndex = list.findIndex(i => activePath.indexOf(i.slug) > -1);

  return (
    <Accordion collapsible multiple defaultIndex={defaultIndex}>
      {list.map(entry => (
        <AccordionItem key={entry.slug}>
          {entry.children ? (
            <>
              <AccordionButton
                fontSize={level < 1 ? 1 : 0}
                paddingLeft={`pg${getPadding(level)}`}
                sx={{
                  ...(activePath.indexOf(entry.slug) > -1
                    ? { color: 'primary' }
                    : {}),
                }}
              >
                {entry.label}
              </AccordionButton>
              <AccordionPanel paddingLeft={0}>
                {recursive(entry.children, level + 1, activePath)}
              </AccordionPanel>
            </>
          ) : (
            <AccordionLink
              fontSize={0}
              paddingLeft={`pg${getPadding(level)}`}
              active={entry.slug === activePath}
            >
              <InternalLink href={entry.slug}>{entry.label}</InternalLink>
            </AccordionLink>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const DocsSidebar = () => {
  const { pathname } = useRouter();
  return recursive(sidebars.docs, 0, pathname);
};

export { DocsSidebar };
