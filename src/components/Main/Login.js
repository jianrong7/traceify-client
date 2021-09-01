import React from 'react';

const scope = 'user-read-private user-read-email user-top-read user-read-currently-playing user-read-playback-state user-modify-playback-state';
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=9eddabfa285a48e9800a63a292691f70&response_type=code&redirect_uri=http://localhost:3000&scope=${scope}`

export default function Login() {
  return (
    <a href={AUTH_URL} className="bg-green-50 w-5/12 items-center flex flex-col text-center rounded p-2">
      <span className="text-green-800 font-semibold text-sm">Login with Spotify</span>
    </a>
  )
}