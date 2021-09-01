import { useState, useEffect } from 'react'
import axios from 'axios';

export default function useFavoriteTracks(accessToken, term) {
  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
    if (!accessToken) return;
    axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${term}`, { headers: { Authorization: `Bearer ${accessToken}`}})
      .then(data => setTracks(data.data.items))
      .catch(err => console.log(err))

      return () => { setTracks([]) }
  }, [accessToken])

  return tracks;
}
