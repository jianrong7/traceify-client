import React from 'react';
import Playlist from './Playlist';

export default function Playlists({ userPlaylists }) {
  return (
    <div>
      {userPlaylists.map(playlist => {
        return <Playlist key={playlist.id} playlist={playlist} />
      })}
    </div>
  )
}
