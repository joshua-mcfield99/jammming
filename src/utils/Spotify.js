const clientId = 'e3784ef0d74e48bdb3ef180c52adbd67';
const redirectUri = 'http://localhost:3000/'; 
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const findAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const findExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

        if (findAccessToken && findExpiresIn) {
            accessToken = findAccessToken[1];
            const expiresIn = Number(findExpiresIn[1]);
            window.setTimeout(() => {
                accessToken = '';
                window.history.pushState('Access Token', null, '/'); // Clear access token from URL without refreshing
            }, expiresIn * 1000);
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location.replace(accessUrl); // Use replace instead of assign to avoid adding to the history stack
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        //The below console.log returns undefined
        console.log(accessToken);
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
              return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri,
                preview_url: track.preview_url
            }));
        });
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris) {
            return Promise.reject("Name or Track URIs missing");
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;

        return fetch('https://api.spotify.com/v1/me', { headers: headers })
        .then(response => response.json())
        .then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name })
            });
        })
        .then(response => response.json())
        .then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackUris })
            });
        });
    }

}

export default Spotify;