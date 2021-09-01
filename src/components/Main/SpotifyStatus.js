import React, { useState, useEffect } from 'react'

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
      <span className={`${color.text} font-semibold text-sm`}>{userData.product === 'premium' ? "Premium" : "Not premium"}</span>
      <img src={userData.images[0].url} alt='profileImage' className="h-12 mt-2"/>
    </a>
  )
}
