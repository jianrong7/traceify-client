import React from 'react';
import Track from './Track';
import sort from '../assets/sort.png';

export default function TracksSection({ tracks, searchValue }) {

  return (
    <div>
      <p className="bg-gray-200 py-1 px-3 flex flex-row justify-between items-center">
        <span className="font-semibold">YOUR FAVOURITE TRACKS</span>
        <img 
          src={sort} alt="sort" 
          className="h-5 w-6"
        />
      </p>
      {tracks.map(track => {
        // check if track name includes filter & check if artist name includes filter
        if (track.name.toLowerCase().includes(searchValue) || track.artists.some(artist => artist.name.toLowerCase().includes(searchValue))) {
          return (
            <Track key={track.id} track={track} />
          )
        } return null
      })}
    </div>
  )
}
