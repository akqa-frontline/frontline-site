/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { SearchInput } from '@/design-system/components/components/search/SearchInput';
import { SearchResults } from '@/design-system/components/components/search/SearchResults';

const SEARCH_ENDPOINT = '/api/search';

const SiteSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // todo: add throttle

  const onChange = event => {
    const query = event.target.value;
    setQuery(query);
    if (query.length > 2) {
      fetch(`${SEARCH_ENDPOINT}?q=${query}`)
        .then(res => res.json())
        .then(res => setResults(res.results));
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <SearchInput onChange={onChange} value={query} />
      <SearchResults results={results} />
    </div>
  );
};
export { SiteSearch };
