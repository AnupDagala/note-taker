import React, { useState } from 'react';
import './SpotifyPlayer.css'; // Import the CSS file
import SpotifyWebApi from 'spotify-web-api-js'; // Import SpotifyWebApi

const spotifyApi = new SpotifyWebApi(); 

const SpotifyPlayer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // Added state to hold preview URL

  const authenticateSpotify = () => {
    const spotifySearchUrl = `https://open.spotify.com/search/${encodeURIComponent(searchQuery)}`;
    window.location.href = spotifySearchUrl;
  };

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      await authenticateSpotify();
      const response = await spotifyApi.searchTracks(searchQuery);
      setSearchResults(response.tracks.items);
    } catch (error) {
      console.error('Error searching for tracks:', error);
    }
  };

  const handlePlayTrack = (track) => {
    setPlayingTrack(track);
    setPreviewUrl(track.preview_url); // Set the preview URL when track is played
  };

  return (
    <div className="SpotifyContainer">
      <div className="SpotifyBox">
        {/* Content of Spotify player goes here */}
        <h2>Search and Play Spotify Tracks</h2>
        <div>
          <input
            type="text"
            placeholder="Search for a song"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          {searchResults.map((track) => (
            <div key={track.id}>
              <p>{track.name} - {track.artists.map(artist => artist.name).join(', ')}</p>
              <button onClick={() => handlePlayTrack(track)}>Play</button>
            </div>
          ))}
        </div>
        {playingTrack && (
          <div>
            <p>Now playing: {playingTrack.name} - {playingTrack.artists.map(artist => artist.name).join(', ')}</p>
            {previewUrl && ( // Only render audio if preview URL is available
              <audio controls autoPlay>
                <source src={previewUrl} type="audio/mp3" />
              </audio>
            )}
            {!previewUrl && (
              <p>No preview available for this track</p>
            )}
          </div>
        )}
      </div>
      <div className="SpotifyLogoContainer">
        
        
      </div>
    </div>
  );
};

export default SpotifyPlayer;
