import React from 'react';

export default function Playlist({ playlist }) {

  return (
    <a href={playlist.uri}>
      <div className="border-b-2 py-3 px-4 flex flex-row justify-between items-center">
        <div className="max-w-xs flex flex-row items-center">
          <img src={playlist.images[0]?.url} alt="album-cover" className="h-10 mr-2" />
          <div>
            <p className="font-semibold">{playlist.name}</p>
            <p className="font-normal">
              {playlist.owner.display_name}
            </p>
          </div>
        </div>
        <div className="h-4 min-w-min">
          <p>{playlist.tracks.total} tracks</p>
        </div>
      </div>
    </a>
  )
}