import React, { useState, useEffect } from 'react';
import user from '../assets/user.png';

export default function SpotifyStatus({ userData }) {
  const [color, setColor] = useState({
    bg: 'bg-gray-50',
    text: 'text-gray-800'
  })

  useEffect(() => {
    if (!userData) return
    if (userData.product === 'premium') {
      setColor({
        bg: 'bg-green-50',
        text: 'text-green-800'
      })
    }
  }, [userData])

  if (!userData) return null
  return (
    <a className={`${color.bg} w-5/12 items-center flex flex-col text-center rounded p-2`} href={userData.uri}>
      <span className={`${color.text} font-semibold text-sm`}>
        {userData.product === undefined ? `Popularity: ${userData.popularity}`: userData.product === 'premium' ? "Premium" : "Not premium"}
      </span>
      <img src={userData.images[0]?.url ? userData.images[0].url : user} alt='profileImage' className="h-10 mt-3"/>
    </a>
  )
}
