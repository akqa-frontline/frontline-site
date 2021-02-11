/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from '@/design-system/components/elements/link/Link';
import { getPadding } from '@/components/navigation/DocsSidebar';

const DocsTableOfContents = ({ tableOfContents }) => {
  return (
    <div>
      {tableOfContents.map(item => (
        <div
          key={item.slug}
          sx={{ paddingLeft: `pg${getPadding(item.lvl - 1)}` }}
        >
          <Link href={`#${item.slug}`}>{item.content}</Link>
        </div>
      ))}
    </div>
  );
};

export { DocsTableOfContents };
