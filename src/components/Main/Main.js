import React from 'react';
import Header from './Header';
import LoginSection from './LoginSection';
import ButtonSection from './ButtonSection';
import CurrentPlayingSection from './CurrentPlayingSection';
import ShareSection from './ShareSection';

function Main({ accessToken }) {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <LoginSection accessToken={accessToken} />
      <ButtonSection />
      <CurrentPlayingSection accessToken={accessToken} />
      <div className="mx-4 mt-5 border-b-2"></div>
      <ShareSection />
    </div>
  )
}

export default Main;
