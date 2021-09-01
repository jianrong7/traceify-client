import React from 'react';
import traceify from '../assets/traceify-icon.png';

const scope = 'user-read-private%20user-read-email%20user-top-read%20user-read-currently-playing%20user-read-playback-state%20user-modify-playback-state';
//https://traceify-client.netlify.app
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=9eddabfa285a48e9800a63a292691f70&response_type=code&redirect_uri=https://traceify-client.netlify.app&scope=${scope}`

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={traceify} alt="logo" className="w-20" />
      <a href={AUTH_URL} className="bg-green-100 text-center rounded-xl p-2">
        <span className="text-green-800 font-semibold text-sm">Login with Spotify</span>
      </a>
    </div>
  )
}