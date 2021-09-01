import React, { useState } from 'react';

import useCurrentUser from '../hooks/useCurrentUser'; 
import useFavoriteArtist from '../hooks/useFavoriteArtist';
import refresh from '../assets/refresh.png';
import Follower from './Follower';
import SpotifyStatus from './SpotifyStatus';

export default function LoginSection({ accessToken }) {
  const [showArtist, setShowArtist] = useState(false);
  const userData = useCurrentUser(accessToken);
  const artist = useFavoriteArtist(accessToken);

  return (
    <div>
      <div className="flex flex-col pt-3 px-3 h-40">
        <div className="flex flex-row justify-between items-center">
          <p className="font-semibold">{showArtist ? artist.name + "'s Status" : 'Your COVID Health Status'}</p>
          <button onClick={() => setShowArtist(prevState => !prevState)}>
            <img src={refresh} alt="refresh" className="h-4" />
          </button>
        </div>
        <div className="flex flex-row justify-between h-full p-3">
          {showArtist ?
          <>
            <SpotifyStatus userData={artist} />
            <Follower userData={artist} /> 
          </>
          :
          <>
            <SpotifyStatus userData={userData} />
            <Follower userData={userData} />
          </>
          }

        </div>
      </div>
      <div className="mx-4 mt-3 border-b-2"></div>
    </div>

  )
}
