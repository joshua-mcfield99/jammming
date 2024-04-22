import React from 'react'
import styles from '../styles/Tracklist.module.css'
import Track from './Track'

const Tracklist = ({ searchResults, playlistTracks, handleAdd, handleRemove }) => {
  return (
    <>
        <ul className={styles.tracklist}>
            {
                //Check which array to map and display
                searchResults && searchResults.length > 0 ?
                searchResults.map((song, i) => {
                    return (
                        <li key={i}>
                            <Track title={song.name} artist={song.artist} album={song.album}/>
                            <button onClick={() => handleAdd(song)}>+</button>
                        </li>
                    )
                })
                : searchResults ?
                <> <p className={styles.no_tracks}>Search for music</p> </>
                :
                //If playlist is empty show p tag
                playlistTracks.length > 0 ? playlistTracks.map((track, i) => {
                    return (
                        <li key={i}>
                            <Track title={track.name} artist={track.artist} album={track.album}/>
                            <button onClick={() => handleRemove(track)}>-</button>
                        </li>
                    )
                })
                : <><p className={styles.no_tracks}>Add songs</p></>
            }
        </ul>
    </>
  )
}

export default Tracklist