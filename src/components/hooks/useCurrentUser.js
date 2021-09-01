import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCurrentUser( accessToken ) {
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

  return userData;
}
