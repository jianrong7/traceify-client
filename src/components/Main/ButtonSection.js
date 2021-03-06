import React from 'react'

import RecentTracksButtons from './RecentTracksButtons';

export default function ButtonSection() {
  return (
    <div>
      <div className="flex flex-col pt-3 px-3 h-40">
        <p className="font-semibold">Your favourite tracks</p>
        <div className="flex flex-row justify-around h-full p-3 mt-3 bg-blue-100 rounded-t">
          <RecentTracksButtons />
        </div>
      </div>
    </div>
  )
}
