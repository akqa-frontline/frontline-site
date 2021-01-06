/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Flex } from '@/design-system/components/layout/flex/Flex';
import { Box } from '@/design-system/components/elements/box/Box';
import { FunctionComponent, ReactNode } from 'react';
import { Input } from '@/design-system/components/elements/forms/input/Input';
import { Icon } from '@/design-system/components/elements/icon/Icon';
import SearchIcon from '@/design-system/icons/source/search.svg';
// import { Link } from '@/components/link/Link';

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
    <Box sx={{ flex: '0 0 auto' }}>Frontline</Box>
    <Flex sx={{ flex: '0 0 auto', alignItems: 'center' }}>
      <Box>{children}</Box>
      <Box>
        <Input
          append={
            <Icon px={2}>
              <SearchIcon />
            </Icon>
          }
          type="search"
        />
      </Box>
    </Flex>
  </Flex>
);

export { TopBar };
