import React from 'react'
import styles from '../styles/SearchResults.module.css'
import Track from './Track'

const data = [
    {
        title: "Scotty Doesn't Know",
        artist: "Lustra",
        album: "Left for Dead"
    },
    {
        title: "Scotty Doesn't Know",
        artist: "Lustra",
        album: "Left for Dead"
    },
    {
        title: "Scotty Doesn't Know",
        artist: "Lustra",
        album: "Left for Dead"
    },
    {
        title: "Scotty Doesn't Know",
        artist: "Lustra",
        album: "Left for Dead"
    },
    {
        title: "Scotty Doesn't Know",
        artist: "Lustra",
        album: "Left for Dead"
    }
]

const SearchResults = () => {
  return (
    <>
        <ul className={styles.res_list}>
            {
                data.map(song => {
                    return (
                        <li>
                            <Track title={song.title} artist={song.artist} album={song.album}/>
                            <button>+</button>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default SearchResults