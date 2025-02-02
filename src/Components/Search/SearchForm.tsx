import React from "react";
import styles from '../styles/Search.module.css'
import { SearchProps } from "../Interfaces/SearchInterfaces";

const SearchForm: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); 
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <input 
        onChange={changeValue} 
        type="text" 
        name="search" 
        value={searchValue} 
        placeholder="Поиск..." 
      />
    </form>
  );
};

export default SearchForm;
