/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useRef, useState } from 'react';
import { SearchInput } from '@/design-system/components/components/search/SearchInput';
import { SearchResults } from '@/design-system/components/components/search/SearchResults';

const SEARCH_ENDPOINT = '/api/search';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [lastRequest, setLastRequest] = useState('');
  const inputRef = useRef('');
  const requesting = useRef(false);

  function onChange(event) {
    setQuery(event.target.value);
    inputRef.current = event.target.value;
  }

  useEffect(() => {
    const query = inputRef.current.trim();

    if (requesting.current || query === lastRequest) {
      return;
    }

    if (query.length < 3) {
      setResults([]);
      setLastRequest('');
      return;
    }

    requesting.current = true;

    setTimeout(() => {
      requesting.current = false;

      fetch(`${SEARCH_ENDPOINT}?q=${query}`)
        .then(res => res.json())
        .then(res => {
          setResults(res.results);
          setLastRequest(query);
        });
    }, 300);
  }, [lastRequest, query]);

  return (
    <div>
      <SearchInput onChange={onChange} value={query} />
      <SearchResults results={results} />
    </div>
  );
};
export { Search };
