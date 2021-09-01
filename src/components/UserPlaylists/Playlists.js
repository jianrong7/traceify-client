import React from 'react';
import Playlist from './Playlist';
import sort from '../assets/sort.png';

export default function Playlists({ userPlaylists }) {
  return (
    <div>
      <p className="bg-gray-200 py-1 px-3 flex flex-row justify-between items-center">
        <span className="font-semibold">YOUR PLAYLISTS</span>
        <img 
          src={sort} alt="sort" 
          className="h-5 w-6"
        />
      </p>
      {userPlaylists.map(playlist => {
        return <Playlist key={playlist.id} playlist={playlist} />
      })}
    </div>
  )
}
