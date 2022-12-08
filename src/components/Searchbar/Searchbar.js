import {
  ButtonSearch,
  Header,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [searchWord, setSearchWord] = useState('');

  const reset = e => {
    const { searchWord } = e.target;
    searchWord.value = '';
  };

  const handleChange = e => {
    const { value } = e.target;
    setSearchWord(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchWord.trim() === '') {
      alert('Enter valid text');
      return;
    }
    onSubmit(searchWord.toLowerCase());
    reset(e);
  };

  return (
    <Header>
      <SearchForm autoComplete="of" onSubmit={handleSubmit}>
        <ButtonSearch type="submit">
          <span>Search</span>
        </ButtonSearch>
        <label htmlFor="searchWord"></label>
        <SearchFormInput
          id="searchWord"
          type="text"
          onChange={handleChange}
          autoFocus
          name="searchWord"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
