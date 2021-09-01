import React from 'react';
import useUserPlaylist from '../hooks/useUserPlaylist';
import Header from '../Tracks/Header';
import Playlists from './Playlists';

export default function UserPlaylists({ accessToken }) {
  const userPlaylists = useUserPlaylist(accessToken);

  return (
    <div className="flex-1 flex-col justify-center">
      <Header />
      <Playlists userPlaylists={userPlaylists} />
    </div>
  )
}