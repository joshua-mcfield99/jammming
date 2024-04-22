import React from 'react'
import styles from '../styles/SearchResults.module.css'
import Tracklist from './Tracklist'


const SearchResults = (props) => {
  return (
    <>
        <div className={styles.res_container}>
            <Tracklist searchResults={props.searchResults} handleAdd={props.handleAdd}/>
        </div>
    </>
  )
}

export default SearchResults;