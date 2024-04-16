import './App.css';
import styles from './styles/App.module.css'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { useState } from 'react';

// Dumby Data
const searchRes = [
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


function App() {
    // States
    const [playlistTitle, setPlaylisTitle] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    // Handlers
    const handleTitle = (e) => {
        setPlaylisTitle(e.target.value);
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleAdd = (track) => {
         // Check if the track already exists in the playlist
        const trackExists = playlistTracks.some((playlistTrack) => playlistTrack.title === track.title);

        if (!trackExists) {
          // If the track doesn't exist in the playlist, add it
          setPlaylistTracks([...playlistTracks, track]);
        } else {
          console.log('Track already exists in the playlist.');
          // You can add your handling for when the track already exists here
        }
    };

    const handleRemove = (trackToRemove) => {
        // Filter out the track to be removed from the playlist
        const updatedPlaylist = playlistTracks.filter((track) => track.title !== trackToRemove.title);
        setPlaylistTracks(updatedPlaylist);
    };
    

  return (
    <div className={styles.container}>
        <header className={styles.title}>
            <h1 >Ja<em>mmm</em>ing</h1>
        </header>
        <main>
            <div className={styles.search_container}>
                <SearchBar searchValue={searchValue} handleSearch={handleSearch}/>
            </div>
            <div className={styles.outer_container}>
                <div className={styles.inner_container}>
                    <SearchResults searchRes={searchRes} handleAdd={handleAdd}/>
                </div>
                <div className={styles.inner_container}>
                    <Playlist playlistTracks={playlistTracks} playlistTitle={playlistTitle} handleTitle={handleTitle} handleRemove={handleRemove}/>
                </div>
            </div>
        </main>
    </div>
  );
}

export default App;
