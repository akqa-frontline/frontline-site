/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Heading } from '@/design-system/components/elements/heading/Heading';
import Base from './base';

/**
 * Helper Component used by next-mdx-enhanced
 */
function Docs({ children, frontMatter }) {
  const { title } = frontMatter;
  return (
    <Base frontMatter={frontMatter}>
      <>
        <Heading as="h1">{title}</Heading>
        {children}
      </>
    </Base>
  );
}

export default Docs;
