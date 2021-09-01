import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCurrentlyPlaying( accessToken ) {
  const [currentSongData, setCurrentSongData] = useState(null);
  
  useEffect(() => {
    if (!accessToken) { return; };
    const source = axios.CancelToken.source();
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
      cancelToken: source.token
    }

    axios.get('https://api.spotify.com/v1/me/player/currently-playing', config, {
      params: {
        market: 'SG'
      }
    }).then(data => {
      setCurrentSongData(data.data.item)
    }).catch(err => console.log(err))

    return () => { source.cancel('Axios request canceled.') }
  }, [accessToken])

  return currentSongData
}
