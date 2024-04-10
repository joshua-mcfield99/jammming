import './App.css';
import styles from './styles/App.module.css'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import TrackList from './components/Tracklist';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className={styles.container}>
        <header className={styles.title}>
            <h1 >Ja<em>mmm</em>ing</h1>
        </header>
        <main>
            <div className={styles.search_container}>
                <SearchBar />
            </div>
            <div className={styles.outer_container}>
                <div className={styles.inner_container}>
                    <SearchResults />
                </div>
                <div className={styles.inner_container}>
                    <Playlist />
                </div>
            </div>
        </main>
    </div>
  );
}

export default App;
