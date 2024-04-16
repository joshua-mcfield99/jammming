import React from 'react';
import styles from '../styles/SearchBar.module.css'

const SearchBar = (props) => {
  return (
    <>
        <form className={styles.form}>
            <input id='search' placeholder='Search' type='text' value={props.searchValue} onChange={props.handleSearch}/>
            <button type='submit'>Search</button>
        </form>
    </>
  )
}


export default SearchBar;