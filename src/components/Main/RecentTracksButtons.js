import React from 'react';
import RecentTracksButton from './RecentTracksButton';

export default function RecentTracksButtons() {
  return (
    <>
      <RecentTracksButton term={'short_term'} />
      <RecentTracksButton term={'medium_term'} />
      <RecentTracksButton term={'long_term'} />
    </>
  )
}
