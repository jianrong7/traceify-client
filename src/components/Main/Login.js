import React from 'react';

const scope = 'user-read-private%20user-read-email%20user-top-read%20user-read-currently-playing%20user-read-playback-state%20user-modify-playback-state';
// const redirect_uri = 'https://pedantic-wozniak-7be006.netlify.app/'
const redirect_uri = 'http://localhost:3000'
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=9eddabfa285a48e9800a63a292691f70&response_type=code&redirect_uri=https://traceify-client.netlify.app&scope=${scope}`
// const AUTH_URL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENTID}&scope=${scope}&redirect_uri=http://localhost%3A3000`
  // `?response_type=code` + 
  // `&client_id=${process.env.REACT_APP_CLIENTID}` +
  // `&scope=${scope}` +
  // `&redirect_uri=${redirect_uri}`

export default function Login() {
  return (
    <a href={AUTH_URL} className="bg-green-50 w-5/12 items-center flex flex-col text-center rounded p-2">
      <span className="text-green-800 font-semibold text-sm">Login with Spotify</span>
    </a>
  )
}