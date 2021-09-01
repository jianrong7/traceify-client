import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';

import Header from './Header';
import SearchBar from './SearchBar';
import TracksSection from './TracksSection';

const spotifyApi = new SpotifyWebApi({
  clientId: '9eddabfa285a48e9800a63a292691f70'
});

export default function Tracks({ accessToken }) {
  const [tracks, setTracks] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  // const accessToken = useAuth(code);
  const { term } = useParams();

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.getMyTopTracks({ time_range: term }).then(data => {
      setTracks(data.body.items)
    }).catch(err => console.log(err))

    return () => { 
      setTracks([]);
    }
  }, [accessToken])

  return (
    <div className="flex-1 flex-col justify-center">
      <Header />
      <SearchBar setSearchValue={setSearchValue} />
      <TracksSection tracks={tracks} searchValue={searchValue} />
    </div>
  )
}
