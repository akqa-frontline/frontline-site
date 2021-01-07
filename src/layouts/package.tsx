/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Heading } from '@/design-system/components/elements/heading/Heading';
import { Version } from '@/components/version/Version';
import PackageIcon from '@/design-system/icons/source/package.svg';
import { Icon } from '@/design-system/components/elements/icon/Icon';
import Base from './base';

/**
 * Helper Component used by next-mdx-enhanced
 */
function Package({ children, frontMatter }) {
  const { title, package: pkg } = frontMatter;
  return (
    <Base frontMatter={frontMatter}>
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
    </Base>
  );
}

export default Package;
