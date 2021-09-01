import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CurrentPlayingSection({ accessToken }) {
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
      // console.log(data.data.item)
    }).catch(err => console.log(err))

    return () => { source.cancel('Axios request canceled.') }
  }, [accessToken])


  // TODO: Handle pause but only on premium account, but does not work on CTX account
  const handlePause = () => {
    axios.put('https://api.spotify.com/v1/me/player/pause', {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then(data => console.log('paused'))
    .catch(err => console.log(err))
  }

  if (!currentSongData) return null
  return (
    <div className="shadow px-4 py-2 mx-3 rounded-b">
      <span className="text-sm font-light">Last check-in</span>
      <div className="flex flex-row justify-between items-center">
        <span className="font-semibold">{currentSongData.name}</span>
        <button onClick={handlePause} className="border-blue-700 border rounded text-blue-600 px-6 text-sm font-semibold">Check out</button>
      </div>
      <a className="text-sm text-blue-500 underline" href={currentSongData.uri}>View pass</a>
    </div>
  )
}
