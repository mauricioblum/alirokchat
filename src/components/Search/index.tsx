import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container, StyledInput } from './styles';

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (query: string) => void;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ onSearch, placeholder = 'Search', ...rest }, ref) => {
    return (
      <Container>
        <FiSearch size={20} color="#748EB5" />
        <StyledInput ref={ref} placeholder={placeholder} {...rest} />
      </Container>
    );
  },
);

export default Search;
