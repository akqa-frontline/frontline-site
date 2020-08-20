/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithSidesLayout } from '@/design-system/layouts/WithSides';
import { SiteTopBar } from '@/components/navigation/SiteTopBar';
import { DocsSidebar } from '@/components/navigation/DocsSidebar';
import { DocsTableOfContents } from '@/components/navigation/DocsTableOfContents';

/**
 * Helper Component used by next-mdx-enhanced
 */
function Docs({ tableOfContents }) {
  return ({ children }) => (
    <WithSidesLayout
      left={<DocsSidebar />}
      top={<SiteTopBar />}
      right={<DocsTableOfContents tableOfContents={tableOfContents} />}
    >
      {children}
    </WithSidesLayout>
  );
}

export default Docs;
