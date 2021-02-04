/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Flex } from '@/design-system/components/layout/flex/Flex';
import { Box } from '@/design-system/components/elements/box/Box';
import { FunctionComponent, ReactNode } from 'react';
import { Link } from '@/components/link/Link';
import { Search } from '@/components/navigation/Search';

export interface TopBarProps {
  children: ReactNode;
}

const TopBarStyle: SxStyleProp = {
  padding: 2,
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  bg: 'white',
  borderWidth: '0 0 1px 0',
  borderColor: 'muted',
  borderStyle: 'solid',
};

const TopBar: FunctionComponent = ({ children }) => (
  <Flex sx={{ ...TopBarStyle }}>
    <Box sx={{ flex: '0 0 auto' }}>
      <Link href="/">Frontline</Link>
    </Box>
    <Flex sx={{ flex: '0 0 auto', alignItems: 'center' }}>
      <Box>{children}</Box>
      <Box sx={{ position: 'relative' }}>
        <Search />
      </Box>
    </Flex>
  </Flex>
);

export { TopBar };
