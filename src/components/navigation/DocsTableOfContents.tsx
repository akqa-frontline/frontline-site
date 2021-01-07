/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from '@/design-system/components/elements/link/Link';

const DocsTableOfContents = ({ tableOfContents }) => {
  return (
    <div>
      {tableOfContents.map(item => (
        <div key={item.slug}>
          <Link href={`#${item.slug}`}>{item.content}</Link>
        </div>
      ))}
    </div>
  );
};

export { DocsTableOfContents };
