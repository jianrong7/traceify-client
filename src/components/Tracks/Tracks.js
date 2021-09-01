import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import Header from './Header';
import SearchBar from './SearchBar';
import TracksSection from './TracksSection';
import useFavoriteTracks from '../hooks/useFavoriteTracks';

export default function Tracks({ accessToken }) {
  const [searchValue, setSearchValue] = useState('');
  const { term } = useParams();

  const tracks = useFavoriteTracks(accessToken, term)

  return (
    <div className="flex-1 flex-col justify-center">
      <Header />
      <SearchBar setSearchValue={setSearchValue} />
      <TracksSection tracks={tracks} searchValue={searchValue} />
    </div>
  )
}
