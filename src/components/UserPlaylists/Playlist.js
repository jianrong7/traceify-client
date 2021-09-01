import React from 'react';
import star from '../assets/star.png';

export default function Playlist({ playlist }) {
  console.log(playlist)
  return (
    <a href={playlist.uri}>
      <div className="border-b-2 py-3 px-4 flex flex-row justify-between items-center">
        <div className="max-w-xs flex flex-row items-center">
          <img src={playlist.album.images[0]?.url} alt="album-cover" className="h-10 mr-2" />
          <div>
            <p className="font-semibold">{playlist.name}</p>
            <p className="font-normal">
              {playlist.artists.length > 1 ?
              playlist.artists.map((artist, index) => {
                if (index + 1 === playlist.artists.length) {
                  return (artist.name)
                } else {
                  return (artist.name + ", ")
                }
              })
              :
              playlist.artists.map(artist => artist.name)
              }
            </p>
          </div>
        </div>
        <div className="h-4 min-w-min">
          <img 
          src={star} alt="star" 
          className="h-4 w-4"
          />
        </div>
      </div>
    </a>
  )
}