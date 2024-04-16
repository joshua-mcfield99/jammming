import React from 'react'
import styles from '../styles/Tracklist.module.css'
import Track from './Track'

const Tracklist = ({ searchRes, playlistTracks, handleAdd, handleRemove }) => {
  return (
    <>
        <ul className={styles.tracklist}>
            {
                //Check which array to map and display
                searchRes ?
                searchRes.map((song, i) => {
                    return (
                        <li key={i}>
                            <Track title={song.title} artist={song.artist} album={song.album}/>
                            <button onClick={() => handleAdd(song)}>+</button>
                        </li>
                    )
                })
                :
                //If playlist is empty show p tag
                playlistTracks.length > 0 ? playlistTracks.map((track, i) => {
                    return (
                        <li key={i}>
                            <Track title={track.title} artist={track.artist} album={track.album}/>
                            <button onClick={() => handleRemove(track)}>-</button>
                        </li>
                    )
                })
                : <><p>Add songs</p></>
            }
        </ul>
    </>
  )
}

export default Tracklist