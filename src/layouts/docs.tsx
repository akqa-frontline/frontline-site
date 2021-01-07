/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithSidesLayout } from '@/design-system/layouts/WithSides';
import { SiteTopBar } from '@/components/navigation/SiteTopBar';
import { DocsSidebar } from '@/components/navigation/DocsSidebar';
import { DocsTableOfContents } from '@/components/navigation/DocsTableOfContents';
import { Heading } from '@/design-system/components/elements/heading/Heading';

/**
 * Helper Component used by next-mdx-enhanced
 */
function Docs({ children, frontMatter: { title, tableOfContents } }) {
  return (
    <WithSidesLayout
      left={<DocsSidebar />}
      top={<SiteTopBar />}
      right={<DocsTableOfContents tableOfContents={tableOfContents} />}
    >
      <>
        <Heading as="h1">{title}</Heading>
        {children}
      </>
    </WithSidesLayout>
  );
}

export default Docs;
