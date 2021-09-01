import React from 'react';
import axios from 'axios';
import useCurrentlyPlaying from '../hooks/useCurrentlyPlaying';

export default function CurrentPlayingSection({ accessToken }) {
  const currentSongData = useCurrentlyPlaying(accessToken);

  const handlePause = (accessToken) => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
    console.log(config)
    axios.put('https://api.spotify.com/v1/me/player/pause', null, config)
      .catch(err => console.log(err))
  }

  if (!currentSongData) return null
  return (
    <div className="shadow px-4 py-2 mx-3 rounded-b">
      <span className="text-sm font-light">Last check-in</span>
      <div className="flex flex-row justify-between items-center">
        <span className="font-semibold max-w-xl">
          {currentSongData.name.length > 20 ? currentSongData.name.substring(0, 20) + "..." : currentSongData.name}
        </span>
        <button 
        onClick={() => handlePause(accessToken)} 
        className="border-blue-700 border rounded text-blue-600 flex items-center px-6 text-sm font-semibold max-h-5">
          Check out
        </button>
      </div>
      <a className="text-sm text-blue-500 underline" href={currentSongData.uri}>View pass</a>
    </div>
  )
}
