import React from 'react';
import star from '../assets/star.png';

export default function Track({ track }) {
  return (
    <a href={track.uri}>
      <div className="border-b-2 py-3 px-4 flex flex-row justify-between items-center">
        <div className="max-w-xs flex flex-row items-center">
          <img src={track.album.images[0]?.url} alt="album-cover" className="h-10" />
          <div>
            
            <p className="font-semibold">{track.name}</p>
            <p className="font-normal">
              {track.artists.length > 1 ?
              track.artists.map((artist, index) => {
                if (index + 1 === track.artists.length) {
                  return (artist.name)
                } else {
                  return (artist.name + ", ")
                }
              })
              :
              track.artists.map(artist => artist.name)
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
//           {/* <p className="font-medium">{track.album.name}</p> */}
//          {/* <p>Duration: {track.duration_ms}</p> */}
