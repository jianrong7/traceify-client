import React from 'react';
import Header from './Header';
import LoginSection from './LoginSection';
import ButtonSection from './ButtonSection';
import CurrentPlayingSection from './CurrentPlayingSection';
import ShareSection from './ShareSection';
import { Link } from 'react-router-dom';

function Main({ accessToken }) {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <LoginSection accessToken={accessToken} />
      <ButtonSection />
      <CurrentPlayingSection accessToken={accessToken} />
      <div className="mx-4 mt-5 border-b-2"></div>
      <ShareSection />
      <Link className="text-sm text-blue-500 underline text-center" to="/playlists">View your playlists</Link>
    </div>
  )
}

export default Main;
