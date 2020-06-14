import React from 'react';

// @ts-ignore
import { frontMatter as rootPages } from '../../../../pages/*/index.mdx';
import { Link } from '@/components/link/Link';

const slugify = resourcePath =>
  resourcePath.split('/pages/')[1].replace('/index.mdx', '');

const MainNavigation: React.FunctionComponent = () => {
  return (
    <nav>
      {rootPages.map(rootPage => (
        <Link
          key={slugify(rootPage.__resourcePath)}
          href={`/${slugify(rootPage.__resourcePath)}`}
        >
          {rootPage.title}
        </Link>
      ))}
    </nav>
  );
};

export default MainNavigation;
