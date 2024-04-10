import React from 'react';
import styles from '../styles/SearchBar.module.css'

const SearchBar = () => {
  return (
    <>
        <form className={styles.form}>
            <input id='search' placeholder='Search' type='text'/>
            <button>Search</button>
        </form>
    </>
  )
}


export default SearchBar;