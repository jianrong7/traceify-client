import { useState, useEffect } from 'react'
import axios from 'axios';

export default function useUserPlaylist(accessToken, term) {
  const [playlists, setPlaylists] = useState([]);
  
  useEffect(() => {
    if (!accessToken) return;
    axios.get(`	https://api.spotify.com/v1/me/playlists?limit=20`, { headers: { Authorization: `Bearer ${accessToken}`}})
      .then(data => setPlaylists(data.data.items))
      .catch(err => console.log(err))

      return () => { setPlaylists([]) }
  }, [accessToken])

  return playlists;
}
