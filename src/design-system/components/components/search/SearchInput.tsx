/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input } from '@/design-system/components/elements/forms/input/Input';
import { Icon } from '@/design-system/components/elements/icon/Icon';
import SearchIcon from '@/design-system/icons/source/search.svg';

export interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  onChange,
  value,
}) => {
  return (
    <Input
      append={
        <Icon px={2}>
          <SearchIcon />
        </Icon>
      }
      type="search"
      onChange={onChange}
      value={value}
    />
  );
};

export { SearchInput };
