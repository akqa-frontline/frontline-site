/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from '@/design-system/components/elements/box/Box';
import { Link } from '@/design-system/components/elements/link/Link';

const SearchItem = ({ result }) => {
  return (
    <li key={result.id}>
      <Box px={2} py={1}>
        <Link href={`/docs/${result.id}`}>{result.title}</Link>
      </Box>
    </li>
  );
};

export { SearchItem };
