import { useState, useEffect } from 'react'
import axios from 'axios';

export default function useFavoriteArtist(accessToken, term) {
  const [artist, setArtist] = useState();
  
  useEffect(() => {
    if (!accessToken) return;
    axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=1`, { headers: { Authorization: `Bearer ${accessToken}`}})
      .then(data => setArtist(data.data.items[0]))
      .catch(err => console.log(err))

      return () => { setArtist([]) }
  }, [accessToken])

  return artist;
}
