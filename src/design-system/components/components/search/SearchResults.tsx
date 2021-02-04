/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { SearchItem } from '@/design-system/components/components/search/SearchItem';

const SearchResultsStyles: SxStyleProp = {
  position: 'absolute',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
  bg: 'light',
  borderBottomRightRadius: 4,
  borderBottomLeftRadius: 4,
};

const SearchResults = ({ results }) => {
  return (
    <ul
      sx={{
        ...SearchResultsStyles,
      }}
    >
      {results.map(result => (
        <SearchItem result={result} />
      ))}
    </ul>
  );
};

export { SearchResults };
