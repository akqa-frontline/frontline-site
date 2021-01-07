/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithSidesLayout } from '@/design-system/layouts/WithSides';
import { SiteTopBar } from '@/components/navigation/SiteTopBar';
import { DocsSidebar } from '@/components/navigation/DocsSidebar';
import { DocsTableOfContents } from '@/components/navigation/DocsTableOfContents';
import { Heading } from '@/design-system/components/elements/heading/Heading';
import { Version } from '@/components/version/Version';
import PackageIcon from '@/design-system/icons/source/package.svg';
import { Icon } from '@/design-system/components/elements/icon/Icon';

/**
 * Helper Component used by next-mdx-enhanced
 */
function Package({ children, frontMatter }) {
  const { title, tableOfContents, package: pkg } = frontMatter;
  return (
    <WithSidesLayout
      left={<DocsSidebar />}
      top={<SiteTopBar />}
      right={<DocsTableOfContents tableOfContents={tableOfContents} />}
    >
      <>
        <Heading as="h1">
          {title}
          <Icon px={2}>
            <PackageIcon />
          </Icon>
        </Heading>
        {pkg && <Version package={pkg} />}
        {children}
      </>
    </WithSidesLayout>
  );
}

export default Package;
