import React from 'react'
import styles from '../styles/SearchResults.module.css'
import Tracklist from './Tracklist'


const SearchResults = (props) => {
  return (
    <>
        <div className={styles.res_container}>
            <Tracklist searchRes={props.searchRes} handleAdd={props.handleAdd}/>
        </div>
    </>
  )
}

export default SearchResults