import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Follower from './Follower';
import SpotifyStatus from './SpotifyStatus';

export default function LoginSection({ accessToken }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!accessToken) { return; };
    const source = axios.CancelToken.source();
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
      cancelToken: source.token
    }

    axios.get('https://api.spotify.com/v1/me', config)
      .then(data => setUserData(data.data))
      .catch(err => console.log(err))

    return () => { source.cancel('Axios request canceled.') }
  }, [accessToken])

  return (
    <div>
      <div className="flex flex-col pt-3 px-3 h-40">
        <p className="font-semibold">Your COVID Health Status</p>
        <div className="flex flex-row justify-between h-full p-3">
          <SpotifyStatus userData={userData} />
          <Follower userData={userData} />
        </div>
      </div>
      <div className="mx-4 mt-3 border-b-2"></div>
    </div>

  )
}
