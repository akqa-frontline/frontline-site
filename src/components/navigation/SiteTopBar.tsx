/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TopBar } from '@/design-system/components/components/top-bar/TopBar';
import { Link as InternalLink } from '@/components/link/Link';
import { Link as ExternalLink } from '@/design-system/components/elements/link/Link';
import { useRouter } from 'next/router';

const SiteTopBar = () => {
  const { pathname } = useRouter();

  const isActive = (href: string) => pathname === href;

  return (
    <TopBar>
      <InternalLink
        href="/about"
        variant="nav"
        sx={{ ...(isActive('/about') ? { color: 'primary' } : {}) }}
      >
        Docs
      </InternalLink>
      <ExternalLink
        href="https://github.com/akqa-denmark/frontline"
        variant="nav"
      >
        Github
      </ExternalLink>
    </TopBar>
  );
};

export { SiteTopBar };
