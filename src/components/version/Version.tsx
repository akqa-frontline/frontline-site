import { Box } from '@/design-system/components/elements/box/Box';
import { Image } from '@/design-system/components/elements/image/Image';
import React from 'react';
import { Link } from '../link/Link';

export interface VersionProps {
  package: string;
}

export const Version = ({ package: pkg }: VersionProps) => (
  <Box pt={2} pb={3}>
    <Link href={`https://www.npmjs.com/package/${pkg}`}>
      <Image
        src={`https://img.shields.io/npm/v/${pkg}`}
        style={{ display: 'inline', minHeight: '20px' }}
      />
    </Link>
  </Box>
);
