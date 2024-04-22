import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './utils/Spotify';
import styles from './styles/App.module.css';
import './App.css';

function App() {
    // States
    const [playlistTitle, setPlaylistTitle] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Handlers
    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = (term) => {
        Spotify.search(term).then((results) => {
            setSearchResults(results); // Set search results in state
        }).catch(error => console.error(error)); // Add error handling
    };

    const handleTitle = (e) => {
        setPlaylistTitle(e.target.value);
    };

    const handleAdd = (track) => {
        const trackExists = playlistTracks.some((playlistTrack) => 
        playlistTrack.name === track.name && 
        playlistTrack.artist === track.artist);
        if (!trackExists) {
            setPlaylistTracks([...playlistTracks, track]);
            console.log(playlistTracks)
        } else {
            console.log('Track already exists in the playlist.');
        }
    };

    const handleRemove = (trackToRemove) => {
        const updatedPlaylist = playlistTracks.filter((track) => track.name !== trackToRemove.name);
        setPlaylistTracks(updatedPlaylist);
    };

    Spotify.getAccessToken(); // Test call

    return (
        <div className={styles.container}>
            <header className={styles.title}>
                <h1>Ja<span>mmm</span>ing</h1>
            </header>
            <main>
                <div className={styles.search_container}>
                    <SearchBar searchValue={searchValue} handleSearch={handleSearch}  handleSearchValue={handleSearchValue} searchResults={searchResults}/>
                </div>
                <div className={styles.outer_container}>
                    <div className={styles.inner_container}>
                        <SearchResults searchResults={searchResults} handleAdd={handleAdd} />
                    </div>
                    <div className={styles.inner_container}>
                        <Playlist playlistTracks={playlistTracks} playlistTitle={playlistTitle} handleTitle={handleTitle} handleRemove={handleRemove} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;